{
    doctype: {
    prefix: "doctype",
    body: [
        "<!DOCTYPE>",
        "$1"
        ],
    description: "HTML - Defines the document type",
    scope: "text.html"
    },
    a: {
    prefix: "a",
    body: "<a href=\"$1\">$2</a>$3",
    description: "HTML - Defines a hyperlink",
    scope: "text.html"
    },
    abbr: {
    prefix: "abbr",
    body: "<abbr title=\"$1\">$2</abbr>$3",
    description: "HTML - Defines an abbreviation",
    scope: "text.html"
    },
    address: {
    prefix: "address",
    body: [
        "<address>",
        "$1",
        "</address>"
        ],
    description: "HTML - Defines an address element",
    scope: "text.html"
    },
    area: {
    prefix: "area",
    body: "<area shape=\"$1\" coords=\"$2\" href=\"$3\" alt=\"$4\">$5",
    description: "HTML - Defines an area inside an image map",
    scope: "text.html"
    },
    article: {
    prefix: "article",
    body: [
        "<article>",
        "\t$1",
        "</article>"
        ],
    description: "HTML - Defines an article",
    scope: "text.html"
    },
    aside: {
    prefix: "aside",
    body: [
        "<aside>",
        "\t$1",
        "</aside>$2"
        ],
    description: "HTML - Defines content aside from the page content",
    scope: "text.html"
    },
    audio: {
    prefix: "audio",
    body: [
        "<audio controls>",
        "\t$1",
        "</audio>"
        ],
    description: "HTML - Defines sounds content",
    scope: "text.html"
    },
    b: {
    prefix: "b",
    body: "<b>$1</b>$2",
    description: "HTML - Defines bold text",
    scope: "text.html"
    },
    base: {
    prefix: "base",
    body: "<base href=\"$1\" target=\"$2\">$3",
    description: "HTML - Defines a base URL for all the links in a page",
    scope: "text.html"
    },
    bdi: {
    prefix: "bdi",
    body: "<bdi>$1</bdi>$2",
    description: "HTML - Used to isolate text that is of unknown directionality",
    scope: "text.html"
    },
    bdo: {
    prefix: "bdo",
    body: [
        "<bdo dir=\"$1\">",
        "$2",
        "</bdo>"],
    description: "HTML - Defines the direction of text display",
    scope: "text.html"
    },
    big: {
    prefix: "big",
    body: "<big>$1</big>$2",
    description: "HTML - Used to make text bigger",
    scope: "text.html"
    },
    blockquote: {
    prefix: "blockquote",
    body: [
        "<blockquote cite=\"$2\">",
        "\t$1",
        "</blockquote>"
        ],
    description: "HTML - Defines a long quotation",
    scope: "text.html"
    },
    body: {
    prefix: "body",
    body: [
        "<body>",
        "\t$1",
        "</body>"],
    description: "HTML - Defines the body element",
    scope: "text.html"
    },
    br: {
    prefix: "br",
    body: "<br>",
    description: "HTML - Inserts a single line break",
    scope: "text.html"
    },
    button: {
    prefix: "button",
    body: "<button type=\"$1\">$2</button>$3",
    description: "HTML - Defines a push button",
    scope: "text.html"
    },
    canvas: {
    prefix: "canvas",
    body: "<canvas id=\"$1\">$2</canvas>$3",
    description: "HTML - Defines graphics",
    scope: "text.html"
    },
    caption: {
    prefix: "caption",
    body: "<caption>$1</caption>$2",
    description: "HTML - Defines a table caption",
    scope: "text.html"
    },
    cite: {
    prefix: "cite",
    body: "<cite>$1</cite>$2",
    description: "HTML - Defines a citation",
    scope: "text.html"
    },
    code: {
    prefix: "code",
    body: "<code>$1</code>$2",
    description: "HTML - Defines computer code text",
    scope: "text.html"
    },
    col: {
    prefix: "col",
    body: "<col>$2",
    description: "HTML - Defines attributes for table columns",
    scope: "text.html"
    },
    colgroup: {
    prefix: "colgroup",
    body: [
        "<colgroup>",
        "\t$1",
        "</colgroup>"],
    description: "HTML - Defines group of table columns",
    scope: "text.html"
    },
    command: {
    prefix: "command",
    body: "<command>$1</command>$2",
    description: "HTML - Defines a command button [not supported]",
    scope: "text.html"
    },
    datalist: {
    prefix: "datalist",
    body: [
        "<datalist>",
        "\t$1",
        "</datalist>"
        ],
    description: "HTML - Defines a dropdown list",
    scope: "text.html"
    },
    dd: {
    prefix: "dd",
    body: "<dd>$1</dd>$2",
    description: "HTML - Defines a definition description",
    scope: "text.html"
    },
    del: {
    prefix: "del",
    body: "<del>$1</del>$2",
    description: "HTML - Defines deleted text",
    scope: "text.html"
    },
    details: {
    prefix: "details",
    body: [
        "<details>",
        "\t$1",
        "</details>"
        ],
    description: "HTML - Defines details of an element",
    scope: "text.html"
    },
    dialog: {
    prefix: "dialog",
    body: "<dialog>$1</dialog>$2",
    description: "HTML - Defines a dialog (conversation)",
    scope: "text.html"
    },
    dfn: {
    prefix: "dfn",
    body: "<dfn>$1</dfn>$2",
    description: "HTML - Defines a definition term",
    scope: "text.html"
    },
    div: {
    prefix: "div",
    body: [
        "<div>",
        "\t$1",
        "</div>"
        ],
    description: "HTML - Defines a section in a document",
    scope: "text.html"
    },
    dl: {
    prefix: "dl",
    body: [
        "<dl>",
        "\t$1",
        "</dl>"
        ],
    description: "HTML - Defines a definition list",
    scope: "text.html"
    },
    dt: {
    prefix: "dt",
    body: "<dt>$1</dt>$2",
    description: "HTML - Defines a definition term",
    scope: "text.html"
    },
    em: {
    prefix: "em",
    body: "<em>$1</em>$2",
    description: "HTML - Defines emphasized text",
    scope: "text.html"
    },
    embed: {
    prefix: "embed",
    body: "<embed src=\"$1\">$2",
    description: "HTML - Defines external interactive content ot plugin",
    scope: "text.html"
    },
    fieldset: {
    prefix: "fieldset",
    body: [
        "<fieldset>",
        "\t$1",
        "</fieldset>"],
    description: "HTML - Defines a fieldset",
    scope: "text.html"
    },
    figcaption: {
    prefix: "figcaption",
    body: "<figcaption>$1</figcaption>$2",
    description: "HTML - Defines a caption for a figure",
    scope: "text.html"
    },
    figure: {
    prefix: "figure",
    body: [
        "<figure>",
        "\t$1",
        "</figure>"
        ],
    description: "HTML - Defines a group of media content, and their caption",
    scope: "text.html"
    },
    footer: {
    prefix: "footer",
    body: [
        "<footer>",
        "\t$1",
        "</footer>"
        ],
    description: "HTML - Defines a footer for a section or page",
    scope: "text.html"
    },
    form: {
    prefix: "form",
    body: [
        "<form>",
        "\t$1",
        "</form>"
        ],
    description: "HTML - Defines a form",
    scope: "text.html"
    },
    h1: {
    prefix: "h1",
    body: "<h1>$1</h1>$2",
    description: "HTML - Defines header 1",
    scope: "text.html"
    },
    h2: {
    prefix: "h2",
    body: "<h2>$1</h2>$2",
    description: "HTML - Defines header 2",
    scope: "text.html"
    },
    h3: {
    prefix: "h3",
    body: "<h3>$1</h3>$2",
    description: "HTML - Defines header 3",
    scope: "text.html"
    },
    h4: {
    prefix: "h4",
    body: "<h4>$1</h4>$2",
    description: "HTML - Defines header 4",
    scope: "text.html"
    },
    h5: {
    prefix: "h5",
    body: "<h5>$1</h5>$2",
    description: "HTML - Defines header 5",
    scope: "text.html"
    },
    h6: {
    prefix: "h6",
    body: "<h6>$1</h6>$2",
    description: "HTML - Defines header 6",
    scope: "text.html"
    },
    head: {
    prefix: "head",
    body: [
        "<head>",
        "\t$1",
        "</head>"
        ],
    description: "HTML - Defines information about the document",
    scope: "text.html"
    },
    header: {
    prefix: "header",
    body: [
        "<header>",
        "\t$1",
        "</header>"
        ],
    description: "HTML - Defines a header for a section of page",
    scope: "text.html"
    },
    hgroup: {
    prefix: "hgroup",
    body: [
        "<hgroup>",
        "\t$1",
        "</hgroup>"
        ],
    description: "HTML - Defines information about a section in a document",
    scope: "text.html"
    },
    hr: {
    prefix: "hr",
    body: "<hr>",
    description: "HTML - Defines a horizontal rule",
    scope: "text.html"
    },
    html: {
    prefix: "html",
    body: [
        "<html>",
        "\t$1",
        "</html>"
        ],
    description: "HTML - Defines an html document",
    scope: "text.html"
    },
    html5: {
    prefix: "html5",
    body: [
        "<!DOCTYPE html>",
        "<html lang=\"$1en\">",
        "\t<head>",
        "\t\t<title>$2</title>",
        "\t\t<meta charset=\"UTF-8\">",
        "\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
        "\t\t<link href=\"$3css/style.css\" rel=\"stylesheet\">",
        "\t</head>",
        "\t<body>",
        "\t$4",
        "\t</body>",
        "</html>"
        ],
    description: "HTML - Defines a template for a html5 document",
    scope: "text.html"
    },
    i: {
    prefix: "i",
    body: "<i>$1</i>$2",
    description: "HTML - Defines italic text",
    scope: "text.html"
    },
    iframe: {
    prefix: "iframe",
    body: "<iframe src=\"$1\">$2</iframe>$3",
    description: "HTML - Defines an inline sub window",
    scope: "text.html"
    },
    img: {
    prefix: "img",
    body: "<img src=\"$1\" alt=\"$2\">$3",
    description: "HTML - Defines an image",
    scope: "text.html"
    },
    input: {
    prefix: "input",
    body: "<input type=\"$1\" name=\"$2\" value=\"$3\">$4",
    description: "HTML - Defines an input field",
    scope: "text.html"
    },
    ins: {
    prefix: "ins",
    body: "<ins>$1</ins>$2",
    description: "HTML - Defines inserted text",
    scope: "text.html"
    },
    keygen: {
    prefix: "keygen",
    body: "<keygen name=\"$1\">$2",
    description: "HTML - Defines a generated key in a form",
    scope: "text.html"
    },
    kbd: {
    prefix: "kbd",
    body: "<kbd>$1</kbd>$2",
    description: "HTML - Defines keyboard text",
    scope: "text.html"
    },
    label: {
    prefix: "label",
    body: "<label for=\"$1\">$2</label>$3",
    description: "HTML - Defines an inline window",
    scope: "text.html"
    },
    legend: {
    prefix: "legend",
    body: "<legend>$1</legend>$2",
    description: "HTML - Defines a title in a fieldset",
    scope: "text.html"
    },
    li: {
    prefix: "li",
    body: "<li>$1</li>$2",
    description: "HTML - Defines a list item",
    scope: "text.html"
    },
    link: {
    prefix: "link",
    body: "<link rel=\"$1\" type=\"$2\" href=\"$3\">$4",
    description: "HTML - Defines a resource reference",
    scope: "text.html"
    },
    main: {
    prefix: "main",
    body: [
        "<main>",
        "\t$1",
        "</main>"
    ],
    description: "HTML - Defines an image map",
    scope: "text.html"
    },
    map: {
    prefix: "map",
    body: [
        "<map name=\"$1\">",
        "\t$2",
        "</map>"],
    description: "HTML - Defines an image map",
    scope: "text.html"
    },
    mark: {
    prefix: "mark",
    body: "<mark>$1</mark>$2",
    description: "HTML - Defines marked text",
    scope: "text.html"
    },
    menu: {
    prefix: "menu",
    body: [
        "<menu>",
        "\t$1",
        "</menu>"
        ],
    description: "HTML - Defines a menu list",
    scope: "text.html"
    },
    menuitem: {
    prefix: "menuitem",
    body: "<menuitem>$1</menuitem>$2",
    description: "HTML - Defines a menu item [firefox only]",
    scope: "text.html"
    },
    meta: {
    prefix: "meta",
    body: "<meta name=\"$1\" content=\"$2\">$3",
    description: "HTML - Defines meta information",
    scope: "text.html"
    },
    meter: {
    prefix: "meter",
    body: "<meter value=\"$1\">$2</meter>$3",
    description: "HTML - Defines measurement within a predefined range",
    scope: "text.html"
    },
    nav: {
    prefix: "nav",
    body: [
        "<nav>",
        "\t$1",
        "</nav>"
        ],
    description: "HTML - Defines navigation links",
    scope: "text.html"
    },
    noscript: {
    prefix: "noscript",
    body: [
        "<noscript>",
        "$1",
        "</noscript>"
        ],
    description: "HTML - Defines a noscript section",
    scope: "text.html"
    },
    object: {
    prefix: "object",
    body: "<object width=\"$1\" height=\"$2\" data=\"$3\">$4</object>$5",
    description: "HTML - Defines an embedded object",
    scope: "text.html"
    },
    ol: {
    prefix: "ol",
    body: [
        "<ol>",
        "\t$1",
        "</ol>"
        ],
    description: "HTML - Defines an ordered list",
    scope: "text.html"
    },
    optgroup: {
    prefix: "optgroup",
    body: [
        "<optgroup>",
        "\t$1",
        "</optgroup>"
        ],
    description: "HTML - Defines an option group",
    scope: "text.html"
    },
    option: {
    prefix: "option",
    body: "<option value=\"$1\">$2</option>$3",
    description: "HTML - Defines an option in a drop-down list",
    scope: "text.html"
    },
    output: {
    prefix: "output",
    body: "<output name=\"$1\" for=\"$2\">$3</output>$4",
    description: "HTML - Defines some types of output",
    scope: "text.html"
    },
    p: {
    prefix: "p",
    body: "<p>$1</p>$2",
    description: "HTML - Defines a paragraph",
    scope: "text.html"
    },
    param: {
    prefix: "param",
    body: "<param name=\"$1\" value=\"$2\">$3",
    description: "HTML - Defines a parameter for an object",
    scope: "text.html"
    },
    pre: {
    prefix: "pre",
    body: [
        "<pre>$1</pre>"
        ],
    description: "HTML - Defines preformatted text",
    scope: "text.html"
    },
    progress: {
    prefix: "progress",
    body: "<progress value=\"$1\" max=\"$2\">$3</progress>$4",
    description: "HTML - Defines progress of a task of any kind",
    scope: "text.html"
    },
    q: {
    prefix: "q",
    body: "<q>$1</q>$2",
    description: "HTML - Defines a short quotation",
    scope: "text.html"
    },
    rp: {
    prefix: "rp",
    body: "<rp>$1</rp>$2",
    description: "HTML - Used in ruby annotations to define what to show browsers that do not support the ruby element",
    scope: "text.html"
    },
    rt: {
    prefix: "rt",
    body: "<rt>$1</rt>$2",
    description: "HTML - Defines explanation to ruby annotations",
    scope: "text.html"
    },
    ruby: {
    prefix: "ruby",
    body: [
        "<ruby>",
        "$1",
        "</ruby>"
        ],
    description: "HTML - Defines ruby annotations",
    scope: "text.html"
    },
    s: {
    prefix: "s",
    body: "<s>$1</s>$2",
    description: "HTML - Used to define strikethrough text",
    scope: "text.html"
    },
    samp: {
    prefix: "samp",
    body: "<samp>$1</samp>$2",
    description: "HTML - Defines sample computer code",
    scope: "text.html"
    },
    script: {
    prefix: "script",
    body: [
        "<script>",
        "\t$1",
        "</script>"
        ],
    description: "HTML - Defines a script",
    scope: "text.html"
    },
    section: {
    prefix: "section",
    body: [
        "<section>",
        "\t$1",
        "</section>"
        ],
    description: "HTML - Defines a section",
    scope: "text.html"
    },
    select: {
    prefix: "select",
    body: [
        "<select>",
        "\t$1",
        "</select>"
        ],
    description: "HTML - Defines a selectable list",
    scope: "text.html"
    },
    small: {
    prefix: "small",
    body: "<small>$1</small>$2",
    description: "HTML - Defines small text",
    scope: "text.html"
    },
    source: {
    prefix: "source",
    body: "<source src=\"$1\" type=\"$2\">$3",
    description: "HTML - Defines media resource",
    scope: "text.html"
    },
    span: {
    prefix: "span",
    body: "<span>$1</span>$2",
    description: "HTML - Defines a section in a document",
    scope: "text.html"
    },
    strong: {
    prefix: "strong",
    body: "<strong>$1</strong>$2",
    description: "HTML - Defines strong text",
    scope: "text.html"
    },
    style: {
    prefix: "style",
    body: [
        "<style>",
        "$1",
        "</style>"
        ],
    description: "HTML - Defines a style definition",
    scope: "text.html"
    },
    sub: {
    prefix: "sub",
    body: "<sub>$1</sub>$2",
    description: "HTML - Defines sub-scripted text",
    scope: "text.html"
    },
    sup: {
    prefix: "sup",
    body: "<sup>$1</sup>$2",
    description: "HTML - Defines super-scripted text",
    scope: "text.html"
    },
    summary: {
    prefix: "summary",
    body: "<summary>$1</summary>$2",
    description: "HTML - Defines a visible heading for the detail element [limited support]",
    scope: "text.html"
    },
    table: {
    prefix: "table",
    body: [
        "<table>",
        "\t$1",
        "</table>"
        ],
    description: "HTML - Defines a table",
    scope: "text.html"
    },
    tbody: {
    prefix: "tbody",
    body: [
        "<tbody>",
        "\t$1",
        "</tbody>"
        ],
    description: "HTML - Defines a table body",
    scope: "text.html"
    },
    td: {
    prefix: "td",
    body: "<td>$1</td>$2",
    description: "HTML - Defines a table cell",
    scope: "text.html"
    },
    textarea: {
    prefix: "textarea",
    body: "<textarea rows=\"$1\" cols=\"$2\">$3</textarea>$4",
    description: "HTML - Defines a text area",
    scope: "text.html"
    },
    tfoot: {
    prefix: "tfoot",
    body: [
        "<tfoot>",
        "\t$1",
        "</tfoot>"
        ],
    description: "HTML - Defines a table footer",
    scope: "text.html"
    },
    thead: {
    prefix: "thead",
    body: [
        "<thead>",
        "$1",
        "</thead>"
        ],
    description: "HTML - Defines a table head",
    scope: "text.html"
    },
    th: {
    prefix: "th",
    body: "<th>$1</th>$2",
    description: "HTML - Defines a table header",
    scope: "text.html"
    },
    time: {
    prefix: "time",
    body: "<time datetime=\"$1\">$2</time>$3",
    description: "HTML - Defines a date/time",
    scope: "text.html"
    },
    title: {
    prefix: "title",
    body: "<title>$1</title>$2",
    description: "HTML - Defines the document title",
    scope: "text.html"
    },
    tr: {
    prefix: "tr",
    body: "<tr>$1</tr>$2",
    description: "HTML - Defines a table row",
    scope: "text.html"
    },
    track: {
    prefix: "track",
    body: "<track src=\"$1\" kind=\"$2\" srclang=\"$3\" label=\"$4\">$5",
    description: "HTML - Defines a table row",
    scope: "text.html"
    },
    u: {
    prefix: "u",
    body: "<u>$1</u>$2",
    description: "HTML - Used to define underlined text",
    scope: "text.html"
    },
    ul: {
    prefix: "ul",
    body: [
        "<ul>",
        "\t$1",
        "</ul>"
        ],
    description: "HTML - Defines an unordered list",
    scope: "text.html"
    },
    var: {
    prefix: "var",
    body: "<var>$1</var>$2",
    description: "HTML - Defines a variable",
    scope: "text.html"
    },
    video: {
    prefix: "video",
    body: [
        "<video width=\"$1\" height=\"$2\" controls>",
        "\t$3",
        "</video>"],
    description: "HTML - Defines a video",
    scope: "text.html"
    }
}
