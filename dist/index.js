import T, { forwardRef as Bt, createElement as Je, createContext as qt, useContext as Wt, useState as st, useRef as Ee, useEffect as be, useCallback as Vs } from "react";
import { createPortal as Ht } from "react-dom";
import { useNavigate as Le } from "react-router-dom";
var Qe = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ct;
function Bs() {
  if (Ct)
    return me;
  Ct = 1;
  var n = T, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, a, c) {
    var l, p = {}, d = null, g = null;
    c !== void 0 && (d = "" + c), a.key !== void 0 && (d = "" + a.key), a.ref !== void 0 && (g = a.ref);
    for (l in a)
      s.call(a, l) && !o.hasOwnProperty(l) && (p[l] = a[l]);
    if (f && f.defaultProps)
      for (l in a = f.defaultProps, a)
        p[l] === void 0 && (p[l] = a[l]);
    return { $$typeof: e, type: f, key: d, ref: g, props: p, _owner: i.current };
  }
  return me.Fragment = t, me.jsx = u, me.jsxs = u, me;
}
var ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function qs() {
  return St || (St = 1, process.env.NODE_ENV !== "production" && function() {
    var n = T, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m = Symbol.iterator, x = "@@iterator";
    function y(h) {
      if (h === null || typeof h != "object")
        return null;
      var b = m && h[m] || h[x];
      return typeof b == "function" ? b : null;
    }
    var j = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(h) {
      {
        for (var b = arguments.length, N = new Array(b > 1 ? b - 1 : 0), O = 1; O < b; O++)
          N[O - 1] = arguments[O];
        _("error", h, N);
      }
    }
    function _(h, b, N) {
      {
        var O = j.ReactDebugCurrentFrame, U = O.getStackAddendum();
        U !== "" && (b += "%s", N = N.concat([U]));
        var V = N.map(function(F) {
          return String(F);
        });
        V.unshift("Warning: " + b), Function.prototype.apply.call(console[h], console, V);
      }
    }
    var w = !1, C = !1, S = !1, E = !1, L = !1, A;
    A = Symbol.for("react.module.reference");
    function z(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === s || h === o || L || h === i || h === c || h === l || E || h === g || w || C || S || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === p || h.$$typeof === u || h.$$typeof === f || h.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === A || h.getModuleId !== void 0));
    }
    function R(h, b, N) {
      var O = h.displayName;
      if (O)
        return O;
      var U = b.displayName || b.name || "";
      return U !== "" ? N + "(" + U + ")" : N;
    }
    function M(h) {
      return h.displayName || "Context";
    }
    function $(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case s:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case f:
            var b = h;
            return M(b) + ".Consumer";
          case u:
            var N = h;
            return M(N._context) + ".Provider";
          case a:
            return R(h, h.render, "ForwardRef");
          case p:
            var O = h.displayName || null;
            return O !== null ? O : $(h.type) || "Memo";
          case d: {
            var U = h, V = U._payload, F = U._init;
            try {
              return $(F(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, B = 0, J, W, k, q, se, fe, ut;
    function dt() {
    }
    dt.__reactDisabledLog = !0;
    function ms() {
      {
        if (B === 0) {
          J = console.log, W = console.info, k = console.warn, q = console.error, se = console.group, fe = console.groupCollapsed, ut = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: dt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        B++;
      }
    }
    function gs() {
      {
        if (B--, B === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, h, {
              value: J
            }),
            info: D({}, h, {
              value: W
            }),
            warn: D({}, h, {
              value: k
            }),
            error: D({}, h, {
              value: q
            }),
            group: D({}, h, {
              value: se
            }),
            groupCollapsed: D({}, h, {
              value: fe
            }),
            groupEnd: D({}, h, {
              value: ut
            })
          });
        }
        B < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Fe = j.ReactCurrentDispatcher, ze;
    function je(h, b, N) {
      {
        if (ze === void 0)
          try {
            throw Error();
          } catch (U) {
            var O = U.stack.trim().match(/\n( *(at )?)/);
            ze = O && O[1] || "";
          }
        return `
` + ze + h;
      }
    }
    var De = !1, Ne;
    {
      var _s = typeof WeakMap == "function" ? WeakMap : Map;
      Ne = new _s();
    }
    function ft(h, b) {
      if (!h || De)
        return "";
      {
        var N = Ne.get(h);
        if (N !== void 0)
          return N;
      }
      var O;
      De = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = Fe.current, Fe.current = null, ms();
      try {
        if (b) {
          var F = function() {
            throw Error();
          };
          if (Object.defineProperty(F.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(F, []);
            } catch (X) {
              O = X;
            }
            Reflect.construct(h, [], F);
          } else {
            try {
              F.call();
            } catch (X) {
              O = X;
            }
            h.call(F.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            O = X;
          }
          h();
        }
      } catch (X) {
        if (X && O && typeof X.stack == "string") {
          for (var I = X.stack.split(`
`), G = O.stack.split(`
`), H = I.length - 1, K = G.length - 1; H >= 1 && K >= 0 && I[H] !== G[K]; )
            K--;
          for (; H >= 1 && K >= 0; H--, K--)
            if (I[H] !== G[K]) {
              if (H !== 1 || K !== 1)
                do
                  if (H--, K--, K < 0 || I[H] !== G[K]) {
                    var ee = `
` + I[H].replace(" at new ", " at ");
                    return h.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", h.displayName)), typeof h == "function" && Ne.set(h, ee), ee;
                  }
                while (H >= 1 && K >= 0);
              break;
            }
        }
      } finally {
        De = !1, Fe.current = V, gs(), Error.prepareStackTrace = U;
      }
      var oe = h ? h.displayName || h.name : "", ne = oe ? je(oe) : "";
      return typeof h == "function" && Ne.set(h, ne), ne;
    }
    function xs(h, b, N) {
      return ft(h, !1);
    }
    function ys(h) {
      var b = h.prototype;
      return !!(b && b.isReactComponent);
    }
    function $e(h, b, N) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return ft(h, ys(h));
      if (typeof h == "string")
        return je(h);
      switch (h) {
        case c:
          return je("Suspense");
        case l:
          return je("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case a:
            return xs(h.render);
          case p:
            return $e(h.type, b, N);
          case d: {
            var O = h, U = O._payload, V = O._init;
            try {
              return $e(V(U), b, N);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, ht = {}, pt = j.ReactDebugCurrentFrame;
    function Ce(h) {
      if (h) {
        var b = h._owner, N = $e(h.type, h._source, b ? b.type : null);
        pt.setExtraStackFrame(N);
      } else
        pt.setExtraStackFrame(null);
    }
    function bs(h, b, N, O, U) {
      {
        var V = Function.call.bind(he);
        for (var F in h)
          if (V(h, F)) {
            var I = void 0;
            try {
              if (typeof h[F] != "function") {
                var G = Error((O || "React class") + ": " + N + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              I = h[F](b, F, O, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (H) {
              I = H;
            }
            I && !(I instanceof Error) && (Ce(U), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", N, F, typeof I), Ce(null)), I instanceof Error && !(I.message in ht) && (ht[I.message] = !0, Ce(U), v("Failed %s type: %s", N, I.message), Ce(null));
          }
      }
    }
    var vs = Array.isArray;
    function Ue(h) {
      return vs(h);
    }
    function ws(h) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, N = b && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return N;
      }
    }
    function js(h) {
      try {
        return mt(h), !1;
      } catch {
        return !0;
      }
    }
    function mt(h) {
      return "" + h;
    }
    function gt(h) {
      if (js(h))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ws(h)), mt(h);
    }
    var pe = j.ReactCurrentOwner, Ns = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _t, xt, Ve;
    Ve = {};
    function $s(h) {
      if (he.call(h, "ref")) {
        var b = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Cs(h) {
      if (he.call(h, "key")) {
        var b = Object.getOwnPropertyDescriptor(h, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function Ss(h, b) {
      if (typeof h.ref == "string" && pe.current && b && pe.current.stateNode !== b) {
        var N = $(pe.current.type);
        Ve[N] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(pe.current.type), h.ref), Ve[N] = !0);
      }
    }
    function Es(h, b) {
      {
        var N = function() {
          _t || (_t = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
    }
    function ks(h, b) {
      {
        var N = function() {
          xt || (xt = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
    }
    var Rs = function(h, b, N, O, U, V, F) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: h,
        key: b,
        ref: N,
        props: F,
        // Record the component responsible for creating this element.
        _owner: V
      };
      return I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(I, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.defineProperty(I, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function Os(h, b, N, O, U) {
      {
        var V, F = {}, I = null, G = null;
        N !== void 0 && (gt(N), I = "" + N), Cs(b) && (gt(b.key), I = "" + b.key), $s(b) && (G = b.ref, Ss(b, U));
        for (V in b)
          he.call(b, V) && !Ns.hasOwnProperty(V) && (F[V] = b[V]);
        if (h && h.defaultProps) {
          var H = h.defaultProps;
          for (V in H)
            F[V] === void 0 && (F[V] = H[V]);
        }
        if (I || G) {
          var K = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          I && Es(F, K), G && ks(F, K);
        }
        return Rs(h, I, G, U, O, pe.current, F);
      }
    }
    var Be = j.ReactCurrentOwner, yt = j.ReactDebugCurrentFrame;
    function ie(h) {
      if (h) {
        var b = h._owner, N = $e(h.type, h._source, b ? b.type : null);
        yt.setExtraStackFrame(N);
      } else
        yt.setExtraStackFrame(null);
    }
    var qe;
    qe = !1;
    function We(h) {
      return typeof h == "object" && h !== null && h.$$typeof === e;
    }
    function bt() {
      {
        if (Be.current) {
          var h = $(Be.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function Ps(h) {
      {
        if (h !== void 0) {
          var b = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + b + ":" + N + ".";
        }
        return "";
      }
    }
    var vt = {};
    function As(h) {
      {
        var b = bt();
        if (!b) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (b = `

Check the top-level render call using <` + N + ">.");
        }
        return b;
      }
    }
    function wt(h, b) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var N = As(b);
        if (vt[N])
          return;
        vt[N] = !0;
        var O = "";
        h && h._owner && h._owner !== Be.current && (O = " It was passed a child from " + $(h._owner.type) + "."), ie(h), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, O), ie(null);
      }
    }
    function jt(h, b) {
      {
        if (typeof h != "object")
          return;
        if (Ue(h))
          for (var N = 0; N < h.length; N++) {
            var O = h[N];
            We(O) && wt(O, b);
          }
        else if (We(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var U = y(h);
          if (typeof U == "function" && U !== h.entries)
            for (var V = U.call(h), F; !(F = V.next()).done; )
              We(F.value) && wt(F.value, b);
        }
      }
    }
    function Ts(h) {
      {
        var b = h.type;
        if (b == null || typeof b == "string")
          return;
        var N;
        if (typeof b == "function")
          N = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === p))
          N = b.propTypes;
        else
          return;
        if (N) {
          var O = $(b);
          bs(N, h.props, "prop", O, h);
        } else if (b.PropTypes !== void 0 && !qe) {
          qe = !0;
          var U = $(b);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ls(h) {
      {
        for (var b = Object.keys(h.props), N = 0; N < b.length; N++) {
          var O = b[N];
          if (O !== "children" && O !== "key") {
            ie(h), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", O), ie(null);
            break;
          }
        }
        h.ref !== null && (ie(h), v("Invalid attribute `ref` supplied to `React.Fragment`."), ie(null));
      }
    }
    var Nt = {};
    function $t(h, b, N, O, U, V) {
      {
        var F = z(h);
        if (!F) {
          var I = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = Ps(U);
          G ? I += G : I += bt();
          var H;
          h === null ? H = "null" : Ue(h) ? H = "array" : h !== void 0 && h.$$typeof === e ? (H = "<" + ($(h.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : H = typeof h, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", H, I);
        }
        var K = Os(h, b, N, U, V);
        if (K == null)
          return K;
        if (F) {
          var ee = b.children;
          if (ee !== void 0)
            if (O)
              if (Ue(ee)) {
                for (var oe = 0; oe < ee.length; oe++)
                  jt(ee[oe], h);
                Object.freeze && Object.freeze(ee);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jt(ee, h);
        }
        if (he.call(b, "key")) {
          var ne = $(h), X = Object.keys(b).filter(function(Us) {
            return Us !== "key";
          }), He = X.length > 0 ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Nt[ne + He]) {
            var Ds = X.length > 0 ? "{" + X.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, He, ne, Ds, ne), Nt[ne + He] = !0;
          }
        }
        return h === s ? Ls(K) : Ts(K), K;
      }
    }
    function Ms(h, b, N) {
      return $t(h, b, N, !0);
    }
    function Is(h, b, N) {
      return $t(h, b, N, !1);
    }
    var Fs = Is, zs = Ms;
    ge.Fragment = s, ge.jsx = Fs, ge.jsxs = zs;
  }()), ge;
}
process.env.NODE_ENV === "production" ? Qe.exports = Bs() : Qe.exports = qs();
var r = Qe.exports;
const Kt = T.createContext(null);
function Ws(n, e) {
  if (!n.options || !e)
    return 0;
  let t = 0;
  return Object.entries(n.options).forEach(([s, i]) => {
    if (i.type === "multi" && e[s] && e[s].forEach((u) => {
      let f;
      typeof u == "number" ? f = i.choices[u] : f = i.choices.find(
        (a) => (typeof a == "string" ? a : a.name) === u
      ), f && typeof f == "object" && f.price && (t += f.price);
    }), i.type === "select" && e[s] !== void 0) {
      let o;
      typeof e[s] == "number" ? o = i.choices[e[s]] : o = i.choices.find(
        (u) => (typeof u == "string" ? u : u.name) === e[s]
      ), o && typeof o == "object" && o.price && (t += o.price);
    }
  }), t;
}
const Hs = (() => {
  try {
    const n = localStorage.getItem("qr_cart");
    return n ? JSON.parse(n) : { items: [], customer: { name: "", type: "pickup", timeOrTable: "" } };
  } catch {
    return { items: [], customer: { name: "", type: "pickup", timeOrTable: "" } };
  }
})();
function Ks(n, e) {
  switch (e.type) {
    case "ADD": {
      const { item: t, quantity: s, options: i } = e.payload, o = JSON.stringify({ id: t.id, options: i }), u = n.items.find((l) => l.key === o), f = Ws(t, i), a = t.price + f;
      let c;
      return u ? c = n.items.map((l) => l.key === o ? {
        ...l,
        quantity: l.quantity + s,
        totalPrice: a,
        extraCharges: f
      } : l) : c = [...n.items, {
        key: o,
        id: t.id,
        options: i,
        quantity: s,
        totalPrice: a,
        basePrice: t.price,
        extraCharges: f
      }], { ...n, items: c };
    }
    case "REMOVE":
      return { ...n, items: n.items.filter((t) => t.key !== e.key) };
    case "INC":
      return { ...n, items: n.items.map((t) => t.key === e.key ? {
        ...t,
        quantity: t.quantity + 1,
        totalPrice: (t.basePrice || t.price) + (t.extraCharges || 0)
      } : t) };
    case "DEC":
      return { ...n, items: n.items.map((t) => t.key === e.key ? {
        ...t,
        quantity: Math.max(1, t.quantity - 1),
        totalPrice: (t.basePrice || t.price) + (t.extraCharges || 0)
      } : t) };
    case "CLEAR":
      return { ...n, items: [] };
    case "SET_CUSTOMER":
      return { ...n, customer: { ...n.customer, ...e.payload } };
    default:
      return n;
  }
}
function Kf({ children: n }) {
  const [e, t] = T.useReducer(Ks, Hs);
  T.useEffect(() => {
    localStorage.setItem("qr_cart", JSON.stringify(e));
  }, [e]);
  const s = T.useMemo(() => ({ state: e, dispatch: t }), [e]);
  return /* @__PURE__ */ r.jsx(Kt.Provider, { value: s, children: n });
}
function nt() {
  return T.useContext(Kt);
}
function Et(n) {
  return n.reduce((e, t) => e + (t.totalPrice || t.price) * t.quantity, 0);
}
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Yt = (...n) => n.filter((e, t, s) => !!e && e.trim() !== "" && s.indexOf(e) === t).join(" ").trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Js = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = Bt(
  ({
    color: n = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: s,
    className: i = "",
    children: o,
    iconNode: u,
    ...f
  }, a) => Je(
    "svg",
    {
      ref: a,
      ...Js,
      width: e,
      height: e,
      stroke: n,
      strokeWidth: s ? Number(t) * 24 / Number(e) : t,
      className: Yt("lucide", i),
      ...f
    },
    [
      ...u.map(([c, l]) => Je(c, l)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q = (n, e) => {
  const t = Bt(
    ({ className: s, ...i }, o) => Je(Qs, {
      ref: o,
      iconNode: e,
      className: Yt(`lucide-${Ys(n)}`, s),
      ...i
    })
  );
  return t.displayName = `${n}`, t;
};
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = Q("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = Q("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = Q("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = Q("CirclePlus", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = Q("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = Q("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const en = Q("Instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = Q("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = Q("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tn = Q("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sn = Q("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = Q("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nn = Q("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rn = Q("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const an = Q("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const on = Q("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = Q("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Me = Q("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Yf({ onClick: n }) {
  const { state: e } = nt(), t = e.items.reduce((s, i) => s + i.quantity, 0);
  return /* @__PURE__ */ r.jsxs("button", { onClick: n, className: "relative tab", children: [
    /* @__PURE__ */ r.jsx(rn, { size: 18 }),
    t > 0 && /* @__PURE__ */ r.jsx("span", { className: "absolute -top-2 -end-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5", children: t })
  ] });
}
const cn = (n, e, t, s) => {
  var o, u, f, a;
  const i = [t, {
    code: e,
    ...s || {}
  }];
  if ((u = (o = n == null ? void 0 : n.services) == null ? void 0 : o.logger) != null && u.forward)
    return n.services.logger.forward(i, "warn", "react-i18next::", !0);
  re(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), (a = (f = n == null ? void 0 : n.services) == null ? void 0 : f.logger) != null && a.warn ? n.services.logger.warn(...i) : console != null && console.warn && console.warn(...i);
}, kt = {}, Xe = (n, e, t, s) => {
  re(t) && kt[t] || (re(t) && (kt[t] = /* @__PURE__ */ new Date()), cn(n, e, t, s));
}, Qt = (n, e) => () => {
  if (n.isInitialized)
    e();
  else {
    const t = () => {
      setTimeout(() => {
        n.off("initialized", t);
      }, 0), e();
    };
    n.on("initialized", t);
  }
}, Ze = (n, e, t) => {
  n.loadNamespaces(e, Qt(n, t));
}, Rt = (n, e, t, s) => {
  if (re(t) && (t = [t]), n.options.preload && n.options.preload.indexOf(e) > -1)
    return Ze(n, t, s);
  t.forEach((i) => {
    n.options.ns.indexOf(i) < 0 && n.options.ns.push(i);
  }), n.loadLanguages(e, Qt(n, s));
}, ln = (n, e, t = {}) => !e.languages || !e.languages.length ? (Xe(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(n, {
  lng: t.lng,
  precheck: (s, i) => {
    var o;
    if (((o = t.bindI18n) == null ? void 0 : o.indexOf("languageChanging")) > -1 && s.services.backendConnector.backend && s.isLanguageChangingTo && !i(s.isLanguageChangingTo, n))
      return !1;
  }
}), re = (n) => typeof n == "string", un = (n) => typeof n == "object" && n !== null, dn = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, fn = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, hn = (n) => fn[n], pn = (n) => n.replace(dn, hn);
let et = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: pn
};
const mn = (n = {}) => {
  et = {
    ...et,
    ...n
  };
}, gn = () => et;
let Gt;
const _n = (n) => {
  Gt = n;
}, xn = () => Gt, yn = {
  type: "3rdParty",
  init(n) {
    mn(n.options.react), _n(n);
  }
}, bn = qt();
class vn {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((t) => {
      this.usedNamespaces[t] || (this.usedNamespaces[t] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const wn = (n, e) => {
  const t = Ee();
  return be(() => {
    t.current = e ? t.current : n;
  }, [n, e]), t.current;
}, Xt = (n, e, t, s) => n.getFixedT(e, t, s), jn = (n, e, t, s) => Vs(Xt(n, e, t, s), [n, e, t, s]), Z = (n, e = {}) => {
  var w, C, S, E;
  const {
    i18n: t
  } = e, {
    i18n: s,
    defaultNS: i
  } = Wt(bn) || {}, o = t || s || xn();
  if (o && !o.reportNamespaces && (o.reportNamespaces = new vn()), !o) {
    Xe(o, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const L = (z, R) => re(R) ? R : un(R) && re(R.defaultValue) ? R.defaultValue : Array.isArray(z) ? z[z.length - 1] : z, A = [L, {}, !1];
    return A.t = L, A.i18n = {}, A.ready = !1, A;
  }
  (w = o.options.react) != null && w.wait && Xe(o, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const u = {
    ...gn(),
    ...o.options.react,
    ...e
  }, {
    useSuspense: f,
    keyPrefix: a
  } = u;
  let c = n || i || ((C = o.options) == null ? void 0 : C.defaultNS);
  c = re(c) ? [c] : c || ["translation"], (E = (S = o.reportNamespaces).addUsedNamespaces) == null || E.call(S, c);
  const l = (o.isInitialized || o.initializedStoreOnce) && c.every((L) => ln(L, o, u)), p = jn(o, e.lng || null, u.nsMode === "fallback" ? c : c[0], a), d = () => p, g = () => Xt(o, e.lng || null, u.nsMode === "fallback" ? c : c[0], a), [m, x] = st(d);
  let y = c.join();
  e.lng && (y = `${e.lng}${y}`);
  const j = wn(y), v = Ee(!0);
  be(() => {
    const {
      bindI18n: L,
      bindI18nStore: A
    } = u;
    v.current = !0, !l && !f && (e.lng ? Rt(o, e.lng, c, () => {
      v.current && x(g);
    }) : Ze(o, c, () => {
      v.current && x(g);
    })), l && j && j !== y && v.current && x(g);
    const z = () => {
      v.current && x(g);
    };
    return L && (o == null || o.on(L, z)), A && (o == null || o.store.on(A, z)), () => {
      v.current = !1, o && (L == null || L.split(" ").forEach((R) => o.off(R, z))), A && o && A.split(" ").forEach((R) => o.store.off(R, z));
    };
  }, [o, y]), be(() => {
    v.current && l && x(d);
  }, [o, a, l]);
  const _ = [m, o, l];
  if (_.t = m, _.i18n = o, _.ready = l, l || !l && !f)
    return _;
  throw new Promise((L) => {
    e.lng ? Rt(o, e.lng, c, () => L()) : Ze(o, c, () => L());
  });
}, Nn = "zuwade", $n = "Zuwade", Cn = "/zuwade-logo.jpg", Sn = "+972-54-750-7503", En = "+972547507503", kn = "Zuwade TA", Rn = "קסטרו שפרעם", On = {
  lat: 32.81557,
  lng: 35.152813
}, Pn = "zuwade.ta", An = {
  "Mon-Sat": "09:00-19:00",
  Sun: "Closed"
}, Tn = {
  primary: "#10b981",
  accent: "#0ea5e9",
  bg: "#0b0f14",
  card: "#121821",
  text: "#e5e7eb"
}, Ln = [
  "ar",
  "he",
  "en"
], Mn = "₪", In = {
  enabled: !1,
  areas: [
    {
      id: "inside",
      name: "Inside",
      name_ar: "داخلي",
      name_he: "פנים"
    },
    {
      id: "outside",
      name: "Outside",
      name_ar: "خارجي",
      name_he: "חוץ"
    }
  ],
  time_slots: [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00"
  ],
  max_advance_days: 7,
  whatsapp: "+972547507503"
}, P = {
  slug: Nn,
  name: $n,
  logo: Cn,
  phone: Sn,
  whatsapp: En,
  address: kn,
  waze_name: Rn,
  coords: On,
  instagram: Pn,
  hours: An,
  theme: Tn,
  languages: Ln,
  currency: Mn,
  reservation: In
}, Fn = "https://79vup8a13c.execute-api.eu-central-1.amazonaws.com", zn = async (n = {}) => {
  console.log("🛒 Tracking order submission...");
  try {
    const e = `${Fn}/api/analytics/order`, t = {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      tablyname: "Zuwade",
      orderType: n.orderType || "unknown",
      // pickup or delivery
      itemCount: n.itemCount || 0,
      totalAmount: n.totalAmount || 0,
      customerName: n.customerName || "anonymous",
      customerPhone: n.customerPhone || "not provided",
      items: n.items || [],
      // Individual items with details
      whatsappMessage: n.whatsappMessage || "not available",
      // Full WhatsApp message
      userAgent: navigator.userAgent
    };
    console.log("📤 Sending order data to:", e, t);
    const s = await fetch(e, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(t)
    });
    console.log("📥 Order tracking response:", s.status, s.statusText), s.ok ? console.log("✅ Order tracked successfully") : console.warn("Failed to track order:", s.status, s.statusText);
  } catch (e) {
    console.warn("❌ Error tracking order:", e);
  }
}, de = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function Ot(n) {
  if (!n)
    return null;
  const e = n.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!e)
    return null;
  const t = Number.parseInt(e[1], 10), s = Number.parseInt(e[2], 10);
  return Number.isNaN(t) || Number.isNaN(s) || s < 0 || s > 59 || t < 0 || t > 24 || t === 24 && s !== 0 ? null : t * 60 + s;
}
function Dn(n) {
  if (!n)
    return [];
  const e = n.replace(/\s+/g, " ").replace(/\s*[\u2013-]\s*/g, "-").trim();
  if (!e)
    return [];
  if (e.includes("-")) {
    const [s, i] = e.split("-"), o = Ke(s), u = Ke(i);
    if (o === -1 || u === -1)
      return [];
    const f = [];
    let a = o;
    for (f.push(a); a !== u && (a = (a + 1) % de.length, f.push(a), !(f.length > de.length)); )
      ;
    return Array.from(new Set(f));
  }
  const t = Ke(e);
  return t === -1 ? [] : [t];
}
function Ke(n = "") {
  const e = n.slice(0, 3).toLowerCase();
  return de.findIndex(
    (s) => s.toLowerCase() === e
  );
}
function Un(n) {
  if (!n || typeof n != "string")
    return [];
  const t = n.split(",").map((s) => s.trim()).flatMap(Dn);
  return Array.from(new Set(t));
}
function Vn(n) {
  const e = de.map(() => []);
  return Object.entries(n || {}).forEach(([t, s]) => {
    const i = Un(t);
    if (!i.length || !s || /closed/i.test(String(s)))
      return;
    String(s).split(",").map((u) => u.trim()).filter(Boolean).forEach((u) => {
      const f = u.replace(/\u2013/g, "-"), [a, c] = f.split("-").map((d) => d.trim()), l = Ot(a), p = Ot(c);
      l === null || p === null || Number.isNaN(l) || Number.isNaN(p) || i.forEach((d) => {
        if (l === p)
          e[d].push({ start: 0, end: 1440 });
        else if (l < p)
          e[d].push({ start: l, end: p });
        else if (e[d].push({ start: l, end: 1440 }), p > 0) {
          const g = (d + 1) % de.length;
          e[g].push({ start: 0, end: p });
        }
      });
    });
  }), e.map(
    (t) => t.filter(
      (s) => typeof s.start == "number" && typeof s.end == "number" && s.start < s.end
    ).sort((s, i) => s.start - i.start)
  );
}
function Bn() {
  var c, l, p;
  const n = /* @__PURE__ */ new Date(), t = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jerusalem",
    weekday: "short",
    hour12: !1,
    hour: "2-digit",
    minute: "2-digit"
  }).formatToParts(n), s = ((c = t.find((d) => d.type === "weekday")) == null ? void 0 : c.value) ?? "", i = ((l = t.find((d) => d.type === "hour")) == null ? void 0 : l.value) ?? "0", o = ((p = t.find((d) => d.type === "minute")) == null ? void 0 : p.value) ?? "0", u = de.findIndex((d) => d === s), f = Number.parseInt(i, 10), a = Number.parseInt(o, 10);
  return {
    dayIndex: u,
    minutes: f * 60 + a
  };
}
function Zt(n) {
  if (!n || typeof n != "object")
    return !0;
  const { dayIndex: e, minutes: t } = Bn();
  if (e === -1 || Number.isNaN(t))
    return !0;
  const i = Vn(n)[e];
  return !i || i.length === 0 ? !1 : i.some(
    (o) => t >= o.start && t < o.end
  );
}
function xe(n, e, t) {
  return ((t == null ? void 0 : t[e]) || (t == null ? void 0 : t.en) || { items: [] }).items.find((i) => i.id === n);
}
function qn(n, e, t, s) {
  var g, m, x, y, j, v;
  const i = (_, w) => {
    var S;
    const C = (S = w == null ? void 0 : w.options) == null ? void 0 : S[_];
    return (C == null ? void 0 : C.label) || {
      size: e("opt_size"),
      extras: e("opt_extras"),
      notes: e("opt_notes"),
      doneness: e("opt_doneness"),
      sugar: e("opt_sugar"),
      pasta_type: e("opt_pasta_type"),
      bread: e("opt_bread"),
      wrap: e("opt_wrap")
    }[_] || _;
  }, o = t.language === "ar" || t.language === "he", u = n.items.map((_) => {
    const w = xe(_.id, t.language, s);
    return {
      ..._,
      name: (w == null ? void 0 : w.name) || `Item ${_.id}`,
      image: (w == null ? void 0 : w.image) || "/placeholder.jpg",
      desc: (w == null ? void 0 : w.desc) || ""
    };
  }), f = (_) => _, a = [];
  if (o) {
    const _ = e("wa_order_header").replace(/[🍽️📋👤🙏]/g, "").trim();
    a.push(f(`${_} 🍽️`)), a.push("");
    const w = e("wa_order_items").replace(/[🍽️📋👤🙏]/g, "").trim();
    a.push(f(`${w} 📋`)), u.forEach((E, L) => {
      var z;
      const A = [];
      if (E.options) {
        const R = xe(E.id, t.language, s);
        for (const [M, $] of Object.entries(E.options)) {
          if ($ == null || $ === "" || Array.isArray($) && $.length === 0)
            continue;
          const D = i(M, R), B = (z = R == null ? void 0 : R.options) == null ? void 0 : z[M];
          let J = $;
          if (B && B.choices)
            if (Array.isArray($))
              J = $.map((W) => {
                const k = B.choices[W];
                return typeof k == "string" ? k : (k == null ? void 0 : k.name) || `Choice ${W}`;
              }).join(", ");
            else if (typeof $ == "number" && B.choices[$]) {
              const W = B.choices[$];
              J = typeof W == "string" ? W : (W == null ? void 0 : W.name) || `Choice ${$}`;
            } else {
              const W = B.choices.find(
                (k) => (typeof k == "string" ? k : k.name) === $
              );
              J = typeof W == "string" ? W : (W == null ? void 0 : W.name) || $;
            }
          A.push(`${D}: ${J}`);
        }
      }
      a.push(f(`${L + 1}. ${E.name}`)), a.push(f(`   ${e("wa_quantity")}: ${E.quantity}`)), A.length > 0 && A.forEach((R) => {
        a.push(f(`   ${R}`));
      }), a.push("");
    });
    const C = e("wa_customer_info").replace(/[🍽️📋👤🙏]/g, "").trim();
    if (a.push(f(`${C} 👤`)), (g = n.customer) != null && g.name && (a.push(`${e("wa_customer_name")}: ${n.customer.name}`), a.push("")), (m = n.customer) != null && m.phone && a.push(`${e("wa_customer_phone")}: ${n.customer.phone}`), (x = n.customer) != null && x.type) {
      const E = n.customer.type === "delivery" ? e("delivery") : e("pickup"), L = n.customer.type === "delivery" ? "🚚" : "🏪";
      a.push(`${e("wa_order_type")}:`), a.push(`• ${E} ${L}`), a.push("");
    }
    a.push("");
    const S = e("wa_confirm_order").replace(/[🍽️📋👤🙏]/g, "").trim();
    return a.push(f(`${S} 🙏`)), a.join(`
`);
  }
  const c = e("wa_order_header").replace(/[🍽️📋👤🙏]/g, "").trim();
  a.push(`🍽️ ${c}`), a.push("");
  const l = e("wa_order_items").replace(/[🍽️📋👤🙏]/g, "").trim();
  a.push(`📋 ${l}`), u.forEach((_, w) => {
    var S;
    const C = [];
    if (_.options) {
      const E = xe(_.id, t.language, s);
      for (const [L, A] of Object.entries(_.options)) {
        if (A == null || A === "" || Array.isArray(A) && A.length === 0)
          continue;
        const z = i(L, E), R = (S = E == null ? void 0 : E.options) == null ? void 0 : S[L];
        let M = A;
        if (R && R.choices)
          if (Array.isArray(A))
            M = A.map(($) => {
              const D = R.choices[$];
              return typeof D == "string" ? D : (D == null ? void 0 : D.name) || `Choice ${$}`;
            }).join(", ");
          else if (typeof A == "number" && R.choices[A]) {
            const $ = R.choices[A];
            M = typeof $ == "string" ? $ : ($ == null ? void 0 : $.name) || `Choice ${A}`;
          } else {
            const $ = R.choices.find(
              (D) => (typeof D == "string" ? D : D.name) === A
            );
            M = typeof $ == "string" ? $ : ($ == null ? void 0 : $.name) || A;
          }
        C.push(`${z}: ${M}`);
      }
    }
    a.push(`${w + 1}. ${_.name}`), a.push(`   ${e("wa_quantity")}: ${_.quantity}`), C.length > 0 && C.forEach((E) => {
      a.push(`   ${E}`);
    }), a.push("");
  });
  const p = e("wa_customer_info").replace(/[🍽️📋👤🙏]/g, "").trim();
  if (o ? a.push(`${p} 👤`) : a.push(`👤 ${p}`), (y = n.customer) != null && y.name && (a.push(`${e("wa_customer_name")}: ${n.customer.name}`), a.push("")), (j = n.customer) != null && j.phone && a.push(`${e("wa_customer_phone")}: ${n.customer.phone}`), (v = n.customer) != null && v.type) {
    const _ = n.customer.type === "delivery" ? e("delivery") : e("pickup"), w = n.customer.type === "delivery" ? "🚚" : "🏪";
    a.push(`${e("wa_order_type")}:`), a.push(`• ${_} ${w}`), a.push("");
  }
  a.push("");
  const d = e("wa_confirm_order").replace(/[🍽️📋👤🙏]/g, "").trim();
  return o ? a.push(`${d} 🙏`) : a.push(`${d} 🙏`), a.join(`
`);
}
function Jf({ open: n, onClose: e, menuData: t }) {
  const { state: s, dispatch: i } = nt(), { t: o, i18n: u } = Z(), f = Et(s.items), a = qn(s, o, u, t), [c, l] = T.useState(!1), [p, d] = T.useState(!1), [g, m] = T.useState(!1);
  T.useEffect(() => {
    n || (l(!1), m(!1));
  }, [n]);
  const x = s.items.map((S) => {
    const E = xe(S.id, u.language, t);
    return {
      ...S,
      name: (E == null ? void 0 : E.name) || `Item ${S.id}`,
      image: (E == null ? void 0 : E.image) || "/placeholder.jpg",
      desc: (E == null ? void 0 : E.desc) || ""
    };
  }), y = document.dir === "rtl", j = y ? "left-0" : "right-0", v = y ? "border-r" : "border-l", _ = y ? "-translate-x-full" : "translate-x-full", w = () => {
    if (P.hours && !Zt(P.hours)) {
      m(!0);
      return;
    }
    if (!s.customer.name || s.customer.name.trim() === "") {
      d(!0);
      return;
    }
    d(!1), l(!0);
  }, C = async () => {
    var E, L, A;
    try {
      const z = s.items || [], R = Et(z), M = z.reduce(($, D) => $ + D.quantity, 0);
      zn({
        orderType: ((E = s.customer) == null ? void 0 : E.type) || "unknown",
        itemCount: M,
        totalAmount: R,
        customerName: ((L = s.customer) == null ? void 0 : L.name) || "anonymous",
        customerPhone: ((A = s.customer) == null ? void 0 : A.phone) || "not provided",
        items: z.map(($) => ({
          id: $.id,
          name: $.name || `Item ${$.id}`,
          quantity: $.quantity,
          price: $.price || 0,
          totalPrice: $.totalPrice || $.price || 0,
          options: $.options || {}
        })),
        whatsappMessage: a
        // This contains the full formatted WhatsApp message
      }).catch(($) => {
        console.warn("Failed to track order, but continuing with WhatsApp:", $);
      });
    } catch (z) {
      console.warn("Error in order tracking, but continuing with WhatsApp:", z);
    }
    const S = `https://wa.me/${P.whatsapp}?text=${encodeURIComponent(a)}`;
    window.open(S, "_blank"), l(!1);
  };
  return Ht(
    /* @__PURE__ */ r.jsxs("div", { className: `fixed inset-0 z-[10000] ${n ? "" : "pointer-events-none"}`, children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: `absolute inset-0 z-0 bg-black/60 transition-opacity ${n ? "opacity-100" : "opacity-0"}`,
          onClick: e
        }
      ),
      /* @__PURE__ */ r.jsxs(
        "aside",
        {
          className: `absolute top-0 ${j} z-10
        h-full w-full sm:w-[430px]
        bg-[var(--card)] shadow-2xl overflow-hidden
        flex flex-col
        ${v} border-white/10
        transform transition-transform ${n ? "translate-x-0" : _}`,
          children: [
            /* @__PURE__ */ r.jsxs("div", { className: "p-4 flex items-center justify-between border-b border-white/10", children: [
              /* @__PURE__ */ r.jsx("div", { className: "text-lg font-semibold", children: o("cart") }),
              /* @__PURE__ */ r.jsx("button", { className: "tab", onClick: e, children: /* @__PURE__ */ r.jsx(Me, {}) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "flex-1 p-4 space-y-3 overflow-auto", children: x.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: "h-full flex items-center justify-center text-white/60 text-lg font-medium", children: o("empty_cart") }) : x.map((S) => /* @__PURE__ */ r.jsx("div", { className: "card p-3", children: /* @__PURE__ */ r.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ r.jsx(
                "img",
                {
                  src: S.image,
                  alt: S.name,
                  className: "w-16 h-16 object-cover rounded-lg"
                }
              ),
              /* @__PURE__ */ r.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ r.jsx("div", { className: "font-semibold", children: S.name }),
                  /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      className: "text-red-400",
                      onClick: () => i({ type: "REMOVE", key: S.key }),
                      children: /* @__PURE__ */ r.jsx(an, { size: 16 })
                    }
                  )
                ] }),
                (() => {
                  const E = xe(S.id, u.language, t), L = (E == null ? void 0 : E.options) || {}, A = S.options || {}, z = {};
                  return Object.entries(A).forEach(([R, M]) => {
                    M !== null && M !== "" && (!Array.isArray(M) || M.length > 0) && (z[R] = M);
                  }), Object.entries(L).forEach(([R, M]) => {
                    !z[R] && M.choices && M.choices.length > 0 && M.type === "select" && (z[R] = 0);
                  }), /* @__PURE__ */ r.jsx("div", { className: "text-xs text-white/60", children: Object.entries(z).map(([R, M]) => {
                    var W;
                    if (!M && M !== 0)
                      return null;
                    const $ = (W = E == null ? void 0 : E.options) == null ? void 0 : W[R], D = ($ == null ? void 0 : $.label) || {
                      size: o("opt_size"),
                      extras: o("opt_extras"),
                      notes: o("opt_notes"),
                      doneness: o("opt_doneness"),
                      sugar: o("opt_sugar"),
                      pasta_type: o("opt_pasta_type"),
                      bread: o("opt_bread"),
                      wrap: o("opt_wrap")
                    }[R] || R;
                    let B = M, J = 0;
                    if ($ && $.choices)
                      if (Array.isArray(M))
                        B = M.map((k) => {
                          const q = $.choices[k];
                          return q && typeof q == "object" && q.price && (J += q.price), typeof q == "string" ? q : (q == null ? void 0 : q.name) || `Choice ${k}`;
                        }).join(", ");
                      else if (typeof M == "number" && $.choices[M]) {
                        const k = $.choices[M];
                        k && typeof k == "object" && k.price && (J = k.price), B = typeof k == "string" ? k : (k == null ? void 0 : k.name) || `Choice ${M}`;
                      } else {
                        const k = $.choices.find(
                          (q) => (typeof q == "string" ? q : q.name) === M
                        );
                        k && typeof k == "object" && k.price && (J = k.price), B = typeof k == "string" ? k : (k == null ? void 0 : k.name) || M;
                      }
                    return /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsxs("span", { className: "text-white/70", children: [
                        D,
                        ":"
                      ] }),
                      " ",
                      B,
                      J > 0 && /* @__PURE__ */ r.jsxs("span", { className: "text-green-400 ml-1", children: [
                        "+",
                        J,
                        P.currency
                      ] })
                    ] }, R);
                  }) });
                })(),
                /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 pt-2", children: [
                  /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      className: "tab",
                      onClick: () => i({ type: "DEC", key: S.key }),
                      children: /* @__PURE__ */ r.jsx(sn, { size: 14 })
                    }
                  ),
                  /* @__PURE__ */ r.jsx("div", { className: "min-w-[2rem] text-center", children: S.quantity }),
                  /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      className: "tab",
                      onClick: () => i({ type: "INC", key: S.key }),
                      children: /* @__PURE__ */ r.jsx(nn, { size: 14 })
                    }
                  ),
                  /* @__PURE__ */ r.jsx("div", { className: "flex-1" }),
                  /* @__PURE__ */ r.jsxs("div", { className: "font-semibold", children: [
                    (S.totalPrice || S.price) * S.quantity,
                    (S.totalPrice || S.price) * S.quantity > 0 && P.currency
                  ] })
                ] })
              ] })
            ] }) }, S.key)) }),
            x.length > 0 && /* @__PURE__ */ r.jsxs("div", { className: "p-4 border-t border-white/10 space-y-3", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ r.jsxs("label", { className: "text-sm", children: [
                  /* @__PURE__ */ r.jsxs("div", { className: "text-white/70", children: [
                    o("customer_name"),
                    " ",
                    /* @__PURE__ */ r.jsx("span", { className: "text-red-400", children: "*" })
                  ] }),
                  /* @__PURE__ */ r.jsx(
                    "input",
                    {
                      value: s.customer.name,
                      onChange: (S) => {
                        i({ type: "SET_CUSTOMER", payload: { name: S.target.value } }), p && S.target.value.trim() && d(!1);
                      },
                      className: `w-full bg-[var(--card)] border rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 transition-all duration-200 ${p || !s.customer.name || s.customer.name.trim() === "" ? "border-red-400/50 focus:border-red-400" : "border-white/10 focus:border-green-400/50"}`,
                      placeholder: o("customer_name")
                    }
                  ),
                  p && /* @__PURE__ */ r.jsx("div", { className: "text-red-400 text-xs mt-1", children: o("name_required") })
                ] }),
                /* @__PURE__ */ r.jsxs("label", { className: "text-sm", children: [
                  /* @__PURE__ */ r.jsx("div", { className: "text-white/70", children: o("order_type") }),
                  /* @__PURE__ */ r.jsxs(
                    "select",
                    {
                      value: s.customer.type,
                      onChange: (S) => i({ type: "SET_CUSTOMER", payload: { type: S.target.value } }),
                      children: [
                        /* @__PURE__ */ r.jsx("option", { value: "pickup", children: o("pickup") }),
                        /* @__PURE__ */ r.jsx("option", { value: "delivery", children: o("delivery") })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ r.jsx("button", { className: "btn-outline", onClick: () => i({ type: "CLEAR" }), children: o("clear_cart") }),
                /* @__PURE__ */ r.jsxs("div", { className: "text-lg font-bold", children: [
                  o("total"),
                  ": ",
                  f,
                  f > 0 && P.currency
                ] })
              ] }),
              s.customer.type === "delivery" && /* @__PURE__ */ r.jsx("div", { className: "bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 text-sm", children: /* @__PURE__ */ r.jsxs("div", { className: "font-medium text-orange-400 mb-1", children: [
                "🚚 ",
                o("delivery_notice")
              ] }) }),
              /* @__PURE__ */ r.jsx("button", { className: "btn w-full", onClick: w, children: o("checkout") })
            ] })
          ]
        }
      ),
      g && /* @__PURE__ */ r.jsx("div", { className: "absolute inset-0 z-30 flex items-center justify-center p-4", children: /* @__PURE__ */ r.jsx("div", { className: "bg-[var(--card)] border border-red-500/30 rounded-xl p-6 max-w-md w-full shadow-2xl", children: /* @__PURE__ */ r.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-semibold", children: o("important_notice_cart") }),
        /* @__PURE__ */ r.jsx("p", { className: "text-sm text-white/80", children: o("restaurant_closed_message") }),
        /* @__PURE__ */ r.jsx("button", { className: "btn w-full", onClick: () => m(!1), children: o("close") })
      ] }) }) }),
      c && /* @__PURE__ */ r.jsx("div", { className: "absolute inset-0 z-20 flex items-center justify-center p-4", children: /* @__PURE__ */ r.jsx("div", { className: "bg-[var(--card)] border border-white/10 rounded-xl p-6 max-w-md w-full shadow-2xl", children: /* @__PURE__ */ r.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ r.jsx("div", { className: "w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ r.jsx(it, { size: 32, className: "text-blue-400" }) }),
        /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-semibold mb-3", children: o("important_notice_cart") }),
        /* @__PURE__ */ r.jsxs("div", { className: "text-sm text-white/80 space-y-2 mb-6", children: [
          /* @__PURE__ */ r.jsxs("p", { children: [
            "• ",
            o("order_wait")
          ] }),
          /* @__PURE__ */ r.jsxs("p", { children: [
            "• ",
            o("order_no_response")
          ] })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ r.jsx("button", { className: "btn-outline flex-1", onClick: () => l(!1), children: o("cancel") }),
          /* @__PURE__ */ r.jsx("button", { className: "btn flex-1", onClick: C, children: o("continue_to_whatsapp") })
        ] })
      ] }) }) })
    ] }),
    document.body
  );
}
function Wn({ categories: n, current: e, onChange: t }) {
  const { t: s } = Z();
  return /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ r.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" }),
    /* @__PURE__ */ r.jsx("div", { className: "absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex gap-2 overflow-x-auto py-3 px-2 no-scrollbar scroll-smooth", children: [
      /* @__PURE__ */ r.jsx(
        "button",
        {
          className: `tab ${e === "all" ? "bg-green-500/20 border-green-400/50 text-green-400 ring-2 ring-green-400/30" : "hover:bg-white/5"} transition-all duration-200`,
          onClick: () => t("all"),
          children: s("all")
        }
      ),
      n.map((i) => /* @__PURE__ */ r.jsxs(
        "button",
        {
          className: `tab ${e === i.id ? "bg-green-500/20 border-green-400/50 text-green-400 ring-2 ring-green-400/30" : "hover:bg-white/5"} transition-all duration-200`,
          onClick: () => t(i.id),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "text-lg", children: i.emoji }),
            /* @__PURE__ */ r.jsx("span", { children: i.title })
          ]
        },
        i.id
      ))
    ] })
  ] });
}
function Hn({ open: n, src: e, alt: t, onClose: s }) {
  if (T.useEffect(() => {
    if (!n)
      return;
    const o = (u) => u.key === "Escape" && s();
    return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, [n, s]), !n)
    return null;
  const i = document.dir === "rtl" ? "left-3" : "right-3";
  return Ht(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "fixed inset-0 z-[11000] bg-black/80 p-4 flex items-center justify-center cursor-zoom-out",
        onClick: s,
        children: /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "relative max-w-5xl w-full",
            onClick: (o) => o.stopPropagation(),
            children: [
              /* @__PURE__ */ r.jsx(
                "img",
                {
                  src: e,
                  alt: t || "",
                  className: "w-full h-auto rounded-2xl shadow-2xl select-none",
                  draggable: "false"
                }
              ),
              /* @__PURE__ */ r.jsx(
                "button",
                {
                  "aria-label": "Close",
                  className: `absolute top-3 ${i} bg-black/60 hover:bg-black/80 text-white rounded-full p-2 cursor-pointer`,
                  onClick: s,
                  children: /* @__PURE__ */ r.jsx(Me, { size: 18 })
                }
              )
            ]
          }
        )
      }
    ),
    document.body
  );
}
function Pt({ item: n, currency: e, onAdd: t, onPreview: s }) {
  var o;
  const { t: i } = Z();
  return /* @__PURE__ */ r.jsxs("div", { className: "card w-full md:w-full text-left overflow-hidden flex flex-col min-w-[280px] md:min-w-0 min-h-[320px]", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "aspect-[16/10] w-full overflow-hidden bg-black/30 relative group cursor-zoom-in",
        role: "button",
        tabIndex: 0,
        onClick: () => s == null ? void 0 : s(n),
        onKeyDown: (u) => {
          (u.key === "Enter" || u.key === " ") && (u.preventDefault(), s == null || s(n));
        },
        "aria-label": n.name,
        title: n.name,
        children: [
          /* @__PURE__ */ r.jsx(
            "img",
            {
              src: n.image,
              alt: n.name,
              className: "w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
            }
          ),
          /* @__PURE__ */ r.jsx("div", { className: "absolute bottom-1 right-1 bg-black/40 text-white/80 text-[10px] px-1 py-0.5 rounded", children: i("for_illustration_only") })
        ]
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "p-4 flex flex-col gap-2 flex-1", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ r.jsx("div", { className: "text-lg font-semibold", children: n.name }),
        /* @__PURE__ */ r.jsxs("div", { className: "text-white/90 font-semibold", children: [
          n.price,
          n.price > 0 && e
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "text-sm text-white/70 line-clamp-2", children: n.desc }),
      ((o = n.options) == null ? void 0 : o.size) && /* @__PURE__ */ r.jsx("div", { className: "text-xs text-white/60", children: /* @__PURE__ */ r.jsx("div", { className: "flex flex-wrap gap-1", children: n.options.size.choices.map((u, f) => {
        const a = typeof u == "string" ? u : u.name, c = typeof u == "object" ? u.price : 0, l = n.price + c;
        return /* @__PURE__ */ r.jsxs("span", { className: "bg-white/10 px-2 py-1 rounded text-xs", children: [
          a,
          " ",
          l,
          l > 0 && e
        ] }, f);
      }) }) }),
      !n.noCart && /* @__PURE__ */ r.jsx("div", { className: "pt-2 mt-auto", children: /* @__PURE__ */ r.jsxs("button", { className: "btn w-full", onClick: () => t(n), children: [
        /* @__PURE__ */ r.jsx(Xs, { size: 18 }),
        " ",
        i("add_to_cart")
      ] }) })
    ] })
  ] });
}
const Kn = {
  type: "logger",
  log(n) {
    this.output("log", n);
  },
  warn(n) {
    this.output("warn", n);
  },
  error(n) {
    this.output("error", n);
  },
  output(n, e) {
    console && console[n] && console[n].apply(console, e);
  }
};
class Re {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || Kn, this.options = t, this.debug = t.debug;
  }
  log() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, s, i) {
    return i && !this.debug ? null : (typeof e[0] == "string" && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new Re(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Re(this.logger, e);
  }
}
var te = new Re();
class Ie {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((s) => {
      this.observers[s] || (this.observers[s] = /* @__PURE__ */ new Map());
      const i = this.observers[s].get(t) || 0;
      this.observers[s].set(t, i + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e) {
    for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
      s[i - 1] = arguments[i];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((u) => {
      let [f, a] = u;
      for (let c = 0; c < a; c++)
        f(...s);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((u) => {
      let [f, a] = u;
      for (let c = 0; c < a; c++)
        f.apply(f, [e, ...s]);
    });
  }
}
function _e() {
  let n, e;
  const t = new Promise((s, i) => {
    n = s, e = i;
  });
  return t.resolve = n, t.reject = e, t;
}
function At(n) {
  return n == null ? "" : "" + n;
}
function Yn(n, e, t) {
  n.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}
const Jn = /###/g;
function ye(n, e, t) {
  function s(f) {
    return f && f.indexOf("###") > -1 ? f.replace(Jn, ".") : f;
  }
  function i() {
    return !n || typeof n == "string";
  }
  const o = typeof e != "string" ? e : e.split(".");
  let u = 0;
  for (; u < o.length - 1; ) {
    if (i())
      return {};
    const f = s(o[u]);
    !n[f] && t && (n[f] = new t()), Object.prototype.hasOwnProperty.call(n, f) ? n = n[f] : n = {}, ++u;
  }
  return i() ? {} : {
    obj: n,
    k: s(o[u])
  };
}
function Tt(n, e, t) {
  const {
    obj: s,
    k: i
  } = ye(n, e, Object);
  if (s !== void 0 || e.length === 1) {
    s[i] = t;
    return;
  }
  let o = e[e.length - 1], u = e.slice(0, e.length - 1), f = ye(n, u, Object);
  for (; f.obj === void 0 && u.length; )
    o = `${u[u.length - 1]}.${o}`, u = u.slice(0, u.length - 1), f = ye(n, u, Object), f && f.obj && typeof f.obj[`${f.k}.${o}`] < "u" && (f.obj = void 0);
  f.obj[`${f.k}.${o}`] = t;
}
function Qn(n, e, t, s) {
  const {
    obj: i,
    k: o
  } = ye(n, e, Object);
  i[o] = i[o] || [], s && (i[o] = i[o].concat(t)), s || i[o].push(t);
}
function Oe(n, e) {
  const {
    obj: t,
    k: s
  } = ye(n, e);
  if (t)
    return t[s];
}
function Gn(n, e, t) {
  const s = Oe(n, t);
  return s !== void 0 ? s : Oe(e, t);
}
function es(n, e, t) {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in n ? typeof n[s] == "string" || n[s] instanceof String || typeof e[s] == "string" || e[s] instanceof String ? t && (n[s] = e[s]) : es(n[s], e[s], t) : n[s] = e[s]);
  return n;
}
function ce(n) {
  return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Xn = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function Zn(n) {
  return typeof n == "string" ? n.replace(/[&<>"'\/]/g, (e) => Xn[e]) : n;
}
class er {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const s = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, s), this.regExpQueue.push(e), s;
  }
}
const tr = [" ", ",", "?", "!", ";"], sr = new er(20);
function nr(n, e, t) {
  e = e || "", t = t || "";
  const s = tr.filter((u) => e.indexOf(u) < 0 && t.indexOf(u) < 0);
  if (s.length === 0)
    return !0;
  const i = sr.getRegExp(`(${s.map((u) => u === "?" ? "\\?" : u).join("|")})`);
  let o = !i.test(n);
  if (!o) {
    const u = n.indexOf(t);
    u > 0 && !i.test(n.substring(0, u)) && (o = !0);
  }
  return o;
}
function tt(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!n)
    return;
  if (n[e])
    return n[e];
  const s = e.split(t);
  let i = n;
  for (let o = 0; o < s.length; ) {
    if (!i || typeof i != "object")
      return;
    let u, f = "";
    for (let a = o; a < s.length; ++a)
      if (a !== o && (f += t), f += s[a], u = i[f], u !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof u) > -1 && a < s.length - 1)
          continue;
        o += a - o + 1;
        break;
      }
    i = u;
  }
  return i;
}
function Pe(n) {
  return n && n.indexOf("_") > 0 ? n.replace("_", "-") : n;
}
class Lt extends Ie {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, u = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let f;
    e.indexOf(".") > -1 ? f = e.split(".") : (f = [e, t], s && (Array.isArray(s) ? f.push(...s) : typeof s == "string" && o ? f.push(...s.split(o)) : f.push(s)));
    const a = Oe(this.data, f);
    return !a && !t && !s && e.indexOf(".") > -1 && (e = f[0], t = f[1], s = f.slice(2).join(".")), a || !u || typeof s != "string" ? a : tt(this.data && this.data[e] && this.data[e][t], s, o);
  }
  addResource(e, t, s, i) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const u = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let f = [e, t];
    s && (f = f.concat(u ? s.split(u) : s)), e.indexOf(".") > -1 && (f = e.split("."), i = t, t = f[1]), this.addNamespaces(t), Tt(this.data, f, i), o.silent || this.emit("added", e, t, s, i);
  }
  addResources(e, t, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const o in s)
      (typeof s[o] == "string" || Object.prototype.toString.apply(s[o]) === "[object Array]") && this.addResource(e, t, o, s[o], {
        silent: !0
      });
    i.silent || this.emit("added", e, t, s);
  }
  addResourceBundle(e, t, s, i, o) {
    let u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, f = [e, t];
    e.indexOf(".") > -1 && (f = e.split("."), i = s, s = t, t = f[1]), this.addNamespaces(t);
    let a = Oe(this.data, f) || {};
    u.skipCopy || (s = JSON.parse(JSON.stringify(s))), i ? es(a, s, o) : a = {
      ...a,
      ...s
    }, Tt(this.data, f, a), u.silent || this.emit("added", e, t, s);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return t || (t = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(e, t)
    } : this.getResource(e, t);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!(t && Object.keys(t) || []).find((i) => t[i] && Object.keys(t[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var ts = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, e, t, s, i) {
    return n.forEach((o) => {
      this.processors[o] && (e = this.processors[o].process(e, t, s, i));
    }), e;
  }
};
const Mt = {};
class Ae extends Ie {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Yn(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = te.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (e == null)
      return !1;
    const s = this.resolve(e, t);
    return s && s.res !== void 0;
  }
  extractFromKey(e, t) {
    let s = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    s === void 0 && (s = ":");
    const i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let o = t.ns || this.options.defaultNS || [];
    const u = s && e.indexOf(s) > -1, f = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !nr(e, s, i);
    if (u && !f) {
      const a = e.match(this.interpolator.nestingRegexp);
      if (a && a.length > 0)
        return {
          key: e,
          namespaces: o
        };
      const c = e.split(s);
      (s !== i || s === i && this.options.ns.indexOf(c[0]) > -1) && (o = c.shift()), e = c.join(i);
    }
    return typeof o == "string" && (o = [o]), {
      key: e,
      namespaces: o
    };
  }
  translate(e, t, s) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {
      ...t
    }), t || (t = {}), e == null)
      return "";
    Array.isArray(e) || (e = [String(e)]);
    const i = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, o = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: u,
      namespaces: f
    } = this.extractFromKey(e[e.length - 1], t), a = f[f.length - 1], c = t.lng || this.language, l = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (c && c.toLowerCase() === "cimode") {
      if (l) {
        const w = t.nsSeparator || this.options.nsSeparator;
        return i ? {
          res: `${a}${w}${u}`,
          usedKey: u,
          exactUsedKey: u,
          usedLng: c,
          usedNS: a,
          usedParams: this.getUsedParamsDetails(t)
        } : `${a}${w}${u}`;
      }
      return i ? {
        res: u,
        usedKey: u,
        exactUsedKey: u,
        usedLng: c,
        usedNS: a,
        usedParams: this.getUsedParamsDetails(t)
      } : u;
    }
    const p = this.resolve(e, t);
    let d = p && p.res;
    const g = p && p.usedKey || u, m = p && p.exactUsedKey || u, x = Object.prototype.toString.apply(d), y = ["[object Number]", "[object Function]", "[object RegExp]"], j = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, v = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (v && d && (typeof d != "string" && typeof d != "boolean" && typeof d != "number") && y.indexOf(x) < 0 && !(typeof j == "string" && x === "[object Array]")) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const w = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, d, {
          ...t,
          ns: f
        }) : `key '${u} (${this.language})' returned an object instead of string.`;
        return i ? (p.res = w, p.usedParams = this.getUsedParamsDetails(t), p) : w;
      }
      if (o) {
        const w = x === "[object Array]", C = w ? [] : {}, S = w ? m : g;
        for (const E in d)
          if (Object.prototype.hasOwnProperty.call(d, E)) {
            const L = `${S}${o}${E}`;
            C[E] = this.translate(L, {
              ...t,
              joinArrays: !1,
              ns: f
            }), C[E] === L && (C[E] = d[E]);
          }
        d = C;
      }
    } else if (v && typeof j == "string" && x === "[object Array]")
      d = d.join(j), d && (d = this.extendTranslation(d, e, t, s));
    else {
      let w = !1, C = !1;
      const S = t.count !== void 0 && typeof t.count != "string", E = Ae.hasDefaultValue(t), L = S ? this.pluralResolver.getSuffix(c, t.count, t) : "", A = t.ordinal && S ? this.pluralResolver.getSuffix(c, t.count, {
        ordinal: !1
      }) : "", z = S && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), R = z && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${L}`] || t[`defaultValue${A}`] || t.defaultValue;
      !this.isValidLookup(d) && E && (w = !0, d = R), this.isValidLookup(d) || (C = !0, d = u);
      const $ = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && C ? void 0 : d, D = E && R !== d && this.options.updateMissing;
      if (C || w || D) {
        if (this.logger.log(D ? "updateKey" : "missingKey", c, a, u, D ? R : d), o) {
          const k = this.resolve(u, {
            ...t,
            keySeparator: !1
          });
          k && k.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let B = [];
        const J = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && J && J[0])
          for (let k = 0; k < J.length; k++)
            B.push(J[k]);
        else
          this.options.saveMissingTo === "all" ? B = this.languageUtils.toResolveHierarchy(t.lng || this.language) : B.push(t.lng || this.language);
        const W = (k, q, se) => {
          const fe = E && se !== d ? se : $;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(k, a, q, fe, D, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(k, a, q, fe, D, t), this.emit("missingKey", k, a, q, d);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && S ? B.forEach((k) => {
          const q = this.pluralResolver.getSuffixes(k, t);
          z && t[`defaultValue${this.options.pluralSeparator}zero`] && q.indexOf(`${this.options.pluralSeparator}zero`) < 0 && q.push(`${this.options.pluralSeparator}zero`), q.forEach((se) => {
            W([k], u + se, t[`defaultValue${se}`] || R);
          });
        }) : W(B, u, R));
      }
      d = this.extendTranslation(d, e, t, p, s), C && d === u && this.options.appendNamespaceToMissingKey && (d = `${a}:${u}`), (C || w) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${a}:${u}` : u, w ? d : void 0) : d = this.options.parseMissingKeyHandler(d));
    }
    return i ? (p.res = d, p.usedParams = this.getUsedParamsDetails(t), p) : d;
  }
  extendTranslation(e, t, s, i, o) {
    var u = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...s
      }, s.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!s.skipInterpolation) {
      s.interpolation && this.interpolator.init({
        ...s,
        interpolation: {
          ...this.options.interpolation,
          ...s.interpolation
        }
      });
      const c = typeof e == "string" && (s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let l;
      if (c) {
        const d = e.match(this.interpolator.nestingRegexp);
        l = d && d.length;
      }
      let p = s.replace && typeof s.replace != "string" ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (p = {
        ...this.options.interpolation.defaultVariables,
        ...p
      }), e = this.interpolator.interpolate(e, p, s.lng || this.language, s), c) {
        const d = e.match(this.interpolator.nestingRegexp), g = d && d.length;
        l < g && (s.nest = !1);
      }
      !s.lng && this.options.compatibilityAPI !== "v1" && i && i.res && (s.lng = i.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var d = arguments.length, g = new Array(d), m = 0; m < d; m++)
          g[m] = arguments[m];
        return o && o[0] === g[0] && !s.context ? (u.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${t[0]}`), null) : u.translate(...g, t);
      }, s)), s.interpolation && this.interpolator.reset();
    }
    const f = s.postProcess || this.options.postProcess, a = typeof f == "string" ? [f] : f;
    return e != null && a && a.length && s.applyPostProcessor !== !1 && (e = ts.handle(a, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(s)
      },
      ...s
    } : s, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s, i, o, u, f;
    return typeof e == "string" && (e = [e]), e.forEach((a) => {
      if (this.isValidLookup(s))
        return;
      const c = this.extractFromKey(a, t), l = c.key;
      i = l;
      let p = c.namespaces;
      this.options.fallbackNS && (p = p.concat(this.options.fallbackNS));
      const d = t.count !== void 0 && typeof t.count != "string", g = d && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), m = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "", x = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      p.forEach((y) => {
        this.isValidLookup(s) || (f = y, !Mt[`${x[0]}-${y}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(f) && (Mt[`${x[0]}-${y}`] = !0, this.logger.warn(`key "${i}" for languages "${x.join(", ")}" won't get resolved as namespace "${f}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), x.forEach((j) => {
          if (this.isValidLookup(s))
            return;
          u = j;
          const v = [l];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(v, l, j, y, t);
          else {
            let w;
            d && (w = this.pluralResolver.getSuffix(j, t.count, t));
            const C = `${this.options.pluralSeparator}zero`, S = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (d && (v.push(l + w), t.ordinal && w.indexOf(S) === 0 && v.push(l + w.replace(S, this.options.pluralSeparator)), g && v.push(l + C)), m) {
              const E = `${l}${this.options.contextSeparator}${t.context}`;
              v.push(E), d && (v.push(E + w), t.ordinal && w.indexOf(S) === 0 && v.push(E + w.replace(S, this.options.pluralSeparator)), g && v.push(E + C));
            }
          }
          let _;
          for (; _ = v.pop(); )
            this.isValidLookup(s) || (o = _, s = this.getResource(j, y, _, t));
        }));
      });
    }), {
      res: s,
      usedKey: i,
      exactUsedKey: o,
      usedLng: u,
      usedNS: f
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, s, i) : this.resourceStore.getResource(e, t, s, i);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = e.replace && typeof e.replace != "string";
    let i = s ? e.replace : e;
    if (s && typeof e.count < "u" && (i.count = e.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !s) {
      i = {
        ...i
      };
      for (const o of t)
        delete i[o];
    }
    return i;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const s in e)
      if (Object.prototype.hasOwnProperty.call(e, s) && t === s.substring(0, t.length) && e[s] !== void 0)
        return !0;
    return !1;
  }
}
function Ye(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
class It {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = te.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Pe(e), !e || e.indexOf("-") < 0)
      return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Pe(e), !e || e.indexOf("-") < 0)
      return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (typeof e == "string" && e.indexOf("-") > -1) {
      const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let s = e.split("-");
      return this.options.lowerCaseLng ? s = s.map((i) => i.toLowerCase()) : s.length === 2 ? (s[0] = s[0].toLowerCase(), s[1] = s[1].toUpperCase(), t.indexOf(s[1].toLowerCase()) > -1 && (s[1] = Ye(s[1].toLowerCase()))) : s.length === 3 && (s[0] = s[0].toLowerCase(), s[1].length === 2 && (s[1] = s[1].toUpperCase()), s[0] !== "sgn" && s[2].length === 2 && (s[2] = s[2].toUpperCase()), t.indexOf(s[1].toLowerCase()) > -1 && (s[1] = Ye(s[1].toLowerCase())), t.indexOf(s[2].toLowerCase()) > -1 && (s[2] = Ye(s[2].toLowerCase()))), s.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e)
      return null;
    let t;
    return e.forEach((s) => {
      if (t)
        return;
      const i = this.formatLanguageCode(s);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (t = i);
    }), !t && this.options.supportedLngs && e.forEach((s) => {
      if (t)
        return;
      const i = this.getLanguagePartFromCode(s);
      if (this.isSupportedCode(i))
        return t = i;
      t = this.options.supportedLngs.find((o) => {
        if (o === i)
          return o;
        if (!(o.indexOf("-") < 0 && i.indexOf("-") < 0) && (o.indexOf("-") > 0 && i.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === i || o.indexOf(i) === 0 && i.length > 1))
          return o;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e)
      return [];
    if (typeof e == "function" && (e = e(t)), typeof e == "string" && (e = [e]), Object.prototype.toString.apply(e) === "[object Array]")
      return e;
    if (!t)
      return e.default || [];
    let s = e[t];
    return s || (s = e[this.getScriptPartFromCode(t)]), s || (s = e[this.formatLanguageCode(t)]), s || (s = e[this.getLanguagePartFromCode(t)]), s || (s = e.default), s || [];
  }
  toResolveHierarchy(e, t) {
    const s = this.getFallbackCodes(t || this.options.fallbackLng || [], e), i = [], o = (u) => {
      u && (this.isSupportedCode(u) ? i.push(u) : this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`));
    };
    return typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(e))) : typeof e == "string" && o(this.formatLanguageCode(e)), s.forEach((u) => {
      i.indexOf(u) < 0 && o(this.formatLanguageCode(u));
    }), i;
  }
}
let rr = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], ar = {
  1: function(n) {
    return +(n > 1);
  },
  2: function(n) {
    return +(n != 1);
  },
  3: function(n) {
    return 0;
  },
  4: function(n) {
    return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
  },
  5: function(n) {
    return n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
  },
  6: function(n) {
    return n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;
  },
  7: function(n) {
    return n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
  },
  8: function(n) {
    return n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3;
  },
  9: function(n) {
    return +(n >= 2);
  },
  10: function(n) {
    return n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4;
  },
  11: function(n) {
    return n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3;
  },
  12: function(n) {
    return +(n % 10 != 1 || n % 100 == 11);
  },
  13: function(n) {
    return +(n !== 0);
  },
  14: function(n) {
    return n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3;
  },
  15: function(n) {
    return n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
  },
  16: function(n) {
    return n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2;
  },
  17: function(n) {
    return n == 1 || n % 10 == 1 && n % 100 != 11 ? 0 : 1;
  },
  18: function(n) {
    return n == 0 ? 0 : n == 1 ? 1 : 2;
  },
  19: function(n) {
    return n == 1 ? 0 : n == 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3;
  },
  20: function(n) {
    return n == 1 ? 0 : n == 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2;
  },
  21: function(n) {
    return n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0;
  },
  22: function(n) {
    return n == 1 ? 0 : n == 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3;
  }
};
const ir = ["v1", "v2", "v3"], or = ["v4"], Ft = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function cr() {
  const n = {};
  return rr.forEach((e) => {
    e.lngs.forEach((t) => {
      n[t] = {
        numbers: e.nr,
        plurals: ar[e.fc]
      };
    });
  }), n;
}
class lr {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = te.create("pluralResolver"), (!this.options.compatibilityJSON || or.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = cr();
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Pe(e === "dev" ? "en" : e), {
          type: t.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(e, t);
    return this.shouldUseIntlApi() ? s && s.resolvedOptions().pluralCategories.length > 1 : s && s.numbers.length > 1;
  }
  getPluralFormsOfKey(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, s).map((i) => `${t}${i}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(e, t);
    return s ? this.shouldUseIntlApi() ? s.resolvedOptions().pluralCategories.sort((i, o) => Ft[i] - Ft[o]).map((i) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : s.numbers.map((i) => this.getSuffix(e, i, t)) : [];
  }
  getSuffix(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(e, s);
    return i ? this.shouldUseIntlApi() ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}` : this.getSuffixRetroCompatible(i, t) : (this.logger.warn(`no plural rule found for: ${e}`), "");
  }
  getSuffixRetroCompatible(e, t) {
    const s = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
    let i = e.numbers[s];
    this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 && (i === 2 ? i = "plural" : i === 1 && (i = ""));
    const o = () => this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
    return this.options.compatibilityJSON === "v1" ? i === 1 ? "" : typeof i == "number" ? `_plural_${i.toString()}` : o() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? o() : this.options.prepend && s.toString() ? this.options.prepend + s.toString() : s.toString();
  }
  shouldUseIntlApi() {
    return !ir.includes(this.options.compatibilityJSON);
  }
}
function zt(n, e, t) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = Gn(n, e, t);
  return !o && i && typeof t == "string" && (o = tt(n, t, s), o === void 0 && (o = tt(e, t, s))), o;
}
class ur {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = te.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((t) => t), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const t = e.interpolation;
    this.escape = t.escape !== void 0 ? t.escape : Zn, this.escapeValue = t.escapeValue !== void 0 ? t.escapeValue : !0, this.useRawValueToEscape = t.useRawValueToEscape !== void 0 ? t.useRawValueToEscape : !1, this.prefix = t.prefix ? ce(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? ce(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? ce(t.nestingPrefix) : t.nestingPrefixEscaped || ce("$t("), this.nestingSuffix = t.nestingSuffix ? ce(t.nestingSuffix) : t.nestingSuffixEscaped || ce(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = t.alwaysFormat !== void 0 ? t.alwaysFormat : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, s) => t && t.source === s ? (t.lastIndex = 0, t) : new RegExp(s, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, s, i) {
    let o, u, f;
    const a = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function c(m) {
      return m.replace(/\$/g, "$$$$");
    }
    const l = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const v = zt(t, a, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(v, void 0, s, {
          ...i,
          ...t,
          interpolationkey: m
        }) : v;
      }
      const x = m.split(this.formatSeparator), y = x.shift().trim(), j = x.join(this.formatSeparator).trim();
      return this.format(zt(t, a, y, this.options.keySeparator, this.options.ignoreJSONStructure), j, s, {
        ...i,
        ...t,
        interpolationkey: y
      });
    };
    this.resetRegExp();
    const p = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler, d = i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (m) => c(m)
    }, {
      regex: this.regexp,
      safeValue: (m) => this.escapeValue ? c(this.escape(m)) : c(m)
    }].forEach((m) => {
      for (f = 0; o = m.regex.exec(e); ) {
        const x = o[1].trim();
        if (u = l(x), u === void 0)
          if (typeof p == "function") {
            const j = p(e, o, i);
            u = typeof j == "string" ? j : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, x))
            u = "";
          else if (d) {
            u = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${x} for interpolating ${e}`), u = "";
        else
          typeof u != "string" && !this.useRawValueToEscape && (u = At(u));
        const y = m.safeValue(u);
        if (e = e.replace(o[0], y), d ? (m.regex.lastIndex += u.length, m.regex.lastIndex -= o[0].length) : m.regex.lastIndex = 0, f++, f >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i, o, u;
    function f(a, c) {
      const l = this.nestingOptionsSeparator;
      if (a.indexOf(l) < 0)
        return a;
      const p = a.split(new RegExp(`${l}[ ]*{`));
      let d = `{${p[1]}`;
      a = p[0], d = this.interpolate(d, u);
      const g = d.match(/'/g), m = d.match(/"/g);
      (g && g.length % 2 === 0 && !m || m.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
      try {
        u = JSON.parse(d), c && (u = {
          ...c,
          ...u
        });
      } catch (x) {
        return this.logger.warn(`failed parsing options string in nesting for key ${a}`, x), `${a}${l}${d}`;
      }
      return delete u.defaultValue, a;
    }
    for (; i = this.nestingRegexp.exec(e); ) {
      let a = [];
      u = {
        ...s
      }, u = u.replace && typeof u.replace != "string" ? u.replace : u, u.applyPostProcessor = !1, delete u.defaultValue;
      let c = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const l = i[1].split(this.formatSeparator).map((p) => p.trim());
        i[1] = l.shift(), a = l, c = !0;
      }
      if (o = t(f.call(this, i[1].trim(), u), u), o && i[0] === e && typeof o != "string")
        return o;
      typeof o != "string" && (o = At(o)), o || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${e}`), o = ""), c && (o = a.reduce((l, p) => this.format(l, p, s.lng, {
        ...s,
        interpolationkey: i[1].trim()
      }), o.trim())), e = e.replace(i[0], o), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
function dr(n) {
  let e = n.toLowerCase().trim();
  const t = {};
  if (n.indexOf("(") > -1) {
    const s = n.split("(");
    e = s[0].toLowerCase().trim();
    const i = s[1].substring(0, s[1].length - 1);
    e === "currency" && i.indexOf(":") < 0 ? t.currency || (t.currency = i.trim()) : e === "relativetime" && i.indexOf(":") < 0 ? t.range || (t.range = i.trim()) : i.split(";").forEach((u) => {
      if (!u)
        return;
      const [f, ...a] = u.split(":"), c = a.join(":").trim().replace(/^'+|'+$/g, "");
      t[f.trim()] || (t[f.trim()] = c), c === "false" && (t[f.trim()] = !1), c === "true" && (t[f.trim()] = !0), isNaN(c) || (t[f.trim()] = parseInt(c, 10));
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}
function le(n) {
  const e = {};
  return function(s, i, o) {
    const u = i + JSON.stringify(o);
    let f = e[u];
    return f || (f = n(Pe(i), o), e[u] = f), f(s);
  };
}
class fr {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = te.create("formatter"), this.options = e, this.formats = {
      number: le((t, s) => {
        const i = new Intl.NumberFormat(t, {
          ...s
        });
        return (o) => i.format(o);
      }),
      currency: le((t, s) => {
        const i = new Intl.NumberFormat(t, {
          ...s,
          style: "currency"
        });
        return (o) => i.format(o);
      }),
      datetime: le((t, s) => {
        const i = new Intl.DateTimeFormat(t, {
          ...s
        });
        return (o) => i.format(o);
      }),
      relativetime: le((t, s) => {
        const i = new Intl.RelativeTimeFormat(t, {
          ...s
        });
        return (o) => i.format(o, s.range || "day");
      }),
      list: le((t, s) => {
        const i = new Intl.ListFormat(t, {
          ...s
        });
        return (o) => i.format(o);
      })
    }, this.init(e);
  }
  init(e) {
    const s = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = s.formatSeparator ? s.formatSeparator : s.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = le(t);
  }
  format(e, t, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return t.split(this.formatSeparator).reduce((f, a) => {
      const {
        formatName: c,
        formatOptions: l
      } = dr(a);
      if (this.formats[c]) {
        let p = f;
        try {
          const d = i && i.formatParams && i.formatParams[i.interpolationkey] || {}, g = d.locale || d.lng || i.locale || i.lng || s;
          p = this.formats[c](f, g, {
            ...l,
            ...i,
            ...d
          });
        } catch (d) {
          this.logger.warn(d);
        }
        return p;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return f;
    }, e);
  }
}
function hr(n, e) {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
}
class pr extends Ie {
  constructor(e, t, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = i, this.logger = te.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(s, i.backend, i);
  }
  queueLoad(e, t, s, i) {
    const o = {}, u = {}, f = {}, a = {};
    return e.forEach((c) => {
      let l = !0;
      t.forEach((p) => {
        const d = `${c}|${p}`;
        !s.reload && this.store.hasResourceBundle(c, p) ? this.state[d] = 2 : this.state[d] < 0 || (this.state[d] === 1 ? u[d] === void 0 && (u[d] = !0) : (this.state[d] = 1, l = !1, u[d] === void 0 && (u[d] = !0), o[d] === void 0 && (o[d] = !0), a[p] === void 0 && (a[p] = !0)));
      }), l || (f[c] = !0);
    }), (Object.keys(o).length || Object.keys(u).length) && this.queue.push({
      pending: u,
      pendingCount: Object.keys(u).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(o),
      pending: Object.keys(u),
      toLoadLanguages: Object.keys(f),
      toLoadNamespaces: Object.keys(a)
    };
  }
  loaded(e, t, s) {
    const i = e.split("|"), o = i[0], u = i[1];
    t && this.emit("failedLoading", o, u, t), s && this.store.addResourceBundle(o, u, s, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2;
    const f = {};
    this.queue.forEach((a) => {
      Qn(a.loaded, [o], u), hr(a, e), t && a.errors.push(t), a.pendingCount === 0 && !a.done && (Object.keys(a.loaded).forEach((c) => {
        f[c] || (f[c] = {});
        const l = a.loaded[c];
        l.length && l.forEach((p) => {
          f[c][p] === void 0 && (f[c][p] = !0);
        });
      }), a.done = !0, a.errors.length ? a.callback(a.errors) : a.callback());
    }), this.emit("loaded", f), this.queue = this.queue.filter((a) => !a.done);
  }
  read(e, t, s) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, u = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length)
      return u(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: s,
        tried: i,
        wait: o,
        callback: u
      });
      return;
    }
    this.readingCalls++;
    const f = (c, l) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const p = this.waitingReads.shift();
        this.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback);
      }
      if (c && l && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, s, i + 1, o * 2, u);
        }, o);
        return;
      }
      u(c, l);
    }, a = this.backend[s].bind(this.backend);
    if (a.length === 2) {
      try {
        const c = a(e, t);
        c && typeof c.then == "function" ? c.then((l) => f(null, l)).catch(f) : f(null, c);
      } catch (c) {
        f(c);
      }
      return;
    }
    return a(e, t, f);
  }
  prepareLoading(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)), typeof t == "string" && (t = [t]);
    const o = this.queueLoad(e, t, s, i);
    if (!o.toLoad.length)
      return o.pending.length || i(), null;
    o.toLoad.forEach((u) => {
      this.loadOne(u);
    });
  }
  load(e, t, s) {
    this.prepareLoading(e, t, {}, s);
  }
  reload(e, t, s) {
    this.prepareLoading(e, t, {
      reload: !0
    }, s);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const s = e.split("|"), i = s[0], o = s[1];
    this.read(i, o, "read", void 0, void 0, (u, f) => {
      u && this.logger.warn(`${t}loading namespace ${o} for language ${i} failed`, u), !u && f && this.logger.log(`${t}loaded namespace ${o} for language ${i}`, f), this.loaded(e, u, f);
    });
  }
  saveMissing(e, t, s, i, o) {
    let u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, f = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if (this.backend && this.backend.create) {
        const a = {
          ...u,
          isUpdate: o
        }, c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let l;
            c.length === 5 ? l = c(e, t, s, i, a) : l = c(e, t, s, i), l && typeof l.then == "function" ? l.then((p) => f(null, p)).catch(f) : f(null, l);
          } catch (l) {
            f(l);
          }
        else
          c(e, t, s, i, f, a);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, i);
    }
  }
}
function Dt() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function(e) {
      let t = {};
      if (typeof e[1] == "object" && (t = e[1]), typeof e[1] == "string" && (t.defaultValue = e[1]), typeof e[2] == "string" && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
        const s = e[3] || e[2];
        Object.keys(s).forEach((i) => {
          t[i] = s[i];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: (n) => n,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0
    }
  };
}
function Ut(n) {
  return typeof n.ns == "string" && (n.ns = [n.ns]), typeof n.fallbackLng == "string" && (n.fallbackLng = [n.fallbackLng]), typeof n.fallbackNS == "string" && (n.fallbackNS = [n.fallbackNS]), n.supportedLngs && n.supportedLngs.indexOf("cimode") < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), n;
}
function Se() {
}
function mr(n) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
}
class ve extends Ie {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Ut(e), this.services = {}, this.logger = te, this.modules = {
      external: []
    }, mr(this), t && !this.isInitialized && !e.isClone) {
      if (!this.options.initImmediate)
        return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof t == "function" && (s = t, t = {}), !t.defaultNS && t.defaultNS !== !1 && t.ns && (typeof t.ns == "string" ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const i = Dt();
    this.options = {
      ...i,
      ...this.options,
      ...Ut(t)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...i.interpolation,
      ...this.options.interpolation
    }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    function o(l) {
      return l ? typeof l == "function" ? new l() : l : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? te.init(o(this.modules.logger), this.options) : te.init(null, this.options);
      let l;
      this.modules.formatter ? l = this.modules.formatter : typeof Intl < "u" && (l = fr);
      const p = new It(this.options);
      this.store = new Lt(this.options.resources, this.options);
      const d = this.services;
      d.logger = te, d.resourceStore = this.store, d.languageUtils = p, d.pluralResolver = new lr(p, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), l && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (d.formatter = o(l), d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new ur(this.options), d.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, d.backendConnector = new pr(o(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", function(g) {
        for (var m = arguments.length, x = new Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
          x[y - 1] = arguments[y];
        e.emit(g, ...x);
      }), this.modules.languageDetector && (d.languageDetector = o(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = o(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new Ae(this.services, this.options), this.translator.on("*", function(g) {
        for (var m = arguments.length, x = new Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
          x[y - 1] = arguments[y];
        e.emit(g, ...x);
      }), this.modules.external.forEach((g) => {
        g.init && g.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, s || (s = Se), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const l = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      l.length > 0 && l[0] !== "dev" && (this.options.lng = l[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((l) => {
      this[l] = function() {
        return e.store[l](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((l) => {
      this[l] = function() {
        return e.store[l](...arguments), e;
      };
    });
    const a = _e(), c = () => {
      const l = (p, d) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(d), s(p, d);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return l(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, l);
    };
    return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), a;
  }
  loadResources(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se;
    const i = typeof e == "string" ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (i && i.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return s();
      const o = [], u = (f) => {
        if (!f || f === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(f).forEach((c) => {
          c !== "cimode" && o.indexOf(c) < 0 && o.push(c);
        });
      };
      i ? u(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((a) => u(a)), this.options.preload && this.options.preload.forEach((f) => u(f)), this.services.backendConnector.load(o, this.options.ns, (f) => {
        !f && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(f);
      });
    } else
      s(null);
  }
  reloadResources(e, t, s) {
    const i = _e();
    return e || (e = this.languages), t || (t = this.options.ns), s || (s = Se), this.services.backendConnector.reload(e, t, (o) => {
      i.resolve(), s(o);
    }), i;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && ts.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const s = this.languages[t];
        if (!(["cimode", "dev"].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
          this.resolvedLanguage = s;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var s = this;
    this.isLanguageChangingTo = e;
    const i = _e();
    this.emit("languageChanging", e);
    const o = (a) => {
      this.language = a, this.languages = this.services.languageUtils.toResolveHierarchy(a), this.resolvedLanguage = void 0, this.setResolvedLanguage(a);
    }, u = (a, c) => {
      c ? (o(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, i.resolve(function() {
        return s.t(...arguments);
      }), t && t(a, function() {
        return s.t(...arguments);
      });
    }, f = (a) => {
      !e && !a && this.services.languageDetector && (a = []);
      const c = typeof a == "string" ? a : this.services.languageUtils.getBestMatchFromCodes(a);
      c && (this.language || o(c), this.translator.language || this.translator.changeLanguage(c), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(c)), this.loadResources(c, (l) => {
        u(l, c);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? f(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(f) : this.services.languageDetector.detect(f) : f(e), i;
  }
  getFixedT(e, t, s) {
    var i = this;
    const o = function(u, f) {
      let a;
      if (typeof f != "object") {
        for (var c = arguments.length, l = new Array(c > 2 ? c - 2 : 0), p = 2; p < c; p++)
          l[p - 2] = arguments[p];
        a = i.options.overloadTranslationOptionHandler([u, f].concat(l));
      } else
        a = {
          ...f
        };
      a.lng = a.lng || o.lng, a.lngs = a.lngs || o.lngs, a.ns = a.ns || o.ns, a.keyPrefix = a.keyPrefix || s || o.keyPrefix;
      const d = i.options.keySeparator || ".";
      let g;
      return a.keyPrefix && Array.isArray(u) ? g = u.map((m) => `${a.keyPrefix}${d}${m}`) : g = a.keyPrefix ? `${a.keyPrefix}${d}${u}` : u, i.t(g, a);
    };
    return typeof e == "string" ? o.lng = e : o.lngs = e, o.ns = t, o.keyPrefix = s, o;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const s = t.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : !1, o = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode")
      return !0;
    const u = (f, a) => {
      const c = this.services.backendConnector.state[`${f}|${a}`];
      return c === -1 || c === 2;
    };
    if (t.precheck) {
      const f = t.precheck(this, u);
      if (f !== void 0)
        return f;
    }
    return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || u(s, e) && (!i || u(o, e)));
  }
  loadNamespaces(e, t) {
    const s = _e();
    return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      s.resolve(), t && t(i);
    }), s) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = _e();
    typeof e == "string" && (e = [e]);
    const i = this.options.preload || [], o = e.filter((u) => i.indexOf(u) < 0);
    return o.length ? (this.options.preload = i.concat(o), this.loadResources((u) => {
      s.resolve(), t && t(u);
    }), s) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)
      return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = this.services && this.services.languageUtils || new It(Dt());
    return t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new ve(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Se;
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const i = {
      ...this.options,
      ...e,
      isClone: !0
    }, o = new ve(i);
    return (e.debug !== void 0 || e.prefix !== void 0) && (o.logger = o.logger.clone(e)), ["store", "services", "language"].forEach((f) => {
      o[f] = this[f];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, s && (o.store = new Lt(this.store.data, i), o.services.resourceStore = o.store), o.translator = new Ae(o.services, i), o.translator.on("*", function(f) {
      for (var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
        c[l - 1] = arguments[l];
      o.emit(f, ...c);
    }), o.init(i, t), o.translator.options = i, o.translator.backendConnector.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, o;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const Y = ve.createInstance();
Y.createInstance = ve.createInstance;
Y.createInstance;
Y.dir;
Y.init;
Y.loadResources;
Y.reloadResources;
Y.use;
Y.changeLanguage;
Y.getFixedT;
Y.t;
Y.exists;
Y.setDefaultNamespace;
Y.hasLoadedNamespace;
Y.loadNamespaces;
Y.loadLanguages;
const gr = "New order from template menu", _r = "Total", xr = "Name", yr = "Type", br = "Time/Table", vr = "Size", wr = "Extras", jr = "Notes", Nr = "Doneness", $r = "Sugar", Cr = "Pasta Type", Sr = "Bread", Er = "Menu", kr = "Contact", Rr = "All", Or = "Search dishes...", Pr = "Call", Ar = "WhatsApp", Tr = "Location", Lr = "Address", Mr = "Opening Hours", Ir = "Add to Cart", Fr = "Added", zr = "Customize", Dr = "Size", Ur = "Extras", Vr = "Notes", Br = "Cart", qr = "items", Wr = "Your cart is empty", Hr = "Clear cart", Kr = "Send via WhatsApp", Yr = "Total", Jr = "Name", Qr = "Order type", Gr = "Pickup", Xr = "Delivery", Zr = "Time/Table", ea = "Message preview", ta = "QR", sa = "Instagram", na = "Base price", ra = "Extras", aa = "Reservation", ia = "Book a Table", oa = "Date", ca = "Time", la = "Area", ua = "Number of Guests", da = "Your Name", fa = "Phone Number", ha = "Special Requests", pa = "Send Reservation Request", ma = "Reservation request sent!", ga = "Please wait for confirmation from the restaurant.", _a = "If you don't receive a response within 15 minutes, please call the restaurant.", xa = "Please wait for confirmation from the restaurant for your order.", ya = "If you don't receive a response within 5 minutes, please call the restaurant.", ba = "Today", va = "Tomorrow", wa = "Reserve your table at our restaurant and enjoy an unforgettable dining experience. We look forward to welcoming you!", ja = "Choose your preferred date", Na = "Select time slot", $a = "Number of people", Ca = "Important Notice", Sa = "Need immediate assistance? Call us:", Ea = "Any special requests or notes...", ka = "Guest", Ra = "Guests", Oa = "Table Reservation Request", Pa = "Date:", Aa = "Time:", Ta = "Area:", La = "Guests:", Ma = "Name:", Ia = "Phone:", Fa = "Notes:", za = "Please confirm this reservation.", Da = "Thank you! 🙏", Ua = "Sun–Thu:", Va = "Fri:", Ba = "Sat:", qa = "Important Notice", Wa = "Delivery fees not included in total price", Ha = "Continue to WhatsApp", Ka = "Cancel", Ya = "The restaurant is currently closed. Please try again during opening hours.", Ja = "Close", Qa = "🍽️ NEW ORDER REQUEST", Ga = "📋 ORDER ITEMS:", Xa = "👤 CUSTOMER INFORMATION:", Za = "Order Type", ei = "Name", ti = "Phone", si = "Qty", ni = "Item", ri = "Options", ai = "Please confirm this order. Thank you! 🙏", ii = "Served until 13:00", oi = "Sunday", ci = "Monday", li = "Tuesday", ui = "Wednesday", di = "Thursday", fi = "Friday", hi = "Saturday", pi = "For illustration only", mi = "Terms of Service", gi = "Privacy Policy", _i = "Accessibility Statement", xi = "Last updated", yi = "Acceptance of Terms", bi = "By using our website and services, you agree to comply with these terms of service.", vi = "Service Usage", wi = "Our website is designed for browsing our menu, placing orders via WhatsApp, and making reservations.", ji = "Orders and Reservations", Ni = "All orders are processed through WhatsApp. Reservations are subject to availability and confirmation.", $i = "Payment Terms", Ci = "Payment is handled directly at the restaurant. Online orders are for convenience and confirmation only.", Si = "Limitation of Liability", Ei = "We are not responsible for third-party services such as WhatsApp. Use of external services is subject to their terms.", ki = "Changes to Terms", Ri = "We may update these terms from time to time. Continued use constitutes acceptance of revised terms.", Oi = "Information Collection", Pi = "We respect your privacy. Our website does not use cookies or online tracking. Information is stored locally in your browser (LocalStorage) for continuity, and may include name and order preferences (personal/family).", Ai = "Information Usage", Ti = "We only use information to provide our services and improve your experience. We do not share personal data with third parties.", Li = "Cookies and Tracking", Mi = "Our website does not use cookies or tracking technologies. All data is stored locally in your browser.", Ii = "WhatsApp Integration", Fi = "Order placement occurs through WhatsApp (external service). WhatsApp usage is subject to WhatsApp's terms and privacy policy.", zi = "Data Storage", Di = "Data is stored locally on your device and on WhatsApp for order processing and communication purposes.", Ui = "User Rights", Vi = "For any questions or requests regarding your data, please contact us through our contact page.", Bi = "Our Commitment", qi = "We are committed to making our website accessible according to Israeli Standard TI 5568 based on WCAG 2.0 Level AA. Our goal is to provide an accessible, equal, and comfortable user experience for all users.", Wi = "Accessibility Standards", Hi = "Our website follows modern accessibility guidelines including keyboard navigation, screen reader compatibility, and clear visual design.", Ki = "Accessibility Features", Yi = "The website includes proper heading structure, alternative text for images, keyboard navigation support, and responsive design for various devices and assistive technologies.", Ji = "Accessibility Contact", Qi = "If you encounter any accessibility issues or have suggestions for improvement, please contact us via phone or WhatsApp listed on our contact page.", Gi = "Customer name is required before sending to WhatsApp", Xi = "Back to Menu", Zi = "Closed", eo = "The restaurant is currently closed. Orders can be placed only during opening hours.", to = "Got it", so = {
  wa_header: gr,
  wa_total: _r,
  wa_name: xr,
  wa_type: yr,
  wa_time: br,
  opt_size: vr,
  opt_extras: wr,
  opt_notes: jr,
  opt_doneness: Nr,
  opt_sugar: $r,
  opt_pasta_type: Cr,
  opt_bread: Sr,
  menu: Er,
  contact: kr,
  all: Rr,
  search_placeholder: Or,
  call: Pr,
  whatsapp: Ar,
  location: Tr,
  address: Lr,
  open_hours: Mr,
  add_to_cart: Ir,
  added: Fr,
  customize: zr,
  size: Dr,
  extras: Ur,
  notes: Vr,
  cart: Br,
  items: qr,
  empty_cart: Wr,
  clear_cart: Hr,
  checkout: Kr,
  total: Yr,
  customer_name: Jr,
  order_type: Qr,
  pickup: Gr,
  delivery: Xr,
  time_or_table: Zr,
  message_preview: ea,
  qr: ta,
  instagram: sa,
  base_price: na,
  extras_total: ra,
  reservation: aa,
  book_table: ia,
  reservation_date: oa,
  reservation_time: ca,
  reservation_area: la,
  reservation_guests: ua,
  reservation_name: da,
  reservation_phone: fa,
  reservation_notes: ha,
  send_reservation: pa,
  reservation_sent: ma,
  reservation_wait: ga,
  reservation_no_response: _a,
  order_wait: xa,
  order_no_response: ya,
  today: ba,
  tomorrow: va,
  reservation_description: wa,
  choose_date: ja,
  select_time: Na,
  number_people: $a,
  important_notice: Ca,
  need_assistance: Sa,
  special_requests_placeholder: Ea,
  guests_singular: ka,
  guests_plural: Ra,
  reservation_request: Oa,
  date_label: Pa,
  time_label: Aa,
  area_label: Ta,
  guests_label: La,
  name_label: Ma,
  phone_label: Ia,
  notes_label: Fa,
  confirm_reservation: za,
  thank_you: Da,
  sun_thu: Ua,
  fri: Va,
  sat: Ba,
  important_notice_cart: qa,
  delivery_notice: Wa,
  continue_to_whatsapp: Ha,
  cancel: Ka,
  restaurant_closed_message: Ya,
  close: Ja,
  wa_order_header: Qa,
  wa_order_items: Ga,
  wa_customer_info: Xa,
  wa_order_type: Za,
  wa_customer_name: ei,
  wa_customer_phone: ti,
  wa_quantity: si,
  wa_item: ni,
  wa_options: ri,
  wa_confirm_order: ai,
  served_until_13: ii,
  day_sun: oi,
  day_mon: ci,
  day_tue: li,
  day_wed: ui,
  day_thu: di,
  day_fri: fi,
  day_sat: hi,
  "day_tue-sat": "Tuesday-Saturday",
  "day_mon-sat": "Monday-Saturday",
  for_illustration_only: pi,
  terms_of_service: mi,
  privacy_policy: gi,
  accessibility_statement: _i,
  last_updated: xi,
  terms_acceptance: yi,
  terms_acceptance_text: bi,
  terms_service_usage: vi,
  terms_service_usage_text: wi,
  terms_orders: ji,
  terms_orders_text: Ni,
  terms_payment: $i,
  terms_payment_text: Ci,
  terms_liability: Si,
  terms_liability_text: Ei,
  terms_changes: ki,
  terms_changes_text: Ri,
  privacy_info_collection: Oi,
  privacy_info_collection_text: Pi,
  privacy_info_usage: Ai,
  privacy_info_usage_text: Ti,
  privacy_cookies: Li,
  privacy_cookies_text: Mi,
  privacy_whatsapp: Ii,
  privacy_whatsapp_text: Fi,
  privacy_data_storage: zi,
  privacy_data_storage_text: Di,
  privacy_user_rights: Ui,
  privacy_user_rights_text: Vi,
  accessibility_commitment: Bi,
  accessibility_commitment_text: qi,
  accessibility_standards: Wi,
  accessibility_standards_text: Hi,
  accessibility_features: Ki,
  accessibility_features_text: Yi,
  accessibility_contact: Ji,
  accessibility_contact_text: Qi,
  name_required: Gi,
  back_to_menu: Xi,
  closed: Zi,
  closed_popup_message: eo,
  got_it_button: to
}, no = "הזמנה חדשה מתפריט התבנית", ro = "סך הכול", ao = "שם", io = "סוג", oo = "שעה/שולחן", co = "גודל", lo = "תוספות", uo = "הערות", fo = "דרגת עשייה", ho = "סוכר", po = "סוג פסטה", mo = "לחם", go = "תפריט", _o = "צור קשר", xo = "הכל", yo = "חיפוש מנות...", bo = "התקשר", vo = "וואטסאפ", wo = "מיקום", jo = "כתובת", No = "שעות פתיחה", $o = "להוסיף לסל", Co = "נוסף", So = "התאמה", Eo = "גודל", ko = "תוספות", Ro = "הערות", Oo = "הסל", Po = "פריטים", Ao = "הסל ריק", To = "נקה סל", Lo = "שלח בוואטסאפ", Mo = "סך הכל", Io = "שם", Fo = "סוג הזמנה", zo = "איסוף עצמי", Do = "משלוח", Uo = "שעה/שולחן", Vo = "תצוגה מקדימה", Bo = "QR", qo = "אינסטגרם", Wo = "מחיר בסיס", Ho = "תוספות", Ko = "הזמנת שולחן", Yo = "הזמן שולחן", Jo = "תאריך", Qo = "שעה", Go = "אזור", Xo = "מספר אורחים", Zo = "השם שלך", ec = "מספר טלפון", tc = "בקשות מיוחדות", sc = "שלח בקשת הזמנה", nc = "בקשת ההזמנה נשלחה!", rc = "אנא המתן לאישור מהמסעדה.", ac = "אם לא תקבל תגובה תוך 15 דקות, אנא התקשר למסעדה.", ic = "אנא המתן לאישור מהמסעדה עבור ההזמנה שלך.", oc = "אם לא תקבל תגובה תוך 5 דקות, אנא התקשר למסעדה.", cc = "היום", lc = "מחר", uc = "הזמן שולחן במסעדה שלנו ותהנה מחווית אוכל בלתי נשכחת. אנחנו מצפים לראות אותך!", dc = "בחר את התאריך המועדף עליך", fc = "בחר זמן", hc = "מספר אנשים", pc = "הודעה חשובה", mc = "צריך עזרה מיידית? התקשר אלינו:", gc = "בקשות מיוחדות או הערות...", _c = "אורח", xc = "אורחים", yc = "בקשת הזמנת שולחן", bc = "תאריך:", vc = "שעה:", wc = "אזור:", jc = "אורחים:", Nc = "שם:", $c = "טלפון:", Cc = "הערות:", Sc = "אנא אשר את ההזמנה הזו.", Ec = "תודה! 🙏", kc = "א׳-ה׳:", Rc = "ו׳:", Oc = "ש׳:", Pc = "הודעה חשובה", Ac = "עמלת משלוח לא כלולה במחיר הכולל", Tc = "המשך לווטסאפ", Lc = "ביטול", Mc = "🍽️ בקשת הזמנה חדשה", Ic = "📋 פריטי ההזמנה:", Fc = "👤 פרטי הלקוח:", zc = "סוג הזמנה", Dc = "שם", Uc = "טלפון", Vc = "כמות", Bc = "פריט", qc = "אפשרויות", Wc = "אנא אשר את ההזמנה הזו. תודה! 🙏", Hc = "מוגש עד 13:00", Kc = "ראשון", Yc = "שני", Jc = "שלישי", Qc = "רביעי", Gc = "חמישי", Xc = "שישי", Zc = "שבת", el = "להמחשה בלבד", tl = "תנאי שימוש", sl = "מדיניות פרטיות", nl = "הצהרת נגישות", rl = "תאריך עדכון אחרון", al = "אחריות", il = "אין אחריות לשירותי צד-שלישי (כגון WhatsApp). כל שימוש בשירותים חיצוניים כפוף לתנאורים.", ol = "שינויים בתנאים", cl = "יתכן שנעדכן שינויים בתנאי השימוש מעת לעת. המשך השימוש כהסכמה לתנאים כפופה.", ll = "יצירת קשר בנושא נגישות", ul = "אם נתקלתם בבעיה או הצעה לשיפור, נעמוד לכפות אליכן בטלפון או בוואטסאפ המופיעים במיקום יצירת קשר.", dl = "מטרת עיכוב היחידי", fl = "האתר מכיל לפרטים, בחירת פריטים, והזמנת מקום לוואטסאפ של המטעדה.", hl = "זכויות המשתמש", pl = "כפי שלאה או בקשה לחתיקה מידע, נעמוד לכפות אליכן דרך עמוד יצירת קשר.", ml = "תאריך עדכון אחרון", gl = "26.9.2025", _l = "אחריות", xl = "אין אחריות לשירותי צד-שלישי (כגון WhatsApp). כל שימוש בשירותים חיצוניים כפוף לתנאורים.", yl = "שינויים בתנאים", bl = "יתכן שנעדכן שינויים בתנאי השימוש מעת לעת. המשך השימוש כהסכמה לתנאים כפופה.", vl = "מדיניות פרטיות", wl = "אנו מכבדים את פרטיותכם. האתר אינו מפעיל עוגיות (cookies) ואינו מבצע מעקב אינטרנטי. המידע שמורן בעלות הקרייות ומורה מקומית בדפדפן (LocalStorage) לצורך המשכיות כבב, ויכול לכלול שם ופוטר המנה (אישי/משפחה).", jl = "מטרת עיכוב היחידי", Nl = "שליחת הזמנה/פנירה מתבצעת באמצעות WhatsApp (שירות חיצוני). על כן, השימוש ב-WhatsApp כפוף לתנאי השימוש ומדיניות הפרטיות של WhatsApp.", $l = "מטרת עיכוב היחידי", Cl = "האתר מכיל לפרטים, בחירת פריטים, והזמנת מקום לוואטסאפ של המטעדה.", Sl = "זכויות המשתמש", El = "כפי שלאה או בקשה לחתיקה מידע, נעמוד לכפות אליכן דרך עמוד יצירת קשר.", kl = "הצהרת נגישות", Rl = 'אנו פועלים להנגיש את האתר בהתאם לתקן הישראלי ת"י 5568 הכמבוס על 2.0 WCAG ברמה AA. מטרתנו להנביח חווית שימוש נגישה, שוויונית ונוחה לכלל המשתמשים.', Ol = "יצירת קשר בנושא נגישות", Pl = "אם נתקלתם בבעיה או הצעה לשיפור, נעמוד לכפות אליכן בטלפון או בוואטסאפ המופיעים במיקום יצירת קשר.", Al = "מטרת עיכוב היחידי", Tl = "האתר מכיל לפרטים, בחירת פריטים, והזמנת מקום לוואטסאפ של המטעדה.", Ll = "יצירת קשר בנושא נגישות", Ml = "אם נתקלתם בבעיה או הצעה לשיפור, נעמוד לכפות אליכן בטלפון או בוואטסאפ המופיעים במיקום יצירת קשר.", Il = "שם הלקוח נדרש לפני שליחה לוואטסאפ", Fl = "חזרה לתפריט", zl = "סגור", Dl = "המסעדה סגורה כעת. נסה שוב בשעות הפתיחה.", Ul = "סגור", Vl = "המסעדה סגורה כעת. ניתן לבצע הזמנות רק במהלך שעות הפתיחה.", Bl = "הבנתי", ql = {
  wa_header: no,
  wa_total: ro,
  wa_name: ao,
  wa_type: io,
  wa_time: oo,
  opt_size: co,
  opt_extras: lo,
  opt_notes: uo,
  opt_doneness: fo,
  opt_sugar: ho,
  opt_pasta_type: po,
  opt_bread: mo,
  menu: go,
  contact: _o,
  all: xo,
  search_placeholder: yo,
  call: bo,
  whatsapp: vo,
  location: wo,
  address: jo,
  open_hours: No,
  add_to_cart: $o,
  added: Co,
  customize: So,
  size: Eo,
  extras: ko,
  notes: Ro,
  cart: Oo,
  items: Po,
  empty_cart: Ao,
  clear_cart: To,
  checkout: Lo,
  total: Mo,
  customer_name: Io,
  order_type: Fo,
  pickup: zo,
  delivery: Do,
  time_or_table: Uo,
  message_preview: Vo,
  qr: Bo,
  instagram: qo,
  base_price: Wo,
  extras_total: Ho,
  reservation: Ko,
  book_table: Yo,
  reservation_date: Jo,
  reservation_time: Qo,
  reservation_area: Go,
  reservation_guests: Xo,
  reservation_name: Zo,
  reservation_phone: ec,
  reservation_notes: tc,
  send_reservation: sc,
  reservation_sent: nc,
  reservation_wait: rc,
  reservation_no_response: ac,
  order_wait: ic,
  order_no_response: oc,
  today: cc,
  tomorrow: lc,
  reservation_description: uc,
  choose_date: dc,
  select_time: fc,
  number_people: hc,
  important_notice: pc,
  need_assistance: mc,
  special_requests_placeholder: gc,
  guests_singular: _c,
  guests_plural: xc,
  reservation_request: yc,
  date_label: bc,
  time_label: vc,
  area_label: wc,
  guests_label: jc,
  name_label: Nc,
  phone_label: $c,
  notes_label: Cc,
  confirm_reservation: Sc,
  thank_you: Ec,
  sun_thu: kc,
  fri: Rc,
  sat: Oc,
  important_notice_cart: Pc,
  delivery_notice: Ac,
  continue_to_whatsapp: Tc,
  cancel: Lc,
  wa_order_header: Mc,
  wa_order_items: Ic,
  wa_customer_info: Fc,
  wa_order_type: zc,
  wa_customer_name: Dc,
  wa_customer_phone: Uc,
  wa_quantity: Vc,
  wa_item: Bc,
  wa_options: qc,
  wa_confirm_order: Wc,
  served_until_13: Hc,
  day_sun: Kc,
  day_mon: Yc,
  day_tue: Jc,
  day_wed: Qc,
  day_thu: Gc,
  day_fri: Xc,
  day_sat: Zc,
  "day_tue-sat": "שלישי-שבת",
  "day_mon-sat": "שני-שבת",
  for_illustration_only: el,
  terms_of_service: tl,
  privacy_policy: sl,
  accessibility_statement: nl,
  last_updated: rl,
  terms_acceptance: al,
  terms_acceptance_text: il,
  terms_service_usage: ol,
  terms_service_usage_text: cl,
  terms_orders: ll,
  terms_orders_text: ul,
  terms_payment: dl,
  terms_payment_text: fl,
  terms_liability: hl,
  terms_liability_text: pl,
  terms_changes: ml,
  terms_changes_text: gl,
  privacy_info_collection: _l,
  privacy_info_collection_text: xl,
  privacy_info_usage: yl,
  privacy_info_usage_text: bl,
  privacy_cookies: vl,
  privacy_cookies_text: wl,
  privacy_whatsapp: jl,
  privacy_whatsapp_text: Nl,
  privacy_data_storage: $l,
  privacy_data_storage_text: Cl,
  privacy_user_rights: Sl,
  privacy_user_rights_text: El,
  accessibility_commitment: kl,
  accessibility_commitment_text: Rl,
  accessibility_standards: Ol,
  accessibility_standards_text: Pl,
  accessibility_features: Al,
  accessibility_features_text: Tl,
  accessibility_contact: Ll,
  accessibility_contact_text: Ml,
  name_required: Il,
  back_to_menu: Fl,
  closed: zl,
  restaurant_closed_message: Dl,
  close: Ul,
  closed_popup_message: Vl,
  got_it_button: Bl
}, Wl = "طلب جديد عبر قائمة القالب", Hl = "الإجمالي", Kl = "الاسم", Yl = "النوع", Jl = "ساعة/طاولة", Ql = "الحجم", Gl = "إضافات", Xl = "ملاحظات", Zl = "درجة الاستواء", eu = "سكر", tu = "نوع المعكرونة", su = "الخبز", nu = "القائمة", ru = "تواصل", au = "الكل", iu = "ابحث عن طبق...", ou = "اتصال", cu = "واتساب", lu = "الموقع", uu = "العنوان", du = "ساعات العمل", fu = "أضف إلى السلة", hu = "تمت الإضافة", pu = "تخصيص", mu = "الحجم", gu = "إضافات", _u = "ملاحظات", xu = "السلة", yu = "عنصر", bu = "السلة فارغة", vu = "تفريغ السلة", wu = "إرسال عبر واتساب", ju = "الإجمالي", Nu = "الاسم", $u = "نوع الطلب", Cu = "استلام", Su = "توصيل", Eu = "ساعة/طاولة", ku = "نص الرسالة", Ru = "QR", Ou = "إنستغرام", Pu = "السعر الأساسي", Au = "الإضافات", Tu = "حجز طاولة", Lu = "احجز طاولة", Mu = "التاريخ", Iu = "الوقت", Fu = "المنطقة", zu = "عدد الضيوف", Du = "اسمك", Uu = "رقم الهاتف", Vu = "طلبات خاصة", Bu = "إرسال طلب الحجز", qu = "تم إرسال طلب الحجز!", Wu = "يرجى انتظار التأكيد من المطعم.", Hu = "إذا لم تتلق رداً خلال 15 دقيقة، يرجى الاتصال بالمطعم.", Ku = "يرجى انتظار التأكيد من المطعم لطلبك.", Yu = "إذا لم تتلق رداً خلال 5 دقائق، يرجى الاتصال بالمطعم.", Ju = "اليوم", Qu = "غداً", Gu = "احجز طاولتك في مطعمنا واستمتع بتجربة طعام لا تُنسى. نحن نتطلع لاستقبالك!", Xu = "اختر التاريخ المفضل لديك", Zu = "اختر الوقت", ed = "عدد الأشخاص", td = "إشعار مهم", sd = "تحتاج مساعدة فورية؟ اتصل بنا:", nd = "أي طلبات خاصة أو ملاحظات...", rd = "ضيف", ad = "ضيوف", id = "طلب حجز طاولة", od = "التاريخ:", cd = "الوقت:", ld = "المنطقة:", ud = "الضيوف:", dd = "الاسم:", fd = "الهاتف:", hd = "ملاحظات:", pd = "يرجى تأكيد هذا الحجز.", md = "شكراً لك! 🙏", gd = "الأحد-الخميس:", _d = "الجمعة:", xd = "السبت:", yd = "إشعار مهم", bd = "رسوم التوصيل غير مشمولة في السعر الإجمالي", vd = "متابعة إلى واتساب", wd = "إلغاء", jd = "🍽️ طلب جديد", Nd = "📋 عناصر الطلب:", $d = "👤 معلومات العميل:", Cd = "نوع الطلب", Sd = "الاسم", Ed = "الهاتف", kd = "الكمية", Rd = "العنصر", Od = "الخيارات", Pd = "يرجى تأكيد هذا الطلب. شكراً لك! 🙏", Ad = "يُقدم حتى 13:00", Td = "الأحد", Ld = "الاثنين", Md = "الثلاثاء", Id = "الأربعاء", Fd = "الخميس", zd = "الجمعة", Dd = "السبت", Ud = "شروط الخدمة", Vd = "سياسة الخصوصية", Bd = "بيان إمكانية الوصول", qd = "آخر تحديث", Wd = "قبول الشروط", Hd = "باستخدام موقعنا وخدماتنا، فإنك توافق على الالتزام بشروط الخدمة هذه.", Kd = "استخدام الخدمة", Yd = "تم تصميم موقعنا لتصفح القائمة وتقديم الطلبات عبر واتساب وإجراء الحجوزات.", Jd = "الطلبات والحجوزات", Qd = "جميع الطلبات تتم معالجتها عبر واتساب. الحجوزات تخضع للتوفر والتأكيد.", Gd = "شروط الدفع", Xd = "يتم التعامل مع الدفع مباشرة في المطعم. الطلبات عبر الإنترنت للراحة والتأكيد فقط.", Zd = "حدود المسؤولية", ef = "نحن غير مسؤولين عن خدمات الطرف الثالث مثل واتساب. استخدام الخدمات الخارجية يخضع لشروطها.", tf = "تغييرات الشروط", sf = "قد نقوم بتحديث هذه الشروط من وقت لآخر. الاستخدام المستمر يشكل قبولاً للشروط المنقحة.", nf = "جمع المعلومات", rf = "نحن نحترم خصوصيتك. موقعنا لا يستخدم ملفات تعريف الارتباط أو التتبع عبر الإنترنت. يتم تخزين المعلومات محلياً في متصفحك للاستمرارية، وقد تشمل الاسم وتفضيلات الطلب.", af = "استخدام المعلومات", of = "نستخدم المعلومات فقط لتقديم خدماتنا وتحسين تجربتك. لا نشارك البيانات الشخصية مع أطراف ثالثة.", cf = "ملفات تعريف الارتباط والتتبع", lf = "موقعنا لا يستخدم ملفات تعريف الارتباط أو تقنيات التتبع. جميع البيانات مخزنة محلياً في متصفحك.", uf = "تكامل واتساب", df = "تقديم الطلبات يتم عبر واتساب (خدمة خارجية). استخدام واتساب يخضع لشروط وسياسة خصوصية واتساب.", ff = "تخزين البيانات", hf = "يتم تخزين البيانات محلياً على جهازك وعلى واتساب لمعالجة الطلبات وأغراض التواصل.", pf = "حقوق المستخدم", mf = "لأي أسئلة أو طلبات بخصوص بياناتك، يرجى التواصل معنا عبر صفحة الاتصال.", gf = "التزامنا", _f = "نحن ملتزمون بجعل موقعنا قابلاً للوصول وفقاً للمعايير الحديثة. هدفنا توفير تجربة مستخدم متاحة ومتساوية ومريحة لجميع المستخدمين.", xf = "معايير إمكانية الوصول", yf = "يتبع موقعنا إرشادات إمكانية الوصول الحديثة بما في ذلك التنقل بلوحة المفاتيح وتوافق قارئ الشاشة والتصميم البصري الواضح.", bf = "ميزات إمكانية الوصول", vf = "يتضمن الموقع هيكل عناوين مناسب ونص بديل للصور ودعم التنقل بلوحة المفاتيح وتصميم متجاوب لمختلف الأجهزة والتقنيات المساعدة.", wf = "التواصل بخصوص إمكانية الوصول", jf = "إذا واجهت أي مشاكل في إمكانية الوصول أو لديك اقتراحات للتحسين، يرجى التواصل معنا عبر الهاتف أو واتساب المدرجين في صفحة الاتصال.", Nf = "اسم العميل مطلوب قبل الإرسال إلى واتساب", $f = "العودة إلى القائمة", Cf = "مغلق", Sf = "للتوضيح فقط", Ef = "المطعم مغلق حالياً. الرجاء المحاولة خلال ساعات العمل.", kf = "إغلاق", Rf = "المطعم مغلق حالياً. يمكن تقديم الطلبات فقط خلال ساعات العمل.", Of = "حسنًا", Pf = {
  wa_header: Wl,
  wa_total: Hl,
  wa_name: Kl,
  wa_type: Yl,
  wa_time: Jl,
  opt_size: Ql,
  opt_extras: Gl,
  opt_notes: Xl,
  opt_doneness: Zl,
  opt_sugar: eu,
  opt_pasta_type: tu,
  opt_bread: su,
  menu: nu,
  contact: ru,
  all: au,
  search_placeholder: iu,
  call: ou,
  whatsapp: cu,
  location: lu,
  address: uu,
  open_hours: du,
  add_to_cart: fu,
  added: hu,
  customize: pu,
  size: mu,
  extras: gu,
  notes: _u,
  cart: xu,
  items: yu,
  empty_cart: bu,
  clear_cart: vu,
  checkout: wu,
  total: ju,
  customer_name: Nu,
  order_type: $u,
  pickup: Cu,
  delivery: Su,
  time_or_table: Eu,
  message_preview: ku,
  qr: Ru,
  instagram: Ou,
  base_price: Pu,
  extras_total: Au,
  reservation: Tu,
  book_table: Lu,
  reservation_date: Mu,
  reservation_time: Iu,
  reservation_area: Fu,
  reservation_guests: zu,
  reservation_name: Du,
  reservation_phone: Uu,
  reservation_notes: Vu,
  send_reservation: Bu,
  reservation_sent: qu,
  reservation_wait: Wu,
  reservation_no_response: Hu,
  order_wait: Ku,
  order_no_response: Yu,
  today: Ju,
  tomorrow: Qu,
  reservation_description: Gu,
  choose_date: Xu,
  select_time: Zu,
  number_people: ed,
  important_notice: td,
  need_assistance: sd,
  special_requests_placeholder: nd,
  guests_singular: rd,
  guests_plural: ad,
  reservation_request: id,
  date_label: od,
  time_label: cd,
  area_label: ld,
  guests_label: ud,
  name_label: dd,
  phone_label: fd,
  notes_label: hd,
  confirm_reservation: pd,
  thank_you: md,
  sun_thu: gd,
  fri: _d,
  sat: xd,
  important_notice_cart: yd,
  delivery_notice: bd,
  continue_to_whatsapp: vd,
  cancel: wd,
  wa_order_header: jd,
  wa_order_items: Nd,
  wa_customer_info: $d,
  wa_order_type: Cd,
  wa_customer_name: Sd,
  wa_customer_phone: Ed,
  wa_quantity: kd,
  wa_item: Rd,
  wa_options: Od,
  wa_confirm_order: Pd,
  served_until_13: Ad,
  day_sun: Td,
  day_mon: Ld,
  day_tue: Md,
  day_wed: Id,
  day_thu: Fd,
  day_fri: zd,
  day_sat: Dd,
  "day_tue-sat": "الثلاثاء-السبت",
  "day_mon-sat": "الاثنين-السبت",
  terms_of_service: Ud,
  privacy_policy: Vd,
  accessibility_statement: Bd,
  last_updated: qd,
  terms_acceptance: Wd,
  terms_acceptance_text: Hd,
  terms_service_usage: Kd,
  terms_service_usage_text: Yd,
  terms_orders: Jd,
  terms_orders_text: Qd,
  terms_payment: Gd,
  terms_payment_text: Xd,
  terms_liability: Zd,
  terms_liability_text: ef,
  terms_changes: tf,
  terms_changes_text: sf,
  privacy_info_collection: nf,
  privacy_info_collection_text: rf,
  privacy_info_usage: af,
  privacy_info_usage_text: of,
  privacy_cookies: cf,
  privacy_cookies_text: lf,
  privacy_whatsapp: uf,
  privacy_whatsapp_text: df,
  privacy_data_storage: ff,
  privacy_data_storage_text: hf,
  privacy_user_rights: pf,
  privacy_user_rights_text: mf,
  accessibility_commitment: gf,
  accessibility_commitment_text: _f,
  accessibility_standards: xf,
  accessibility_standards_text: yf,
  accessibility_features: bf,
  accessibility_features_text: vf,
  accessibility_contact: wf,
  accessibility_contact_text: jf,
  name_required: Nf,
  back_to_menu: $f,
  closed: Cf,
  for_illustration_only: Sf,
  restaurant_closed_message: Ef,
  close: kf,
  closed_popup_message: Rf,
  got_it_button: Of
}, Af = {
  en: { translation: so },
  he: { translation: ql },
  ar: { translation: Pf }
};
function ss(n) {
  const e = n === "ar" || n === "he" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", e), document.documentElement.setAttribute("lang", n), console.log("🎯 TABLY CORE i18n is active! Language:", n, "Direction:", e);
}
Y.use(yn).init({
  resources: Af,
  lng: "he",
  fallbackLng: "en",
  interpolation: { escapeValue: !1 }
}).then(() => ss(Y.language));
Y.on("languageChanged", ss);
function Qf() {
  const [n, e] = T.useState(Y.language), [t, s] = T.useState(!1), i = [
    { code: "ar", name: "العربية" },
    { code: "he", name: "עברית" },
    { code: "en", name: "English" }
  ], o = i.find((f) => f.code === n) || i[0], u = (f) => {
    e(f), Y.changeLanguage(f), s(!1);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: () => s(!t),
        className: "tab flex items-center gap-2 min-w-[80px] justify-between",
        children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ r.jsx(Zs, { size: 16, className: "opacity-70" }),
            /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium", children: o.code.toUpperCase() })
          ] }),
          /* @__PURE__ */ r.jsx(
            Gs,
            {
              size: 14,
              className: `opacity-70 transition-transform duration-200 ${t ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    t && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "fixed inset-0 z-40",
          onClick: () => s(!1)
        }
      ),
      /* @__PURE__ */ r.jsx("div", { className: "absolute top-full right-0 mt-2 bg-[var(--card)] border border-white/10 rounded-lg shadow-xl z-50 min-w-[120px] overflow-hidden", children: i.map((f) => /* @__PURE__ */ r.jsxs(
        "button",
        {
          onClick: () => u(f.code),
          className: `w-full px-3 py-2 text-left hover:bg-white/5 transition-colors flex items-center justify-between text-sm ${f.code === n ? "bg-white/10 text-green-400" : "text-white/80"}`,
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "font-medium", children: f.name }),
            f.code === n && /* @__PURE__ */ r.jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full" })
          ]
        },
        f.code
      )) })
    ] })
  ] });
}
const ns = qt();
function Gf({ children: n }) {
  const [e, t] = st(null), s = (i) => {
    t(i), setTimeout(() => {
      t(null);
    }, 800);
  };
  return /* @__PURE__ */ r.jsx(ns.Provider, { value: { animation: e, triggerAnimation: s }, children: n });
}
function Tf() {
  return Wt(ns);
}
function Lf({ open: n, onClose: e, item: t, onConfirm: s }) {
  const { t: i } = Z(), { triggerAnimation: o } = Tf(), [u, f] = T.useState(1), [a, c] = T.useState({}), l = () => {
    if (!t)
      return 0;
    let g = 0;
    return t.options && Object.entries(t.options).forEach(([m, x]) => {
      if (x.type === "multi" && a[m] && a[m].forEach((j) => {
        const v = x.choices.find(
          (_) => (typeof _ == "string" ? _ : _.name) === j
        );
        v && typeof v == "object" && v.price && (g += v.price);
      }), x.type === "select" && a[m]) {
        const y = x.choices.find(
          (j) => (typeof j == "string" ? j : j.name) === a[m]
        );
        y && typeof y == "object" && y.price && (g += y.price);
      }
    }), (t.price + g) * u;
  };
  if (T.useEffect(() => {
    if (t != null && t.options) {
      const g = {};
      for (const [m, x] of Object.entries(t.options))
        x.type === "single" && (g[m] = x.choices[0]), x.type === "select" && (g[m] = x.choices[0].name || x.choices[0]), x.type === "multi" && (g[m] = []), x.type === "text" && (g[m] = "");
      c(g), f(1);
    }
  }, [t]), !n || !t)
    return null;
  const p = () => {
    const g = {};
    t.options && Object.entries(t.options).forEach(([m, x]) => {
      const y = a[m];
      if (y != null && y !== "")
        if (x.type === "text")
          g[m] = y;
        else if (Array.isArray(y))
          g[m] = y.map((j) => {
            const v = x.choices.findIndex(
              (_) => (typeof _ == "string" ? _ : _.name) === j
            );
            return v >= 0 ? v : j;
          });
        else {
          const j = x.choices.findIndex(
            (v) => (typeof v == "string" ? v : v.name) === y
          );
          g[m] = j >= 0 ? j : y;
        }
    }), s({ quantity: u, options: g }), e(), setTimeout(() => {
      o(t);
    }, 100);
  }, d = (g, m) => {
    if (m.type === "single")
      return /* @__PURE__ */ r.jsxs("label", { className: "block space-y-1", children: [
        /* @__PURE__ */ r.jsx("div", { className: "text-sm text-white/80", children: m.label }),
        /* @__PURE__ */ r.jsx(
          "select",
          {
            value: a[g],
            onChange: (x) => c({ ...a, [g]: x.target.value }),
            className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
            children: m.choices.map((x) => /* @__PURE__ */ r.jsx("option", { value: x, children: x }, x))
          }
        )
      ] });
    if (m.type === "select") {
      const x = a[g], y = (j) => {
        const v = typeof j == "string" ? j : j.name;
        c({ ...a, [g]: v });
      };
      return /* @__PURE__ */ r.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ r.jsx("div", { className: "text-sm text-white/80", children: m.label }),
        /* @__PURE__ */ r.jsx("div", { className: "flex flex-wrap gap-1.5 sm:gap-2", children: m.choices.map((j) => {
          const v = typeof j == "string" ? j : j.name, _ = typeof j == "object" ? j.price : 0, w = x === v;
          return /* @__PURE__ */ r.jsxs(
            "button",
            {
              type: "button",
              onClick: () => y(j),
              className: `tab text-xs sm:text-sm ${w ? "bg-green-500/20 border-green-400/50 text-green-400 ring-2 ring-green-400/30" : "hover:bg-white/5"} flex items-center gap-1 transition-all duration-200`,
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "truncate", children: v }),
                _ > 0 && /* @__PURE__ */ r.jsxs("span", { className: "text-xs text-green-400 flex-shrink-0", children: [
                  "+",
                  _,
                  P.currency
                ] })
              ]
            },
            v
          );
        }) })
      ] });
    }
    if (m.type === "multi") {
      const x = a[g] || [], y = (j) => {
        const v = typeof j == "string" ? j : j.name, w = x.includes(v) ? x.filter((C) => C !== v) : [...x, v];
        c({ ...a, [g]: w });
      };
      return /* @__PURE__ */ r.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ r.jsx("div", { className: "text-sm text-white/80", children: m.label }),
        /* @__PURE__ */ r.jsx("div", { className: "flex flex-wrap gap-1.5 sm:gap-2", children: m.choices.map((j) => {
          const v = typeof j == "string" ? j : j.name, _ = typeof j == "object" ? j.price : 0, w = x.includes(v);
          return /* @__PURE__ */ r.jsxs(
            "button",
            {
              type: "button",
              onClick: () => y(j),
              className: `tab text-xs sm:text-sm ${w ? "bg-green-500/20 border-green-400/50 text-green-400 ring-2 ring-green-400/30" : "hover:bg-white/5"} flex items-center gap-1 transition-all duration-200`,
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "truncate", children: v }),
                _ > 0 && /* @__PURE__ */ r.jsxs("span", { className: "text-xs text-green-400 flex-shrink-0", children: [
                  "+",
                  _,
                  P.currency
                ] })
              ]
            },
            v
          );
        }) })
      ] });
    }
    return m.type === "text" ? /* @__PURE__ */ r.jsxs("label", { className: "block space-y-1", children: [
      /* @__PURE__ */ r.jsx("div", { className: "text-sm text-white/80", children: m.label }),
      /* @__PURE__ */ r.jsx(
        "textarea",
        {
          rows: 2,
          value: a[g] || "",
          onChange: (x) => c({ ...a, [g]: x.target.value }),
          className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200 resize-none"
        }
      )
    ] }) : null;
  };
  return /* @__PURE__ */ r.jsx("div", { className: "fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4", onClick: e, children: /* @__PURE__ */ r.jsxs("div", { className: "card max-w-lg sm:max-w-xl w-full max-h-[90vh] overflow-y-auto", onClick: (g) => g.stopPropagation(), children: [
    /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ r.jsx("img", { src: t.image, alt: t.name, className: "w-full h-48 sm:h-56 object-cover" }),
      /* @__PURE__ */ r.jsx("button", { className: "absolute top-2 end-2 sm:top-3 sm:end-3 bg-black/60 rounded-full p-1.5 sm:p-2", onClick: e, children: /* @__PURE__ */ r.jsx(Me, { size: 16, className: "sm:w-5 sm:h-5" }) })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "p-3 sm:p-5 space-y-3", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ r.jsx("div", { className: "text-lg sm:text-xl font-semibold flex-1 min-w-0", children: t.name }),
        /* @__PURE__ */ r.jsxs("div", { className: "text-base sm:text-lg font-bold text-green-400 flex-shrink-0", children: [
          t.price,
          t.price > 0 && P.currency
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "text-sm sm:text-base text-white/70 line-clamp-2", children: t.desc }),
      /* @__PURE__ */ r.jsx("div", { className: "grid gap-3", children: t.options && Object.entries(t.options).map(([g, m]) => /* @__PURE__ */ r.jsx("div", { children: d(g, m) }, g)) }),
      (() => {
        if (l() - t.price * u > 0) {
          let m = 0, x = 0;
          return t.options && Object.entries(t.options).forEach(([y, j]) => {
            if (j.type === "select" && a[y]) {
              const v = j.choices.find(
                (_) => (typeof _ == "string" ? _ : _.name) === a[y]
              );
              v && typeof v == "object" && v.price && (m += v.price * u);
            } else
              j.type === "multi" && a[y] && a[y].forEach((_) => {
                const w = j.choices.find(
                  (C) => (typeof C == "string" ? C : C.name) === _
                );
                w && typeof w == "object" && w.price && (x += w.price * u);
              });
          }), /* @__PURE__ */ r.jsxs("div", { className: "bg-black/20 border border-white/10 rounded-lg p-3 space-y-1", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ r.jsxs("span", { children: [
                i("base_price"),
                ":"
              ] }),
              /* @__PURE__ */ r.jsxs("span", { children: [
                t.price * u,
                t.price * u > 0 && P.currency
              ] })
            ] }),
            m > 0 && /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between text-sm text-green-400", children: [
              /* @__PURE__ */ r.jsxs("span", { children: [
                i("opt_size"),
                ":"
              ] }),
              /* @__PURE__ */ r.jsxs("span", { children: [
                "+",
                m,
                P.currency
              ] })
            ] }),
            x > 0 && /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between text-sm text-green-400", children: [
              /* @__PURE__ */ r.jsxs("span", { children: [
                i("opt_extras"),
                ":"
              ] }),
              /* @__PURE__ */ r.jsxs("span", { children: [
                "+",
                x,
                P.currency
              ] })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "border-t border-white/10 pt-1 flex justify-between font-semibold", children: [
              /* @__PURE__ */ r.jsxs("span", { children: [
                i("total"),
                ":"
              ] }),
              /* @__PURE__ */ r.jsxs("span", { className: "text-green-400", children: [
                l(),
                l() > 0 && P.currency
              ] })
            ] })
          ] });
        }
        return null;
      })(),
      /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-white/10", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ r.jsx("button", { className: "tab text-sm", onClick: () => f(Math.max(1, u - 1)), children: "-" }),
          /* @__PURE__ */ r.jsx("div", { className: "min-w-[2rem] text-center text-sm", children: u }),
          /* @__PURE__ */ r.jsx("button", { className: "tab text-sm", onClick: () => f(u + 1), children: "+" })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex-1 text-center sm:text-right", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "text-xs sm:text-sm text-white/60", children: [
            i("total"),
            ":"
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "text-base sm:text-lg font-bold text-green-400", children: [
            l(),
            P.currency
          ] })
        ] }),
        /* @__PURE__ */ r.jsx("button", { className: "btn w-full sm:w-auto text-sm sm:text-base", onClick: p, children: i("add_to_cart") })
      ] })
    ] })
  ] }) });
}
function Mf({ open: n, onClose: e }) {
  const { t, i18n: s } = Z(), [i, o] = T.useState({
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    // Today as default
    time: "",
    area: "",
    guests: 2,
    name: "",
    phone: "",
    notes: ""
  }), u = (c) => s.language === "ar" ? c.name_ar : s.language === "he" ? c.name_he : c.name, f = () => {
    const c = [], l = /* @__PURE__ */ new Date();
    for (let p = 0; p < P.reservation.max_advance_days; p++) {
      const d = new Date(l);
      d.setDate(l.getDate() + p);
      const g = d.toISOString().split("T")[0], m = d.toLocaleDateString(s.language, {
        weekday: "short",
        month: "short",
        day: "numeric"
      });
      c.push({ value: g, label: m });
    }
    return c;
  }, a = (c) => {
    c.preventDefault();
    const l = P.reservation.areas.find(
      (m) => m.id === i.area
    ), p = l ? u(l) : i.area, d = `🍽️ *${t("reservation_request")}*

📅 *${t("date_label")}* ${new Date(i.date).toLocaleDateString(s.language)}
🕐 *${t("time_label")}* ${i.time}
📍 *${t("area_label")}* ${p}
👥 *${t("guests_label")}* ${i.guests}
👤 *${t("name_label")}* ${i.name}
📞 *${t("phone_label")}* ${i.phone}
${i.notes ? `📝 *${t("notes_label")}* ${i.notes}` : ""}

*${t("confirm_reservation")}*

${t("thank_you")}`, g = `https://wa.me/${P.reservation.whatsapp}?text=${encodeURIComponent(d)}`;
    window.open(g, "_blank"), alert(
      t("reservation_sent") + `

` + t("reservation_wait") + `

` + t("reservation_no_response")
    ), e();
  };
  return n ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",
      onClick: e,
      children: /* @__PURE__ */ r.jsxs(
        "div",
        {
          className: "card max-w-md w-full overflow-hidden",
          onClick: (c) => c.stopPropagation(),
          children: [
            /* @__PURE__ */ r.jsxs("div", { className: "p-5 border-b border-white/10 flex items-center justify-between", children: [
              /* @__PURE__ */ r.jsxs("h2", { className: "text-xl font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ r.jsx(ke, { size: 20 }),
                t("book_table")
              ] }),
              /* @__PURE__ */ r.jsx("button", { className: "tab", onClick: e, children: /* @__PURE__ */ r.jsx(Me, { size: 16 }) })
            ] }),
            /* @__PURE__ */ r.jsxs("form", { onSubmit: a, className: "p-5 space-y-4", children: [
              /* @__PURE__ */ r.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ r.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ r.jsx(ke, { size: 14 }),
                  t("reservation_date")
                ] }),
                /* @__PURE__ */ r.jsx(
                  "select",
                  {
                    value: i.date,
                    onChange: (c) => o({ ...i, date: c.target.value }),
                    className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
                    required: !0,
                    children: f().map((c) => /* @__PURE__ */ r.jsx("option", { value: c.value, children: c.label }, c.value))
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ r.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ r.jsx(Ge, { size: 14 }),
                  t("reservation_time")
                ] }),
                /* @__PURE__ */ r.jsxs(
                  "select",
                  {
                    value: i.time,
                    onChange: (c) => o({ ...i, time: c.target.value }),
                    className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
                    required: !0,
                    children: [
                      /* @__PURE__ */ r.jsx("option", { value: "", children: t("reservation_time") }),
                      P.reservation.time_slots.map((c) => /* @__PURE__ */ r.jsx("option", { value: c, children: c }, c))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ r.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ r.jsx(at, { size: 14 }),
                  t("reservation_area")
                ] }),
                /* @__PURE__ */ r.jsxs(
                  "select",
                  {
                    value: i.area,
                    onChange: (c) => o({ ...i, area: c.target.value }),
                    className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
                    required: !0,
                    children: [
                      /* @__PURE__ */ r.jsx("option", { value: "", children: t("reservation_area") }),
                      P.reservation.areas.map((c) => /* @__PURE__ */ r.jsx("option", { value: c.id, children: u(c) }, c.id))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ r.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ r.jsx(Jt, { size: 14 }),
                  t("reservation_guests")
                ] }),
                /* @__PURE__ */ r.jsx(
                  "select",
                  {
                    value: i.guests,
                    onChange: (c) => o({ ...i, guests: parseInt(c.target.value) }),
                    className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
                    required: !0,
                    children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((c) => /* @__PURE__ */ r.jsxs("option", { value: c, children: [
                      c,
                      " ",
                      t(c === 1 ? "guests_singular" : "guests_plural")
                    ] }, c))
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ r.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ r.jsx(on, { size: 14 }),
                  t("reservation_name")
                ] }),
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    type: "text",
                    value: i.name,
                    onChange: (c) => o({ ...i, name: c.target.value }),
                    className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ r.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ r.jsx(ot, { size: 14 }),
                  t("reservation_phone")
                ] }),
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    type: "tel",
                    value: i.phone,
                    onChange: (c) => o({ ...i, phone: c.target.value }),
                    className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ r.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ r.jsx(tn, { size: 14 }),
                  t("reservation_notes")
                ] }),
                /* @__PURE__ */ r.jsx(
                  "textarea",
                  {
                    rows: 3,
                    value: i.notes,
                    onChange: (c) => o({ ...i, notes: c.target.value }),
                    className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200 resize-none",
                    placeholder: t("special_requests_placeholder")
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsx("button", { type: "submit", className: "btn w-full", children: t("send_reservation") })
            ] })
          ]
        }
      )
    }
  ) : null;
}
function If({ value: n, onChange: e }) {
  const { t } = Z();
  return /* @__PURE__ */ r.jsx(
    "input",
    {
      value: n,
      onChange: (s) => e(s.target.value),
      placeholder: t("search_placeholder"),
      className: "w-full"
    }
  );
}
function Xf() {
  const { t: n } = Z(), e = Le();
  return T.useEffect(() => {
    document.documentElement.scrollTop = 0, document.body.scrollTop = 0, setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 0);
  }, []), /* @__PURE__ */ r.jsx("div", { className: "py-8", children: /* @__PURE__ */ r.jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: () => e("/"),
        className: "btn-outline flex items-center gap-2 mb-6",
        children: [
          /* @__PURE__ */ r.jsx(rt, { size: 16 }),
          n("back_to_menu")
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold mb-8", children: n("accessibility_statement") }),
    /* @__PURE__ */ r.jsxs("div", { className: "space-y-6 text-white/80 leading-relaxed", children: [
      /* @__PURE__ */ r.jsxs("section", { children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("accessibility_commitment") }),
        /* @__PURE__ */ r.jsx("p", { children: n("accessibility_commitment_text") })
      ] }),
      /* @__PURE__ */ r.jsxs("section", { children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("accessibility_standards") }),
        /* @__PURE__ */ r.jsx("p", { children: n("accessibility_standards_text") })
      ] }),
      /* @__PURE__ */ r.jsxs("section", { children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("accessibility_features") }),
        /* @__PURE__ */ r.jsx("p", { children: n("accessibility_features_text") })
      ] }),
      /* @__PURE__ */ r.jsxs("section", { children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("accessibility_contact") }),
        /* @__PURE__ */ r.jsx("p", { children: n("accessibility_contact_text") })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "pt-6 border-t border-white/10 text-sm text-white/60", children: [
        n("last_updated"),
        ": 26.9.2025"
      ] })
    ] })
  ] }) });
}
function Zf() {
  const { t: n } = Z();
  return /* @__PURE__ */ r.jsxs("div", { className: "py-10 max-w-3xl mx-auto space-y-4", children: [
    /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold", children: n("contact") }),
    /* @__PURE__ */ r.jsxs("div", { className: "card p-6 grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ r.jsxs("a", { className: "btn", href: `tel:${P.phone}`, children: [
        /* @__PURE__ */ r.jsx(ot, { size: 18 }),
        " ",
        n("call")
      ] }),
      /* @__PURE__ */ r.jsxs("a", { className: "btn-outline", href: `https://wa.me/${P.whatsapp}`, children: [
        /* @__PURE__ */ r.jsx(it, { size: 18 }),
        " ",
        n("whatsapp")
      ] }),
      /* @__PURE__ */ r.jsxs(
        "a",
        {
          className: "btn-outline",
          href: `https://instagram.com/${P.instagram}`,
          target: "_blank",
          rel: "noreferrer",
          children: [
            /* @__PURE__ */ r.jsx(en, { size: 18 }),
            " ",
            n("instagram")
          ]
        }
      ),
      /* @__PURE__ */ r.jsx(
        "a",
        {
          className: "btn-outline sm:col-span-2",
          target: "_blank",
          rel: "noreferrer",
          href: `https://maps.google.com/?q=${encodeURIComponent(
            P.address
          )}`,
          children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 justify-center", children: [
            /* @__PURE__ */ r.jsx(at, { size: 18 }),
            " ",
            n("address"),
            ": ",
            P.address
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx(
      "iframe",
      {
        className: "w-full h-80 rounded-2xl border border-white/10",
        loading: "lazy",
        allowFullScreen: !0,
        src: `https://www.google.com/maps?q=${encodeURIComponent(
          P.address
        )}&output=embed`,
        title: "map"
      }
    )
  ] });
}
function eh({ menuData: n }) {
  const { i18n: e, t } = Z();
  Le();
  const [s, i] = T.useState("all"), [o, u] = T.useState(""), [f, a] = T.useState(null), [c, l] = T.useState(null), [p, d] = T.useState(!1), { dispatch: g } = nt();
  T.useEffect(() => {
    try {
      P.hours && !Zt(P.hours) && d(!0);
    } catch {
    }
  }, []);
  const m = (n == null ? void 0 : n[e.language]) || (n == null ? void 0 : n.ar) || { items: [], categories: [] }, x = m.items.filter(
    (_) => (_.name + " " + _.desc).toLowerCase().includes(o.toLowerCase())
  ), y = s === "all" ? x.reduce((_, w) => {
    const C = w.category;
    return _[C] || (_[C] = []), _[C].push(w), _;
  }, {}) : x.filter((_) => _.category === s), j = (_) => a(_), v = ({ quantity: _, options: w }) => {
    g({ type: "ADD", payload: { item: f, quantity: _, options: w } });
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "py-8", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "mb-6 flex gap-3 overflow-x-auto pb-2 no-scrollbar", children: [
      P.reservation.enabled,
      /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: P.coords ? `https://waze.com/ul?ll=${P.coords.lat},${P.coords.lng}&navigate=yes` : `https://waze.com/ul?q=${encodeURIComponent(P.waze_name)}&navigate=yes`,
          target: "_blank",
          rel: "noreferrer",
          className: "btn-outline flex items-center gap-2 flex-shrink-0",
          children: [
            /* @__PURE__ */ r.jsx("span", { children: "📍" }),
            t("location")
          ]
        }
      ),
      /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: `tel:${P.phone}`,
          className: "btn-outline flex items-center gap-2 flex-shrink-0",
          children: [
            /* @__PURE__ */ r.jsx("span", { children: "📞" }),
            t("call")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col md:flex-row md:items-center gap-3 mb-4", children: [
      /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold tracking-tight flex-1", children: t("menu") }),
      /* @__PURE__ */ r.jsx("div", { className: "md:w-64", children: /* @__PURE__ */ r.jsx(If, { value: o, onChange: u }) })
    ] }),
    /* @__PURE__ */ r.jsx(
      Wn,
      {
        categories: m.categories,
        current: s,
        onChange: i
      }
    ),
    s === "all" ? (
      // Render grouped items with category headers
      Object.entries(y).map(([_, w]) => /* @__PURE__ */ r.jsxs("div", { className: "mb-8 mt-4", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ r.jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" }),
          /* @__PURE__ */ r.jsx("div", { className: "bg-[var(--card)] border border-white/10 rounded-full px-4 py-2", children: (() => {
            const C = m.categories.find((S) => S.id === _);
            return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
              /* @__PURE__ */ r.jsxs("h2", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
                (C == null ? void 0 : C.emoji) && /* @__PURE__ */ r.jsx("span", { children: C.emoji }),
                /* @__PURE__ */ r.jsx("span", { children: (C == null ? void 0 : C.title) || _ })
              ] }),
              _ === "breakfast" && /* @__PURE__ */ r.jsx("div", { className: "text-xs text-white/60 bg-white/5 rounded-full px-2 py-1", children: t("served_until_13") })
            ] });
          })() }),
          /* @__PURE__ */ r.jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "flex gap-4 overflow-x-auto pb-4 no-scrollbar items-stretch md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-x-visible md:pb-0", children: w.map((C) => /* @__PURE__ */ r.jsx(
          Pt,
          {
            item: C,
            currency: P.currency,
            onAdd: j,
            onPreview: (S) => l({ src: S.image, alt: S.name })
          },
          C.id
        )) })
      ] }, _))
    ) : (
      // Render single category items with header
      /* @__PURE__ */ r.jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ r.jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" }),
          /* @__PURE__ */ r.jsx("div", { className: "bg-[var(--card)] border border-white/10 rounded-full px-4 py-2", children: (() => {
            const _ = m.categories.find((w) => w.id === s);
            return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
              /* @__PURE__ */ r.jsxs("h2", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
                (_ == null ? void 0 : _.emoji) && /* @__PURE__ */ r.jsx("span", { children: _.emoji }),
                /* @__PURE__ */ r.jsx("span", { children: (_ == null ? void 0 : _.title) || s })
              ] }),
              s === "breakfast" && /* @__PURE__ */ r.jsx("div", { className: "text-xs text-white/60 bg-white/5 rounded-full px-2 py-1", children: t("served_until_13") })
            ] });
          })() }),
          /* @__PURE__ */ r.jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch", children: y.map((_) => /* @__PURE__ */ r.jsx(
          Pt,
          {
            item: _,
            currency: P.currency,
            onAdd: j,
            onPreview: (w) => l({ src: w.image, alt: w.name })
          },
          _.id
        )) })
      ] })
    ),
    /* @__PURE__ */ r.jsx(
      Lf,
      {
        open: !!f,
        item: f,
        onClose: () => a(null),
        onConfirm: v
      }
    ),
    /* @__PURE__ */ r.jsx(
      Hn,
      {
        open: !!c,
        src: c == null ? void 0 : c.src,
        alt: c == null ? void 0 : c.alt,
        onClose: () => l(null)
      }
    ),
    p && /* @__PURE__ */ r.jsxs("div", { className: "fixed inset-0 z-[9000] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ r.jsx("div", { className: "absolute inset-0 bg-black/60" }),
      /* @__PURE__ */ r.jsx("div", { className: "relative bg-[var(--card)] border border-white/10 rounded-xl p-6 max-w-md w-full shadow-2xl", children: /* @__PURE__ */ r.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-semibold", children: t("important_notice_cart") }),
        /* @__PURE__ */ r.jsx("p", { className: "text-sm text-white/80", children: t("closed_popup_message") }),
        /* @__PURE__ */ r.jsx("button", { className: "btn w-full", onClick: () => d(!1), children: t("got_it_button") })
      ] }) })
    ] })
  ] });
}
function th() {
  const { t: n } = Z(), e = Le();
  return T.useEffect(() => {
    document.documentElement.scrollTop = 0, document.body.scrollTop = 0, setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 0);
  }, []), /* @__PURE__ */ r.jsx("div", { className: "py-8", children: /* @__PURE__ */ r.jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: () => e("/"),
        className: "btn-outline flex items-center gap-2 mb-6",
        children: [
          /* @__PURE__ */ r.jsx(rt, { size: 16 }),
          n("back_to_menu")
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold mb-8", children: n("privacy_policy") }),
    /* @__PURE__ */ r.jsxs("div", { className: "space-y-6 text-white/80 leading-relaxed", children: [
      /* @__PURE__ */ r.jsxs("section", { children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("privacy_info_collection") }),
        /* @__PURE__ */ r.jsx("p", { children: n("privacy_info_collection_text") })
      ] }),
      /* @__PURE__ */ r.jsxs("section", { children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("privacy_info_usage") }),
        /* @__PURE__ */ r.jsx("p", { children: n("privacy_info_usage_text") })
      ] }),
      /* @__PURE__ */ r.jsxs("section", { children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("privacy_cookies") }),
        /* @__PURE__ */ r.jsx("p", { children: n("privacy_cookies_text") })
      ] }),
      /* @__PURE__ */ r.jsxs("section", { children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("privacy_whatsapp") }),
        /* @__PURE__ */ r.jsx("p", { children: n("privacy_whatsapp_text") })
      ] }),
      /* @__PURE__ */ r.jsxs("section", { children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("privacy_data_storage") }),
        /* @__PURE__ */ r.jsx("p", { children: n("privacy_data_storage_text") })
      ] }),
      /* @__PURE__ */ r.jsxs("section", { children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("privacy_user_rights") }),
        /* @__PURE__ */ r.jsx("p", { children: n("privacy_user_rights_text") })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "pt-6 border-t border-white/10 text-sm text-white/60", children: [
        n("last_updated"),
        ": 26.9.2025"
      ] })
    ] })
  ] }) });
}
var Ff = Object.defineProperty, Te = Object.getOwnPropertySymbols, rs = Object.prototype.hasOwnProperty, as = Object.prototype.propertyIsEnumerable, Vt = (n, e, t) => e in n ? Ff(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, we = (n, e) => {
  for (var t in e || (e = {}))
    rs.call(e, t) && Vt(n, t, e[t]);
  if (Te)
    for (var t of Te(e))
      as.call(e, t) && Vt(n, t, e[t]);
  return n;
}, ct = (n, e) => {
  var t = {};
  for (var s in n)
    rs.call(n, s) && e.indexOf(s) < 0 && (t[s] = n[s]);
  if (n != null && Te)
    for (var s of Te(n))
      e.indexOf(s) < 0 && as.call(n, s) && (t[s] = n[s]);
  return t;
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var ae;
((n) => {
  const e = class {
    constructor(a, c, l, p) {
      if (this.version = a, this.errorCorrectionLevel = c, this.modules = [], this.isFunction = [], a < e.MIN_VERSION || a > e.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (p < -1 || p > 7)
        throw new RangeError("Mask value out of range");
      this.size = a * 4 + 17;
      let d = [];
      for (let m = 0; m < this.size; m++)
        d.push(!1);
      for (let m = 0; m < this.size; m++)
        this.modules.push(d.slice()), this.isFunction.push(d.slice());
      this.drawFunctionPatterns();
      const g = this.addEccAndInterleave(l);
      if (this.drawCodewords(g), p == -1) {
        let m = 1e9;
        for (let x = 0; x < 8; x++) {
          this.applyMask(x), this.drawFormatBits(x);
          const y = this.getPenaltyScore();
          y < m && (p = x, m = y), this.applyMask(x);
        }
      }
      o(0 <= p && p <= 7), this.mask = p, this.applyMask(p), this.drawFormatBits(p), this.isFunction = [];
    }
    static encodeText(a, c) {
      const l = n.QrSegment.makeSegments(a);
      return e.encodeSegments(l, c);
    }
    static encodeBinary(a, c) {
      const l = n.QrSegment.makeBytes(a);
      return e.encodeSegments([l], c);
    }
    static encodeSegments(a, c, l = 1, p = 40, d = -1, g = !0) {
      if (!(e.MIN_VERSION <= l && l <= p && p <= e.MAX_VERSION) || d < -1 || d > 7)
        throw new RangeError("Invalid value");
      let m, x;
      for (m = l; ; m++) {
        const _ = e.getNumDataCodewords(m, c) * 8, w = f.getTotalBits(a, m);
        if (w <= _) {
          x = w;
          break;
        }
        if (m >= p)
          throw new RangeError("Data too long");
      }
      for (const _ of [e.Ecc.MEDIUM, e.Ecc.QUARTILE, e.Ecc.HIGH])
        g && x <= e.getNumDataCodewords(m, _) * 8 && (c = _);
      let y = [];
      for (const _ of a) {
        s(_.mode.modeBits, 4, y), s(_.numChars, _.mode.numCharCountBits(m), y);
        for (const w of _.getData())
          y.push(w);
      }
      o(y.length == x);
      const j = e.getNumDataCodewords(m, c) * 8;
      o(y.length <= j), s(0, Math.min(4, j - y.length), y), s(0, (8 - y.length % 8) % 8, y), o(y.length % 8 == 0);
      for (let _ = 236; y.length < j; _ ^= 253)
        s(_, 8, y);
      let v = [];
      for (; v.length * 8 < y.length; )
        v.push(0);
      return y.forEach((_, w) => v[w >>> 3] |= _ << 7 - (w & 7)), new e(m, c, v, d);
    }
    getModule(a, c) {
      return 0 <= a && a < this.size && 0 <= c && c < this.size && this.modules[c][a];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let l = 0; l < this.size; l++)
        this.setFunctionModule(6, l, l % 2 == 0), this.setFunctionModule(l, 6, l % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const a = this.getAlignmentPatternPositions(), c = a.length;
      for (let l = 0; l < c; l++)
        for (let p = 0; p < c; p++)
          l == 0 && p == 0 || l == 0 && p == c - 1 || l == c - 1 && p == 0 || this.drawAlignmentPattern(a[l], a[p]);
      this.drawFormatBits(0), this.drawVersion();
    }
    drawFormatBits(a) {
      const c = this.errorCorrectionLevel.formatBits << 3 | a;
      let l = c;
      for (let d = 0; d < 10; d++)
        l = l << 1 ^ (l >>> 9) * 1335;
      const p = (c << 10 | l) ^ 21522;
      o(p >>> 15 == 0);
      for (let d = 0; d <= 5; d++)
        this.setFunctionModule(8, d, i(p, d));
      this.setFunctionModule(8, 7, i(p, 6)), this.setFunctionModule(8, 8, i(p, 7)), this.setFunctionModule(7, 8, i(p, 8));
      for (let d = 9; d < 15; d++)
        this.setFunctionModule(14 - d, 8, i(p, d));
      for (let d = 0; d < 8; d++)
        this.setFunctionModule(this.size - 1 - d, 8, i(p, d));
      for (let d = 8; d < 15; d++)
        this.setFunctionModule(8, this.size - 15 + d, i(p, d));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7)
        return;
      let a = this.version;
      for (let l = 0; l < 12; l++)
        a = a << 1 ^ (a >>> 11) * 7973;
      const c = this.version << 12 | a;
      o(c >>> 18 == 0);
      for (let l = 0; l < 18; l++) {
        const p = i(c, l), d = this.size - 11 + l % 3, g = Math.floor(l / 3);
        this.setFunctionModule(d, g, p), this.setFunctionModule(g, d, p);
      }
    }
    drawFinderPattern(a, c) {
      for (let l = -4; l <= 4; l++)
        for (let p = -4; p <= 4; p++) {
          const d = Math.max(Math.abs(p), Math.abs(l)), g = a + p, m = c + l;
          0 <= g && g < this.size && 0 <= m && m < this.size && this.setFunctionModule(g, m, d != 2 && d != 4);
        }
    }
    drawAlignmentPattern(a, c) {
      for (let l = -2; l <= 2; l++)
        for (let p = -2; p <= 2; p++)
          this.setFunctionModule(a + p, c + l, Math.max(Math.abs(p), Math.abs(l)) != 1);
    }
    setFunctionModule(a, c, l) {
      this.modules[c][a] = l, this.isFunction[c][a] = !0;
    }
    addEccAndInterleave(a) {
      const c = this.version, l = this.errorCorrectionLevel;
      if (a.length != e.getNumDataCodewords(c, l))
        throw new RangeError("Invalid argument");
      const p = e.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][c], d = e.ECC_CODEWORDS_PER_BLOCK[l.ordinal][c], g = Math.floor(e.getNumRawDataModules(c) / 8), m = p - g % p, x = Math.floor(g / p);
      let y = [];
      const j = e.reedSolomonComputeDivisor(d);
      for (let _ = 0, w = 0; _ < p; _++) {
        let C = a.slice(w, w + x - d + (_ < m ? 0 : 1));
        w += C.length;
        const S = e.reedSolomonComputeRemainder(C, j);
        _ < m && C.push(0), y.push(C.concat(S));
      }
      let v = [];
      for (let _ = 0; _ < y[0].length; _++)
        y.forEach((w, C) => {
          (_ != x - d || C >= m) && v.push(w[_]);
        });
      return o(v.length == g), v;
    }
    drawCodewords(a) {
      if (a.length != Math.floor(e.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let c = 0;
      for (let l = this.size - 1; l >= 1; l -= 2) {
        l == 6 && (l = 5);
        for (let p = 0; p < this.size; p++)
          for (let d = 0; d < 2; d++) {
            const g = l - d, x = (l + 1 & 2) == 0 ? this.size - 1 - p : p;
            !this.isFunction[x][g] && c < a.length * 8 && (this.modules[x][g] = i(a[c >>> 3], 7 - (c & 7)), c++);
          }
      }
      o(c == a.length * 8);
    }
    applyMask(a) {
      if (a < 0 || a > 7)
        throw new RangeError("Mask value out of range");
      for (let c = 0; c < this.size; c++)
        for (let l = 0; l < this.size; l++) {
          let p;
          switch (a) {
            case 0:
              p = (l + c) % 2 == 0;
              break;
            case 1:
              p = c % 2 == 0;
              break;
            case 2:
              p = l % 3 == 0;
              break;
            case 3:
              p = (l + c) % 3 == 0;
              break;
            case 4:
              p = (Math.floor(l / 3) + Math.floor(c / 2)) % 2 == 0;
              break;
            case 5:
              p = l * c % 2 + l * c % 3 == 0;
              break;
            case 6:
              p = (l * c % 2 + l * c % 3) % 2 == 0;
              break;
            case 7:
              p = ((l + c) % 2 + l * c % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[c][l] && p && (this.modules[c][l] = !this.modules[c][l]);
        }
    }
    getPenaltyScore() {
      let a = 0;
      for (let d = 0; d < this.size; d++) {
        let g = !1, m = 0, x = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0; y < this.size; y++)
          this.modules[d][y] == g ? (m++, m == 5 ? a += e.PENALTY_N1 : m > 5 && a++) : (this.finderPenaltyAddHistory(m, x), g || (a += this.finderPenaltyCountPatterns(x) * e.PENALTY_N3), g = this.modules[d][y], m = 1);
        a += this.finderPenaltyTerminateAndCount(g, m, x) * e.PENALTY_N3;
      }
      for (let d = 0; d < this.size; d++) {
        let g = !1, m = 0, x = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0; y < this.size; y++)
          this.modules[y][d] == g ? (m++, m == 5 ? a += e.PENALTY_N1 : m > 5 && a++) : (this.finderPenaltyAddHistory(m, x), g || (a += this.finderPenaltyCountPatterns(x) * e.PENALTY_N3), g = this.modules[y][d], m = 1);
        a += this.finderPenaltyTerminateAndCount(g, m, x) * e.PENALTY_N3;
      }
      for (let d = 0; d < this.size - 1; d++)
        for (let g = 0; g < this.size - 1; g++) {
          const m = this.modules[d][g];
          m == this.modules[d][g + 1] && m == this.modules[d + 1][g] && m == this.modules[d + 1][g + 1] && (a += e.PENALTY_N2);
        }
      let c = 0;
      for (const d of this.modules)
        c = d.reduce((g, m) => g + (m ? 1 : 0), c);
      const l = this.size * this.size, p = Math.ceil(Math.abs(c * 20 - l * 10) / l) - 1;
      return o(0 <= p && p <= 9), a += p * e.PENALTY_N4, o(0 <= a && a <= 2568888), a;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const a = Math.floor(this.version / 7) + 2, c = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (a * 2 - 2)) * 2;
        let l = [6];
        for (let p = this.size - 7; l.length < a; p -= c)
          l.splice(1, 0, p);
        return l;
      }
    }
    static getNumRawDataModules(a) {
      if (a < e.MIN_VERSION || a > e.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let c = (16 * a + 128) * a + 64;
      if (a >= 2) {
        const l = Math.floor(a / 7) + 2;
        c -= (25 * l - 10) * l - 55, a >= 7 && (c -= 36);
      }
      return o(208 <= c && c <= 29648), c;
    }
    static getNumDataCodewords(a, c) {
      return Math.floor(e.getNumRawDataModules(a) / 8) - e.ECC_CODEWORDS_PER_BLOCK[c.ordinal][a] * e.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][a];
    }
    static reedSolomonComputeDivisor(a) {
      if (a < 1 || a > 255)
        throw new RangeError("Degree out of range");
      let c = [];
      for (let p = 0; p < a - 1; p++)
        c.push(0);
      c.push(1);
      let l = 1;
      for (let p = 0; p < a; p++) {
        for (let d = 0; d < c.length; d++)
          c[d] = e.reedSolomonMultiply(c[d], l), d + 1 < c.length && (c[d] ^= c[d + 1]);
        l = e.reedSolomonMultiply(l, 2);
      }
      return c;
    }
    static reedSolomonComputeRemainder(a, c) {
      let l = c.map((p) => 0);
      for (const p of a) {
        const d = p ^ l.shift();
        l.push(0), c.forEach((g, m) => l[m] ^= e.reedSolomonMultiply(g, d));
      }
      return l;
    }
    static reedSolomonMultiply(a, c) {
      if (a >>> 8 || c >>> 8)
        throw new RangeError("Byte out of range");
      let l = 0;
      for (let p = 7; p >= 0; p--)
        l = l << 1 ^ (l >>> 7) * 285, l ^= (c >>> p & 1) * a;
      return o(l >>> 8 == 0), l;
    }
    finderPenaltyCountPatterns(a) {
      const c = a[1];
      o(c <= this.size * 3);
      const l = c > 0 && a[2] == c && a[3] == c * 3 && a[4] == c && a[5] == c;
      return (l && a[0] >= c * 4 && a[6] >= c ? 1 : 0) + (l && a[6] >= c * 4 && a[0] >= c ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(a, c, l) {
      return a && (this.finderPenaltyAddHistory(c, l), c = 0), c += this.size, this.finderPenaltyAddHistory(c, l), this.finderPenaltyCountPatterns(l);
    }
    finderPenaltyAddHistory(a, c) {
      c[0] == 0 && (a += this.size), c.pop(), c.unshift(a);
    }
  };
  let t = e;
  t.MIN_VERSION = 1, t.MAX_VERSION = 40, t.PENALTY_N1 = 3, t.PENALTY_N2 = 3, t.PENALTY_N3 = 40, t.PENALTY_N4 = 10, t.ECC_CODEWORDS_PER_BLOCK = [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
  ], t.NUM_ERROR_CORRECTION_BLOCKS = [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
  ], n.QrCode = t;
  function s(a, c, l) {
    if (c < 0 || c > 31 || a >>> c)
      throw new RangeError("Value out of range");
    for (let p = c - 1; p >= 0; p--)
      l.push(a >>> p & 1);
  }
  function i(a, c) {
    return (a >>> c & 1) != 0;
  }
  function o(a) {
    if (!a)
      throw new Error("Assertion error");
  }
  const u = class {
    constructor(a, c, l) {
      if (this.mode = a, this.numChars = c, this.bitData = l, c < 0)
        throw new RangeError("Invalid argument");
      this.bitData = l.slice();
    }
    static makeBytes(a) {
      let c = [];
      for (const l of a)
        s(l, 8, c);
      return new u(u.Mode.BYTE, a.length, c);
    }
    static makeNumeric(a) {
      if (!u.isNumeric(a))
        throw new RangeError("String contains non-numeric characters");
      let c = [];
      for (let l = 0; l < a.length; ) {
        const p = Math.min(a.length - l, 3);
        s(parseInt(a.substr(l, p), 10), p * 3 + 1, c), l += p;
      }
      return new u(u.Mode.NUMERIC, a.length, c);
    }
    static makeAlphanumeric(a) {
      if (!u.isAlphanumeric(a))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let c = [], l;
      for (l = 0; l + 2 <= a.length; l += 2) {
        let p = u.ALPHANUMERIC_CHARSET.indexOf(a.charAt(l)) * 45;
        p += u.ALPHANUMERIC_CHARSET.indexOf(a.charAt(l + 1)), s(p, 11, c);
      }
      return l < a.length && s(u.ALPHANUMERIC_CHARSET.indexOf(a.charAt(l)), 6, c), new u(u.Mode.ALPHANUMERIC, a.length, c);
    }
    static makeSegments(a) {
      return a == "" ? [] : u.isNumeric(a) ? [u.makeNumeric(a)] : u.isAlphanumeric(a) ? [u.makeAlphanumeric(a)] : [u.makeBytes(u.toUtf8ByteArray(a))];
    }
    static makeEci(a) {
      let c = [];
      if (a < 0)
        throw new RangeError("ECI assignment value out of range");
      if (a < 128)
        s(a, 8, c);
      else if (a < 16384)
        s(2, 2, c), s(a, 14, c);
      else if (a < 1e6)
        s(6, 3, c), s(a, 21, c);
      else
        throw new RangeError("ECI assignment value out of range");
      return new u(u.Mode.ECI, 0, c);
    }
    static isNumeric(a) {
      return u.NUMERIC_REGEX.test(a);
    }
    static isAlphanumeric(a) {
      return u.ALPHANUMERIC_REGEX.test(a);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(a, c) {
      let l = 0;
      for (const p of a) {
        const d = p.mode.numCharCountBits(c);
        if (p.numChars >= 1 << d)
          return 1 / 0;
        l += 4 + d + p.bitData.length;
      }
      return l;
    }
    static toUtf8ByteArray(a) {
      a = encodeURI(a);
      let c = [];
      for (let l = 0; l < a.length; l++)
        a.charAt(l) != "%" ? c.push(a.charCodeAt(l)) : (c.push(parseInt(a.substr(l + 1, 2), 16)), l += 2);
      return c;
    }
  };
  let f = u;
  f.NUMERIC_REGEX = /^[0-9]*$/, f.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, f.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", n.QrSegment = f;
})(ae || (ae = {}));
((n) => {
  ((e) => {
    const t = class {
      constructor(i, o) {
        this.ordinal = i, this.formatBits = o;
      }
    };
    let s = t;
    s.LOW = new t(0, 1), s.MEDIUM = new t(1, 0), s.QUARTILE = new t(2, 3), s.HIGH = new t(3, 2), e.Ecc = s;
  })(n.QrCode || (n.QrCode = {}));
})(ae || (ae = {}));
((n) => {
  ((e) => {
    const t = class {
      constructor(i, o) {
        this.modeBits = i, this.numBitsCharCount = o;
      }
      numCharCountBits(i) {
        return this.numBitsCharCount[Math.floor((i + 7) / 17)];
      }
    };
    let s = t;
    s.NUMERIC = new t(1, [10, 12, 14]), s.ALPHANUMERIC = new t(2, [9, 11, 13]), s.BYTE = new t(4, [8, 16, 16]), s.KANJI = new t(8, [8, 10, 12]), s.ECI = new t(7, [0, 0, 0]), e.Mode = s;
  })(n.QrSegment || (n.QrSegment = {}));
})(ae || (ae = {}));
var ue = ae;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var is = {
  L: ue.QrCode.Ecc.LOW,
  M: ue.QrCode.Ecc.MEDIUM,
  Q: ue.QrCode.Ecc.QUARTILE,
  H: ue.QrCode.Ecc.HIGH
}, os = 128, cs = "L", ls = "#FFFFFF", us = "#000000", ds = !1, lt = 4, zf = 0.1;
function fs(n, e = 0) {
  const t = [];
  return n.forEach(function(s, i) {
    let o = null;
    s.forEach(function(u, f) {
      if (!u && o !== null) {
        t.push(`M${o + e} ${i + e}h${f - o}v1H${o + e}z`), o = null;
        return;
      }
      if (f === s.length - 1) {
        if (!u)
          return;
        o === null ? t.push(`M${f + e},${i + e} h1v1H${f + e}z`) : t.push(`M${o + e},${i + e} h${f + 1 - o}v1H${o + e}z`);
        return;
      }
      u && o === null && (o = f);
    });
  }), t.join("");
}
function hs(n, e) {
  return n.slice().map((t, s) => s < e.y || s >= e.y + e.h ? t : t.map((i, o) => o < e.x || o >= e.x + e.w ? i : !1));
}
function ps(n, e, t, s) {
  if (s == null)
    return null;
  const i = t ? lt : 0, o = n.length + i * 2, u = Math.floor(e * zf), f = o / e, a = (s.width || u) * f, c = (s.height || u) * f, l = s.x == null ? n.length / 2 - a / 2 : s.x * f, p = s.y == null ? n.length / 2 - c / 2 : s.y * f;
  let d = null;
  if (s.excavate) {
    let g = Math.floor(l), m = Math.floor(p), x = Math.ceil(a + l - g), y = Math.ceil(c + p - m);
    d = { x: g, y: m, w: x, h: y };
  }
  return { x: l, y: p, h: c, w: a, excavation: d };
}
var Df = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}();
function Uf(n) {
  const e = n, {
    value: t,
    size: s = os,
    level: i = cs,
    bgColor: o = ls,
    fgColor: u = us,
    includeMargin: f = ds,
    style: a,
    imageSettings: c
  } = e, l = ct(e, [
    "value",
    "size",
    "level",
    "bgColor",
    "fgColor",
    "includeMargin",
    "style",
    "imageSettings"
  ]), p = c == null ? void 0 : c.src, d = Ee(null), g = Ee(null), [m, x] = st(!1);
  be(() => {
    if (d.current != null) {
      const v = d.current, _ = v.getContext("2d");
      if (!_)
        return;
      let w = ue.QrCode.encodeText(t, is[i]).getModules();
      const C = f ? lt : 0, S = w.length + C * 2, E = ps(w, s, f, c), L = g.current, A = E != null && L !== null && L.complete && L.naturalHeight !== 0 && L.naturalWidth !== 0;
      A && E.excavation != null && (w = hs(w, E.excavation));
      const z = window.devicePixelRatio || 1;
      v.height = v.width = s * z;
      const R = s / S * z;
      _.scale(R, R), _.fillStyle = o, _.fillRect(0, 0, S, S), _.fillStyle = u, Df ? _.fill(new Path2D(fs(w, C))) : w.forEach(function(M, $) {
        M.forEach(function(D, B) {
          D && _.fillRect(B + C, $ + C, 1, 1);
        });
      }), A && _.drawImage(L, E.x + C, E.y + C, E.w, E.h);
    }
  }), be(() => {
    x(!1);
  }, [p]);
  const y = we({ height: s, width: s }, a);
  let j = null;
  return p != null && (j = /* @__PURE__ */ T.createElement("img", {
    src: p,
    key: p,
    style: { display: "none" },
    onLoad: () => {
      x(!0);
    },
    ref: g
  })), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("canvas", we({
    style: y,
    height: s,
    width: s,
    ref: d
  }, l)), j);
}
function Vf(n) {
  const e = n, {
    value: t,
    size: s = os,
    level: i = cs,
    bgColor: o = ls,
    fgColor: u = us,
    includeMargin: f = ds,
    imageSettings: a
  } = e, c = ct(e, [
    "value",
    "size",
    "level",
    "bgColor",
    "fgColor",
    "includeMargin",
    "imageSettings"
  ]);
  let l = ue.QrCode.encodeText(t, is[i]).getModules();
  const p = f ? lt : 0, d = l.length + p * 2, g = ps(l, s, f, a);
  let m = null;
  a != null && g != null && (g.excavation != null && (l = hs(l, g.excavation)), m = /* @__PURE__ */ T.createElement("image", {
    xlinkHref: a.src,
    height: g.h,
    width: g.w,
    x: g.x + p,
    y: g.y + p,
    preserveAspectRatio: "none"
  }));
  const x = fs(l, p);
  return /* @__PURE__ */ T.createElement("svg", we({
    height: s,
    width: s,
    viewBox: `0 0 ${d} ${d}`
  }, c), /* @__PURE__ */ T.createElement("path", {
    fill: o,
    d: `M0,0 h${d}v${d}H0z`,
    shapeRendering: "crispEdges"
  }), /* @__PURE__ */ T.createElement("path", {
    fill: u,
    d: x,
    shapeRendering: "crispEdges"
  }), m);
}
var Bf = (n) => {
  const e = n, { renderAs: t } = e, s = ct(e, ["renderAs"]);
  return t === "svg" ? /* @__PURE__ */ T.createElement(Vf, we({}, s)) : /* @__PURE__ */ T.createElement(Uf, we({}, s));
};
function sh() {
  const { t: n } = Z(), [e, t] = T.useState(window.location.origin), s = T.useRef(null), i = () => {
    const o = s.current.querySelector("canvas");
    if (!o)
      return;
    const u = document.createElement("a");
    u.href = o.toDataURL("image/png"), u.download = "qr-menu.png", u.click();
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "py-10 max-w-lg mx-auto space-y-4 text-center", children: [
    /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold", children: n("qr") }),
    /* @__PURE__ */ r.jsxs("div", { className: "card p-6 flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ r.jsx("div", { ref: s, className: "bg-white p-4 rounded-2xl", children: /* @__PURE__ */ r.jsx(Bf, { value: e, size: 256, includeMargin: !0 }) }),
      /* @__PURE__ */ r.jsx("input", { value: e, onChange: (o) => t(o.target.value), className: "w-full" }),
      /* @__PURE__ */ r.jsx("button", { className: "btn w-full", onClick: i, children: "PNG" })
    ] })
  ] });
}
function nh() {
  const { t: n, i18n: e } = Z(), [t, s] = T.useState(!1), i = (o) => e.language === "ar" ? o.name_ar : e.language === "he" ? o.name_he : o.name;
  return /* @__PURE__ */ r.jsxs("div", { className: "py-8", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold tracking-tight mb-4", children: n("book_table") }),
      /* @__PURE__ */ r.jsx("p", { className: "text-white/70 max-w-2xl mx-auto", children: n("reservation_description") })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ r.jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ r.jsx(Ge, { size: 20 }),
          n("open_hours")
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ r.jsx("span", { children: n("sun_thu") }),
            /* @__PURE__ */ r.jsx("span", { children: P.hours["sun-thu"] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ r.jsx("span", { children: n("fri") }),
            /* @__PURE__ */ r.jsx("span", { children: P.hours.fri })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ r.jsx("span", { children: n("sat") }),
            /* @__PURE__ */ r.jsx("span", { children: P.hours.sat })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ r.jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ r.jsx(at, { size: 20 }),
          n("reservation_area")
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "space-y-2", children: P.reservation.areas.map((o) => /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ r.jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full" }),
          /* @__PURE__ */ r.jsx("span", { children: i(o) })
        ] }, o.id)) })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "card p-6 mb-8", children: [
      /* @__PURE__ */ r.jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ r.jsx(ke, { size: 20 }),
        n("reservation")
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "grid md:grid-cols-3 gap-4 mb-6", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ r.jsx("div", { className: "w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ r.jsx(ke, { size: 24, className: "text-green-400" }) }),
          /* @__PURE__ */ r.jsxs("div", { className: "text-sm font-medium", children: [
            "1. ",
            n("reservation_date")
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "text-xs text-white/60", children: n("choose_date") })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ r.jsx("div", { className: "w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ r.jsx(Ge, { size: 24, className: "text-blue-400" }) }),
          /* @__PURE__ */ r.jsxs("div", { className: "text-sm font-medium", children: [
            "2. ",
            n("reservation_time")
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "text-xs text-white/60", children: n("select_time") })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ r.jsx("div", { className: "w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ r.jsx(Jt, { size: 24, className: "text-purple-400" }) }),
          /* @__PURE__ */ r.jsxs("div", { className: "text-sm font-medium", children: [
            "3. ",
            n("reservation_guests")
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "text-xs text-white/60", children: n("number_people") })
        ] })
      ] }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: () => s(!0),
          className: "btn w-full",
          children: n("book_table")
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "card p-6 bg-blue-500/10 border-blue-500/20", children: [
      /* @__PURE__ */ r.jsxs("h3", { className: "text-lg font-semibold mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ r.jsx(it, { size: 20 }),
        n("important_notice")
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "space-y-2 text-sm text-white/80", children: [
        /* @__PURE__ */ r.jsxs("p", { children: [
          "• ",
          n("reservation_wait")
        ] }),
        /* @__PURE__ */ r.jsxs("p", { children: [
          "• ",
          n("reservation_no_response")
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "mt-4 flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ r.jsx(ot, { size: 16 }),
        /* @__PURE__ */ r.jsxs("span", { children: [
          n("need_assistance"),
          " "
        ] }),
        /* @__PURE__ */ r.jsx("a", { href: `tel:${P.phone}`, className: "text-green-400 hover:underline", children: P.phone })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(Mf, { open: t, onClose: () => s(!1) })
  ] });
}
function rh() {
  const { t: n } = Z(), e = Le();
  return T.useEffect(() => {
    document.documentElement.scrollTop = 0, document.body.scrollTop = 0, setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 0);
  }, []), /* @__PURE__ */ r.jsx("div", { className: "py-8", children: /* @__PURE__ */ r.jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: () => e("/"),
        className: "btn-outline flex items-center gap-2 mb-6",
        children: [
          /* @__PURE__ */ r.jsx(rt, { size: 16 }),
          n("back_to_menu")
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold mb-8", children: n("terms_of_service") }),
    /* @__PURE__ */ r.jsxs("div", { className: "space-y-6 text-white/80 leading-relaxed", children: [
      /* @__PURE__ */ r.jsxs("section", { children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("terms_acceptance") }),
        /* @__PURE__ */ r.jsx("p", { children: n("terms_acceptance_text") })
      ] }),
      /* @__PURE__ */ r.jsxs("section", { children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("terms_service_usage") }),
        /* @__PURE__ */ r.jsx("p", { children: n("terms_service_usage_text") })
      ] }),
      /* @__PURE__ */ r.jsxs("section", { children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("terms_orders") }),
        /* @__PURE__ */ r.jsx("p", { children: n("terms_orders_text") })
      ] }),
      /* @__PURE__ */ r.jsxs("section", { children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("terms_payment") }),
        /* @__PURE__ */ r.jsx("p", { children: n("terms_payment_text") })
      ] }),
      /* @__PURE__ */ r.jsxs("section", { children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("terms_liability") }),
        /* @__PURE__ */ r.jsx("p", { children: n("terms_liability_text") })
      ] }),
      /* @__PURE__ */ r.jsxs("section", { children: [
        /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("terms_changes") }),
        /* @__PURE__ */ r.jsx("p", { children: n("terms_changes_text") })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "pt-6 border-t border-white/10 text-sm text-white/60", children: [
        n("last_updated"),
        ": 26.9.2025"
      ] })
    ] })
  ] }) });
}
export {
  Xf as AccessibilityPage,
  Gf as AnimationProvider,
  Yf as CartButton,
  Jf as CartDrawer,
  Kf as CartProvider,
  Wn as CategoryTabs,
  Zf as ContactPage,
  Hn as ImageLightbox,
  Pt as ItemCard,
  Qf as LanguageSwitcher,
  eh as MenuPage,
  Lf as OptionModal,
  th as PrivacyPage,
  sh as QRPage,
  Mf as ReservationModal,
  nh as ReservationPage,
  If as SearchBar,
  rh as TermsPage,
  ss as applyDir,
  Et as cartTotal,
  Y as i18n,
  Zt as isRestaurantOpen,
  Tf as useAnimation,
  nt as useCart
};
