import {
  FormField,
  Layout
} from "/build/_shared/chunk-LNMOBYGQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-7LS2WKLY.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/login.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/login.tsx"
  );
  import.meta.hot.lastModified = "1692028477565.8901";
}
function Login() {
  _s();
  const [action, setAction] = (0, import_react.useState)("login");
  const [formData, setFormData] = (0, import_react.useState)({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  });
  const handleInputChange = (event, field) => {
    setFormData((form) => ({
      ...form,
      [field]: event.target.value
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full flex justify-center items-center flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setAction(action == "login" ? "register" : "login"), className: "absolute top-8 right-8 rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1", children: action === "login" ? "Sign Up" : "Sign In" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 43,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-5xl font-extrabold text-yellow-300 text-center", children: "WELCOME TO MY CHAT" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 45,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-slate-300 text-center", children: action === "login" ? "Log In Please To Continue ..." : "Sign up To Get Started" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 46,
      columnNumber: 17
    }, this),
    JSON.stringify(formData),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "rounded-2xl bg-gray-200 p-6 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, { type: "text", htmlFor: "email", label: "Email", value: formData.email, onChange: (e) => handleInputChange(e, "email") }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 53,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, { type: "password", htmlFor: "password", label: " Password", value: formData.password, onChange: (e) => handleInputChange(e, "password") }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 55,
        columnNumber: 21
      }, this),
      action === "register" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, { type: "text", htmlFor: "firstName", label: "First Name", onChange: (e) => handleInputChange(e, "firstName"), value: formData.firstName }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 57,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, { type: "text", htmlFor: "lastName", label: "Last Name", onChange: (e) => handleInputChange(e, "lastName"), value: formData.lastName }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 58,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 56,
        columnNumber: 47
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", name: "_action", value: action, className: "rounded-xl mt-2 bg-yellow-300 px-5 py-2 text-blue-600 \n                        font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:translate-y-1", children: action === "login" ? "Sign In" : "Sign up" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 63,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 62,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 41,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s(Login, "cqFcv7J4vdMa7sGU+zDn/zvVK1o=");
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default
};
//# sourceMappingURL=/build/routes/login-A3ECWYD2.js.map
