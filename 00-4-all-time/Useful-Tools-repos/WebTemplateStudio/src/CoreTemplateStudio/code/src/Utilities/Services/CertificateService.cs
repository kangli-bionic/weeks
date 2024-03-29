﻿// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// See the LICENSE file in the project root for more information.

using System;
using CERTENROLLLib;

namespace Microsoft.Templates.Utilities.Services
{
    public class CertificateService
    {
        private static CertificateService instance;

        private CertificateService()
        {
        }

        public static CertificateService Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new CertificateService();
                }

                return instance;
            }
        }

        public string CreateCertificate(string publisherName)
        {
            var cert = CreateCertificateRequest(publisherName);

            AddKeyUsage(cert);
            AddExtendedKeyUsage(cert);
            AddBasicConstraints(cert);

            // Specify the hashing algorithm
            var hashobj = new CObjectId();

            hashobj.InitializeFromAlgorithmName(
                ObjectIdGroupId.XCN_CRYPT_HASH_ALG_OID_GROUP_ID,
                ObjectIdPublicKeyFlags.XCN_CRYPT_OID_INFO_PUBKEY_ANY,
                AlgorithmFlags.AlgorithmFlagsNone,
                "SHA256");

            cert.HashAlgorithm = hashobj;
            cert.Encode();

            // Do the final enrollment process
            var enrollment = new CX509Enrollment();

            enrollment.InitializeFromRequest(cert); // load the certificate
            enrollment.CertificateFriendlyName = cert.Subject.Name;

            var request = enrollment.CreateRequest();

            enrollment.InstallResponse(InstallResponseRestrictionFlags.AllowUntrustedCertificate, request, EncodingType.XCN_CRYPT_STRING_BASE64, string.Empty);

            var base64Encoded = enrollment.CreatePFX(string.Empty, PFXExportOptions.PFXExportChainWithRoot);

            return base64Encoded;
        }

        private void AddBasicConstraints(CX509CertificateRequestCertificate cert)
        {
            // Add basic constraints
            var bc = new CX509ExtensionBasicConstraints();

            bc.InitializeEncode(false, 0);
            bc.Critical = true;

            cert.X509Extensions.Add((CX509Extension)bc);
        }

        private void AddExtendedKeyUsage(CX509CertificateRequestCertificate cert)
        {
            // Add extended key usage
            var eku = new CX509ExtensionEnhancedKeyUsage();
            var oid = new CObjectId();

            oid.InitializeFromValue("1.3.6.1.5.5.7.3.3");
            eku.InitializeEncode(new CObjectIds() { oid });

            eku.Critical = true;

            cert.X509Extensions.Add((CX509Extension)eku);
        }

        private void AddKeyUsage(CX509CertificateRequestCertificate cert)
        {
            // Add key usage
            var ku = new CX509ExtensionKeyUsage();
            ku.InitializeEncode(CERTENROLLLib.X509KeyUsageFlags.XCN_CERT_DIGITAL_SIGNATURE_KEY_USAGE);

            ku.Critical = false;

            cert.X509Extensions.Add((CX509Extension)ku);
        }

        private CX509CertificateRequestCertificate CreateCertificateRequest(string publisherName)
        {
            // create DN for subject and issuer
            var dn = new CX500DistinguishedName();
            dn.Encode("CN=" + publisherName);

            // create a new private key for the certificate
            var privateKey = (IX509PrivateKey)Activator.CreateInstance(Type.GetTypeFromProgID("X509Enrollment.CX509PrivateKey"));

            privateKey.ProviderName = "Microsoft Base Cryptographic Provider v1.0";
            privateKey.MachineContext = false;
            privateKey.Length = 2048;
            privateKey.KeySpec = X509KeySpec.XCN_AT_SIGNATURE;
            privateKey.KeyUsage = X509PrivateKeyUsageFlags.XCN_NCRYPT_ALLOW_SIGNING_FLAG;
            privateKey.ExportPolicy = X509PrivateKeyExportFlags.XCN_NCRYPT_ALLOW_PLAINTEXT_EXPORT_FLAG;
            privateKey.Create();

            // Create the self signing request
            var cert = new CX509CertificateRequestCertificate();

            cert.InitializeFromPrivateKey(X509CertificateEnrollmentContext.ContextUser, privateKey, string.Empty);
            cert.Subject = dn;
            cert.Issuer = dn;
            cert.NotBefore = DateTime.Now.Date.AddDays(-1);
            cert.NotAfter = DateTime.Now.Date.AddYears(1);

            return cert;
        }
    }
}
