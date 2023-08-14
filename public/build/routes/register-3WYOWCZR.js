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

// app/routes/register.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/register.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/register.tsx"
  );
  import.meta.hot.lastModified = "1692040631058.3433";
}
function Register() {
  _s();
  const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,3})$/i;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const USER_REGEX = /^[A-z][A-z0-9]{1,30}$/;
  const [validEmail, setValidEmail] = (0, import_react.useState)(false);
  const [validPassword, setValidPassword] = (0, import_react.useState)(false);
  const [validFirstName, setValidFirstName] = (0, import_react.useState)(false);
  const [validLastName, setValidLastName] = (0, import_react.useState)(false);
  const [formData, setFormData] = (0, import_react.useState)({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  });
  (0, import_react.useEffect)(() => {
    setValidEmail(EMAIL_REGEX.test(formData.email));
  }, [formData.email]);
  (0, import_react.useEffect)(() => {
    setValidPassword(PWD_REGEX.test(formData.password));
  }, [formData.password]);
  (0, import_react.useEffect)(() => {
    setValidFirstName(USER_REGEX.test(formData.firstName));
  }, [formData.firstName]);
  (0, import_react.useEffect)(() => {
    setValidLastName(USER_REGEX.test(formData.lastName));
  }, [formData.lastName]);
  const handleInputChange = (event, field) => {
    setFormData((form) => ({
      ...form,
      [field]: event.target.value
    }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full flex justify-center items-center flex-col gap-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-5xl font-extrabold text-yellow-300 text-center", children: "BIENVENUE DANS LE BLOG DE MOMO" }, void 0, false, {
      fileName: "app/routes/register.tsx",
      lineNumber: 61,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-slate-300 text-center", children: "INSCRIPTION" }, void 0, false, {
      fileName: "app/routes/register.tsx",
      lineNumber: 63,
      columnNumber: 17
    }, this),
    JSON.stringify(formData),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/register.tsx",
      lineNumber: 65,
      columnNumber: 43
    }, this),
    "email valid : ",
    JSON.stringify(validEmail),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/register.tsx",
      lineNumber: 66,
      columnNumber: 59
    }, this),
    "mot de passe valid : ",
    JSON.stringify(validPassword),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/register.tsx",
      lineNumber: 67,
      columnNumber: 69
    }, this),
    "nom valid : ",
    JSON.stringify(validFirstName),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/register.tsx",
      lineNumber: 68,
      columnNumber: 61
    }, this),
    "pr\xE9nom valid : ",
    JSON.stringify(validLastName),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/register.tsx",
      lineNumber: 69,
      columnNumber: 63
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "POST", className: "rounded-2xl bg-gray-200 p-6 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, { type: "text", htmlFor: "email", label: "Email", value: formData.email, onChange: (e) => handleInputChange(e, "email") }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 73,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600 text-sm mb-4 pl-2", children: validEmail ? "" : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Email incorrect" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 74,
        columnNumber: 86
      }, this) }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 74,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, { type: "password", htmlFor: "password", label: "Mot de passe", value: formData.password, onChange: (e) => handleInputChange(e, "password") }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 77,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600 text-sm mb-4 pl-2", children: validPassword ? "" : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
        "Mot de passe doit contenir 8 caract\xE9res",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/routes/register.tsx",
          lineNumber: 78,
          columnNumber: 134
        }, this),
        "avec une majuscule , un caract\xE8re sp\xE9cial !@#$% et un nombre"
      ] }, void 0, true, {
        fileName: "app/routes/register.tsx",
        lineNumber: 78,
        columnNumber: 89
      }, this) }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 78,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, { type: "text", htmlFor: "firstName", label: "Nom", value: formData.firstName, onChange: (e) => handleInputChange(e, "firstName") }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 81,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600 text-sm mb-4 pl-2", children: validFirstName ? "" : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Le nom doit contenir 2 \xE0 30 caract\xE8res" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 82,
        columnNumber: 90
      }, this) }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 82,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, { type: "text", htmlFor: "lastName", label: "Pr\xE9nom", value: formData.lastName, onChange: (e) => handleInputChange(e, "lastName") }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 85,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600 text-sm mb-4 pl-2", children: validLastName ? "" : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Le pr\xE9nom doit contenir 2 \xE0 30 caract\xE8res" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 86,
        columnNumber: 89
      }, this) }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 86,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", name: "_action", value: "register", className: "rounded-xl mt-2 bg-yellow-300 px-5 py-2 text-blue-600 \n                        font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:translate-y-1", children: "S'inscrire" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 90,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 89,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/register.tsx",
      lineNumber: 72,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/register.tsx",
    lineNumber: 59,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/register.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s(Register, "dyduP8XbZW3w6M+OX/SgN/bk7ww=");
_c = Register;
var _c;
$RefreshReg$(_c, "Register");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Register as default
};
//# sourceMappingURL=/build/routes/register-3WYOWCZR.js.map
