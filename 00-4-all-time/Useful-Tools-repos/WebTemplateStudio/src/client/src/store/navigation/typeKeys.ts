export enum NAVIGATION_MODAL_TYPES {
  AZURE_LOGIN_MODAL = "AZURE_LOGIN_MODAL",
  COSMOS_DB_MODAL = "COSMOS_DB_MODAL",
  GEN_MODAL = "GEN_MODAL",
  PRIVACY_MODAL = "PRIVACY_MODAL",
  VIEW_LICENSES_MODAL = "VIEW_LICENSES_MODAL",
  APP_SERVICE_MODAL = "APP_SERVICE_MODAL",
}

export enum NAVIGATION_MODAL_TYPEKEYS {
  OPEN_MODAL = "WTS/navigation/modals/OPEN_MODAL",
  CLOSE_MODALS = "WTS/navigation/modals/CLOSE_MODALS",
}

export enum NAVIGATION_ROUTES_TYPEKEYS {
  SET_VISITED_WIZARD_PAGE = "WTS/navigation/routes/SET_VISITED_WIZARD_PAGE",
  RESET_VISITED_WIZARD_PAGE = "WTS/navigation/routes/RESET_VISITED_WIZARD_PAGE",
  SET_PAGE_WIZARD_PAGE = "WTS/navigation/routes/SET_PAGE_WIZARD_PAGE",
  SET_DETAILS_PAGE_INFO = "WTS/navigation/routes/SET_DETAILS_PAGE_INFO",
  SET_IS_DIRTY = "WTS/navigation/routes/SET_IS_DIRTY",
}

export type ModalType =
  | null
  | NAVIGATION_MODAL_TYPES.COSMOS_DB_MODAL
  | NAVIGATION_MODAL_TYPES.GEN_MODAL
  | NAVIGATION_MODAL_TYPES.PRIVACY_MODAL
  | NAVIGATION_MODAL_TYPES.VIEW_LICENSES_MODAL
  | NAVIGATION_MODAL_TYPES.APP_SERVICE_MODAL
  | NAVIGATION_MODAL_TYPES.AZURE_LOGIN_MODAL;

export interface ModalState {
  modalType: ModalType;
  modalData: any;
}
