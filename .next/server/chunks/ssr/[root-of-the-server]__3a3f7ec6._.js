module.exports = {

"[externals]/@apollo/client [external] (@apollo/client, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@apollo/client", () => require("@apollo/client"));

module.exports = mod;
}}),
"[project]/graphql/apolloClient.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// graphql/apolloClient.ts
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@apollo/client [external] (@apollo/client, cjs)");
;
const client = new __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__["ApolloClient"]({
    link: new __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__["HttpLink"]({
        uri: "https://rickandmortyapi.com/graphql"
    }),
    cache: new __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__["InMemoryCache"]()
});
const __TURBOPACK__default__export__ = client;
}}),
"[project]/components/common/ErrorBoundary.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(_) {
        return {
            hasError: true
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        children: "Oops, there is an error!"
                    }, void 0, false, {
                        fileName: "[project]/components/common/ErrorBoundary.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>this.setState({
                                hasError: false
                            }),
                        children: "Try again?"
                    }, void 0, false, {
                        fileName: "[project]/components/common/ErrorBoundary.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/common/ErrorBoundary.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
const __TURBOPACK__default__export__ = ErrorBoundary;
}}),
"[project]/pages/_app.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@apollo/client [external] (@apollo/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$graphql$2f$apolloClient$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/graphql/apolloClient.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$ErrorBoundary$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/ErrorBoundary.tsx [ssr] (ecmascript)"); // ✅ Import added
;
;
;
;
;
function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__["ApolloProvider"], {
        client: __TURBOPACK__imported__module__$5b$project$5d2f$graphql$2f$apolloClient$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$ErrorBoundary$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                ...pageProps
            }, void 0, false, {
                fileName: "[project]/pages/_app.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/pages/_app.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/_app.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = MyApp;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__3a3f7ec6._.js.map