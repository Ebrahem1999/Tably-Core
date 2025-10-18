import I, { forwardRef as Bt, createElement as Ye, createContext as Vt, useContext as qt, useState as tt, useRef as Ce, useEffect as be, useCallback as Us } from "react";
import { createPortal as Wt } from "react-dom";
import { useNavigate as st } from "react-router-dom";
var Je = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t;
function Bs() {
  if ($t)
    return me;
  $t = 1;
  var n = I, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(d, r, o) {
    var l, f = {}, p = null, g = null;
    o !== void 0 && (p = "" + o), r.key !== void 0 && (p = "" + r.key), r.ref !== void 0 && (g = r.ref);
    for (l in r)
      s.call(r, l) && !i.hasOwnProperty(l) && (f[l] = r[l]);
    if (d && d.defaultProps)
      for (l in r = d.defaultProps, r)
        f[l] === void 0 && (f[l] = r[l]);
    return { $$typeof: e, type: d, key: p, ref: g, props: f, _owner: a.current };
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
function Vs() {
  return St || (St = 1, process.env.NODE_ENV !== "production" && function() {
    var n = I, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), d = Symbol.for("react.context"), r = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m = Symbol.iterator, _ = "@@iterator";
    function b(h) {
      if (h === null || typeof h != "object")
        return null;
      var x = m && h[m] || h[_];
      return typeof x == "function" ? x : null;
    }
    var w = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(h) {
      {
        for (var x = arguments.length, N = new Array(x > 1 ? x - 1 : 0), R = 1; R < x; R++)
          N[R - 1] = arguments[R];
        v("error", h, N);
      }
    }
    function v(h, x, N) {
      {
        var R = w.ReactDebugCurrentFrame, z = R.getStackAddendum();
        z !== "" && (x += "%s", N = N.concat([z]));
        var V = N.map(function(L) {
          return String(L);
        });
        V.unshift("Warning: " + x), Function.prototype.apply.call(console[h], console, V);
      }
    }
    var $ = !1, j = !1, S = !1, P = !1, E = !1, M;
    M = Symbol.for("react.module.reference");
    function O(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === s || h === i || E || h === a || h === o || h === l || P || h === g || $ || j || S || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === f || h.$$typeof === u || h.$$typeof === d || h.$$typeof === r || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === M || h.getModuleId !== void 0));
    }
    function C(h, x, N) {
      var R = h.displayName;
      if (R)
        return R;
      var z = x.displayName || x.name || "";
      return z !== "" ? N + "(" + z + ")" : N;
    }
    function k(h) {
      return h.displayName || "Context";
    }
    function D(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case s:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case o:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case d:
            var x = h;
            return k(x) + ".Consumer";
          case u:
            var N = h;
            return k(N._context) + ".Provider";
          case r:
            return C(h, h.render, "ForwardRef");
          case f:
            var R = h.displayName || null;
            return R !== null ? R : D(h.type) || "Memo";
          case p: {
            var z = h, V = z._payload, L = z._init;
            try {
              return D(L(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, W = 0, q, T, U, ee, se, pe, lt;
    function ut() {
    }
    ut.__reactDisabledLog = !0;
    function fs() {
      {
        if (W === 0) {
          q = console.log, T = console.info, U = console.warn, ee = console.error, se = console.group, pe = console.groupCollapsed, lt = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: ut,
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
        W++;
      }
    }
    function ms() {
      {
        if (W--, W === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, h, {
              value: q
            }),
            info: B({}, h, {
              value: T
            }),
            warn: B({}, h, {
              value: U
            }),
            error: B({}, h, {
              value: ee
            }),
            group: B({}, h, {
              value: se
            }),
            groupCollapsed: B({}, h, {
              value: pe
            }),
            groupEnd: B({}, h, {
              value: lt
            })
          });
        }
        W < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ie = w.ReactCurrentDispatcher, ze;
    function je(h, x, N) {
      {
        if (ze === void 0)
          try {
            throw Error();
          } catch (z) {
            var R = z.stack.trim().match(/\n( *(at )?)/);
            ze = R && R[1] || "";
          }
        return `
` + ze + h;
      }
    }
    var Fe = !1, Ne;
    {
      var gs = typeof WeakMap == "function" ? WeakMap : Map;
      Ne = new gs();
    }
    function dt(h, x) {
      if (!h || Fe)
        return "";
      {
        var N = Ne.get(h);
        if (N !== void 0)
          return N;
      }
      var R;
      Fe = !0;
      var z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = Ie.current, Ie.current = null, fs();
      try {
        if (x) {
          var L = function() {
            throw Error();
          };
          if (Object.defineProperty(L.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(L, []);
            } catch (G) {
              R = G;
            }
            Reflect.construct(h, [], L);
          } else {
            try {
              L.call();
            } catch (G) {
              R = G;
            }
            h.call(L.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            R = G;
          }
          h();
        }
      } catch (G) {
        if (G && R && typeof G.stack == "string") {
          for (var A = G.stack.split(`
`), Q = R.stack.split(`
`), H = A.length - 1, K = Q.length - 1; H >= 1 && K >= 0 && A[H] !== Q[K]; )
            K--;
          for (; H >= 1 && K >= 0; H--, K--)
            if (A[H] !== Q[K]) {
              if (H !== 1 || K !== 1)
                do
                  if (H--, K--, K < 0 || A[H] !== Q[K]) {
                    var X = `
` + A[H].replace(" at new ", " at ");
                    return h.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", h.displayName)), typeof h == "function" && Ne.set(h, X), X;
                  }
                while (H >= 1 && K >= 0);
              break;
            }
        }
      } finally {
        Fe = !1, Ie.current = V, ms(), Error.prepareStackTrace = z;
      }
      var oe = h ? h.displayName || h.name : "", ne = oe ? je(oe) : "";
      return typeof h == "function" && Ne.set(h, ne), ne;
    }
    function _s(h, x, N) {
      return dt(h, !1);
    }
    function ys(h) {
      var x = h.prototype;
      return !!(x && x.isReactComponent);
    }
    function $e(h, x, N) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return dt(h, ys(h));
      if (typeof h == "string")
        return je(h);
      switch (h) {
        case o:
          return je("Suspense");
        case l:
          return je("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case r:
            return _s(h.render);
          case f:
            return $e(h.type, x, N);
          case p: {
            var R = h, z = R._payload, V = R._init;
            try {
              return $e(V(z), x, N);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, pt = {}, ht = w.ReactDebugCurrentFrame;
    function Se(h) {
      if (h) {
        var x = h._owner, N = $e(h.type, h._source, x ? x.type : null);
        ht.setExtraStackFrame(N);
      } else
        ht.setExtraStackFrame(null);
    }
    function xs(h, x, N, R, z) {
      {
        var V = Function.call.bind(he);
        for (var L in h)
          if (V(h, L)) {
            var A = void 0;
            try {
              if (typeof h[L] != "function") {
                var Q = Error((R || "React class") + ": " + N + " type `" + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[L] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Q.name = "Invariant Violation", Q;
              }
              A = h[L](x, L, R, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (H) {
              A = H;
            }
            A && !(A instanceof Error) && (Se(z), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", N, L, typeof A), Se(null)), A instanceof Error && !(A.message in pt) && (pt[A.message] = !0, Se(z), y("Failed %s type: %s", N, A.message), Se(null));
          }
      }
    }
    var bs = Array.isArray;
    function De(h) {
      return bs(h);
    }
    function vs(h) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, N = x && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return N;
      }
    }
    function ws(h) {
      try {
        return ft(h), !1;
      } catch {
        return !0;
      }
    }
    function ft(h) {
      return "" + h;
    }
    function mt(h) {
      if (ws(h))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vs(h)), ft(h);
    }
    var fe = w.ReactCurrentOwner, js = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gt, _t, Ue;
    Ue = {};
    function Ns(h) {
      if (he.call(h, "ref")) {
        var x = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function $s(h) {
      if (he.call(h, "key")) {
        var x = Object.getOwnPropertyDescriptor(h, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function Ss(h, x) {
      if (typeof h.ref == "string" && fe.current && x && fe.current.stateNode !== x) {
        var N = D(fe.current.type);
        Ue[N] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(fe.current.type), h.ref), Ue[N] = !0);
      }
    }
    function ks(h, x) {
      {
        var N = function() {
          gt || (gt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
    }
    function Cs(h, x) {
      {
        var N = function() {
          _t || (_t = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
    }
    var Es = function(h, x, N, R, z, V, L) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: h,
        key: x,
        ref: N,
        props: L,
        // Record the component responsible for creating this element.
        _owner: V
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function Rs(h, x, N, R, z) {
      {
        var V, L = {}, A = null, Q = null;
        N !== void 0 && (mt(N), A = "" + N), $s(x) && (mt(x.key), A = "" + x.key), Ns(x) && (Q = x.ref, Ss(x, z));
        for (V in x)
          he.call(x, V) && !js.hasOwnProperty(V) && (L[V] = x[V]);
        if (h && h.defaultProps) {
          var H = h.defaultProps;
          for (V in H)
            L[V] === void 0 && (L[V] = H[V]);
        }
        if (A || Q) {
          var K = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          A && ks(L, K), Q && Cs(L, K);
        }
        return Es(h, A, Q, z, R, fe.current, L);
      }
    }
    var Be = w.ReactCurrentOwner, yt = w.ReactDebugCurrentFrame;
    function ie(h) {
      if (h) {
        var x = h._owner, N = $e(h.type, h._source, x ? x.type : null);
        yt.setExtraStackFrame(N);
      } else
        yt.setExtraStackFrame(null);
    }
    var Ve;
    Ve = !1;
    function qe(h) {
      return typeof h == "object" && h !== null && h.$$typeof === e;
    }
    function xt() {
      {
        if (Be.current) {
          var h = D(Be.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function Os(h) {
      {
        if (h !== void 0) {
          var x = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + x + ":" + N + ".";
        }
        return "";
      }
    }
    var bt = {};
    function Ps(h) {
      {
        var x = xt();
        if (!x) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (x = `

Check the top-level render call using <` + N + ">.");
        }
        return x;
      }
    }
    function vt(h, x) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var N = Ps(x);
        if (bt[N])
          return;
        bt[N] = !0;
        var R = "";
        h && h._owner && h._owner !== Be.current && (R = " It was passed a child from " + D(h._owner.type) + "."), ie(h), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, R), ie(null);
      }
    }
    function wt(h, x) {
      {
        if (typeof h != "object")
          return;
        if (De(h))
          for (var N = 0; N < h.length; N++) {
            var R = h[N];
            qe(R) && vt(R, x);
          }
        else if (qe(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var z = b(h);
          if (typeof z == "function" && z !== h.entries)
            for (var V = z.call(h), L; !(L = V.next()).done; )
              qe(L.value) && vt(L.value, x);
        }
      }
    }
    function Ts(h) {
      {
        var x = h.type;
        if (x == null || typeof x == "string")
          return;
        var N;
        if (typeof x == "function")
          N = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === r || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        x.$$typeof === f))
          N = x.propTypes;
        else
          return;
        if (N) {
          var R = D(x);
          xs(N, h.props, "prop", R, h);
        } else if (x.PropTypes !== void 0 && !Ve) {
          Ve = !0;
          var z = D(x);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function As(h) {
      {
        for (var x = Object.keys(h.props), N = 0; N < x.length; N++) {
          var R = x[N];
          if (R !== "children" && R !== "key") {
            ie(h), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), ie(null);
            break;
          }
        }
        h.ref !== null && (ie(h), y("Invalid attribute `ref` supplied to `React.Fragment`."), ie(null));
      }
    }
    var jt = {};
    function Nt(h, x, N, R, z, V) {
      {
        var L = O(h);
        if (!L) {
          var A = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Q = Os(z);
          Q ? A += Q : A += xt();
          var H;
          h === null ? H = "null" : De(h) ? H = "array" : h !== void 0 && h.$$typeof === e ? (H = "<" + (D(h.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : H = typeof h, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", H, A);
        }
        var K = Rs(h, x, N, z, V);
        if (K == null)
          return K;
        if (L) {
          var X = x.children;
          if (X !== void 0)
            if (R)
              if (De(X)) {
                for (var oe = 0; oe < X.length; oe++)
                  wt(X[oe], h);
                Object.freeze && Object.freeze(X);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wt(X, h);
        }
        if (he.call(x, "key")) {
          var ne = D(h), G = Object.keys(x).filter(function(Ds) {
            return Ds !== "key";
          }), We = G.length > 0 ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!jt[ne + We]) {
            var Fs = G.length > 0 ? "{" + G.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, We, ne, Fs, ne), jt[ne + We] = !0;
          }
        }
        return h === s ? As(K) : Ts(K), K;
      }
    }
    function Ls(h, x, N) {
      return Nt(h, x, N, !0);
    }
    function Ms(h, x, N) {
      return Nt(h, x, N, !1);
    }
    var Is = Ms, zs = Ls;
    ge.Fragment = s, ge.jsx = Is, ge.jsxs = zs;
  }()), ge;
}
process.env.NODE_ENV === "production" ? Je.exports = Bs() : Je.exports = Vs();
var c = Je.exports;
const Ht = I.createContext(null);
function qs(n, e) {
  if (!n.options || !e)
    return 0;
  let t = 0;
  return Object.entries(n.options).forEach(([s, a]) => {
    if (a.type === "multi" && e[s] && e[s].forEach((u) => {
      let d;
      typeof u == "number" ? d = a.choices[u] : d = a.choices.find(
        (r) => (typeof r == "string" ? r : r.name) === u
      ), d && typeof d == "object" && d.price && (t += d.price);
    }), a.type === "select" && e[s] !== void 0) {
      let i;
      typeof e[s] == "number" ? i = a.choices[e[s]] : i = a.choices.find(
        (u) => (typeof u == "string" ? u : u.name) === e[s]
      ), i && typeof i == "object" && i.price && (t += i.price);
    }
  }), t;
}
const Ws = (() => {
  try {
    const n = localStorage.getItem("qr_cart");
    return n ? JSON.parse(n) : { items: [], customer: { name: "", type: "pickup", timeOrTable: "" } };
  } catch {
    return { items: [], customer: { name: "", type: "pickup", timeOrTable: "" } };
  }
})();
function Hs(n, e) {
  switch (e.type) {
    case "ADD": {
      const { item: t, quantity: s, options: a } = e.payload, i = JSON.stringify({ id: t.id, options: a }), u = n.items.find((l) => l.key === i), d = qs(t, a), r = t.price + d;
      let o;
      return u ? o = n.items.map((l) => l.key === i ? {
        ...l,
        quantity: l.quantity + s,
        totalPrice: r,
        extraCharges: d
      } : l) : o = [...n.items, {
        key: i,
        id: t.id,
        options: a,
        quantity: s,
        totalPrice: r,
        basePrice: t.price,
        extraCharges: d
      }], { ...n, items: o };
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
function Xp({ children: n }) {
  const [e, t] = I.useReducer(Hs, Ws);
  I.useEffect(() => {
    localStorage.setItem("qr_cart", JSON.stringify(e));
  }, [e]);
  const s = I.useMemo(() => ({ state: e, dispatch: t }), [e]);
  return /* @__PURE__ */ c.jsx(Ht.Provider, { value: s, children: n });
}
function Kt() {
  return I.useContext(Ht);
}
function kt(n) {
  return n.reduce((e, t) => e + (t.totalPrice || t.price) * t.quantity, 0);
}
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Yt = (...n) => n.filter((e, t, s) => !!e && e.trim() !== "" && s.indexOf(e) === t).join(" ").trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ys = {
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
const Js = Bt(
  ({
    color: n = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: s,
    className: a = "",
    children: i,
    iconNode: u,
    ...d
  }, r) => Ye(
    "svg",
    {
      ref: r,
      ...Ys,
      width: e,
      height: e,
      stroke: n,
      strokeWidth: s ? Number(t) * 24 / Number(e) : t,
      className: Yt("lucide", a),
      ...d
    },
    [
      ...u.map(([o, l]) => Ye(o, l)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J = (n, e) => {
  const t = Bt(
    ({ className: s, ...a }, i) => Ye(Js, {
      ref: i,
      iconNode: e,
      className: Yt(`lucide-${Ks(n)}`, s),
      ...a
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
const nt = J("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ee = J("Calendar", [
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
const Qs = J("CirclePlus", [
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
const Qe = J("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = J("Instagram", [
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
const at = J("MapPin", [
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
const rt = J("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = J("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = J("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = J("Phone", [
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
const en = J("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tn = J("ShoppingCart", [
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
const sn = J("Trash2", [
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
const nn = J("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = J("Users", [
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
const Le = J("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Zp({ onClick: n }) {
  const { state: e } = Kt(), t = e.items.reduce((s, a) => s + a.quantity, 0);
  return /* @__PURE__ */ c.jsxs("button", { onClick: n, className: "relative tab", children: [
    /* @__PURE__ */ c.jsx(tn, { size: 18 }),
    t > 0 && /* @__PURE__ */ c.jsx("span", { className: "absolute -top-2 -end-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5", children: t })
  ] });
}
const an = (n, e, t, s) => {
  var i, u, d, r;
  const a = [t, {
    code: e,
    ...s || {}
  }];
  if ((u = (i = n == null ? void 0 : n.services) == null ? void 0 : i.logger) != null && u.forward)
    return n.services.logger.forward(a, "warn", "react-i18next::", !0);
  ae(a[0]) && (a[0] = `react-i18next:: ${a[0]}`), (r = (d = n == null ? void 0 : n.services) == null ? void 0 : d.logger) != null && r.warn ? n.services.logger.warn(...a) : console != null && console.warn && console.warn(...a);
}, Ct = {}, Ge = (n, e, t, s) => {
  ae(t) && Ct[t] || (ae(t) && (Ct[t] = /* @__PURE__ */ new Date()), an(n, e, t, s));
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
}, Xe = (n, e, t) => {
  n.loadNamespaces(e, Qt(n, t));
}, Et = (n, e, t, s) => {
  if (ae(t) && (t = [t]), n.options.preload && n.options.preload.indexOf(e) > -1)
    return Xe(n, t, s);
  t.forEach((a) => {
    n.options.ns.indexOf(a) < 0 && n.options.ns.push(a);
  }), n.loadLanguages(e, Qt(n, s));
}, rn = (n, e, t = {}) => !e.languages || !e.languages.length ? (Ge(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(n, {
  lng: t.lng,
  precheck: (s, a) => {
    var i;
    if (((i = t.bindI18n) == null ? void 0 : i.indexOf("languageChanging")) > -1 && s.services.backendConnector.backend && s.isLanguageChangingTo && !a(s.isLanguageChangingTo, n))
      return !1;
  }
}), ae = (n) => typeof n == "string", on = (n) => typeof n == "object" && n !== null, cn = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, ln = {
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
}, un = (n) => ln[n], dn = (n) => n.replace(cn, un);
let Ze = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: dn
};
const pn = (n = {}) => {
  Ze = {
    ...Ze,
    ...n
  };
}, hn = () => Ze;
let Gt;
const fn = (n) => {
  Gt = n;
}, mn = () => Gt, gn = {
  type: "3rdParty",
  init(n) {
    pn(n.options.react), fn(n);
  }
}, _n = Vt();
class yn {
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
const xn = (n, e) => {
  const t = Ce();
  return be(() => {
    t.current = e ? t.current : n;
  }, [n, e]), t.current;
}, Xt = (n, e, t, s) => n.getFixedT(e, t, s), bn = (n, e, t, s) => Us(Xt(n, e, t, s), [n, e, t, s]), Z = (n, e = {}) => {
  var $, j, S, P;
  const {
    i18n: t
  } = e, {
    i18n: s,
    defaultNS: a
  } = qt(_n) || {}, i = t || s || mn();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new yn()), !i) {
    Ge(i, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const E = (O, C) => ae(C) ? C : on(C) && ae(C.defaultValue) ? C.defaultValue : Array.isArray(O) ? O[O.length - 1] : O, M = [E, {}, !1];
    return M.t = E, M.i18n = {}, M.ready = !1, M;
  }
  ($ = i.options.react) != null && $.wait && Ge(i, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const u = {
    ...hn(),
    ...i.options.react,
    ...e
  }, {
    useSuspense: d,
    keyPrefix: r
  } = u;
  let o = n || a || ((j = i.options) == null ? void 0 : j.defaultNS);
  o = ae(o) ? [o] : o || ["translation"], (P = (S = i.reportNamespaces).addUsedNamespaces) == null || P.call(S, o);
  const l = (i.isInitialized || i.initializedStoreOnce) && o.every((E) => rn(E, i, u)), f = bn(i, e.lng || null, u.nsMode === "fallback" ? o : o[0], r), p = () => f, g = () => Xt(i, e.lng || null, u.nsMode === "fallback" ? o : o[0], r), [m, _] = tt(p);
  let b = o.join();
  e.lng && (b = `${e.lng}${b}`);
  const w = xn(b), y = Ce(!0);
  be(() => {
    const {
      bindI18n: E,
      bindI18nStore: M
    } = u;
    y.current = !0, !l && !d && (e.lng ? Et(i, e.lng, o, () => {
      y.current && _(g);
    }) : Xe(i, o, () => {
      y.current && _(g);
    })), l && w && w !== b && y.current && _(g);
    const O = () => {
      y.current && _(g);
    };
    return E && (i == null || i.on(E, O)), M && (i == null || i.store.on(M, O)), () => {
      y.current = !1, i && (E == null || E.split(" ").forEach((C) => i.off(C, O))), M && i && M.split(" ").forEach((C) => i.store.off(C, O));
    };
  }, [i, b]), be(() => {
    y.current && l && _(p);
  }, [i, r, l]);
  const v = [m, i, l];
  if (v.t = m, v.i18n = i, v.ready = l, l || !l && !d)
    return v;
  throw new Promise((E) => {
    e.lng ? Et(i, e.lng, o, () => E()) : Xe(i, o, () => E());
  });
}, vn = "zuwade", wn = "Zuwade", jn = "/zuwade-logo.jpg", Nn = "+972-54-750-7503", $n = "+972547507503", Sn = "Zuwade TA", kn = "קסטרו שפרעם", Cn = {
  lat: 32.81557,
  lng: 35.152813
}, En = "zuwade.ta", Rn = {
  "Mon-Sat": "09:00-19:00",
  Sun: "Closed"
}, On = {
  primary: "#10b981",
  accent: "#0ea5e9",
  bg: "#0b0f14",
  card: "#121821",
  text: "#e5e7eb"
}, Pn = [
  "ar",
  "he",
  "en"
], Tn = "₪", An = {
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
}, F = {
  slug: vn,
  name: wn,
  logo: jn,
  phone: Nn,
  whatsapp: $n,
  address: Sn,
  waze_name: kn,
  coords: Cn,
  instagram: En,
  hours: Rn,
  theme: On,
  languages: Pn,
  currency: Tn,
  reservation: An
}, Ln = {
  name: "Zuwade",
  brand_subtitle: "TAKE AWAY"
}, Mn = [
  {
    id: "toasts",
    title: "Toasts",
    emoji: "🧀"
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    emoji: "🥪"
  },
  {
    id: "salads",
    title: "Salads",
    emoji: "🥗"
  },
  {
    id: "baguette_tortilla",
    title: "Tortillas/Baguettes/Plate",
    emoji: "🌯"
  },
  {
    id: "soft_drinks",
    title: "Soft Drinks",
    emoji: "🥤"
  }
], In = [
  {
    id: "toast_classic",
    name: "Castle Toast",
    desc: "Yellow cheese, Bulgarian cheese, olives, tomatoes, butter, tomato spread, pesto.",
    price: 35,
    image: "/images/toast_classic.png",
    category: "toasts",
    tags: [
      "Vegetarian"
    ],
    options: {
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "toast_golden",
    name: "Golden Toast",
    desc: "Yellow cheese, shoulder cold cuts, olives, garlic, sweet chili, pesto.",
    price: 35,
    image: "/images/golden_toast.png",
    category: "toasts",
    tags: [
      "Vegetarian"
    ],
    options: {
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "toast_omelet",
    name: "Omelet Toast",
    desc: "Omelet, yellow cheese, tomato, labneh.",
    price: 35,
    image: "/images/toast_omelet.png",
    category: "toasts",
    options: {
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "toast_pizza",
    name: "Pizza Toast",
    desc: "Yellow cheese, tomato, olives, corn, onion, pizza sauce.",
    price: 35,
    image: "/images/toast_pizza.png",
    category: "toasts",
    options: {
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "sand_zawadi",
    name: "Zuwade Sandwich",
    desc: "Turkey, shoulder cold cuts, Italian cold cut, lettuce, tomato, cucumber, garlic-dill mayo.",
    price: 40,
    image: "/images/sand_zawadi.png",
    category: "sandwiches",
    options: {
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "sand_tuna",
    name: "Tuna Sandwich",
    desc: "Tuna, lettuce, tomato, pickled cucumber, mayo or garlic-dill.",
    price: 35,
    image: "/images/sand_tuna.png",
    category: "sandwiches",
    options: {
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "sand_healthy",
    name: "Healthy Sandwich",
    desc: "Avocado, lettuce, tomatoes, tuna and eggs.",
    price: 35,
    image: "/images/sand_healthy.png",
    category: "sandwiches",
    tags: [
      "Vegan"
    ],
    options: {
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "salad_fattoush",
    name: "Fattoush Salad",
    desc: "Lettuce, tomato, cucumber, purple onion, black olives, grated Bulgarian cheese with za'atar.",
    price: 50,
    image: "/images/salad_fattoush.jpg",
    category: "salads",
    tags: [
      "Vegetarian"
    ],
    options: {
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "salad_tabbouleh",
    name: "Tabbouleh Salad",
    desc: "Bulgur, cherry tomatoes, parsley, mint, green onion, lemon and olive oil.",
    price: 50,
    image: "/images/salad_tabbouleh.jpg",
    category: "salads",
    tags: [
      "Vegetarian"
    ],
    options: {
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "salad_chicken_tuna",
    name: "Chicken Salad",
    desc: "Lettuce, tomato, bell pepper, purple onion, radish, chicken breast pieces.",
    price: 50,
    image: "/images/salad_chicken_tuna.png",
    category: "salads",
    options: {
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "baguette_chicken",
    name: "Chicken",
    desc: "Seasoned chicken breast on the plancha, lettuce, tomato, pickled cucumber.",
    price: 40,
    image: "/images/baguette_chicken.png",
    category: "baguette_tortilla",
    options: {
      wrap: {
        type: "select",
        label: "Served in",
        choices: [
          {
            name: "Baguette",
            price: 0
          },
          {
            name: "Tortilla",
            price: 0
          },
          {
            name: "Plate",
            price: 10
          }
        ]
      },
      extra: {
        type: "multi",
        label: "extra",
        choices: [
          {
            name: "cheese",
            price: 5
          },
          {
            name: "fries",
            price: 10
          }
        ]
      },
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "baguette_pargit",
    name: "Pargit",
    desc: "Juicy chicken thigh pieces, lettuce, tomato, purple onion.",
    price: 40,
    image: "/images/baguette_pargit.jpg",
    category: "baguette_tortilla",
    options: {
      wrap: {
        type: "select",
        label: "Served in",
        choices: [
          {
            name: "Baguette",
            price: 0
          },
          {
            name: "Tortilla",
            price: 0
          },
          {
            name: "Plate",
            price: 10
          }
        ]
      },
      extra: {
        type: "multi",
        label: "extra",
        choices: [
          {
            name: "cheese",
            price: 5
          },
          {
            name: "fries",
            price: 10
          }
        ]
      },
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "baguette_schnitzel",
    name: "Schnitzel",
    desc: "Crispy schnitzel, lettuce, tomato, pickled cucumber, mayo.",
    price: 40,
    image: "/images/baguette_schnitzel.png",
    category: "baguette_tortilla",
    options: {
      wrap: {
        type: "select",
        label: "Served in",
        choices: [
          {
            name: "Baguette",
            price: 0
          },
          {
            name: "Tortilla",
            price: 0
          },
          {
            name: "Plate",
            price: 10
          }
        ]
      },
      extra: {
        type: "multi",
        label: "extra",
        choices: [
          {
            name: "cheese",
            price: 5
          },
          {
            name: "fries",
            price: 10
          }
        ]
      },
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "shawarma_chicken",
    name: "Chicken Shawarma",
    desc: "Juicy chicken shawarma, salads of your choice.",
    price: 50,
    image: "/images/shawarma_chickenn.jpg",
    category: "baguette_tortilla",
    options: {
      wrap: {
        type: "select",
        label: "Served in",
        choices: [
          {
            name: "Baguette",
            price: 0
          },
          {
            name: "Tortilla",
            price: 0
          },
          {
            name: "Plate",
            price: 0
          }
        ]
      },
      extra: {
        type: "multi",
        label: "extra",
        choices: [
          {
            name: "fries",
            price: 10
          }
        ]
      },
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "shawarma_beef",
    name: "Beef Shawarma",
    desc: "House-seasoned veal shawarma, salads of your choice.",
    price: 50,
    image: "/images/shawarma_beef.jpg",
    category: "baguette_tortilla",
    options: {
      wrap: {
        type: "select",
        label: "Served in",
        choices: [
          {
            name: "Baguette",
            price: 0
          },
          {
            name: "Tortilla",
            price: 0
          },
          {
            name: "Plate",
            price: 0
          }
        ]
      },
      extra: {
        type: "multi",
        label: "extra",
        choices: [
          {
            name: "fries",
            price: 10
          }
        ]
      },
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "fanta",
    name: "Fanta",
    desc: "",
    price: 7,
    image: "/images/fanta.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "sprite",
    name: "Sprite",
    desc: "",
    price: 7,
    image: "/images/sprite.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "coca_cola",
    name: "Coca Cola",
    desc: "",
    price: 7,
    image: "/images/cola.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "coca_cola_zero",
    name: "Coca Cola Zero",
    desc: "",
    price: 7,
    image: "/images/cola_zero.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "xl",
    name: "XL",
    desc: "",
    price: 7,
    image: "/images/xl.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "xl_ten",
    name: "XL Ten",
    desc: "",
    price: 7,
    image: "/images/xl_ten.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  },
  {
    id: "mineral_water",
    name: "Mineral Water",
    desc: "",
    price: 7,
    image: "/images/mineral_water.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "Notes"
      }
    }
  }
], zn = {
  restaurant: Ln,
  categories: Mn,
  items: In
}, Fn = {
  name: "זוואדי",
  brand_subtitle: "TAKE AWAY"
}, Dn = [
  {
    id: "toasts",
    title: "טוסטים",
    emoji: "🧀"
  },
  {
    id: "sandwiches",
    title: "כריכים",
    emoji: "🥪"
  },
  {
    id: "salads",
    title: "סלטים",
    emoji: "🥗"
  },
  {
    id: "baguette_tortilla",
    title: "טורטיות/בגטים/בצלחת",
    emoji: "🌯"
  },
  {
    id: "soft_drinks",
    title: "שתייה קלה",
    emoji: "🥤"
  }
], Un = [
  {
    id: "toast_classic",
    name: "טוסט המבצר",
    desc: "צהובה, בולגרית, זיתים, עגבניות, חמאה,ממרח עגבנייה ופסטו.",
    price: 35,
    image: "/images/toast_classic.png",
    category: "toasts",
    tags: [
      "צמחוני"
    ],
    options: {
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "toast_golden",
    name: "גולדן טוסט",
    desc: "צהובה, כתף, זיתים, שום, צ׳ילי מתוק, פסטו.",
    price: 35,
    image: "/images/golden_toast.png",
    category: "toasts",
    tags: [
      "צמחוני"
    ],
    options: {
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "toast_omelet",
    name: "טוסט חביתה",
    desc: "חביתה, צהובה, עגבניה, לבנה.",
    price: 35,
    image: "/images/toast_omelet.png",
    category: "toasts",
    options: {
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "toast_pizza",
    name: "טוסט פיצה",
    desc: "צהובה, עגבניה, זיתים, תירס, בצל, רוטב פיצה.",
    price: 35,
    image: "/images/toast_pizza.png",
    category: "toasts",
    options: {
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "sand_zawadi",
    name: "כריך זוואדי",
    desc: "הודו, כתף, איטלקי, חסה, עגבניה, מלפפון, מיונז שום-שמיר.",
    price: 40,
    image: "/images/sand_zawadi.png",
    category: "sandwiches",
    options: {
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "sand_tuna",
    name: "כריך טונה",
    desc: "טונה, חסה, עגבניה, מלפפון חמוץ, מיונז/שום שמיר.",
    price: 35,
    image: "/images/sand_tuna.png",
    category: "sandwiches",
    options: {
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "sand_healthy",
    name: "כריך בריאות",
    desc: "אבוקדו, חסה, עגבניות, טונה וביצים.",
    price: 35,
    image: "/images/sand_healthy.png",
    category: "sandwiches",
    tags: [
      "טבעוני"
    ],
    notes: {
      type: "text",
      label: "הערות"
    }
  },
  {
    id: "salad_fattoush",
    name: "סלט פטוש",
    desc: "חסה, עגבניה, מלפפון, בצל סגול, זיתים שחורים, בולגרית מגורדת זעתר.",
    price: 50,
    image: "/images/salad_fattoush.jpg",
    category: "salads",
    tags: [
      "צמחוני"
    ],
    options: {
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "salad_tabbouleh",
    name: "סלט טאבולה",
    desc: "בורגול, עגבניה שירי, פטרוזיליה, נענע, בצל ירוק, לימון ושמן זית.",
    price: 50,
    image: "/images/salad_tabbouleh.jpg",
    category: "salads",
    tags: [
      "צמחוני"
    ],
    options: {
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "salad_chicken_tuna",
    name: "סלט עוף",
    desc: "חסה, עגבניה, גמבה, בצל סגול, צנון, נתחים חזה עוף.",
    price: 50,
    image: "/images/salad_chicken_tuna.png",
    category: "salads",
    options: {
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "baguette_chicken",
    name: "צ׳יקן",
    desc: "חזה עוף מתובל על הפלאנצ׳ה, חסה, עגבניה, מלפפון חמוץ.",
    price: 40,
    image: "/images/baguette_chicken.png",
    category: "baguette_tortilla",
    options: {
      wrap: {
        type: "select",
        label: "מוגש ב",
        choices: [
          {
            name: "באגט",
            price: 0
          },
          {
            name: "טורטייה",
            price: 0
          },
          {
            name: "צלחת",
            price: 10
          }
        ]
      },
      extra: {
        type: "multi",
        label: "תוספות",
        choices: [
          {
            name: "גבינה",
            price: 5
          },
          {
            name: "צ'יפס",
            price: 10
          }
        ]
      },
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "baguette_pargit",
    name: "פרגית",
    desc: "נתחי פרגית עסיסיים, חסה, עגבניה, בצל סגול.",
    price: 40,
    image: "/images/baguette_pargit.jpg",
    category: "baguette_tortilla",
    options: {
      wrap: {
        type: "select",
        label: "מוגש ב",
        choices: [
          {
            name: "באגט",
            price: 0
          },
          {
            name: "טורטייה",
            price: 0
          },
          {
            name: "צלחת",
            price: 10
          }
        ]
      },
      extra: {
        type: "multi",
        label: "תוספות",
        choices: [
          {
            name: "גבינה",
            price: 5
          },
          {
            name: "צ'יפס",
            price: 10
          }
        ]
      },
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "baguette_schnitzel",
    name: " שניצל",
    desc: "שניצל קריספי, חסה, עגבניה, מלפפון חמוץ, מיונז.",
    price: 40,
    image: "/images/baguette_schnitzel.png",
    category: "baguette_tortilla",
    options: {
      wrap: {
        type: "select",
        label: "מוגש ב",
        choices: [
          {
            name: "באגט",
            price: 0
          },
          {
            name: "טורטייה",
            price: 0
          },
          {
            name: "צלחת",
            price: 10
          }
        ]
      },
      extra: {
        type: "multi",
        label: "תוספות",
        choices: [
          {
            name: "גבינה",
            price: 5
          },
          {
            name: "צ'יפס",
            price: 10
          }
        ]
      },
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "shawarma_chicken",
    name: "שווארמה עוף",
    desc: "שווארמה עוף עסיסית, סלטים לבחירה.",
    price: 50,
    image: "/images/shawarma_chickenn.jpg",
    category: "baguette_tortilla",
    options: {
      wrap: {
        type: "select",
        label: "מוגש ב",
        choices: [
          {
            name: "באגט",
            price: 0
          },
          {
            name: "טורטייה",
            price: 0
          },
          {
            name: "צלחת",
            price: 0
          }
        ]
      },
      extra: {
        type: "multi",
        label: "תוספות",
        choices: [
          {
            name: "צ'יפס",
            price: 10
          }
        ]
      },
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "shawarma_beef",
    name: "שווארמה עגל",
    desc: "שווארמה עגל בתיבול הבית, סלטים לבחירה.",
    price: 50,
    image: "/images/shawarma_beef.jpg",
    category: "baguette_tortilla",
    options: {
      wrap: {
        type: "select",
        label: "מוגש ב",
        choices: [
          {
            name: "באגט",
            price: 0
          },
          {
            name: "טורטייה",
            price: 0
          },
          {
            name: "צלחת",
            price: 0
          }
        ]
      },
      extra: {
        type: "multi",
        label: "תוספות",
        choices: [
          {
            name: "צ'יפס",
            price: 10
          }
        ]
      },
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "fanta",
    name: "פנטה",
    desc: "",
    price: 7,
    image: "/images/fanta.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "sprite",
    name: "ספרייט",
    desc: "",
    price: 7,
    image: "/images/sprite.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "coca_cola",
    name: "קוקה קולה",
    desc: "",
    price: 7,
    image: "/images/cola.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "coca_cola_zero",
    name: "קולה זירו",
    desc: "",
    price: 7,
    image: "/images/cola_zero.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "xl",
    name: "XL",
    desc: "",
    price: 7,
    image: "/images/xl.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "xl_ten",
    name: "XL Ten",
    desc: "",
    price: 7,
    image: "/images/xl_ten.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  },
  {
    id: "mineral_water",
    name: "מים מינרלים",
    desc: "",
    price: 7,
    image: "/images/mineral_water.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "הערות"
      }
    }
  }
], Bn = {
  restaurant: Fn,
  categories: Dn,
  items: Un
}, Vn = {
  name: "زواوي",
  brand_subtitle: "TAKE AWAY"
}, qn = [
  {
    id: "toasts",
    title: "توست",
    emoji: "🧀"
  },
  {
    id: "sandwiches",
    title: "سندويشات",
    emoji: "🥪"
  },
  {
    id: "salads",
    title: "سلطات",
    emoji: "🥗"
  },
  {
    id: "baguette_tortilla",
    title: "تورتيلا/باجيت/صحن",
    emoji: "🌯"
  },
  {
    id: "soft_drinks",
    title: "مشروبات غازية",
    emoji: "🥤"
  }
], Wn = [
  {
    id: "toast_classic",
    name: "توست القلعة",
    desc: "جبنة صفراء، جبنة بلغارية، زيتون، طماطم، زبدة، معجون طماطم، بيستو.",
    price: 35,
    image: "/images/toast_classic.png",
    category: "toasts",
    tags: [
      "نباتي"
    ],
    options: {
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "toast_golden",
    name: "توست ذهبي",
    desc: "جبنة صفراء، شرائح كتف ديك رومي، زيتون، ثوم، تشيلي حلو، بيستو.",
    price: 35,
    image: "/images/golden_toast.png",
    category: "toasts",
    tags: [
      "نباتي"
    ],
    options: {
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "toast_omelet",
    name: "توست عجة",
    desc: "عجة، جبنة صفراء، طماطم، لبنة.",
    price: 35,
    image: "/images/toast_omelet.png",
    category: "toasts",
    options: {
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "toast_pizza",
    name: "توست بيزا",
    desc: "جبنة صفراء، طماطم، زيتون، ذرة، بصل، صلصة بيتزا.",
    price: 35,
    image: "/images/toast_pizza.png",
    category: "toasts",
    options: {
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "sand_zawadi",
    name: "سندويش زوادي",
    desc: "ديك رومي، شرائح كتف، لحم إيطالي، خس، طماطم، خيار، مايونيز بالثوم والشبت.",
    price: 40,
    image: "/images/sand_zawadi.png",
    category: "sandwiches",
    options: {
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "sand_tuna",
    name: "سندويش تونة",
    desc: "تونة، خس، طماطم، خيار مخلل، مايونيز أو صلصة ثوم-شبت.",
    price: 35,
    image: "/images/sand_tuna.png",
    category: "sandwiches",
    options: {
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "sand_healthy",
    name: "سندويش صحي",
    desc: "أفوكادو، خس، طماطم، تونة وبيض.",
    price: 35,
    image: "/images/sand_healthy.png",
    category: "sandwiches",
    tags: [
      "نباتي"
    ],
    options: {
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "salad_fattoush",
    name: "سلطة فتوش",
    desc: "خس، طماطم، خيار، بصل بنفسجي، زيتون أسود، جبنة بلغارية مبشورة بالزعتر.",
    price: 50,
    image: "/images/salad_fattoush.jpg",
    category: "salads",
    tags: [
      "نباتي"
    ],
    options: {
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "salad_tabbouleh",
    name: "سلطة تبولة",
    desc: "برغل، طماطم كرزية، بقدونس، نعناع، بصل أخضر، ليمون وزيت زيتون.",
    price: 50,
    image: "/images/salad_tabbouleh.jpg",
    category: "salads",
    tags: [
      "نباتي"
    ],
    options: {
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "salad_chicken_tuna",
    name: "سلطة دجاج",
    desc: "خس، طماطم، فلفل حلو، بصل بنفسجي، فجل، قطع صدر دجاج.",
    price: 50,
    image: "/images/salad_chicken_tuna.png",
    category: "salads",
    options: {
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "baguette_chicken",
    name: "دجاج",
    desc: "صدر دجاج متبل على البلانشا، خس، طماطم، خيار مخلل.",
    price: 40,
    image: "/images/baguette_chicken.png",
    category: "baguette_tortilla",
    options: {
      wrap: {
        type: "select",
        label: "يُقدم في",
        choices: [
          {
            name: "باجيت",
            price: 0
          },
          {
            name: "تورتيلا",
            price: 0
          },
          {
            name: "صحن",
            price: 10
          }
        ]
      },
      extra: {
        type: "multi",
        label: "اضافات",
        choices: [
          {
            name: "جبنة",
            price: 5
          },
          {
            name: "بطاطس مقلي",
            price: 10
          }
        ]
      },
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "baguette_pargit",
    name: "فرجيت",
    desc: "قطع فخذ دجاج عصارية، خس، طماطم، بصل بنفسجي.",
    price: 40,
    image: "/images/baguette_pargit.jpg",
    category: "baguette_tortilla",
    options: {
      wrap: {
        type: "select",
        label: "يُقدم في",
        choices: [
          {
            name: "باجيت",
            price: 0
          },
          {
            name: "تورتيلا",
            price: 0
          },
          {
            name: "صحن",
            price: 10
          }
        ]
      },
      extra: {
        type: "multi",
        label: "اضافات",
        choices: [
          {
            name: "جبنة",
            price: 5
          },
          {
            name: "بطاطس مقلي",
            price: 10
          }
        ]
      },
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "baguette_schnitzel",
    name: "شنيصل",
    desc: "شنيتسل مقرمش، خس، طماطم، خيار مخلل، مايونيز.",
    price: 40,
    image: "/images/baguette_schnitzel.png",
    category: "baguette_tortilla",
    options: {
      wrap: {
        type: "select",
        label: "يُقدم في",
        choices: [
          {
            name: "باجيت",
            price: 0
          },
          {
            name: "تورتيلا",
            price: 0
          },
          {
            name: "صحن",
            price: 10
          }
        ]
      },
      extra: {
        type: "multi",
        label: "اضافات",
        choices: [
          {
            name: "جبنة",
            price: 5
          },
          {
            name: "بطاطس مقلي",
            price: 10
          }
        ]
      },
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "shawarma_chicken",
    name: "شاورما دجاج",
    desc: "شاورما دجاج عصارية، سلطات حسب الاختيار.",
    price: 50,
    image: "/images/shawarma_chickenn.jpg",
    category: "baguette_tortilla",
    options: {
      wrap: {
        type: "select",
        label: "يُقدم في",
        choices: [
          {
            name: "باجيت",
            price: 0
          },
          {
            name: "تورتيلا",
            price: 0
          },
          {
            name: "صحن",
            price: 0
          }
        ]
      },
      extra: {
        type: "multi",
        label: "اضافات",
        choices: [
          {
            name: "بطاطس مقلي",
            price: 10
          }
        ]
      },
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "shawarma_beef",
    name: "شاورما عجل",
    desc: "شاورما عجل بتتبيلة البيت، سلطات حسب الاختيار.",
    price: 50,
    image: "/images/shawarma_beef.jpg",
    category: "baguette_tortilla",
    options: {
      wrap: {
        type: "select",
        label: "يُقدم في",
        choices: [
          {
            name: "باجيت",
            price: 0
          },
          {
            name: "تورتيلا",
            price: 0
          },
          {
            name: "صحن",
            price: 0
          }
        ]
      },
      extra: {
        type: "multi",
        label: "اضافات",
        choices: [
          {
            name: "بطاطس مقلي",
            price: 10
          }
        ]
      },
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "fanta",
    name: "فانتا",
    desc: "",
    price: 7,
    image: "/images/fanta.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "sprite",
    name: "سبرايت",
    desc: "",
    price: 7,
    image: "/images/sprite.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "coca_cola",
    name: "كوكا كولا",
    desc: "",
    price: 7,
    image: "/images/cola.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "coca_cola_zero",
    name: "كولا زيرو",
    desc: "",
    price: 7,
    image: "/images/cola_zero.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "xl",
    name: "XL",
    desc: "",
    price: 7,
    image: "/images/xl.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "xl_ten",
    name: "XL Ten",
    desc: "",
    price: 7,
    image: "/images/xl_ten.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  },
  {
    id: "mineral_water",
    name: "مياه معدنية",
    desc: "",
    price: 7,
    image: "/images/mineral_water.jpg",
    category: "soft_drinks",
    options: {
      notes: {
        type: "text",
        label: "ملاحظات"
      }
    }
  }
], Hn = {
  restaurant: Vn,
  categories: qn,
  items: Wn
}, Kn = "https://79vup8a13c.execute-api.eu-central-1.amazonaws.com", Yn = async (n = {}) => {
  console.log("🛒 Tracking order submission...");
  try {
    const e = `${Kn}/api/analytics/order`, t = {
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
function Rt(n) {
  if (!n)
    return null;
  const e = n.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!e)
    return null;
  const t = Number.parseInt(e[1], 10), s = Number.parseInt(e[2], 10);
  return Number.isNaN(t) || Number.isNaN(s) || s < 0 || s > 59 || t < 0 || t > 24 || t === 24 && s !== 0 ? null : t * 60 + s;
}
function Jn(n) {
  if (!n)
    return [];
  const e = n.replace(/\s+/g, " ").replace(/\s*[\u2013-]\s*/g, "-").trim();
  if (!e)
    return [];
  if (e.includes("-")) {
    const [s, a] = e.split("-"), i = He(s), u = He(a);
    if (i === -1 || u === -1)
      return [];
    const d = [];
    let r = i;
    for (d.push(r); r !== u && (r = (r + 1) % de.length, d.push(r), !(d.length > de.length)); )
      ;
    return Array.from(new Set(d));
  }
  const t = He(e);
  return t === -1 ? [] : [t];
}
function He(n = "") {
  const e = n.slice(0, 3).toLowerCase();
  return de.findIndex(
    (s) => s.toLowerCase() === e
  );
}
function Qn(n) {
  if (!n || typeof n != "string")
    return [];
  const t = n.split(",").map((s) => s.trim()).flatMap(Jn);
  return Array.from(new Set(t));
}
function Gn(n) {
  const e = de.map(() => []);
  return Object.entries(n || {}).forEach(([t, s]) => {
    const a = Qn(t);
    if (!a.length || !s || /closed/i.test(String(s)))
      return;
    String(s).split(",").map((u) => u.trim()).filter(Boolean).forEach((u) => {
      const d = u.replace(/\u2013/g, "-"), [r, o] = d.split("-").map((p) => p.trim()), l = Rt(r), f = Rt(o);
      l === null || f === null || Number.isNaN(l) || Number.isNaN(f) || a.forEach((p) => {
        if (l === f)
          e[p].push({ start: 0, end: 1440 });
        else if (l < f)
          e[p].push({ start: l, end: f });
        else if (e[p].push({ start: l, end: 1440 }), f > 0) {
          const g = (p + 1) % de.length;
          e[g].push({ start: 0, end: f });
        }
      });
    });
  }), e.map(
    (t) => t.filter(
      (s) => typeof s.start == "number" && typeof s.end == "number" && s.start < s.end
    ).sort((s, a) => s.start - a.start)
  );
}
function Xn() {
  var o, l, f;
  const n = /* @__PURE__ */ new Date(), t = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jerusalem",
    weekday: "short",
    hour12: !1,
    hour: "2-digit",
    minute: "2-digit"
  }).formatToParts(n), s = ((o = t.find((p) => p.type === "weekday")) == null ? void 0 : o.value) ?? "", a = ((l = t.find((p) => p.type === "hour")) == null ? void 0 : l.value) ?? "0", i = ((f = t.find((p) => p.type === "minute")) == null ? void 0 : f.value) ?? "0", u = de.findIndex((p) => p === s), d = Number.parseInt(a, 10), r = Number.parseInt(i, 10);
  return {
    dayIndex: u,
    minutes: d * 60 + r
  };
}
function Zn(n) {
  if (!n || typeof n != "object")
    return !0;
  const { dayIndex: e, minutes: t } = Xn();
  if (e === -1 || Number.isNaN(t))
    return !0;
  const a = Gn(n)[e];
  return !a || a.length === 0 ? !1 : a.some(
    (i) => t >= i.start && t < i.end
  );
}
const Ot = { en: zn, he: Bn, ar: Hn };
function ye(n, e) {
  return (Ot[e] || Ot.en).items.find((s) => s.id === n);
}
function ea(n, e, t) {
  var p, g, m, _, b, w;
  const s = (y, v) => {
    var j;
    const $ = (j = v == null ? void 0 : v.options) == null ? void 0 : j[y];
    return ($ == null ? void 0 : $.label) || {
      size: e("opt_size"),
      extras: e("opt_extras"),
      notes: e("opt_notes"),
      doneness: e("opt_doneness"),
      sugar: e("opt_sugar"),
      pasta_type: e("opt_pasta_type"),
      bread: e("opt_bread"),
      wrap: e("opt_wrap")
    }[y] || y;
  }, a = t.language === "ar" || t.language === "he", i = n.items.map((y) => {
    const v = ye(y.id, t.language);
    return {
      ...y,
      name: (v == null ? void 0 : v.name) || `Item ${y.id}`,
      image: (v == null ? void 0 : v.image) || "/placeholder.jpg",
      desc: (v == null ? void 0 : v.desc) || ""
    };
  }), u = (y) => y, d = [];
  if (a) {
    const y = e("wa_order_header").replace(/[🍽️📋👤🙏]/g, "").trim();
    d.push(u(`${y} 🍽️`)), d.push("");
    const v = e("wa_order_items").replace(/[🍽️📋👤🙏]/g, "").trim();
    d.push(u(`${v} 📋`)), i.forEach((S, P) => {
      var M;
      const E = [];
      if (S.options) {
        const O = ye(S.id, t.language);
        for (const [C, k] of Object.entries(S.options)) {
          if (k == null || k === "" || Array.isArray(k) && k.length === 0)
            continue;
          const D = s(C, O), B = (M = O == null ? void 0 : O.options) == null ? void 0 : M[C];
          let W = k;
          if (B && B.choices)
            if (Array.isArray(k))
              W = k.map((q) => {
                const T = B.choices[q];
                return typeof T == "string" ? T : (T == null ? void 0 : T.name) || `Choice ${q}`;
              }).join(", ");
            else if (typeof k == "number" && B.choices[k]) {
              const q = B.choices[k];
              W = typeof q == "string" ? q : (q == null ? void 0 : q.name) || `Choice ${k}`;
            } else {
              const q = B.choices.find(
                (T) => (typeof T == "string" ? T : T.name) === k
              );
              W = typeof q == "string" ? q : (q == null ? void 0 : q.name) || k;
            }
          E.push(`${D}: ${W}`);
        }
      }
      d.push(u(`${P + 1}. ${S.name}`)), d.push(u(`   ${e("wa_quantity")}: ${S.quantity}`)), E.length > 0 && E.forEach((O) => {
        d.push(u(`   ${O}`));
      }), d.push("");
    });
    const $ = e("wa_customer_info").replace(/[🍽️📋👤🙏]/g, "").trim();
    if (d.push(u(`${$} 👤`)), (p = n.customer) != null && p.name && (d.push(`${e("wa_customer_name")}: ${n.customer.name}`), d.push("")), (g = n.customer) != null && g.phone && d.push(`${e("wa_customer_phone")}: ${n.customer.phone}`), (m = n.customer) != null && m.type) {
      const S = n.customer.type === "delivery" ? e("delivery") : e("pickup"), P = n.customer.type === "delivery" ? "🚚" : "🏪";
      d.push(`${e("wa_order_type")}:`), d.push(`• ${S} ${P}`), d.push("");
    }
    d.push("");
    const j = e("wa_confirm_order").replace(/[🍽️📋👤🙏]/g, "").trim();
    return d.push(u(`${j} 🙏`)), d.join(`
`);
  }
  const r = e("wa_order_header").replace(/[🍽️📋👤🙏]/g, "").trim();
  d.push(`🍽️ ${r}`), d.push("");
  const o = e("wa_order_items").replace(/[🍽️📋👤🙏]/g, "").trim();
  d.push(`📋 ${o}`), i.forEach((y, v) => {
    var j;
    const $ = [];
    if (y.options) {
      const S = ye(y.id, t.language);
      for (const [P, E] of Object.entries(y.options)) {
        if (E == null || E === "" || Array.isArray(E) && E.length === 0)
          continue;
        const M = s(P, S), O = (j = S == null ? void 0 : S.options) == null ? void 0 : j[P];
        let C = E;
        if (O && O.choices)
          if (Array.isArray(E))
            C = E.map((k) => {
              const D = O.choices[k];
              return typeof D == "string" ? D : (D == null ? void 0 : D.name) || `Choice ${k}`;
            }).join(", ");
          else if (typeof E == "number" && O.choices[E]) {
            const k = O.choices[E];
            C = typeof k == "string" ? k : (k == null ? void 0 : k.name) || `Choice ${E}`;
          } else {
            const k = O.choices.find(
              (D) => (typeof D == "string" ? D : D.name) === E
            );
            C = typeof k == "string" ? k : (k == null ? void 0 : k.name) || E;
          }
        $.push(`${M}: ${C}`);
      }
    }
    d.push(`${v + 1}. ${y.name}`), d.push(`   ${e("wa_quantity")}: ${y.quantity}`), $.length > 0 && $.forEach((S) => {
      d.push(`   ${S}`);
    }), d.push("");
  });
  const l = e("wa_customer_info").replace(/[🍽️📋👤🙏]/g, "").trim();
  if (a ? d.push(`${l} 👤`) : d.push(`👤 ${l}`), (_ = n.customer) != null && _.name && (d.push(`${e("wa_customer_name")}: ${n.customer.name}`), d.push("")), (b = n.customer) != null && b.phone && d.push(`${e("wa_customer_phone")}: ${n.customer.phone}`), (w = n.customer) != null && w.type) {
    const y = n.customer.type === "delivery" ? e("delivery") : e("pickup"), v = n.customer.type === "delivery" ? "🚚" : "🏪";
    d.push(`${e("wa_order_type")}:`), d.push(`• ${y} ${v}`), d.push("");
  }
  d.push("");
  const f = e("wa_confirm_order").replace(/[🍽️📋👤🙏]/g, "").trim();
  return a ? d.push(`${f} 🙏`) : d.push(`${f} 🙏`), d.join(`
`);
}
function eh({ open: n, onClose: e }) {
  const { state: t, dispatch: s } = Kt(), { t: a, i18n: i } = Z(), u = kt(t.items), d = ea(t, a, i), [r, o] = I.useState(!1), [l, f] = I.useState(!1), [p, g] = I.useState(!1);
  I.useEffect(() => {
    n || (o(!1), g(!1));
  }, [n]);
  const m = t.items.map((j) => {
    const S = ye(j.id, i.language);
    return {
      ...j,
      name: (S == null ? void 0 : S.name) || `Item ${j.id}`,
      image: (S == null ? void 0 : S.image) || "/placeholder.jpg",
      desc: (S == null ? void 0 : S.desc) || ""
    };
  }), _ = document.dir === "rtl", b = _ ? "left-0" : "right-0", w = _ ? "border-r" : "border-l", y = _ ? "-translate-x-full" : "translate-x-full", v = () => {
    if (F.hours && !Zn(F.hours)) {
      g(!0);
      return;
    }
    if (!t.customer.name || t.customer.name.trim() === "") {
      f(!0);
      return;
    }
    f(!1), o(!0);
  }, $ = async () => {
    var S, P, E;
    try {
      const M = t.items || [], O = kt(M), C = M.reduce((k, D) => k + D.quantity, 0);
      Yn({
        orderType: ((S = t.customer) == null ? void 0 : S.type) || "unknown",
        itemCount: C,
        totalAmount: O,
        customerName: ((P = t.customer) == null ? void 0 : P.name) || "anonymous",
        customerPhone: ((E = t.customer) == null ? void 0 : E.phone) || "not provided",
        items: M.map((k) => ({
          id: k.id,
          name: k.name || `Item ${k.id}`,
          quantity: k.quantity,
          price: k.price || 0,
          totalPrice: k.totalPrice || k.price || 0,
          options: k.options || {}
        })),
        whatsappMessage: d
        // This contains the full formatted WhatsApp message
      }).catch((k) => {
        console.warn("Failed to track order, but continuing with WhatsApp:", k);
      });
    } catch (M) {
      console.warn("Error in order tracking, but continuing with WhatsApp:", M);
    }
    const j = `https://wa.me/${F.whatsapp}?text=${encodeURIComponent(d)}`;
    window.open(j, "_blank"), o(!1);
  };
  return Wt(
    /* @__PURE__ */ c.jsxs("div", { className: `fixed inset-0 z-[10000] ${n ? "" : "pointer-events-none"}`, children: [
      /* @__PURE__ */ c.jsx(
        "div",
        {
          className: `absolute inset-0 z-0 bg-black/60 transition-opacity ${n ? "opacity-100" : "opacity-0"}`,
          onClick: e
        }
      ),
      /* @__PURE__ */ c.jsxs(
        "aside",
        {
          className: `absolute top-0 ${b} z-10
        h-full w-full sm:w-[430px]
        bg-[var(--card)] shadow-2xl overflow-hidden
        flex flex-col
        ${w} border-white/10
        transform transition-transform ${n ? "translate-x-0" : y}`,
          children: [
            /* @__PURE__ */ c.jsxs("div", { className: "p-4 flex items-center justify-between border-b border-white/10", children: [
              /* @__PURE__ */ c.jsx("div", { className: "text-lg font-semibold", children: a("cart") }),
              /* @__PURE__ */ c.jsx("button", { className: "tab", onClick: e, children: /* @__PURE__ */ c.jsx(Le, {}) })
            ] }),
            /* @__PURE__ */ c.jsx("div", { className: "flex-1 p-4 space-y-3 overflow-auto", children: m.length === 0 ? /* @__PURE__ */ c.jsx("div", { className: "h-full flex items-center justify-center text-white/60 text-lg font-medium", children: a("empty_cart") }) : m.map((j) => /* @__PURE__ */ c.jsx("div", { className: "card p-3", children: /* @__PURE__ */ c.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ c.jsx(
                "img",
                {
                  src: j.image,
                  alt: j.name,
                  className: "w-16 h-16 object-cover rounded-lg"
                }
              ),
              /* @__PURE__ */ c.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ c.jsx("div", { className: "font-semibold", children: j.name }),
                  /* @__PURE__ */ c.jsx(
                    "button",
                    {
                      className: "text-red-400",
                      onClick: () => s({ type: "REMOVE", key: j.key }),
                      children: /* @__PURE__ */ c.jsx(sn, { size: 16 })
                    }
                  )
                ] }),
                (() => {
                  const S = ye(j.id, i.language), P = (S == null ? void 0 : S.options) || {}, E = j.options || {}, M = {};
                  return Object.entries(E).forEach(([O, C]) => {
                    C !== null && C !== "" && (!Array.isArray(C) || C.length > 0) && (M[O] = C);
                  }), Object.entries(P).forEach(([O, C]) => {
                    !M[O] && C.choices && C.choices.length > 0 && C.type === "select" && (M[O] = 0);
                  }), /* @__PURE__ */ c.jsx("div", { className: "text-xs text-white/60", children: Object.entries(M).map(([O, C]) => {
                    var q;
                    if (!C && C !== 0)
                      return null;
                    const k = (q = S == null ? void 0 : S.options) == null ? void 0 : q[O], D = (k == null ? void 0 : k.label) || {
                      size: a("opt_size"),
                      extras: a("opt_extras"),
                      notes: a("opt_notes"),
                      doneness: a("opt_doneness"),
                      sugar: a("opt_sugar"),
                      pasta_type: a("opt_pasta_type"),
                      bread: a("opt_bread"),
                      wrap: a("opt_wrap")
                    }[O] || O;
                    let B = C, W = 0;
                    if (k && k.choices)
                      if (Array.isArray(C))
                        B = C.map((T) => {
                          const U = k.choices[T];
                          return U && typeof U == "object" && U.price && (W += U.price), typeof U == "string" ? U : (U == null ? void 0 : U.name) || `Choice ${T}`;
                        }).join(", ");
                      else if (typeof C == "number" && k.choices[C]) {
                        const T = k.choices[C];
                        T && typeof T == "object" && T.price && (W = T.price), B = typeof T == "string" ? T : (T == null ? void 0 : T.name) || `Choice ${C}`;
                      } else {
                        const T = k.choices.find(
                          (U) => (typeof U == "string" ? U : U.name) === C
                        );
                        T && typeof T == "object" && T.price && (W = T.price), B = typeof T == "string" ? T : (T == null ? void 0 : T.name) || C;
                      }
                    return /* @__PURE__ */ c.jsxs("div", { children: [
                      /* @__PURE__ */ c.jsxs("span", { className: "text-white/70", children: [
                        D,
                        ":"
                      ] }),
                      " ",
                      B,
                      W > 0 && /* @__PURE__ */ c.jsxs("span", { className: "text-green-400 ml-1", children: [
                        "+",
                        W,
                        F.currency
                      ] })
                    ] }, O);
                  }) });
                })(),
                /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2 pt-2", children: [
                  /* @__PURE__ */ c.jsx(
                    "button",
                    {
                      className: "tab",
                      onClick: () => s({ type: "DEC", key: j.key }),
                      children: /* @__PURE__ */ c.jsx(Zs, { size: 14 })
                    }
                  ),
                  /* @__PURE__ */ c.jsx("div", { className: "min-w-[2rem] text-center", children: j.quantity }),
                  /* @__PURE__ */ c.jsx(
                    "button",
                    {
                      className: "tab",
                      onClick: () => s({ type: "INC", key: j.key }),
                      children: /* @__PURE__ */ c.jsx(en, { size: 14 })
                    }
                  ),
                  /* @__PURE__ */ c.jsx("div", { className: "flex-1" }),
                  /* @__PURE__ */ c.jsxs("div", { className: "font-semibold", children: [
                    (j.totalPrice || j.price) * j.quantity,
                    (j.totalPrice || j.price) * j.quantity > 0 && F.currency
                  ] })
                ] })
              ] })
            ] }) }, j.key)) }),
            m.length > 0 && /* @__PURE__ */ c.jsxs("div", { className: "p-4 border-t border-white/10 space-y-3", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ c.jsxs("label", { className: "text-sm", children: [
                  /* @__PURE__ */ c.jsxs("div", { className: "text-white/70", children: [
                    a("customer_name"),
                    " ",
                    /* @__PURE__ */ c.jsx("span", { className: "text-red-400", children: "*" })
                  ] }),
                  /* @__PURE__ */ c.jsx(
                    "input",
                    {
                      value: t.customer.name,
                      onChange: (j) => {
                        s({ type: "SET_CUSTOMER", payload: { name: j.target.value } }), l && j.target.value.trim() && f(!1);
                      },
                      className: `w-full bg-[var(--card)] border rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 transition-all duration-200 ${l || !t.customer.name || t.customer.name.trim() === "" ? "border-red-400/50 focus:border-red-400" : "border-white/10 focus:border-green-400/50"}`,
                      placeholder: a("customer_name")
                    }
                  ),
                  l && /* @__PURE__ */ c.jsx("div", { className: "text-red-400 text-xs mt-1", children: a("name_required") })
                ] }),
                /* @__PURE__ */ c.jsxs("label", { className: "text-sm", children: [
                  /* @__PURE__ */ c.jsx("div", { className: "text-white/70", children: a("order_type") }),
                  /* @__PURE__ */ c.jsxs(
                    "select",
                    {
                      value: t.customer.type,
                      onChange: (j) => s({ type: "SET_CUSTOMER", payload: { type: j.target.value } }),
                      children: [
                        /* @__PURE__ */ c.jsx("option", { value: "pickup", children: a("pickup") }),
                        /* @__PURE__ */ c.jsx("option", { value: "delivery", children: a("delivery") })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ c.jsx("button", { className: "btn-outline", onClick: () => s({ type: "CLEAR" }), children: a("clear_cart") }),
                /* @__PURE__ */ c.jsxs("div", { className: "text-lg font-bold", children: [
                  a("total"),
                  ": ",
                  u,
                  u > 0 && F.currency
                ] })
              ] }),
              t.customer.type === "delivery" && /* @__PURE__ */ c.jsx("div", { className: "bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 text-sm", children: /* @__PURE__ */ c.jsxs("div", { className: "font-medium text-orange-400 mb-1", children: [
                "🚚 ",
                a("delivery_notice")
              ] }) }),
              /* @__PURE__ */ c.jsx("button", { className: "btn w-full", onClick: v, children: a("checkout") })
            ] })
          ]
        }
      ),
      p && /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 z-30 flex items-center justify-center p-4", children: /* @__PURE__ */ c.jsx("div", { className: "bg-[var(--card)] border border-red-500/30 rounded-xl p-6 max-w-md w-full shadow-2xl", children: /* @__PURE__ */ c.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ c.jsx("h3", { className: "text-lg font-semibold", children: a("important_notice_cart") }),
        /* @__PURE__ */ c.jsx("p", { className: "text-sm text-white/80", children: a("restaurant_closed_message") }),
        /* @__PURE__ */ c.jsx("button", { className: "btn w-full", onClick: () => g(!1), children: a("close") })
      ] }) }) }),
      r && /* @__PURE__ */ c.jsx("div", { className: "absolute inset-0 z-20 flex items-center justify-center p-4", children: /* @__PURE__ */ c.jsx("div", { className: "bg-[var(--card)] border border-white/10 rounded-xl p-6 max-w-md w-full shadow-2xl", children: /* @__PURE__ */ c.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ c.jsx("div", { className: "w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ c.jsx(rt, { size: 32, className: "text-blue-400" }) }),
        /* @__PURE__ */ c.jsx("h3", { className: "text-lg font-semibold mb-3", children: a("important_notice_cart") }),
        /* @__PURE__ */ c.jsxs("div", { className: "text-sm text-white/80 space-y-2 mb-6", children: [
          /* @__PURE__ */ c.jsxs("p", { children: [
            "• ",
            a("order_wait")
          ] }),
          /* @__PURE__ */ c.jsxs("p", { children: [
            "• ",
            a("order_no_response")
          ] })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ c.jsx("button", { className: "btn-outline flex-1", onClick: () => o(!1), children: a("cancel") }),
          /* @__PURE__ */ c.jsx("button", { className: "btn flex-1", onClick: $, children: a("continue_to_whatsapp") })
        ] })
      ] }) }) })
    ] }),
    document.body
  );
}
function th({ categories: n, current: e, onChange: t }) {
  const { t: s } = Z();
  return /* @__PURE__ */ c.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ c.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" }),
    /* @__PURE__ */ c.jsx("div", { className: "absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex gap-2 overflow-x-auto py-3 px-2 no-scrollbar scroll-smooth", children: [
      /* @__PURE__ */ c.jsx(
        "button",
        {
          className: `tab ${e === "all" ? "bg-green-500/20 border-green-400/50 text-green-400 ring-2 ring-green-400/30" : "hover:bg-white/5"} transition-all duration-200`,
          onClick: () => t("all"),
          children: s("all")
        }
      ),
      n.map((a) => /* @__PURE__ */ c.jsxs(
        "button",
        {
          className: `tab ${e === a.id ? "bg-green-500/20 border-green-400/50 text-green-400 ring-2 ring-green-400/30" : "hover:bg-white/5"} transition-all duration-200`,
          onClick: () => t(a.id),
          children: [
            /* @__PURE__ */ c.jsx("span", { className: "text-lg", children: a.emoji }),
            /* @__PURE__ */ c.jsx("span", { children: a.title })
          ]
        },
        a.id
      ))
    ] })
  ] });
}
function sh({ open: n, src: e, alt: t, onClose: s }) {
  if (I.useEffect(() => {
    if (!n)
      return;
    const i = (u) => u.key === "Escape" && s();
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [n, s]), !n)
    return null;
  const a = document.dir === "rtl" ? "left-3" : "right-3";
  return Wt(
    /* @__PURE__ */ c.jsx(
      "div",
      {
        className: "fixed inset-0 z-[11000] bg-black/80 p-4 flex items-center justify-center cursor-zoom-out",
        onClick: s,
        children: /* @__PURE__ */ c.jsxs(
          "div",
          {
            className: "relative max-w-5xl w-full",
            onClick: (i) => i.stopPropagation(),
            children: [
              /* @__PURE__ */ c.jsx(
                "img",
                {
                  src: e,
                  alt: t || "",
                  className: "w-full h-auto rounded-2xl shadow-2xl select-none",
                  draggable: "false"
                }
              ),
              /* @__PURE__ */ c.jsx(
                "button",
                {
                  "aria-label": "Close",
                  className: `absolute top-3 ${a} bg-black/60 hover:bg-black/80 text-white rounded-full p-2 cursor-pointer`,
                  onClick: s,
                  children: /* @__PURE__ */ c.jsx(Le, { size: 18 })
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
function nh({ item: n, currency: e, onAdd: t, onPreview: s }) {
  var i;
  const { t: a } = Z();
  return /* @__PURE__ */ c.jsxs("div", { className: "card w-full md:w-full text-left overflow-hidden flex flex-col min-w-[280px] md:min-w-0 min-h-[320px]", children: [
    /* @__PURE__ */ c.jsxs(
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
          /* @__PURE__ */ c.jsx(
            "img",
            {
              src: n.image,
              alt: n.name,
              className: "w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
            }
          ),
          /* @__PURE__ */ c.jsx("div", { className: "absolute bottom-1 right-1 bg-black/40 text-white/80 text-[10px] px-1 py-0.5 rounded", children: a("for_illustration_only") })
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "p-4 flex flex-col gap-2 flex-1", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ c.jsx("div", { className: "text-lg font-semibold", children: n.name }),
        /* @__PURE__ */ c.jsxs("div", { className: "text-white/90 font-semibold", children: [
          n.price,
          n.price > 0 && e
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "text-sm text-white/70 line-clamp-2", children: n.desc }),
      ((i = n.options) == null ? void 0 : i.size) && /* @__PURE__ */ c.jsx("div", { className: "text-xs text-white/60", children: /* @__PURE__ */ c.jsx("div", { className: "flex flex-wrap gap-1", children: n.options.size.choices.map((u, d) => {
        const r = typeof u == "string" ? u : u.name, o = typeof u == "object" ? u.price : 0, l = n.price + o;
        return /* @__PURE__ */ c.jsxs("span", { className: "bg-white/10 px-2 py-1 rounded text-xs", children: [
          r,
          " ",
          l,
          l > 0 && e
        ] }, d);
      }) }) }),
      !n.noCart && /* @__PURE__ */ c.jsx("div", { className: "pt-2 mt-auto", children: /* @__PURE__ */ c.jsxs("button", { className: "btn w-full", onClick: () => t(n), children: [
        /* @__PURE__ */ c.jsx(Qs, { size: 18 }),
        " ",
        a("add_to_cart")
      ] }) })
    ] })
  ] });
}
const Zt = Vt();
function ah({ children: n }) {
  const [e, t] = tt(null), s = (a) => {
    t(a), setTimeout(() => {
      t(null);
    }, 800);
  };
  return /* @__PURE__ */ c.jsx(Zt.Provider, { value: { animation: e, triggerAnimation: s }, children: n });
}
function ta() {
  return qt(Zt);
}
function rh({ open: n, onClose: e, item: t, onConfirm: s }) {
  const { t: a } = Z(), { triggerAnimation: i } = ta(), [u, d] = I.useState(1), [r, o] = I.useState({}), l = () => {
    if (!t)
      return 0;
    let g = 0;
    return t.options && Object.entries(t.options).forEach(([m, _]) => {
      if (_.type === "multi" && r[m] && r[m].forEach((w) => {
        const y = _.choices.find(
          (v) => (typeof v == "string" ? v : v.name) === w
        );
        y && typeof y == "object" && y.price && (g += y.price);
      }), _.type === "select" && r[m]) {
        const b = _.choices.find(
          (w) => (typeof w == "string" ? w : w.name) === r[m]
        );
        b && typeof b == "object" && b.price && (g += b.price);
      }
    }), (t.price + g) * u;
  };
  if (I.useEffect(() => {
    if (t != null && t.options) {
      const g = {};
      for (const [m, _] of Object.entries(t.options))
        _.type === "single" && (g[m] = _.choices[0]), _.type === "select" && (g[m] = _.choices[0].name || _.choices[0]), _.type === "multi" && (g[m] = []), _.type === "text" && (g[m] = "");
      o(g), d(1);
    }
  }, [t]), !n || !t)
    return null;
  const f = () => {
    const g = {};
    t.options && Object.entries(t.options).forEach(([m, _]) => {
      const b = r[m];
      if (b != null && b !== "")
        if (_.type === "text")
          g[m] = b;
        else if (Array.isArray(b))
          g[m] = b.map((w) => {
            const y = _.choices.findIndex(
              (v) => (typeof v == "string" ? v : v.name) === w
            );
            return y >= 0 ? y : w;
          });
        else {
          const w = _.choices.findIndex(
            (y) => (typeof y == "string" ? y : y.name) === b
          );
          g[m] = w >= 0 ? w : b;
        }
    }), s({ quantity: u, options: g }), e(), setTimeout(() => {
      i(t);
    }, 100);
  }, p = (g, m) => {
    if (m.type === "single")
      return /* @__PURE__ */ c.jsxs("label", { className: "block space-y-1", children: [
        /* @__PURE__ */ c.jsx("div", { className: "text-sm text-white/80", children: m.label }),
        /* @__PURE__ */ c.jsx(
          "select",
          {
            value: r[g],
            onChange: (_) => o({ ...r, [g]: _.target.value }),
            className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
            children: m.choices.map((_) => /* @__PURE__ */ c.jsx("option", { value: _, children: _ }, _))
          }
        )
      ] });
    if (m.type === "select") {
      const _ = r[g], b = (w) => {
        const y = typeof w == "string" ? w : w.name;
        o({ ...r, [g]: y });
      };
      return /* @__PURE__ */ c.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ c.jsx("div", { className: "text-sm text-white/80", children: m.label }),
        /* @__PURE__ */ c.jsx("div", { className: "flex flex-wrap gap-1.5 sm:gap-2", children: m.choices.map((w) => {
          const y = typeof w == "string" ? w : w.name, v = typeof w == "object" ? w.price : 0, $ = _ === y;
          return /* @__PURE__ */ c.jsxs(
            "button",
            {
              type: "button",
              onClick: () => b(w),
              className: `tab text-xs sm:text-sm ${$ ? "bg-green-500/20 border-green-400/50 text-green-400 ring-2 ring-green-400/30" : "hover:bg-white/5"} flex items-center gap-1 transition-all duration-200`,
              children: [
                /* @__PURE__ */ c.jsx("span", { className: "truncate", children: y }),
                v > 0 && /* @__PURE__ */ c.jsxs("span", { className: "text-xs text-green-400 flex-shrink-0", children: [
                  "+",
                  v,
                  F.currency
                ] })
              ]
            },
            y
          );
        }) })
      ] });
    }
    if (m.type === "multi") {
      const _ = r[g] || [], b = (w) => {
        const y = typeof w == "string" ? w : w.name, $ = _.includes(y) ? _.filter((j) => j !== y) : [..._, y];
        o({ ...r, [g]: $ });
      };
      return /* @__PURE__ */ c.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ c.jsx("div", { className: "text-sm text-white/80", children: m.label }),
        /* @__PURE__ */ c.jsx("div", { className: "flex flex-wrap gap-1.5 sm:gap-2", children: m.choices.map((w) => {
          const y = typeof w == "string" ? w : w.name, v = typeof w == "object" ? w.price : 0, $ = _.includes(y);
          return /* @__PURE__ */ c.jsxs(
            "button",
            {
              type: "button",
              onClick: () => b(w),
              className: `tab text-xs sm:text-sm ${$ ? "bg-green-500/20 border-green-400/50 text-green-400 ring-2 ring-green-400/30" : "hover:bg-white/5"} flex items-center gap-1 transition-all duration-200`,
              children: [
                /* @__PURE__ */ c.jsx("span", { className: "truncate", children: y }),
                v > 0 && /* @__PURE__ */ c.jsxs("span", { className: "text-xs text-green-400 flex-shrink-0", children: [
                  "+",
                  v,
                  F.currency
                ] })
              ]
            },
            y
          );
        }) })
      ] });
    }
    return m.type === "text" ? /* @__PURE__ */ c.jsxs("label", { className: "block space-y-1", children: [
      /* @__PURE__ */ c.jsx("div", { className: "text-sm text-white/80", children: m.label }),
      /* @__PURE__ */ c.jsx(
        "textarea",
        {
          rows: 2,
          value: r[g] || "",
          onChange: (_) => o({ ...r, [g]: _.target.value }),
          className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200 resize-none"
        }
      )
    ] }) : null;
  };
  return /* @__PURE__ */ c.jsx("div", { className: "fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4", onClick: e, children: /* @__PURE__ */ c.jsxs("div", { className: "card max-w-lg sm:max-w-xl w-full max-h-[90vh] overflow-y-auto", onClick: (g) => g.stopPropagation(), children: [
    /* @__PURE__ */ c.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ c.jsx("img", { src: t.image, alt: t.name, className: "w-full h-48 sm:h-56 object-cover" }),
      /* @__PURE__ */ c.jsx("button", { className: "absolute top-2 end-2 sm:top-3 sm:end-3 bg-black/60 rounded-full p-1.5 sm:p-2", onClick: e, children: /* @__PURE__ */ c.jsx(Le, { size: 16, className: "sm:w-5 sm:h-5" }) })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "p-3 sm:p-5 space-y-3", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ c.jsx("div", { className: "text-lg sm:text-xl font-semibold flex-1 min-w-0", children: t.name }),
        /* @__PURE__ */ c.jsxs("div", { className: "text-base sm:text-lg font-bold text-green-400 flex-shrink-0", children: [
          t.price,
          t.price > 0 && F.currency
        ] })
      ] }),
      /* @__PURE__ */ c.jsx("div", { className: "text-sm sm:text-base text-white/70 line-clamp-2", children: t.desc }),
      /* @__PURE__ */ c.jsx("div", { className: "grid gap-3", children: t.options && Object.entries(t.options).map(([g, m]) => /* @__PURE__ */ c.jsx("div", { children: p(g, m) }, g)) }),
      (() => {
        if (l() - t.price * u > 0) {
          let m = 0, _ = 0;
          return t.options && Object.entries(t.options).forEach(([b, w]) => {
            if (w.type === "select" && r[b]) {
              const y = w.choices.find(
                (v) => (typeof v == "string" ? v : v.name) === r[b]
              );
              y && typeof y == "object" && y.price && (m += y.price * u);
            } else
              w.type === "multi" && r[b] && r[b].forEach((v) => {
                const $ = w.choices.find(
                  (j) => (typeof j == "string" ? j : j.name) === v
                );
                $ && typeof $ == "object" && $.price && (_ += $.price * u);
              });
          }), /* @__PURE__ */ c.jsxs("div", { className: "bg-black/20 border border-white/10 rounded-lg p-3 space-y-1", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ c.jsxs("span", { children: [
                a("base_price"),
                ":"
              ] }),
              /* @__PURE__ */ c.jsxs("span", { children: [
                t.price * u,
                t.price * u > 0 && F.currency
              ] })
            ] }),
            m > 0 && /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between text-sm text-green-400", children: [
              /* @__PURE__ */ c.jsxs("span", { children: [
                a("opt_size"),
                ":"
              ] }),
              /* @__PURE__ */ c.jsxs("span", { children: [
                "+",
                m,
                F.currency
              ] })
            ] }),
            _ > 0 && /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between text-sm text-green-400", children: [
              /* @__PURE__ */ c.jsxs("span", { children: [
                a("opt_extras"),
                ":"
              ] }),
              /* @__PURE__ */ c.jsxs("span", { children: [
                "+",
                _,
                F.currency
              ] })
            ] }),
            /* @__PURE__ */ c.jsxs("div", { className: "border-t border-white/10 pt-1 flex justify-between font-semibold", children: [
              /* @__PURE__ */ c.jsxs("span", { children: [
                a("total"),
                ":"
              ] }),
              /* @__PURE__ */ c.jsxs("span", { className: "text-green-400", children: [
                l(),
                l() > 0 && F.currency
              ] })
            ] })
          ] });
        }
        return null;
      })(),
      /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-white/10", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ c.jsx("button", { className: "tab text-sm", onClick: () => d(Math.max(1, u - 1)), children: "-" }),
          /* @__PURE__ */ c.jsx("div", { className: "min-w-[2rem] text-center text-sm", children: u }),
          /* @__PURE__ */ c.jsx("button", { className: "tab text-sm", onClick: () => d(u + 1), children: "+" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex-1 text-center sm:text-right", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "text-xs sm:text-sm text-white/60", children: [
            a("total"),
            ":"
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "text-base sm:text-lg font-bold text-green-400", children: [
            l(),
            F.currency
          ] })
        ] }),
        /* @__PURE__ */ c.jsx("button", { className: "btn w-full sm:w-auto text-sm sm:text-base", onClick: f, children: a("add_to_cart") })
      ] })
    ] })
  ] }) });
}
function sa({ open: n, onClose: e }) {
  const { t, i18n: s } = Z(), [a, i] = I.useState({
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    // Today as default
    time: "",
    area: "",
    guests: 2,
    name: "",
    phone: "",
    notes: ""
  }), u = (o) => s.language === "ar" ? o.name_ar : s.language === "he" ? o.name_he : o.name, d = () => {
    const o = [], l = /* @__PURE__ */ new Date();
    for (let f = 0; f < F.reservation.max_advance_days; f++) {
      const p = new Date(l);
      p.setDate(l.getDate() + f);
      const g = p.toISOString().split("T")[0], m = p.toLocaleDateString(s.language, {
        weekday: "short",
        month: "short",
        day: "numeric"
      });
      o.push({ value: g, label: m });
    }
    return o;
  }, r = (o) => {
    o.preventDefault();
    const l = F.reservation.areas.find(
      (m) => m.id === a.area
    ), f = l ? u(l) : a.area, p = `🍽️ *${t("reservation_request")}*

📅 *${t("date_label")}* ${new Date(a.date).toLocaleDateString(s.language)}
🕐 *${t("time_label")}* ${a.time}
📍 *${t("area_label")}* ${f}
👥 *${t("guests_label")}* ${a.guests}
👤 *${t("name_label")}* ${a.name}
📞 *${t("phone_label")}* ${a.phone}
${a.notes ? `📝 *${t("notes_label")}* ${a.notes}` : ""}

*${t("confirm_reservation")}*

${t("thank_you")}`, g = `https://wa.me/${F.reservation.whatsapp}?text=${encodeURIComponent(p)}`;
    window.open(g, "_blank"), alert(
      t("reservation_sent") + `

` + t("reservation_wait") + `

` + t("reservation_no_response")
    ), e();
  };
  return n ? /* @__PURE__ */ c.jsx(
    "div",
    {
      className: "fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",
      onClick: e,
      children: /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: "card max-w-md w-full overflow-hidden",
          onClick: (o) => o.stopPropagation(),
          children: [
            /* @__PURE__ */ c.jsxs("div", { className: "p-5 border-b border-white/10 flex items-center justify-between", children: [
              /* @__PURE__ */ c.jsxs("h2", { className: "text-xl font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ c.jsx(Ee, { size: 20 }),
                t("book_table")
              ] }),
              /* @__PURE__ */ c.jsx("button", { className: "tab", onClick: e, children: /* @__PURE__ */ c.jsx(Le, { size: 16 }) })
            ] }),
            /* @__PURE__ */ c.jsxs("form", { onSubmit: r, className: "p-5 space-y-4", children: [
              /* @__PURE__ */ c.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ c.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ c.jsx(Ee, { size: 14 }),
                  t("reservation_date")
                ] }),
                /* @__PURE__ */ c.jsx(
                  "select",
                  {
                    value: a.date,
                    onChange: (o) => i({ ...a, date: o.target.value }),
                    className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
                    required: !0,
                    children: d().map((o) => /* @__PURE__ */ c.jsx("option", { value: o.value, children: o.label }, o.value))
                  }
                )
              ] }),
              /* @__PURE__ */ c.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ c.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ c.jsx(Qe, { size: 14 }),
                  t("reservation_time")
                ] }),
                /* @__PURE__ */ c.jsxs(
                  "select",
                  {
                    value: a.time,
                    onChange: (o) => i({ ...a, time: o.target.value }),
                    className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
                    required: !0,
                    children: [
                      /* @__PURE__ */ c.jsx("option", { value: "", children: t("reservation_time") }),
                      F.reservation.time_slots.map((o) => /* @__PURE__ */ c.jsx("option", { value: o, children: o }, o))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ c.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ c.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ c.jsx(at, { size: 14 }),
                  t("reservation_area")
                ] }),
                /* @__PURE__ */ c.jsxs(
                  "select",
                  {
                    value: a.area,
                    onChange: (o) => i({ ...a, area: o.target.value }),
                    className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
                    required: !0,
                    children: [
                      /* @__PURE__ */ c.jsx("option", { value: "", children: t("reservation_area") }),
                      F.reservation.areas.map((o) => /* @__PURE__ */ c.jsx("option", { value: o.id, children: u(o) }, o.id))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ c.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ c.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ c.jsx(Jt, { size: 14 }),
                  t("reservation_guests")
                ] }),
                /* @__PURE__ */ c.jsx(
                  "select",
                  {
                    value: a.guests,
                    onChange: (o) => i({ ...a, guests: parseInt(o.target.value) }),
                    className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
                    required: !0,
                    children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((o) => /* @__PURE__ */ c.jsxs("option", { value: o, children: [
                      o,
                      " ",
                      t(o === 1 ? "guests_singular" : "guests_plural")
                    ] }, o))
                  }
                )
              ] }),
              /* @__PURE__ */ c.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ c.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ c.jsx(nn, { size: 14 }),
                  t("reservation_name")
                ] }),
                /* @__PURE__ */ c.jsx(
                  "input",
                  {
                    type: "text",
                    value: a.name,
                    onChange: (o) => i({ ...a, name: o.target.value }),
                    className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ c.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ c.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ c.jsx(it, { size: 14 }),
                  t("reservation_phone")
                ] }),
                /* @__PURE__ */ c.jsx(
                  "input",
                  {
                    type: "tel",
                    value: a.phone,
                    onChange: (o) => i({ ...a, phone: o.target.value }),
                    className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ c.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ c.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ c.jsx(Xs, { size: 14 }),
                  t("reservation_notes")
                ] }),
                /* @__PURE__ */ c.jsx(
                  "textarea",
                  {
                    rows: 3,
                    value: a.notes,
                    onChange: (o) => i({ ...a, notes: o.target.value }),
                    className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200 resize-none",
                    placeholder: t("special_requests_placeholder")
                  }
                )
              ] }),
              /* @__PURE__ */ c.jsx("button", { type: "submit", className: "btn w-full", children: t("send_reservation") })
            ] })
          ]
        }
      )
    }
  ) : null;
}
function ih({ value: n, onChange: e }) {
  const { t } = Z();
  return /* @__PURE__ */ c.jsx(
    "input",
    {
      value: n,
      onChange: (s) => e(s.target.value),
      placeholder: t("search_placeholder"),
      className: "w-full"
    }
  );
}
function oh() {
  const { t: n } = Z(), e = st();
  return I.useEffect(() => {
    document.documentElement.scrollTop = 0, document.body.scrollTop = 0, setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 0);
  }, []), /* @__PURE__ */ c.jsx("div", { className: "py-8", children: /* @__PURE__ */ c.jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        onClick: () => e("/"),
        className: "btn-outline flex items-center gap-2 mb-6",
        children: [
          /* @__PURE__ */ c.jsx(nt, { size: 16 }),
          n("back_to_menu")
        ]
      }
    ),
    /* @__PURE__ */ c.jsx("h1", { className: "text-3xl font-bold mb-8", children: n("accessibility_statement") }),
    /* @__PURE__ */ c.jsxs("div", { className: "space-y-6 text-white/80 leading-relaxed", children: [
      /* @__PURE__ */ c.jsxs("section", { children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("accessibility_commitment") }),
        /* @__PURE__ */ c.jsx("p", { children: n("accessibility_commitment_text") })
      ] }),
      /* @__PURE__ */ c.jsxs("section", { children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("accessibility_standards") }),
        /* @__PURE__ */ c.jsx("p", { children: n("accessibility_standards_text") })
      ] }),
      /* @__PURE__ */ c.jsxs("section", { children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("accessibility_features") }),
        /* @__PURE__ */ c.jsx("p", { children: n("accessibility_features_text") })
      ] }),
      /* @__PURE__ */ c.jsxs("section", { children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("accessibility_contact") }),
        /* @__PURE__ */ c.jsx("p", { children: n("accessibility_contact_text") })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "pt-6 border-t border-white/10 text-sm text-white/60", children: [
        n("last_updated"),
        ": 26.9.2025"
      ] })
    ] })
  ] }) });
}
function ch() {
  const { t: n } = Z();
  return /* @__PURE__ */ c.jsxs("div", { className: "py-10 max-w-3xl mx-auto space-y-4", children: [
    /* @__PURE__ */ c.jsx("h1", { className: "text-3xl font-bold", children: n("contact") }),
    /* @__PURE__ */ c.jsxs("div", { className: "card p-6 grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ c.jsxs("a", { className: "btn", href: `tel:${F.phone}`, children: [
        /* @__PURE__ */ c.jsx(it, { size: 18 }),
        " ",
        n("call")
      ] }),
      /* @__PURE__ */ c.jsxs("a", { className: "btn-outline", href: `https://wa.me/${F.whatsapp}`, children: [
        /* @__PURE__ */ c.jsx(rt, { size: 18 }),
        " ",
        n("whatsapp")
      ] }),
      /* @__PURE__ */ c.jsxs(
        "a",
        {
          className: "btn-outline",
          href: `https://instagram.com/${F.instagram}`,
          target: "_blank",
          rel: "noreferrer",
          children: [
            /* @__PURE__ */ c.jsx(Gs, { size: 18 }),
            " ",
            n("instagram")
          ]
        }
      ),
      /* @__PURE__ */ c.jsx(
        "a",
        {
          className: "btn-outline sm:col-span-2",
          target: "_blank",
          rel: "noreferrer",
          href: `https://maps.google.com/?q=${encodeURIComponent(
            F.address
          )}`,
          children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2 justify-center", children: [
            /* @__PURE__ */ c.jsx(at, { size: 18 }),
            " ",
            n("address"),
            ": ",
            F.address
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx(
      "iframe",
      {
        className: "w-full h-80 rounded-2xl border border-white/10",
        loading: "lazy",
        allowFullScreen: !0,
        src: `https://www.google.com/maps?q=${encodeURIComponent(
          F.address
        )}&output=embed`,
        title: "map"
      }
    )
  ] });
}
function lh() {
  const { t: n } = Z(), e = st();
  return I.useEffect(() => {
    document.documentElement.scrollTop = 0, document.body.scrollTop = 0, setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 0);
  }, []), /* @__PURE__ */ c.jsx("div", { className: "py-8", children: /* @__PURE__ */ c.jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        onClick: () => e("/"),
        className: "btn-outline flex items-center gap-2 mb-6",
        children: [
          /* @__PURE__ */ c.jsx(nt, { size: 16 }),
          n("back_to_menu")
        ]
      }
    ),
    /* @__PURE__ */ c.jsx("h1", { className: "text-3xl font-bold mb-8", children: n("privacy_policy") }),
    /* @__PURE__ */ c.jsxs("div", { className: "space-y-6 text-white/80 leading-relaxed", children: [
      /* @__PURE__ */ c.jsxs("section", { children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("privacy_info_collection") }),
        /* @__PURE__ */ c.jsx("p", { children: n("privacy_info_collection_text") })
      ] }),
      /* @__PURE__ */ c.jsxs("section", { children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("privacy_info_usage") }),
        /* @__PURE__ */ c.jsx("p", { children: n("privacy_info_usage_text") })
      ] }),
      /* @__PURE__ */ c.jsxs("section", { children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("privacy_cookies") }),
        /* @__PURE__ */ c.jsx("p", { children: n("privacy_cookies_text") })
      ] }),
      /* @__PURE__ */ c.jsxs("section", { children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("privacy_whatsapp") }),
        /* @__PURE__ */ c.jsx("p", { children: n("privacy_whatsapp_text") })
      ] }),
      /* @__PURE__ */ c.jsxs("section", { children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("privacy_data_storage") }),
        /* @__PURE__ */ c.jsx("p", { children: n("privacy_data_storage_text") })
      ] }),
      /* @__PURE__ */ c.jsxs("section", { children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("privacy_user_rights") }),
        /* @__PURE__ */ c.jsx("p", { children: n("privacy_user_rights_text") })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "pt-6 border-t border-white/10 text-sm text-white/60", children: [
        n("last_updated"),
        ": 26.9.2025"
      ] })
    ] })
  ] }) });
}
var na = Object.defineProperty, Re = Object.getOwnPropertySymbols, es = Object.prototype.hasOwnProperty, ts = Object.prototype.propertyIsEnumerable, Pt = (n, e, t) => e in n ? na(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, ve = (n, e) => {
  for (var t in e || (e = {}))
    es.call(e, t) && Pt(n, t, e[t]);
  if (Re)
    for (var t of Re(e))
      ts.call(e, t) && Pt(n, t, e[t]);
  return n;
}, ot = (n, e) => {
  var t = {};
  for (var s in n)
    es.call(n, s) && e.indexOf(s) < 0 && (t[s] = n[s]);
  if (n != null && Re)
    for (var s of Re(n))
      e.indexOf(s) < 0 && ts.call(n, s) && (t[s] = n[s]);
  return t;
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var re;
((n) => {
  const e = class {
    constructor(r, o, l, f) {
      if (this.version = r, this.errorCorrectionLevel = o, this.modules = [], this.isFunction = [], r < e.MIN_VERSION || r > e.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (f < -1 || f > 7)
        throw new RangeError("Mask value out of range");
      this.size = r * 4 + 17;
      let p = [];
      for (let m = 0; m < this.size; m++)
        p.push(!1);
      for (let m = 0; m < this.size; m++)
        this.modules.push(p.slice()), this.isFunction.push(p.slice());
      this.drawFunctionPatterns();
      const g = this.addEccAndInterleave(l);
      if (this.drawCodewords(g), f == -1) {
        let m = 1e9;
        for (let _ = 0; _ < 8; _++) {
          this.applyMask(_), this.drawFormatBits(_);
          const b = this.getPenaltyScore();
          b < m && (f = _, m = b), this.applyMask(_);
        }
      }
      i(0 <= f && f <= 7), this.mask = f, this.applyMask(f), this.drawFormatBits(f), this.isFunction = [];
    }
    static encodeText(r, o) {
      const l = n.QrSegment.makeSegments(r);
      return e.encodeSegments(l, o);
    }
    static encodeBinary(r, o) {
      const l = n.QrSegment.makeBytes(r);
      return e.encodeSegments([l], o);
    }
    static encodeSegments(r, o, l = 1, f = 40, p = -1, g = !0) {
      if (!(e.MIN_VERSION <= l && l <= f && f <= e.MAX_VERSION) || p < -1 || p > 7)
        throw new RangeError("Invalid value");
      let m, _;
      for (m = l; ; m++) {
        const v = e.getNumDataCodewords(m, o) * 8, $ = d.getTotalBits(r, m);
        if ($ <= v) {
          _ = $;
          break;
        }
        if (m >= f)
          throw new RangeError("Data too long");
      }
      for (const v of [e.Ecc.MEDIUM, e.Ecc.QUARTILE, e.Ecc.HIGH])
        g && _ <= e.getNumDataCodewords(m, v) * 8 && (o = v);
      let b = [];
      for (const v of r) {
        s(v.mode.modeBits, 4, b), s(v.numChars, v.mode.numCharCountBits(m), b);
        for (const $ of v.getData())
          b.push($);
      }
      i(b.length == _);
      const w = e.getNumDataCodewords(m, o) * 8;
      i(b.length <= w), s(0, Math.min(4, w - b.length), b), s(0, (8 - b.length % 8) % 8, b), i(b.length % 8 == 0);
      for (let v = 236; b.length < w; v ^= 253)
        s(v, 8, b);
      let y = [];
      for (; y.length * 8 < b.length; )
        y.push(0);
      return b.forEach((v, $) => y[$ >>> 3] |= v << 7 - ($ & 7)), new e(m, o, y, p);
    }
    getModule(r, o) {
      return 0 <= r && r < this.size && 0 <= o && o < this.size && this.modules[o][r];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let l = 0; l < this.size; l++)
        this.setFunctionModule(6, l, l % 2 == 0), this.setFunctionModule(l, 6, l % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const r = this.getAlignmentPatternPositions(), o = r.length;
      for (let l = 0; l < o; l++)
        for (let f = 0; f < o; f++)
          l == 0 && f == 0 || l == 0 && f == o - 1 || l == o - 1 && f == 0 || this.drawAlignmentPattern(r[l], r[f]);
      this.drawFormatBits(0), this.drawVersion();
    }
    drawFormatBits(r) {
      const o = this.errorCorrectionLevel.formatBits << 3 | r;
      let l = o;
      for (let p = 0; p < 10; p++)
        l = l << 1 ^ (l >>> 9) * 1335;
      const f = (o << 10 | l) ^ 21522;
      i(f >>> 15 == 0);
      for (let p = 0; p <= 5; p++)
        this.setFunctionModule(8, p, a(f, p));
      this.setFunctionModule(8, 7, a(f, 6)), this.setFunctionModule(8, 8, a(f, 7)), this.setFunctionModule(7, 8, a(f, 8));
      for (let p = 9; p < 15; p++)
        this.setFunctionModule(14 - p, 8, a(f, p));
      for (let p = 0; p < 8; p++)
        this.setFunctionModule(this.size - 1 - p, 8, a(f, p));
      for (let p = 8; p < 15; p++)
        this.setFunctionModule(8, this.size - 15 + p, a(f, p));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7)
        return;
      let r = this.version;
      for (let l = 0; l < 12; l++)
        r = r << 1 ^ (r >>> 11) * 7973;
      const o = this.version << 12 | r;
      i(o >>> 18 == 0);
      for (let l = 0; l < 18; l++) {
        const f = a(o, l), p = this.size - 11 + l % 3, g = Math.floor(l / 3);
        this.setFunctionModule(p, g, f), this.setFunctionModule(g, p, f);
      }
    }
    drawFinderPattern(r, o) {
      for (let l = -4; l <= 4; l++)
        for (let f = -4; f <= 4; f++) {
          const p = Math.max(Math.abs(f), Math.abs(l)), g = r + f, m = o + l;
          0 <= g && g < this.size && 0 <= m && m < this.size && this.setFunctionModule(g, m, p != 2 && p != 4);
        }
    }
    drawAlignmentPattern(r, o) {
      for (let l = -2; l <= 2; l++)
        for (let f = -2; f <= 2; f++)
          this.setFunctionModule(r + f, o + l, Math.max(Math.abs(f), Math.abs(l)) != 1);
    }
    setFunctionModule(r, o, l) {
      this.modules[o][r] = l, this.isFunction[o][r] = !0;
    }
    addEccAndInterleave(r) {
      const o = this.version, l = this.errorCorrectionLevel;
      if (r.length != e.getNumDataCodewords(o, l))
        throw new RangeError("Invalid argument");
      const f = e.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][o], p = e.ECC_CODEWORDS_PER_BLOCK[l.ordinal][o], g = Math.floor(e.getNumRawDataModules(o) / 8), m = f - g % f, _ = Math.floor(g / f);
      let b = [];
      const w = e.reedSolomonComputeDivisor(p);
      for (let v = 0, $ = 0; v < f; v++) {
        let j = r.slice($, $ + _ - p + (v < m ? 0 : 1));
        $ += j.length;
        const S = e.reedSolomonComputeRemainder(j, w);
        v < m && j.push(0), b.push(j.concat(S));
      }
      let y = [];
      for (let v = 0; v < b[0].length; v++)
        b.forEach(($, j) => {
          (v != _ - p || j >= m) && y.push($[v]);
        });
      return i(y.length == g), y;
    }
    drawCodewords(r) {
      if (r.length != Math.floor(e.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let o = 0;
      for (let l = this.size - 1; l >= 1; l -= 2) {
        l == 6 && (l = 5);
        for (let f = 0; f < this.size; f++)
          for (let p = 0; p < 2; p++) {
            const g = l - p, _ = (l + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[_][g] && o < r.length * 8 && (this.modules[_][g] = a(r[o >>> 3], 7 - (o & 7)), o++);
          }
      }
      i(o == r.length * 8);
    }
    applyMask(r) {
      if (r < 0 || r > 7)
        throw new RangeError("Mask value out of range");
      for (let o = 0; o < this.size; o++)
        for (let l = 0; l < this.size; l++) {
          let f;
          switch (r) {
            case 0:
              f = (l + o) % 2 == 0;
              break;
            case 1:
              f = o % 2 == 0;
              break;
            case 2:
              f = l % 3 == 0;
              break;
            case 3:
              f = (l + o) % 3 == 0;
              break;
            case 4:
              f = (Math.floor(l / 3) + Math.floor(o / 2)) % 2 == 0;
              break;
            case 5:
              f = l * o % 2 + l * o % 3 == 0;
              break;
            case 6:
              f = (l * o % 2 + l * o % 3) % 2 == 0;
              break;
            case 7:
              f = ((l + o) % 2 + l * o % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[o][l] && f && (this.modules[o][l] = !this.modules[o][l]);
        }
    }
    getPenaltyScore() {
      let r = 0;
      for (let p = 0; p < this.size; p++) {
        let g = !1, m = 0, _ = [0, 0, 0, 0, 0, 0, 0];
        for (let b = 0; b < this.size; b++)
          this.modules[p][b] == g ? (m++, m == 5 ? r += e.PENALTY_N1 : m > 5 && r++) : (this.finderPenaltyAddHistory(m, _), g || (r += this.finderPenaltyCountPatterns(_) * e.PENALTY_N3), g = this.modules[p][b], m = 1);
        r += this.finderPenaltyTerminateAndCount(g, m, _) * e.PENALTY_N3;
      }
      for (let p = 0; p < this.size; p++) {
        let g = !1, m = 0, _ = [0, 0, 0, 0, 0, 0, 0];
        for (let b = 0; b < this.size; b++)
          this.modules[b][p] == g ? (m++, m == 5 ? r += e.PENALTY_N1 : m > 5 && r++) : (this.finderPenaltyAddHistory(m, _), g || (r += this.finderPenaltyCountPatterns(_) * e.PENALTY_N3), g = this.modules[b][p], m = 1);
        r += this.finderPenaltyTerminateAndCount(g, m, _) * e.PENALTY_N3;
      }
      for (let p = 0; p < this.size - 1; p++)
        for (let g = 0; g < this.size - 1; g++) {
          const m = this.modules[p][g];
          m == this.modules[p][g + 1] && m == this.modules[p + 1][g] && m == this.modules[p + 1][g + 1] && (r += e.PENALTY_N2);
        }
      let o = 0;
      for (const p of this.modules)
        o = p.reduce((g, m) => g + (m ? 1 : 0), o);
      const l = this.size * this.size, f = Math.ceil(Math.abs(o * 20 - l * 10) / l) - 1;
      return i(0 <= f && f <= 9), r += f * e.PENALTY_N4, i(0 <= r && r <= 2568888), r;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const r = Math.floor(this.version / 7) + 2, o = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (r * 2 - 2)) * 2;
        let l = [6];
        for (let f = this.size - 7; l.length < r; f -= o)
          l.splice(1, 0, f);
        return l;
      }
    }
    static getNumRawDataModules(r) {
      if (r < e.MIN_VERSION || r > e.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let o = (16 * r + 128) * r + 64;
      if (r >= 2) {
        const l = Math.floor(r / 7) + 2;
        o -= (25 * l - 10) * l - 55, r >= 7 && (o -= 36);
      }
      return i(208 <= o && o <= 29648), o;
    }
    static getNumDataCodewords(r, o) {
      return Math.floor(e.getNumRawDataModules(r) / 8) - e.ECC_CODEWORDS_PER_BLOCK[o.ordinal][r] * e.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][r];
    }
    static reedSolomonComputeDivisor(r) {
      if (r < 1 || r > 255)
        throw new RangeError("Degree out of range");
      let o = [];
      for (let f = 0; f < r - 1; f++)
        o.push(0);
      o.push(1);
      let l = 1;
      for (let f = 0; f < r; f++) {
        for (let p = 0; p < o.length; p++)
          o[p] = e.reedSolomonMultiply(o[p], l), p + 1 < o.length && (o[p] ^= o[p + 1]);
        l = e.reedSolomonMultiply(l, 2);
      }
      return o;
    }
    static reedSolomonComputeRemainder(r, o) {
      let l = o.map((f) => 0);
      for (const f of r) {
        const p = f ^ l.shift();
        l.push(0), o.forEach((g, m) => l[m] ^= e.reedSolomonMultiply(g, p));
      }
      return l;
    }
    static reedSolomonMultiply(r, o) {
      if (r >>> 8 || o >>> 8)
        throw new RangeError("Byte out of range");
      let l = 0;
      for (let f = 7; f >= 0; f--)
        l = l << 1 ^ (l >>> 7) * 285, l ^= (o >>> f & 1) * r;
      return i(l >>> 8 == 0), l;
    }
    finderPenaltyCountPatterns(r) {
      const o = r[1];
      i(o <= this.size * 3);
      const l = o > 0 && r[2] == o && r[3] == o * 3 && r[4] == o && r[5] == o;
      return (l && r[0] >= o * 4 && r[6] >= o ? 1 : 0) + (l && r[6] >= o * 4 && r[0] >= o ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(r, o, l) {
      return r && (this.finderPenaltyAddHistory(o, l), o = 0), o += this.size, this.finderPenaltyAddHistory(o, l), this.finderPenaltyCountPatterns(l);
    }
    finderPenaltyAddHistory(r, o) {
      o[0] == 0 && (r += this.size), o.pop(), o.unshift(r);
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
  function s(r, o, l) {
    if (o < 0 || o > 31 || r >>> o)
      throw new RangeError("Value out of range");
    for (let f = o - 1; f >= 0; f--)
      l.push(r >>> f & 1);
  }
  function a(r, o) {
    return (r >>> o & 1) != 0;
  }
  function i(r) {
    if (!r)
      throw new Error("Assertion error");
  }
  const u = class {
    constructor(r, o, l) {
      if (this.mode = r, this.numChars = o, this.bitData = l, o < 0)
        throw new RangeError("Invalid argument");
      this.bitData = l.slice();
    }
    static makeBytes(r) {
      let o = [];
      for (const l of r)
        s(l, 8, o);
      return new u(u.Mode.BYTE, r.length, o);
    }
    static makeNumeric(r) {
      if (!u.isNumeric(r))
        throw new RangeError("String contains non-numeric characters");
      let o = [];
      for (let l = 0; l < r.length; ) {
        const f = Math.min(r.length - l, 3);
        s(parseInt(r.substr(l, f), 10), f * 3 + 1, o), l += f;
      }
      return new u(u.Mode.NUMERIC, r.length, o);
    }
    static makeAlphanumeric(r) {
      if (!u.isAlphanumeric(r))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let o = [], l;
      for (l = 0; l + 2 <= r.length; l += 2) {
        let f = u.ALPHANUMERIC_CHARSET.indexOf(r.charAt(l)) * 45;
        f += u.ALPHANUMERIC_CHARSET.indexOf(r.charAt(l + 1)), s(f, 11, o);
      }
      return l < r.length && s(u.ALPHANUMERIC_CHARSET.indexOf(r.charAt(l)), 6, o), new u(u.Mode.ALPHANUMERIC, r.length, o);
    }
    static makeSegments(r) {
      return r == "" ? [] : u.isNumeric(r) ? [u.makeNumeric(r)] : u.isAlphanumeric(r) ? [u.makeAlphanumeric(r)] : [u.makeBytes(u.toUtf8ByteArray(r))];
    }
    static makeEci(r) {
      let o = [];
      if (r < 0)
        throw new RangeError("ECI assignment value out of range");
      if (r < 128)
        s(r, 8, o);
      else if (r < 16384)
        s(2, 2, o), s(r, 14, o);
      else if (r < 1e6)
        s(6, 3, o), s(r, 21, o);
      else
        throw new RangeError("ECI assignment value out of range");
      return new u(u.Mode.ECI, 0, o);
    }
    static isNumeric(r) {
      return u.NUMERIC_REGEX.test(r);
    }
    static isAlphanumeric(r) {
      return u.ALPHANUMERIC_REGEX.test(r);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(r, o) {
      let l = 0;
      for (const f of r) {
        const p = f.mode.numCharCountBits(o);
        if (f.numChars >= 1 << p)
          return 1 / 0;
        l += 4 + p + f.bitData.length;
      }
      return l;
    }
    static toUtf8ByteArray(r) {
      r = encodeURI(r);
      let o = [];
      for (let l = 0; l < r.length; l++)
        r.charAt(l) != "%" ? o.push(r.charCodeAt(l)) : (o.push(parseInt(r.substr(l + 1, 2), 16)), l += 2);
      return o;
    }
  };
  let d = u;
  d.NUMERIC_REGEX = /^[0-9]*$/, d.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, d.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", n.QrSegment = d;
})(re || (re = {}));
((n) => {
  ((e) => {
    const t = class {
      constructor(a, i) {
        this.ordinal = a, this.formatBits = i;
      }
    };
    let s = t;
    s.LOW = new t(0, 1), s.MEDIUM = new t(1, 0), s.QUARTILE = new t(2, 3), s.HIGH = new t(3, 2), e.Ecc = s;
  })(n.QrCode || (n.QrCode = {}));
})(re || (re = {}));
((n) => {
  ((e) => {
    const t = class {
      constructor(a, i) {
        this.modeBits = a, this.numBitsCharCount = i;
      }
      numCharCountBits(a) {
        return this.numBitsCharCount[Math.floor((a + 7) / 17)];
      }
    };
    let s = t;
    s.NUMERIC = new t(1, [10, 12, 14]), s.ALPHANUMERIC = new t(2, [9, 11, 13]), s.BYTE = new t(4, [8, 16, 16]), s.KANJI = new t(8, [8, 10, 12]), s.ECI = new t(7, [0, 0, 0]), e.Mode = s;
  })(n.QrSegment || (n.QrSegment = {}));
})(re || (re = {}));
var ue = re;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var ss = {
  L: ue.QrCode.Ecc.LOW,
  M: ue.QrCode.Ecc.MEDIUM,
  Q: ue.QrCode.Ecc.QUARTILE,
  H: ue.QrCode.Ecc.HIGH
}, ns = 128, as = "L", rs = "#FFFFFF", is = "#000000", os = !1, ct = 4, aa = 0.1;
function cs(n, e = 0) {
  const t = [];
  return n.forEach(function(s, a) {
    let i = null;
    s.forEach(function(u, d) {
      if (!u && i !== null) {
        t.push(`M${i + e} ${a + e}h${d - i}v1H${i + e}z`), i = null;
        return;
      }
      if (d === s.length - 1) {
        if (!u)
          return;
        i === null ? t.push(`M${d + e},${a + e} h1v1H${d + e}z`) : t.push(`M${i + e},${a + e} h${d + 1 - i}v1H${i + e}z`);
        return;
      }
      u && i === null && (i = d);
    });
  }), t.join("");
}
function ls(n, e) {
  return n.slice().map((t, s) => s < e.y || s >= e.y + e.h ? t : t.map((a, i) => i < e.x || i >= e.x + e.w ? a : !1));
}
function us(n, e, t, s) {
  if (s == null)
    return null;
  const a = t ? ct : 0, i = n.length + a * 2, u = Math.floor(e * aa), d = i / e, r = (s.width || u) * d, o = (s.height || u) * d, l = s.x == null ? n.length / 2 - r / 2 : s.x * d, f = s.y == null ? n.length / 2 - o / 2 : s.y * d;
  let p = null;
  if (s.excavate) {
    let g = Math.floor(l), m = Math.floor(f), _ = Math.ceil(r + l - g), b = Math.ceil(o + f - m);
    p = { x: g, y: m, w: _, h: b };
  }
  return { x: l, y: f, h: o, w: r, excavation: p };
}
var ra = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}();
function ia(n) {
  const e = n, {
    value: t,
    size: s = ns,
    level: a = as,
    bgColor: i = rs,
    fgColor: u = is,
    includeMargin: d = os,
    style: r,
    imageSettings: o
  } = e, l = ot(e, [
    "value",
    "size",
    "level",
    "bgColor",
    "fgColor",
    "includeMargin",
    "style",
    "imageSettings"
  ]), f = o == null ? void 0 : o.src, p = Ce(null), g = Ce(null), [m, _] = tt(!1);
  be(() => {
    if (p.current != null) {
      const y = p.current, v = y.getContext("2d");
      if (!v)
        return;
      let $ = ue.QrCode.encodeText(t, ss[a]).getModules();
      const j = d ? ct : 0, S = $.length + j * 2, P = us($, s, d, o), E = g.current, M = P != null && E !== null && E.complete && E.naturalHeight !== 0 && E.naturalWidth !== 0;
      M && P.excavation != null && ($ = ls($, P.excavation));
      const O = window.devicePixelRatio || 1;
      y.height = y.width = s * O;
      const C = s / S * O;
      v.scale(C, C), v.fillStyle = i, v.fillRect(0, 0, S, S), v.fillStyle = u, ra ? v.fill(new Path2D(cs($, j))) : $.forEach(function(k, D) {
        k.forEach(function(B, W) {
          B && v.fillRect(W + j, D + j, 1, 1);
        });
      }), M && v.drawImage(E, P.x + j, P.y + j, P.w, P.h);
    }
  }), be(() => {
    _(!1);
  }, [f]);
  const b = ve({ height: s, width: s }, r);
  let w = null;
  return f != null && (w = /* @__PURE__ */ I.createElement("img", {
    src: f,
    key: f,
    style: { display: "none" },
    onLoad: () => {
      _(!0);
    },
    ref: g
  })), /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement("canvas", ve({
    style: b,
    height: s,
    width: s,
    ref: p
  }, l)), w);
}
function oa(n) {
  const e = n, {
    value: t,
    size: s = ns,
    level: a = as,
    bgColor: i = rs,
    fgColor: u = is,
    includeMargin: d = os,
    imageSettings: r
  } = e, o = ot(e, [
    "value",
    "size",
    "level",
    "bgColor",
    "fgColor",
    "includeMargin",
    "imageSettings"
  ]);
  let l = ue.QrCode.encodeText(t, ss[a]).getModules();
  const f = d ? ct : 0, p = l.length + f * 2, g = us(l, s, d, r);
  let m = null;
  r != null && g != null && (g.excavation != null && (l = ls(l, g.excavation)), m = /* @__PURE__ */ I.createElement("image", {
    xlinkHref: r.src,
    height: g.h,
    width: g.w,
    x: g.x + f,
    y: g.y + f,
    preserveAspectRatio: "none"
  }));
  const _ = cs(l, f);
  return /* @__PURE__ */ I.createElement("svg", ve({
    height: s,
    width: s,
    viewBox: `0 0 ${p} ${p}`
  }, o), /* @__PURE__ */ I.createElement("path", {
    fill: i,
    d: `M0,0 h${p}v${p}H0z`,
    shapeRendering: "crispEdges"
  }), /* @__PURE__ */ I.createElement("path", {
    fill: u,
    d: _,
    shapeRendering: "crispEdges"
  }), m);
}
var ca = (n) => {
  const e = n, { renderAs: t } = e, s = ot(e, ["renderAs"]);
  return t === "svg" ? /* @__PURE__ */ I.createElement(oa, ve({}, s)) : /* @__PURE__ */ I.createElement(ia, ve({}, s));
};
function uh() {
  const { t: n } = Z(), [e, t] = I.useState(window.location.origin), s = I.useRef(null), a = () => {
    const i = s.current.querySelector("canvas");
    if (!i)
      return;
    const u = document.createElement("a");
    u.href = i.toDataURL("image/png"), u.download = "qr-menu.png", u.click();
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "py-10 max-w-lg mx-auto space-y-4 text-center", children: [
    /* @__PURE__ */ c.jsx("h1", { className: "text-3xl font-bold", children: n("qr") }),
    /* @__PURE__ */ c.jsxs("div", { className: "card p-6 flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ c.jsx("div", { ref: s, className: "bg-white p-4 rounded-2xl", children: /* @__PURE__ */ c.jsx(ca, { value: e, size: 256, includeMargin: !0 }) }),
      /* @__PURE__ */ c.jsx("input", { value: e, onChange: (i) => t(i.target.value), className: "w-full" }),
      /* @__PURE__ */ c.jsx("button", { className: "btn w-full", onClick: a, children: "PNG" })
    ] })
  ] });
}
function dh() {
  const { t: n, i18n: e } = Z(), [t, s] = I.useState(!1), a = (i) => e.language === "ar" ? i.name_ar : e.language === "he" ? i.name_he : i.name;
  return /* @__PURE__ */ c.jsxs("div", { className: "py-8", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ c.jsx("h1", { className: "text-3xl font-bold tracking-tight mb-4", children: n("book_table") }),
      /* @__PURE__ */ c.jsx("p", { className: "text-white/70 max-w-2xl mx-auto", children: n("reservation_description") })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ c.jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ c.jsx(Qe, { size: 20 }),
          n("open_hours")
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ c.jsx("span", { children: n("sun_thu") }),
            /* @__PURE__ */ c.jsx("span", { children: F.hours["sun-thu"] })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ c.jsx("span", { children: n("fri") }),
            /* @__PURE__ */ c.jsx("span", { children: F.hours.fri })
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ c.jsx("span", { children: n("sat") }),
            /* @__PURE__ */ c.jsx("span", { children: F.hours.sat })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ c.jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ c.jsx(at, { size: 20 }),
          n("reservation_area")
        ] }),
        /* @__PURE__ */ c.jsx("div", { className: "space-y-2", children: F.reservation.areas.map((i) => /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ c.jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full" }),
          /* @__PURE__ */ c.jsx("span", { children: a(i) })
        ] }, i.id)) })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "card p-6 mb-8", children: [
      /* @__PURE__ */ c.jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ c.jsx(Ee, { size: 20 }),
        n("reservation")
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "grid md:grid-cols-3 gap-4 mb-6", children: [
        /* @__PURE__ */ c.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ c.jsx("div", { className: "w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ c.jsx(Ee, { size: 24, className: "text-green-400" }) }),
          /* @__PURE__ */ c.jsxs("div", { className: "text-sm font-medium", children: [
            "1. ",
            n("reservation_date")
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "text-xs text-white/60", children: n("choose_date") })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ c.jsx("div", { className: "w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ c.jsx(Qe, { size: 24, className: "text-blue-400" }) }),
          /* @__PURE__ */ c.jsxs("div", { className: "text-sm font-medium", children: [
            "2. ",
            n("reservation_time")
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "text-xs text-white/60", children: n("select_time") })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ c.jsx("div", { className: "w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ c.jsx(Jt, { size: 24, className: "text-purple-400" }) }),
          /* @__PURE__ */ c.jsxs("div", { className: "text-sm font-medium", children: [
            "3. ",
            n("reservation_guests")
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "text-xs text-white/60", children: n("number_people") })
        ] })
      ] }),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: () => s(!0),
          className: "btn w-full",
          children: n("book_table")
        }
      )
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "card p-6 bg-blue-500/10 border-blue-500/20", children: [
      /* @__PURE__ */ c.jsxs("h3", { className: "text-lg font-semibold mb-3 flex items-center gap-2", children: [
        /* @__PURE__ */ c.jsx(rt, { size: 20 }),
        n("important_notice")
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "space-y-2 text-sm text-white/80", children: [
        /* @__PURE__ */ c.jsxs("p", { children: [
          "• ",
          n("reservation_wait")
        ] }),
        /* @__PURE__ */ c.jsxs("p", { children: [
          "• ",
          n("reservation_no_response")
        ] })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "mt-4 flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ c.jsx(it, { size: 16 }),
        /* @__PURE__ */ c.jsxs("span", { children: [
          n("need_assistance"),
          " "
        ] }),
        /* @__PURE__ */ c.jsx("a", { href: `tel:${F.phone}`, className: "text-green-400 hover:underline", children: F.phone })
      ] })
    ] }),
    /* @__PURE__ */ c.jsx(sa, { open: t, onClose: () => s(!1) })
  ] });
}
function ph() {
  const { t: n } = Z(), e = st();
  return I.useEffect(() => {
    document.documentElement.scrollTop = 0, document.body.scrollTop = 0, setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 0);
  }, []), /* @__PURE__ */ c.jsx("div", { className: "py-8", children: /* @__PURE__ */ c.jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        onClick: () => e("/"),
        className: "btn-outline flex items-center gap-2 mb-6",
        children: [
          /* @__PURE__ */ c.jsx(nt, { size: 16 }),
          n("back_to_menu")
        ]
      }
    ),
    /* @__PURE__ */ c.jsx("h1", { className: "text-3xl font-bold mb-8", children: n("terms_of_service") }),
    /* @__PURE__ */ c.jsxs("div", { className: "space-y-6 text-white/80 leading-relaxed", children: [
      /* @__PURE__ */ c.jsxs("section", { children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("terms_acceptance") }),
        /* @__PURE__ */ c.jsx("p", { children: n("terms_acceptance_text") })
      ] }),
      /* @__PURE__ */ c.jsxs("section", { children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("terms_service_usage") }),
        /* @__PURE__ */ c.jsx("p", { children: n("terms_service_usage_text") })
      ] }),
      /* @__PURE__ */ c.jsxs("section", { children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("terms_orders") }),
        /* @__PURE__ */ c.jsx("p", { children: n("terms_orders_text") })
      ] }),
      /* @__PURE__ */ c.jsxs("section", { children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("terms_payment") }),
        /* @__PURE__ */ c.jsx("p", { children: n("terms_payment_text") })
      ] }),
      /* @__PURE__ */ c.jsxs("section", { children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("terms_liability") }),
        /* @__PURE__ */ c.jsx("p", { children: n("terms_liability_text") })
      ] }),
      /* @__PURE__ */ c.jsxs("section", { children: [
        /* @__PURE__ */ c.jsx("h2", { className: "text-xl font-semibold mb-4 text-white", children: n("terms_changes") }),
        /* @__PURE__ */ c.jsx("p", { children: n("terms_changes_text") })
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "pt-6 border-t border-white/10 text-sm text-white/60", children: [
        n("last_updated"),
        ": 26.9.2025"
      ] })
    ] })
  ] }) });
}
const la = {
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
class Oe {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || la, this.options = t, this.debug = t.debug;
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
  forward(e, t, s, a) {
    return a && !this.debug ? null : (typeof e[0] == "string" && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new Oe(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Oe(this.logger, e);
  }
}
var te = new Oe();
class Me {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((s) => {
      this.observers[s] || (this.observers[s] = /* @__PURE__ */ new Map());
      const a = this.observers[s].get(t) || 0;
      this.observers[s].set(t, a + 1);
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
    for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
      s[a - 1] = arguments[a];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((u) => {
      let [d, r] = u;
      for (let o = 0; o < r; o++)
        d(...s);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((u) => {
      let [d, r] = u;
      for (let o = 0; o < r; o++)
        d.apply(d, [e, ...s]);
    });
  }
}
function _e() {
  let n, e;
  const t = new Promise((s, a) => {
    n = s, e = a;
  });
  return t.resolve = n, t.reject = e, t;
}
function Tt(n) {
  return n == null ? "" : "" + n;
}
function ua(n, e, t) {
  n.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}
const da = /###/g;
function xe(n, e, t) {
  function s(d) {
    return d && d.indexOf("###") > -1 ? d.replace(da, ".") : d;
  }
  function a() {
    return !n || typeof n == "string";
  }
  const i = typeof e != "string" ? e : e.split(".");
  let u = 0;
  for (; u < i.length - 1; ) {
    if (a())
      return {};
    const d = s(i[u]);
    !n[d] && t && (n[d] = new t()), Object.prototype.hasOwnProperty.call(n, d) ? n = n[d] : n = {}, ++u;
  }
  return a() ? {} : {
    obj: n,
    k: s(i[u])
  };
}
function At(n, e, t) {
  const {
    obj: s,
    k: a
  } = xe(n, e, Object);
  if (s !== void 0 || e.length === 1) {
    s[a] = t;
    return;
  }
  let i = e[e.length - 1], u = e.slice(0, e.length - 1), d = xe(n, u, Object);
  for (; d.obj === void 0 && u.length; )
    i = `${u[u.length - 1]}.${i}`, u = u.slice(0, u.length - 1), d = xe(n, u, Object), d && d.obj && typeof d.obj[`${d.k}.${i}`] < "u" && (d.obj = void 0);
  d.obj[`${d.k}.${i}`] = t;
}
function pa(n, e, t, s) {
  const {
    obj: a,
    k: i
  } = xe(n, e, Object);
  a[i] = a[i] || [], s && (a[i] = a[i].concat(t)), s || a[i].push(t);
}
function Pe(n, e) {
  const {
    obj: t,
    k: s
  } = xe(n, e);
  if (t)
    return t[s];
}
function ha(n, e, t) {
  const s = Pe(n, t);
  return s !== void 0 ? s : Pe(e, t);
}
function ds(n, e, t) {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in n ? typeof n[s] == "string" || n[s] instanceof String || typeof e[s] == "string" || e[s] instanceof String ? t && (n[s] = e[s]) : ds(n[s], e[s], t) : n[s] = e[s]);
  return n;
}
function ce(n) {
  return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var fa = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function ma(n) {
  return typeof n == "string" ? n.replace(/[&<>"'\/]/g, (e) => fa[e]) : n;
}
class ga {
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
const _a = [" ", ",", "?", "!", ";"], ya = new ga(20);
function xa(n, e, t) {
  e = e || "", t = t || "";
  const s = _a.filter((u) => e.indexOf(u) < 0 && t.indexOf(u) < 0);
  if (s.length === 0)
    return !0;
  const a = ya.getRegExp(`(${s.map((u) => u === "?" ? "\\?" : u).join("|")})`);
  let i = !a.test(n);
  if (!i) {
    const u = n.indexOf(t);
    u > 0 && !a.test(n.substring(0, u)) && (i = !0);
  }
  return i;
}
function et(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!n)
    return;
  if (n[e])
    return n[e];
  const s = e.split(t);
  let a = n;
  for (let i = 0; i < s.length; ) {
    if (!a || typeof a != "object")
      return;
    let u, d = "";
    for (let r = i; r < s.length; ++r)
      if (r !== i && (d += t), d += s[r], u = a[d], u !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof u) > -1 && r < s.length - 1)
          continue;
        i += r - i + 1;
        break;
      }
    a = u;
  }
  return a;
}
function Te(n) {
  return n && n.indexOf("_") > 0 ? n.replace("_", "-") : n;
}
class Lt extends Me {
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
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, u = a.ignoreJSONStructure !== void 0 ? a.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let d;
    e.indexOf(".") > -1 ? d = e.split(".") : (d = [e, t], s && (Array.isArray(s) ? d.push(...s) : typeof s == "string" && i ? d.push(...s.split(i)) : d.push(s)));
    const r = Pe(this.data, d);
    return !r && !t && !s && e.indexOf(".") > -1 && (e = d[0], t = d[1], s = d.slice(2).join(".")), r || !u || typeof s != "string" ? r : et(this.data && this.data[e] && this.data[e][t], s, i);
  }
  addResource(e, t, s, a) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const u = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let d = [e, t];
    s && (d = d.concat(u ? s.split(u) : s)), e.indexOf(".") > -1 && (d = e.split("."), a = t, t = d[1]), this.addNamespaces(t), At(this.data, d, a), i.silent || this.emit("added", e, t, s, a);
  }
  addResources(e, t, s) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in s)
      (typeof s[i] == "string" || Object.prototype.toString.apply(s[i]) === "[object Array]") && this.addResource(e, t, i, s[i], {
        silent: !0
      });
    a.silent || this.emit("added", e, t, s);
  }
  addResourceBundle(e, t, s, a, i) {
    let u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, d = [e, t];
    e.indexOf(".") > -1 && (d = e.split("."), a = s, s = t, t = d[1]), this.addNamespaces(t);
    let r = Pe(this.data, d) || {};
    u.skipCopy || (s = JSON.parse(JSON.stringify(s))), a ? ds(r, s, i) : r = {
      ...r,
      ...s
    }, At(this.data, d, r), u.silent || this.emit("added", e, t, s);
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
    return !!(t && Object.keys(t) || []).find((a) => t[a] && Object.keys(t[a]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var ps = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, e, t, s, a) {
    return n.forEach((i) => {
      this.processors[i] && (e = this.processors[i].process(e, t, s, a));
    }), e;
  }
};
const Mt = {};
class Ae extends Me {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), ua(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = te.create("translator");
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
    const a = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let i = t.ns || this.options.defaultNS || [];
    const u = s && e.indexOf(s) > -1, d = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !xa(e, s, a);
    if (u && !d) {
      const r = e.match(this.interpolator.nestingRegexp);
      if (r && r.length > 0)
        return {
          key: e,
          namespaces: i
        };
      const o = e.split(s);
      (s !== a || s === a && this.options.ns.indexOf(o[0]) > -1) && (i = o.shift()), e = o.join(a);
    }
    return typeof i == "string" && (i = [i]), {
      key: e,
      namespaces: i
    };
  }
  translate(e, t, s) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {
      ...t
    }), t || (t = {}), e == null)
      return "";
    Array.isArray(e) || (e = [String(e)]);
    const a = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: u,
      namespaces: d
    } = this.extractFromKey(e[e.length - 1], t), r = d[d.length - 1], o = t.lng || this.language, l = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (o && o.toLowerCase() === "cimode") {
      if (l) {
        const $ = t.nsSeparator || this.options.nsSeparator;
        return a ? {
          res: `${r}${$}${u}`,
          usedKey: u,
          exactUsedKey: u,
          usedLng: o,
          usedNS: r,
          usedParams: this.getUsedParamsDetails(t)
        } : `${r}${$}${u}`;
      }
      return a ? {
        res: u,
        usedKey: u,
        exactUsedKey: u,
        usedLng: o,
        usedNS: r,
        usedParams: this.getUsedParamsDetails(t)
      } : u;
    }
    const f = this.resolve(e, t);
    let p = f && f.res;
    const g = f && f.usedKey || u, m = f && f.exactUsedKey || u, _ = Object.prototype.toString.apply(p), b = ["[object Number]", "[object Function]", "[object RegExp]"], w = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, y = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (y && p && (typeof p != "string" && typeof p != "boolean" && typeof p != "number") && b.indexOf(_) < 0 && !(typeof w == "string" && _ === "[object Array]")) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const $ = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, p, {
          ...t,
          ns: d
        }) : `key '${u} (${this.language})' returned an object instead of string.`;
        return a ? (f.res = $, f.usedParams = this.getUsedParamsDetails(t), f) : $;
      }
      if (i) {
        const $ = _ === "[object Array]", j = $ ? [] : {}, S = $ ? m : g;
        for (const P in p)
          if (Object.prototype.hasOwnProperty.call(p, P)) {
            const E = `${S}${i}${P}`;
            j[P] = this.translate(E, {
              ...t,
              joinArrays: !1,
              ns: d
            }), j[P] === E && (j[P] = p[P]);
          }
        p = j;
      }
    } else if (y && typeof w == "string" && _ === "[object Array]")
      p = p.join(w), p && (p = this.extendTranslation(p, e, t, s));
    else {
      let $ = !1, j = !1;
      const S = t.count !== void 0 && typeof t.count != "string", P = Ae.hasDefaultValue(t), E = S ? this.pluralResolver.getSuffix(o, t.count, t) : "", M = t.ordinal && S ? this.pluralResolver.getSuffix(o, t.count, {
        ordinal: !1
      }) : "", O = S && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), C = O && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${E}`] || t[`defaultValue${M}`] || t.defaultValue;
      !this.isValidLookup(p) && P && ($ = !0, p = C), this.isValidLookup(p) || (j = !0, p = u);
      const D = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && j ? void 0 : p, B = P && C !== p && this.options.updateMissing;
      if (j || $ || B) {
        if (this.logger.log(B ? "updateKey" : "missingKey", o, r, u, B ? C : p), i) {
          const U = this.resolve(u, {
            ...t,
            keySeparator: !1
          });
          U && U.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let W = [];
        const q = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && q && q[0])
          for (let U = 0; U < q.length; U++)
            W.push(q[U]);
        else
          this.options.saveMissingTo === "all" ? W = this.languageUtils.toResolveHierarchy(t.lng || this.language) : W.push(t.lng || this.language);
        const T = (U, ee, se) => {
          const pe = P && se !== p ? se : D;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(U, r, ee, pe, B, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(U, r, ee, pe, B, t), this.emit("missingKey", U, r, ee, p);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && S ? W.forEach((U) => {
          const ee = this.pluralResolver.getSuffixes(U, t);
          O && t[`defaultValue${this.options.pluralSeparator}zero`] && ee.indexOf(`${this.options.pluralSeparator}zero`) < 0 && ee.push(`${this.options.pluralSeparator}zero`), ee.forEach((se) => {
            T([U], u + se, t[`defaultValue${se}`] || C);
          });
        }) : T(W, u, C));
      }
      p = this.extendTranslation(p, e, t, f, s), j && p === u && this.options.appendNamespaceToMissingKey && (p = `${r}:${u}`), (j || $) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? p = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${r}:${u}` : u, $ ? p : void 0) : p = this.options.parseMissingKeyHandler(p));
    }
    return a ? (f.res = p, f.usedParams = this.getUsedParamsDetails(t), f) : p;
  }
  extendTranslation(e, t, s, a, i) {
    var u = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...s
      }, s.lng || this.language || a.usedLng, a.usedNS, a.usedKey, {
        resolved: a
      });
    else if (!s.skipInterpolation) {
      s.interpolation && this.interpolator.init({
        ...s,
        interpolation: {
          ...this.options.interpolation,
          ...s.interpolation
        }
      });
      const o = typeof e == "string" && (s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let l;
      if (o) {
        const p = e.match(this.interpolator.nestingRegexp);
        l = p && p.length;
      }
      let f = s.replace && typeof s.replace != "string" ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (f = {
        ...this.options.interpolation.defaultVariables,
        ...f
      }), e = this.interpolator.interpolate(e, f, s.lng || this.language, s), o) {
        const p = e.match(this.interpolator.nestingRegexp), g = p && p.length;
        l < g && (s.nest = !1);
      }
      !s.lng && this.options.compatibilityAPI !== "v1" && a && a.res && (s.lng = a.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var p = arguments.length, g = new Array(p), m = 0; m < p; m++)
          g[m] = arguments[m];
        return i && i[0] === g[0] && !s.context ? (u.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${t[0]}`), null) : u.translate(...g, t);
      }, s)), s.interpolation && this.interpolator.reset();
    }
    const d = s.postProcess || this.options.postProcess, r = typeof d == "string" ? [d] : d;
    return e != null && r && r.length && s.applyPostProcessor !== !1 && (e = ps.handle(r, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...a,
        usedParams: this.getUsedParamsDetails(s)
      },
      ...s
    } : s, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s, a, i, u, d;
    return typeof e == "string" && (e = [e]), e.forEach((r) => {
      if (this.isValidLookup(s))
        return;
      const o = this.extractFromKey(r, t), l = o.key;
      a = l;
      let f = o.namespaces;
      this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
      const p = t.count !== void 0 && typeof t.count != "string", g = p && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), m = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "", _ = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      f.forEach((b) => {
        this.isValidLookup(s) || (d = b, !Mt[`${_[0]}-${b}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(d) && (Mt[`${_[0]}-${b}`] = !0, this.logger.warn(`key "${a}" for languages "${_.join(", ")}" won't get resolved as namespace "${d}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), _.forEach((w) => {
          if (this.isValidLookup(s))
            return;
          u = w;
          const y = [l];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(y, l, w, b, t);
          else {
            let $;
            p && ($ = this.pluralResolver.getSuffix(w, t.count, t));
            const j = `${this.options.pluralSeparator}zero`, S = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (p && (y.push(l + $), t.ordinal && $.indexOf(S) === 0 && y.push(l + $.replace(S, this.options.pluralSeparator)), g && y.push(l + j)), m) {
              const P = `${l}${this.options.contextSeparator}${t.context}`;
              y.push(P), p && (y.push(P + $), t.ordinal && $.indexOf(S) === 0 && y.push(P + $.replace(S, this.options.pluralSeparator)), g && y.push(P + j));
            }
          }
          let v;
          for (; v = y.pop(); )
            this.isValidLookup(s) || (i = v, s = this.getResource(w, b, v, t));
        }));
      });
    }), {
      res: s,
      usedKey: a,
      exactUsedKey: i,
      usedLng: u,
      usedNS: d
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, t, s) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, s, a) : this.resourceStore.getResource(e, t, s, a);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], s = e.replace && typeof e.replace != "string";
    let a = s ? e.replace : e;
    if (s && typeof e.count < "u" && (a.count = e.count), this.options.interpolation.defaultVariables && (a = {
      ...this.options.interpolation.defaultVariables,
      ...a
    }), !s) {
      a = {
        ...a
      };
      for (const i of t)
        delete a[i];
    }
    return a;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const s in e)
      if (Object.prototype.hasOwnProperty.call(e, s) && t === s.substring(0, t.length) && e[s] !== void 0)
        return !0;
    return !1;
  }
}
function Ke(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
class It {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = te.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Te(e), !e || e.indexOf("-") < 0)
      return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Te(e), !e || e.indexOf("-") < 0)
      return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (typeof e == "string" && e.indexOf("-") > -1) {
      const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let s = e.split("-");
      return this.options.lowerCaseLng ? s = s.map((a) => a.toLowerCase()) : s.length === 2 ? (s[0] = s[0].toLowerCase(), s[1] = s[1].toUpperCase(), t.indexOf(s[1].toLowerCase()) > -1 && (s[1] = Ke(s[1].toLowerCase()))) : s.length === 3 && (s[0] = s[0].toLowerCase(), s[1].length === 2 && (s[1] = s[1].toUpperCase()), s[0] !== "sgn" && s[2].length === 2 && (s[2] = s[2].toUpperCase()), t.indexOf(s[1].toLowerCase()) > -1 && (s[1] = Ke(s[1].toLowerCase())), t.indexOf(s[2].toLowerCase()) > -1 && (s[2] = Ke(s[2].toLowerCase()))), s.join("-");
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
      const a = this.formatLanguageCode(s);
      (!this.options.supportedLngs || this.isSupportedCode(a)) && (t = a);
    }), !t && this.options.supportedLngs && e.forEach((s) => {
      if (t)
        return;
      const a = this.getLanguagePartFromCode(s);
      if (this.isSupportedCode(a))
        return t = a;
      t = this.options.supportedLngs.find((i) => {
        if (i === a)
          return i;
        if (!(i.indexOf("-") < 0 && a.indexOf("-") < 0) && (i.indexOf("-") > 0 && a.indexOf("-") < 0 && i.substring(0, i.indexOf("-")) === a || i.indexOf(a) === 0 && a.length > 1))
          return i;
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
    const s = this.getFallbackCodes(t || this.options.fallbackLng || [], e), a = [], i = (u) => {
      u && (this.isSupportedCode(u) ? a.push(u) : this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`));
    };
    return typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : typeof e == "string" && i(this.formatLanguageCode(e)), s.forEach((u) => {
      a.indexOf(u) < 0 && i(this.formatLanguageCode(u));
    }), a;
  }
}
let ba = [{
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
}], va = {
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
const wa = ["v1", "v2", "v3"], ja = ["v4"], zt = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function Na() {
  const n = {};
  return ba.forEach((e) => {
    e.lngs.forEach((t) => {
      n[t] = {
        numbers: e.nr,
        plurals: va[e.fc]
      };
    });
  }), n;
}
class $a {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = te.create("pluralResolver"), (!this.options.compatibilityJSON || ja.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Na();
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Te(e === "dev" ? "en" : e), {
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
    return this.getSuffixes(e, s).map((a) => `${t}${a}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(e, t);
    return s ? this.shouldUseIntlApi() ? s.resolvedOptions().pluralCategories.sort((a, i) => zt[a] - zt[i]).map((a) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${a}`) : s.numbers.map((a) => this.getSuffix(e, a, t)) : [];
  }
  getSuffix(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const a = this.getRule(e, s);
    return a ? this.shouldUseIntlApi() ? `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${a.select(t)}` : this.getSuffixRetroCompatible(a, t) : (this.logger.warn(`no plural rule found for: ${e}`), "");
  }
  getSuffixRetroCompatible(e, t) {
    const s = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
    let a = e.numbers[s];
    this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 && (a === 2 ? a = "plural" : a === 1 && (a = ""));
    const i = () => this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString();
    return this.options.compatibilityJSON === "v1" ? a === 1 ? "" : typeof a == "number" ? `_plural_${a.toString()}` : i() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? i() : this.options.prepend && s.toString() ? this.options.prepend + s.toString() : s.toString();
  }
  shouldUseIntlApi() {
    return !wa.includes(this.options.compatibilityJSON);
  }
}
function Ft(n, e, t) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = ha(n, e, t);
  return !i && a && typeof t == "string" && (i = et(n, t, s), i === void 0 && (i = et(e, t, s))), i;
}
class Sa {
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
    this.escape = t.escape !== void 0 ? t.escape : ma, this.escapeValue = t.escapeValue !== void 0 ? t.escapeValue : !0, this.useRawValueToEscape = t.useRawValueToEscape !== void 0 ? t.useRawValueToEscape : !1, this.prefix = t.prefix ? ce(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? ce(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? ce(t.nestingPrefix) : t.nestingPrefixEscaped || ce("$t("), this.nestingSuffix = t.nestingSuffix ? ce(t.nestingSuffix) : t.nestingSuffixEscaped || ce(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = t.alwaysFormat !== void 0 ? t.alwaysFormat : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, s) => t && t.source === s ? (t.lastIndex = 0, t) : new RegExp(s, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, s, a) {
    let i, u, d;
    const r = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function o(m) {
      return m.replace(/\$/g, "$$$$");
    }
    const l = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const y = Ft(t, r, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(y, void 0, s, {
          ...a,
          ...t,
          interpolationkey: m
        }) : y;
      }
      const _ = m.split(this.formatSeparator), b = _.shift().trim(), w = _.join(this.formatSeparator).trim();
      return this.format(Ft(t, r, b, this.options.keySeparator, this.options.ignoreJSONStructure), w, s, {
        ...a,
        ...t,
        interpolationkey: b
      });
    };
    this.resetRegExp();
    const f = a && a.missingInterpolationHandler || this.options.missingInterpolationHandler, p = a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (m) => o(m)
    }, {
      regex: this.regexp,
      safeValue: (m) => this.escapeValue ? o(this.escape(m)) : o(m)
    }].forEach((m) => {
      for (d = 0; i = m.regex.exec(e); ) {
        const _ = i[1].trim();
        if (u = l(_), u === void 0)
          if (typeof f == "function") {
            const w = f(e, i, a);
            u = typeof w == "string" ? w : "";
          } else if (a && Object.prototype.hasOwnProperty.call(a, _))
            u = "";
          else if (p) {
            u = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${_} for interpolating ${e}`), u = "";
        else
          typeof u != "string" && !this.useRawValueToEscape && (u = Tt(u));
        const b = m.safeValue(u);
        if (e = e.replace(i[0], b), p ? (m.regex.lastIndex += u.length, m.regex.lastIndex -= i[0].length) : m.regex.lastIndex = 0, d++, d >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a, i, u;
    function d(r, o) {
      const l = this.nestingOptionsSeparator;
      if (r.indexOf(l) < 0)
        return r;
      const f = r.split(new RegExp(`${l}[ ]*{`));
      let p = `{${f[1]}`;
      r = f[0], p = this.interpolate(p, u);
      const g = p.match(/'/g), m = p.match(/"/g);
      (g && g.length % 2 === 0 && !m || m.length % 2 !== 0) && (p = p.replace(/'/g, '"'));
      try {
        u = JSON.parse(p), o && (u = {
          ...o,
          ...u
        });
      } catch (_) {
        return this.logger.warn(`failed parsing options string in nesting for key ${r}`, _), `${r}${l}${p}`;
      }
      return delete u.defaultValue, r;
    }
    for (; a = this.nestingRegexp.exec(e); ) {
      let r = [];
      u = {
        ...s
      }, u = u.replace && typeof u.replace != "string" ? u.replace : u, u.applyPostProcessor = !1, delete u.defaultValue;
      let o = !1;
      if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
        const l = a[1].split(this.formatSeparator).map((f) => f.trim());
        a[1] = l.shift(), r = l, o = !0;
      }
      if (i = t(d.call(this, a[1].trim(), u), u), i && a[0] === e && typeof i != "string")
        return i;
      typeof i != "string" && (i = Tt(i)), i || (this.logger.warn(`missed to resolve ${a[1]} for nesting ${e}`), i = ""), o && (i = r.reduce((l, f) => this.format(l, f, s.lng, {
        ...s,
        interpolationkey: a[1].trim()
      }), i.trim())), e = e.replace(a[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
function ka(n) {
  let e = n.toLowerCase().trim();
  const t = {};
  if (n.indexOf("(") > -1) {
    const s = n.split("(");
    e = s[0].toLowerCase().trim();
    const a = s[1].substring(0, s[1].length - 1);
    e === "currency" && a.indexOf(":") < 0 ? t.currency || (t.currency = a.trim()) : e === "relativetime" && a.indexOf(":") < 0 ? t.range || (t.range = a.trim()) : a.split(";").forEach((u) => {
      if (!u)
        return;
      const [d, ...r] = u.split(":"), o = r.join(":").trim().replace(/^'+|'+$/g, "");
      t[d.trim()] || (t[d.trim()] = o), o === "false" && (t[d.trim()] = !1), o === "true" && (t[d.trim()] = !0), isNaN(o) || (t[d.trim()] = parseInt(o, 10));
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}
function le(n) {
  const e = {};
  return function(s, a, i) {
    const u = a + JSON.stringify(i);
    let d = e[u];
    return d || (d = n(Te(a), i), e[u] = d), d(s);
  };
}
class Ca {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = te.create("formatter"), this.options = e, this.formats = {
      number: le((t, s) => {
        const a = new Intl.NumberFormat(t, {
          ...s
        });
        return (i) => a.format(i);
      }),
      currency: le((t, s) => {
        const a = new Intl.NumberFormat(t, {
          ...s,
          style: "currency"
        });
        return (i) => a.format(i);
      }),
      datetime: le((t, s) => {
        const a = new Intl.DateTimeFormat(t, {
          ...s
        });
        return (i) => a.format(i);
      }),
      relativetime: le((t, s) => {
        const a = new Intl.RelativeTimeFormat(t, {
          ...s
        });
        return (i) => a.format(i, s.range || "day");
      }),
      list: le((t, s) => {
        const a = new Intl.ListFormat(t, {
          ...s
        });
        return (i) => a.format(i);
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
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return t.split(this.formatSeparator).reduce((d, r) => {
      const {
        formatName: o,
        formatOptions: l
      } = ka(r);
      if (this.formats[o]) {
        let f = d;
        try {
          const p = a && a.formatParams && a.formatParams[a.interpolationkey] || {}, g = p.locale || p.lng || a.locale || a.lng || s;
          f = this.formats[o](d, g, {
            ...l,
            ...a,
            ...p
          });
        } catch (p) {
          this.logger.warn(p);
        }
        return f;
      } else
        this.logger.warn(`there was no format function for ${o}`);
      return d;
    }, e);
  }
}
function Ea(n, e) {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
}
class Ra extends Me {
  constructor(e, t, s) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = a, this.logger = te.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = a.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5, this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(s, a.backend, a);
  }
  queueLoad(e, t, s, a) {
    const i = {}, u = {}, d = {}, r = {};
    return e.forEach((o) => {
      let l = !0;
      t.forEach((f) => {
        const p = `${o}|${f}`;
        !s.reload && this.store.hasResourceBundle(o, f) ? this.state[p] = 2 : this.state[p] < 0 || (this.state[p] === 1 ? u[p] === void 0 && (u[p] = !0) : (this.state[p] = 1, l = !1, u[p] === void 0 && (u[p] = !0), i[p] === void 0 && (i[p] = !0), r[f] === void 0 && (r[f] = !0)));
      }), l || (d[o] = !0);
    }), (Object.keys(i).length || Object.keys(u).length) && this.queue.push({
      pending: u,
      pendingCount: Object.keys(u).length,
      loaded: {},
      errors: [],
      callback: a
    }), {
      toLoad: Object.keys(i),
      pending: Object.keys(u),
      toLoadLanguages: Object.keys(d),
      toLoadNamespaces: Object.keys(r)
    };
  }
  loaded(e, t, s) {
    const a = e.split("|"), i = a[0], u = a[1];
    t && this.emit("failedLoading", i, u, t), s && this.store.addResourceBundle(i, u, s, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2;
    const d = {};
    this.queue.forEach((r) => {
      pa(r.loaded, [i], u), Ea(r, e), t && r.errors.push(t), r.pendingCount === 0 && !r.done && (Object.keys(r.loaded).forEach((o) => {
        d[o] || (d[o] = {});
        const l = r.loaded[o];
        l.length && l.forEach((f) => {
          d[o][f] === void 0 && (d[o][f] = !0);
        });
      }), r.done = !0, r.errors.length ? r.callback(r.errors) : r.callback());
    }), this.emit("loaded", d), this.queue = this.queue.filter((r) => !r.done);
  }
  read(e, t, s) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, u = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length)
      return u(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: s,
        tried: a,
        wait: i,
        callback: u
      });
      return;
    }
    this.readingCalls++;
    const d = (o, l) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const f = this.waitingReads.shift();
        this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
      }
      if (o && l && a < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, s, a + 1, i * 2, u);
        }, i);
        return;
      }
      u(o, l);
    }, r = this.backend[s].bind(this.backend);
    if (r.length === 2) {
      try {
        const o = r(e, t);
        o && typeof o.then == "function" ? o.then((l) => d(null, l)).catch(d) : d(null, o);
      } catch (o) {
        d(o);
      }
      return;
    }
    return r(e, t, d);
  }
  prepareLoading(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), a && a();
    typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)), typeof t == "string" && (t = [t]);
    const i = this.queueLoad(e, t, s, a);
    if (!i.toLoad.length)
      return i.pending.length || a(), null;
    i.toLoad.forEach((u) => {
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
    const s = e.split("|"), a = s[0], i = s[1];
    this.read(a, i, "read", void 0, void 0, (u, d) => {
      u && this.logger.warn(`${t}loading namespace ${i} for language ${a} failed`, u), !u && d && this.logger.log(`${t}loaded namespace ${i} for language ${a}`, d), this.loaded(e, u, d);
    });
  }
  saveMissing(e, t, s, a, i) {
    let u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, d = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if (this.backend && this.backend.create) {
        const r = {
          ...u,
          isUpdate: i
        }, o = this.backend.create.bind(this.backend);
        if (o.length < 6)
          try {
            let l;
            o.length === 5 ? l = o(e, t, s, a, r) : l = o(e, t, s, a), l && typeof l.then == "function" ? l.then((f) => d(null, f)).catch(d) : d(null, l);
          } catch (l) {
            d(l);
          }
        else
          o(e, t, s, a, d, r);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, a);
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
        Object.keys(s).forEach((a) => {
          t[a] = s[a];
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
function ke() {
}
function Oa(n) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
}
class we extends Me {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Ut(e), this.services = {}, this.logger = te, this.modules = {
      external: []
    }, Oa(this), t && !this.isInitialized && !e.isClone) {
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
    const a = Dt();
    this.options = {
      ...a,
      ...this.options,
      ...Ut(t)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...a.interpolation,
      ...this.options.interpolation
    }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    function i(l) {
      return l ? typeof l == "function" ? new l() : l : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? te.init(i(this.modules.logger), this.options) : te.init(null, this.options);
      let l;
      this.modules.formatter ? l = this.modules.formatter : typeof Intl < "u" && (l = Ca);
      const f = new It(this.options);
      this.store = new Lt(this.options.resources, this.options);
      const p = this.services;
      p.logger = te, p.resourceStore = this.store, p.languageUtils = f, p.pluralResolver = new $a(f, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), l && (!this.options.interpolation.format || this.options.interpolation.format === a.interpolation.format) && (p.formatter = i(l), p.formatter.init(p, this.options), this.options.interpolation.format = p.formatter.format.bind(p.formatter)), p.interpolator = new Sa(this.options), p.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, p.backendConnector = new Ra(i(this.modules.backend), p.resourceStore, p, this.options), p.backendConnector.on("*", function(g) {
        for (var m = arguments.length, _ = new Array(m > 1 ? m - 1 : 0), b = 1; b < m; b++)
          _[b - 1] = arguments[b];
        e.emit(g, ..._);
      }), this.modules.languageDetector && (p.languageDetector = i(this.modules.languageDetector), p.languageDetector.init && p.languageDetector.init(p, this.options.detection, this.options)), this.modules.i18nFormat && (p.i18nFormat = i(this.modules.i18nFormat), p.i18nFormat.init && p.i18nFormat.init(this)), this.translator = new Ae(this.services, this.options), this.translator.on("*", function(g) {
        for (var m = arguments.length, _ = new Array(m > 1 ? m - 1 : 0), b = 1; b < m; b++)
          _[b - 1] = arguments[b];
        e.emit(g, ..._);
      }), this.modules.external.forEach((g) => {
        g.init && g.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, s || (s = ke), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const r = _e(), o = () => {
      const l = (f, p) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), r.resolve(p), s(f, p);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return l(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, l);
    };
    return this.options.resources || !this.options.initImmediate ? o() : setTimeout(o, 0), r;
  }
  loadResources(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ke;
    const a = typeof e == "string" ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (a && a.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return s();
      const i = [], u = (d) => {
        if (!d || d === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(d).forEach((o) => {
          o !== "cimode" && i.indexOf(o) < 0 && i.push(o);
        });
      };
      a ? u(a) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((r) => u(r)), this.options.preload && this.options.preload.forEach((d) => u(d)), this.services.backendConnector.load(i, this.options.ns, (d) => {
        !d && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(d);
      });
    } else
      s(null);
  }
  reloadResources(e, t, s) {
    const a = _e();
    return e || (e = this.languages), t || (t = this.options.ns), s || (s = ke), this.services.backendConnector.reload(e, t, (i) => {
      a.resolve(), s(i);
    }), a;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && ps.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    const a = _e();
    this.emit("languageChanging", e);
    const i = (r) => {
      this.language = r, this.languages = this.services.languageUtils.toResolveHierarchy(r), this.resolvedLanguage = void 0, this.setResolvedLanguage(r);
    }, u = (r, o) => {
      o ? (i(o), this.translator.changeLanguage(o), this.isLanguageChangingTo = void 0, this.emit("languageChanged", o), this.logger.log("languageChanged", o)) : this.isLanguageChangingTo = void 0, a.resolve(function() {
        return s.t(...arguments);
      }), t && t(r, function() {
        return s.t(...arguments);
      });
    }, d = (r) => {
      !e && !r && this.services.languageDetector && (r = []);
      const o = typeof r == "string" ? r : this.services.languageUtils.getBestMatchFromCodes(r);
      o && (this.language || i(o), this.translator.language || this.translator.changeLanguage(o), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(o)), this.loadResources(o, (l) => {
        u(l, o);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? d(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(d) : this.services.languageDetector.detect(d) : d(e), a;
  }
  getFixedT(e, t, s) {
    var a = this;
    const i = function(u, d) {
      let r;
      if (typeof d != "object") {
        for (var o = arguments.length, l = new Array(o > 2 ? o - 2 : 0), f = 2; f < o; f++)
          l[f - 2] = arguments[f];
        r = a.options.overloadTranslationOptionHandler([u, d].concat(l));
      } else
        r = {
          ...d
        };
      r.lng = r.lng || i.lng, r.lngs = r.lngs || i.lngs, r.ns = r.ns || i.ns, r.keyPrefix = r.keyPrefix || s || i.keyPrefix;
      const p = a.options.keySeparator || ".";
      let g;
      return r.keyPrefix && Array.isArray(u) ? g = u.map((m) => `${r.keyPrefix}${p}${m}`) : g = r.keyPrefix ? `${r.keyPrefix}${p}${u}` : u, a.t(g, r);
    };
    return typeof e == "string" ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = s, i;
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
    const s = t.lng || this.resolvedLanguage || this.languages[0], a = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode")
      return !0;
    const u = (d, r) => {
      const o = this.services.backendConnector.state[`${d}|${r}`];
      return o === -1 || o === 2;
    };
    if (t.precheck) {
      const d = t.precheck(this, u);
      if (d !== void 0)
        return d;
    }
    return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || u(s, e) && (!a || u(i, e)));
  }
  loadNamespaces(e, t) {
    const s = _e();
    return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach((a) => {
      this.options.ns.indexOf(a) < 0 && this.options.ns.push(a);
    }), this.loadResources((a) => {
      s.resolve(), t && t(a);
    }), s) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const s = _e();
    typeof e == "string" && (e = [e]);
    const a = this.options.preload || [], i = e.filter((u) => a.indexOf(u) < 0);
    return i.length ? (this.options.preload = a.concat(i), this.loadResources((u) => {
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
    return new we(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ke;
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const a = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new we(a);
    return (e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((d) => {
      i[d] = this[d];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, s && (i.store = new Lt(this.store.data, a), i.services.resourceStore = i.store), i.translator = new Ae(i.services, a), i.translator.on("*", function(d) {
      for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
        o[l - 1] = arguments[l];
      i.emit(d, ...o);
    }), i.init(a, t), i.translator.options = a, i.translator.backendConnector.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, i;
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
const Y = we.createInstance();
Y.createInstance = we.createInstance;
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
const Pa = "New order from template menu", Ta = "Total", Aa = "Name", La = "Type", Ma = "Time/Table", Ia = "Size", za = "Extras", Fa = "Notes", Da = "Doneness", Ua = "Sugar", Ba = "Pasta Type", Va = "Bread", qa = "Menu", Wa = "Contact", Ha = "All", Ka = "Search dishes...", Ya = "Call", Ja = "WhatsApp", Qa = "Location", Ga = "Address", Xa = "Opening Hours", Za = "Add to Cart", er = "Added", tr = "Customize", sr = "Size", nr = "Extras", ar = "Notes", rr = "Cart", ir = "items", or = "Your cart is empty", cr = "Clear cart", lr = "Send via WhatsApp", ur = "Total", dr = "Name", pr = "Order type", hr = "Pickup", fr = "Delivery", mr = "Time/Table", gr = "Message preview", _r = "QR", yr = "Instagram", xr = "Base price", br = "Extras", vr = "Reservation", wr = "Book a Table", jr = "Date", Nr = "Time", $r = "Area", Sr = "Number of Guests", kr = "Your Name", Cr = "Phone Number", Er = "Special Requests", Rr = "Send Reservation Request", Or = "Reservation request sent!", Pr = "Please wait for confirmation from the restaurant.", Tr = "If you don't receive a response within 15 minutes, please call the restaurant.", Ar = "Please wait for confirmation from the restaurant for your order.", Lr = "If you don't receive a response within 5 minutes, please call the restaurant.", Mr = "Today", Ir = "Tomorrow", zr = "Reserve your table at our restaurant and enjoy an unforgettable dining experience. We look forward to welcoming you!", Fr = "Choose your preferred date", Dr = "Select time slot", Ur = "Number of people", Br = "Important Notice", Vr = "Need immediate assistance? Call us:", qr = "Any special requests or notes...", Wr = "Guest", Hr = "Guests", Kr = "Table Reservation Request", Yr = "Date:", Jr = "Time:", Qr = "Area:", Gr = "Guests:", Xr = "Name:", Zr = "Phone:", ei = "Notes:", ti = "Please confirm this reservation.", si = "Thank you! 🙏", ni = "Sun–Thu:", ai = "Fri:", ri = "Sat:", ii = "Important Notice", oi = "Delivery fees not included in total price", ci = "Continue to WhatsApp", li = "Cancel", ui = "The restaurant is currently closed. Please try again during opening hours.", di = "Close", pi = "🍽️ NEW ORDER REQUEST", hi = "📋 ORDER ITEMS:", fi = "👤 CUSTOMER INFORMATION:", mi = "Order Type", gi = "Name", _i = "Phone", yi = "Qty", xi = "Item", bi = "Options", vi = "Please confirm this order. Thank you! 🙏", wi = "Served until 13:00", ji = "Sunday", Ni = "Monday", $i = "Tuesday", Si = "Wednesday", ki = "Thursday", Ci = "Friday", Ei = "Saturday", Ri = "For illustration only", Oi = "Terms of Service", Pi = "Privacy Policy", Ti = "Accessibility Statement", Ai = "Last updated", Li = "Acceptance of Terms", Mi = "By using our website and services, you agree to comply with these terms of service.", Ii = "Service Usage", zi = "Our website is designed for browsing our menu, placing orders via WhatsApp, and making reservations.", Fi = "Orders and Reservations", Di = "All orders are processed through WhatsApp. Reservations are subject to availability and confirmation.", Ui = "Payment Terms", Bi = "Payment is handled directly at the restaurant. Online orders are for convenience and confirmation only.", Vi = "Limitation of Liability", qi = "We are not responsible for third-party services such as WhatsApp. Use of external services is subject to their terms.", Wi = "Changes to Terms", Hi = "We may update these terms from time to time. Continued use constitutes acceptance of revised terms.", Ki = "Information Collection", Yi = "We respect your privacy. Our website does not use cookies or online tracking. Information is stored locally in your browser (LocalStorage) for continuity, and may include name and order preferences (personal/family).", Ji = "Information Usage", Qi = "We only use information to provide our services and improve your experience. We do not share personal data with third parties.", Gi = "Cookies and Tracking", Xi = "Our website does not use cookies or tracking technologies. All data is stored locally in your browser.", Zi = "WhatsApp Integration", eo = "Order placement occurs through WhatsApp (external service). WhatsApp usage is subject to WhatsApp's terms and privacy policy.", to = "Data Storage", so = "Data is stored locally on your device and on WhatsApp for order processing and communication purposes.", no = "User Rights", ao = "For any questions or requests regarding your data, please contact us through our contact page.", ro = "Our Commitment", io = "We are committed to making our website accessible according to Israeli Standard TI 5568 based on WCAG 2.0 Level AA. Our goal is to provide an accessible, equal, and comfortable user experience for all users.", oo = "Accessibility Standards", co = "Our website follows modern accessibility guidelines including keyboard navigation, screen reader compatibility, and clear visual design.", lo = "Accessibility Features", uo = "The website includes proper heading structure, alternative text for images, keyboard navigation support, and responsive design for various devices and assistive technologies.", po = "Accessibility Contact", ho = "If you encounter any accessibility issues or have suggestions for improvement, please contact us via phone or WhatsApp listed on our contact page.", fo = "Customer name is required before sending to WhatsApp", mo = "Back to Menu", go = "Closed", _o = "The restaurant is currently closed. Orders can be placed only during opening hours.", yo = "Got it", xo = {
  wa_header: Pa,
  wa_total: Ta,
  wa_name: Aa,
  wa_type: La,
  wa_time: Ma,
  opt_size: Ia,
  opt_extras: za,
  opt_notes: Fa,
  opt_doneness: Da,
  opt_sugar: Ua,
  opt_pasta_type: Ba,
  opt_bread: Va,
  menu: qa,
  contact: Wa,
  all: Ha,
  search_placeholder: Ka,
  call: Ya,
  whatsapp: Ja,
  location: Qa,
  address: Ga,
  open_hours: Xa,
  add_to_cart: Za,
  added: er,
  customize: tr,
  size: sr,
  extras: nr,
  notes: ar,
  cart: rr,
  items: ir,
  empty_cart: or,
  clear_cart: cr,
  checkout: lr,
  total: ur,
  customer_name: dr,
  order_type: pr,
  pickup: hr,
  delivery: fr,
  time_or_table: mr,
  message_preview: gr,
  qr: _r,
  instagram: yr,
  base_price: xr,
  extras_total: br,
  reservation: vr,
  book_table: wr,
  reservation_date: jr,
  reservation_time: Nr,
  reservation_area: $r,
  reservation_guests: Sr,
  reservation_name: kr,
  reservation_phone: Cr,
  reservation_notes: Er,
  send_reservation: Rr,
  reservation_sent: Or,
  reservation_wait: Pr,
  reservation_no_response: Tr,
  order_wait: Ar,
  order_no_response: Lr,
  today: Mr,
  tomorrow: Ir,
  reservation_description: zr,
  choose_date: Fr,
  select_time: Dr,
  number_people: Ur,
  important_notice: Br,
  need_assistance: Vr,
  special_requests_placeholder: qr,
  guests_singular: Wr,
  guests_plural: Hr,
  reservation_request: Kr,
  date_label: Yr,
  time_label: Jr,
  area_label: Qr,
  guests_label: Gr,
  name_label: Xr,
  phone_label: Zr,
  notes_label: ei,
  confirm_reservation: ti,
  thank_you: si,
  sun_thu: ni,
  fri: ai,
  sat: ri,
  important_notice_cart: ii,
  delivery_notice: oi,
  continue_to_whatsapp: ci,
  cancel: li,
  restaurant_closed_message: ui,
  close: di,
  wa_order_header: pi,
  wa_order_items: hi,
  wa_customer_info: fi,
  wa_order_type: mi,
  wa_customer_name: gi,
  wa_customer_phone: _i,
  wa_quantity: yi,
  wa_item: xi,
  wa_options: bi,
  wa_confirm_order: vi,
  served_until_13: wi,
  day_sun: ji,
  day_mon: Ni,
  day_tue: $i,
  day_wed: Si,
  day_thu: ki,
  day_fri: Ci,
  day_sat: Ei,
  "day_tue-sat": "Tuesday-Saturday",
  "day_mon-sat": "Monday-Saturday",
  for_illustration_only: Ri,
  terms_of_service: Oi,
  privacy_policy: Pi,
  accessibility_statement: Ti,
  last_updated: Ai,
  terms_acceptance: Li,
  terms_acceptance_text: Mi,
  terms_service_usage: Ii,
  terms_service_usage_text: zi,
  terms_orders: Fi,
  terms_orders_text: Di,
  terms_payment: Ui,
  terms_payment_text: Bi,
  terms_liability: Vi,
  terms_liability_text: qi,
  terms_changes: Wi,
  terms_changes_text: Hi,
  privacy_info_collection: Ki,
  privacy_info_collection_text: Yi,
  privacy_info_usage: Ji,
  privacy_info_usage_text: Qi,
  privacy_cookies: Gi,
  privacy_cookies_text: Xi,
  privacy_whatsapp: Zi,
  privacy_whatsapp_text: eo,
  privacy_data_storage: to,
  privacy_data_storage_text: so,
  privacy_user_rights: no,
  privacy_user_rights_text: ao,
  accessibility_commitment: ro,
  accessibility_commitment_text: io,
  accessibility_standards: oo,
  accessibility_standards_text: co,
  accessibility_features: lo,
  accessibility_features_text: uo,
  accessibility_contact: po,
  accessibility_contact_text: ho,
  name_required: fo,
  back_to_menu: mo,
  closed: go,
  closed_popup_message: _o,
  got_it_button: yo
}, bo = "הזמנה חדשה מתפריט התבנית", vo = "סך הכול", wo = "שם", jo = "סוג", No = "שעה/שולחן", $o = "גודל", So = "תוספות", ko = "הערות", Co = "דרגת עשייה", Eo = "סוכר", Ro = "סוג פסטה", Oo = "לחם", Po = "תפריט", To = "צור קשר", Ao = "הכל", Lo = "חיפוש מנות...", Mo = "התקשר", Io = "וואטסאפ", zo = "מיקום", Fo = "כתובת", Do = "שעות פתיחה", Uo = "להוסיף לסל", Bo = "נוסף", Vo = "התאמה", qo = "גודל", Wo = "תוספות", Ho = "הערות", Ko = "הסל", Yo = "פריטים", Jo = "הסל ריק", Qo = "נקה סל", Go = "שלח בוואטסאפ", Xo = "סך הכל", Zo = "שם", ec = "סוג הזמנה", tc = "איסוף עצמי", sc = "משלוח", nc = "שעה/שולחן", ac = "תצוגה מקדימה", rc = "QR", ic = "אינסטגרם", oc = "מחיר בסיס", cc = "תוספות", lc = "הזמנת שולחן", uc = "הזמן שולחן", dc = "תאריך", pc = "שעה", hc = "אזור", fc = "מספר אורחים", mc = "השם שלך", gc = "מספר טלפון", _c = "בקשות מיוחדות", yc = "שלח בקשת הזמנה", xc = "בקשת ההזמנה נשלחה!", bc = "אנא המתן לאישור מהמסעדה.", vc = "אם לא תקבל תגובה תוך 15 דקות, אנא התקשר למסעדה.", wc = "אנא המתן לאישור מהמסעדה עבור ההזמנה שלך.", jc = "אם לא תקבל תגובה תוך 5 דקות, אנא התקשר למסעדה.", Nc = "היום", $c = "מחר", Sc = "הזמן שולחן במסעדה שלנו ותהנה מחווית אוכל בלתי נשכחת. אנחנו מצפים לראות אותך!", kc = "בחר את התאריך המועדף עליך", Cc = "בחר זמן", Ec = "מספר אנשים", Rc = "הודעה חשובה", Oc = "צריך עזרה מיידית? התקשר אלינו:", Pc = "בקשות מיוחדות או הערות...", Tc = "אורח", Ac = "אורחים", Lc = "בקשת הזמנת שולחן", Mc = "תאריך:", Ic = "שעה:", zc = "אזור:", Fc = "אורחים:", Dc = "שם:", Uc = "טלפון:", Bc = "הערות:", Vc = "אנא אשר את ההזמנה הזו.", qc = "תודה! 🙏", Wc = "א׳-ה׳:", Hc = "ו׳:", Kc = "ש׳:", Yc = "הודעה חשובה", Jc = "עמלת משלוח לא כלולה במחיר הכולל", Qc = "המשך לווטסאפ", Gc = "ביטול", Xc = "🍽️ בקשת הזמנה חדשה", Zc = "📋 פריטי ההזמנה:", el = "👤 פרטי הלקוח:", tl = "סוג הזמנה", sl = "שם", nl = "טלפון", al = "כמות", rl = "פריט", il = "אפשרויות", ol = "אנא אשר את ההזמנה הזו. תודה! 🙏", cl = "מוגש עד 13:00", ll = "ראשון", ul = "שני", dl = "שלישי", pl = "רביעי", hl = "חמישי", fl = "שישי", ml = "שבת", gl = "להמחשה בלבד", _l = "תנאי שימוש", yl = "מדיניות פרטיות", xl = "הצהרת נגישות", bl = "תאריך עדכון אחרון", vl = "אחריות", wl = "אין אחריות לשירותי צד-שלישי (כגון WhatsApp). כל שימוש בשירותים חיצוניים כפוף לתנאורים.", jl = "שינויים בתנאים", Nl = "יתכן שנעדכן שינויים בתנאי השימוש מעת לעת. המשך השימוש כהסכמה לתנאים כפופה.", $l = "יצירת קשר בנושא נגישות", Sl = "אם נתקלתם בבעיה או הצעה לשיפור, נעמוד לכפות אליכן בטלפון או בוואטסאפ המופיעים במיקום יצירת קשר.", kl = "מטרת עיכוב היחידי", Cl = "האתר מכיל לפרטים, בחירת פריטים, והזמנת מקום לוואטסאפ של המטעדה.", El = "זכויות המשתמש", Rl = "כפי שלאה או בקשה לחתיקה מידע, נעמוד לכפות אליכן דרך עמוד יצירת קשר.", Ol = "תאריך עדכון אחרון", Pl = "26.9.2025", Tl = "אחריות", Al = "אין אחריות לשירותי צד-שלישי (כגון WhatsApp). כל שימוש בשירותים חיצוניים כפוף לתנאורים.", Ll = "שינויים בתנאים", Ml = "יתכן שנעדכן שינויים בתנאי השימוש מעת לעת. המשך השימוש כהסכמה לתנאים כפופה.", Il = "מדיניות פרטיות", zl = "אנו מכבדים את פרטיותכם. האתר אינו מפעיל עוגיות (cookies) ואינו מבצע מעקב אינטרנטי. המידע שמורן בעלות הקרייות ומורה מקומית בדפדפן (LocalStorage) לצורך המשכיות כבב, ויכול לכלול שם ופוטר המנה (אישי/משפחה).", Fl = "מטרת עיכוב היחידי", Dl = "שליחת הזמנה/פנירה מתבצעת באמצעות WhatsApp (שירות חיצוני). על כן, השימוש ב-WhatsApp כפוף לתנאי השימוש ומדיניות הפרטיות של WhatsApp.", Ul = "מטרת עיכוב היחידי", Bl = "האתר מכיל לפרטים, בחירת פריטים, והזמנת מקום לוואטסאפ של המטעדה.", Vl = "זכויות המשתמש", ql = "כפי שלאה או בקשה לחתיקה מידע, נעמוד לכפות אליכן דרך עמוד יצירת קשר.", Wl = "הצהרת נגישות", Hl = 'אנו פועלים להנגיש את האתר בהתאם לתקן הישראלי ת"י 5568 הכמבוס על 2.0 WCAG ברמה AA. מטרתנו להנביח חווית שימוש נגישה, שוויונית ונוחה לכלל המשתמשים.', Kl = "יצירת קשר בנושא נגישות", Yl = "אם נתקלתם בבעיה או הצעה לשיפור, נעמוד לכפות אליכן בטלפון או בוואטסאפ המופיעים במיקום יצירת קשר.", Jl = "מטרת עיכוב היחידי", Ql = "האתר מכיל לפרטים, בחירת פריטים, והזמנת מקום לוואטסאפ של המטעדה.", Gl = "יצירת קשר בנושא נגישות", Xl = "אם נתקלתם בבעיה או הצעה לשיפור, נעמוד לכפות אליכן בטלפון או בוואטסאפ המופיעים במיקום יצירת קשר.", Zl = "שם הלקוח נדרש לפני שליחה לוואטסאפ", eu = "חזרה לתפריט", tu = "סגור", su = "המסעדה סגורה כעת. נסה שוב בשעות הפתיחה.", nu = "סגור", au = "המסעדה סגורה כעת. ניתן לבצע הזמנות רק במהלך שעות הפתיחה.", ru = "הבנתי", iu = {
  wa_header: bo,
  wa_total: vo,
  wa_name: wo,
  wa_type: jo,
  wa_time: No,
  opt_size: $o,
  opt_extras: So,
  opt_notes: ko,
  opt_doneness: Co,
  opt_sugar: Eo,
  opt_pasta_type: Ro,
  opt_bread: Oo,
  menu: Po,
  contact: To,
  all: Ao,
  search_placeholder: Lo,
  call: Mo,
  whatsapp: Io,
  location: zo,
  address: Fo,
  open_hours: Do,
  add_to_cart: Uo,
  added: Bo,
  customize: Vo,
  size: qo,
  extras: Wo,
  notes: Ho,
  cart: Ko,
  items: Yo,
  empty_cart: Jo,
  clear_cart: Qo,
  checkout: Go,
  total: Xo,
  customer_name: Zo,
  order_type: ec,
  pickup: tc,
  delivery: sc,
  time_or_table: nc,
  message_preview: ac,
  qr: rc,
  instagram: ic,
  base_price: oc,
  extras_total: cc,
  reservation: lc,
  book_table: uc,
  reservation_date: dc,
  reservation_time: pc,
  reservation_area: hc,
  reservation_guests: fc,
  reservation_name: mc,
  reservation_phone: gc,
  reservation_notes: _c,
  send_reservation: yc,
  reservation_sent: xc,
  reservation_wait: bc,
  reservation_no_response: vc,
  order_wait: wc,
  order_no_response: jc,
  today: Nc,
  tomorrow: $c,
  reservation_description: Sc,
  choose_date: kc,
  select_time: Cc,
  number_people: Ec,
  important_notice: Rc,
  need_assistance: Oc,
  special_requests_placeholder: Pc,
  guests_singular: Tc,
  guests_plural: Ac,
  reservation_request: Lc,
  date_label: Mc,
  time_label: Ic,
  area_label: zc,
  guests_label: Fc,
  name_label: Dc,
  phone_label: Uc,
  notes_label: Bc,
  confirm_reservation: Vc,
  thank_you: qc,
  sun_thu: Wc,
  fri: Hc,
  sat: Kc,
  important_notice_cart: Yc,
  delivery_notice: Jc,
  continue_to_whatsapp: Qc,
  cancel: Gc,
  wa_order_header: Xc,
  wa_order_items: Zc,
  wa_customer_info: el,
  wa_order_type: tl,
  wa_customer_name: sl,
  wa_customer_phone: nl,
  wa_quantity: al,
  wa_item: rl,
  wa_options: il,
  wa_confirm_order: ol,
  served_until_13: cl,
  day_sun: ll,
  day_mon: ul,
  day_tue: dl,
  day_wed: pl,
  day_thu: hl,
  day_fri: fl,
  day_sat: ml,
  "day_tue-sat": "שלישי-שבת",
  "day_mon-sat": "שני-שבת",
  for_illustration_only: gl,
  terms_of_service: _l,
  privacy_policy: yl,
  accessibility_statement: xl,
  last_updated: bl,
  terms_acceptance: vl,
  terms_acceptance_text: wl,
  terms_service_usage: jl,
  terms_service_usage_text: Nl,
  terms_orders: $l,
  terms_orders_text: Sl,
  terms_payment: kl,
  terms_payment_text: Cl,
  terms_liability: El,
  terms_liability_text: Rl,
  terms_changes: Ol,
  terms_changes_text: Pl,
  privacy_info_collection: Tl,
  privacy_info_collection_text: Al,
  privacy_info_usage: Ll,
  privacy_info_usage_text: Ml,
  privacy_cookies: Il,
  privacy_cookies_text: zl,
  privacy_whatsapp: Fl,
  privacy_whatsapp_text: Dl,
  privacy_data_storage: Ul,
  privacy_data_storage_text: Bl,
  privacy_user_rights: Vl,
  privacy_user_rights_text: ql,
  accessibility_commitment: Wl,
  accessibility_commitment_text: Hl,
  accessibility_standards: Kl,
  accessibility_standards_text: Yl,
  accessibility_features: Jl,
  accessibility_features_text: Ql,
  accessibility_contact: Gl,
  accessibility_contact_text: Xl,
  name_required: Zl,
  back_to_menu: eu,
  closed: tu,
  restaurant_closed_message: su,
  close: nu,
  closed_popup_message: au,
  got_it_button: ru
}, ou = "طلب جديد عبر قائمة القالب", cu = "الإجمالي", lu = "الاسم", uu = "النوع", du = "ساعة/طاولة", pu = "الحجم", hu = "إضافات", fu = "ملاحظات", mu = "درجة الاستواء", gu = "سكر", _u = "نوع المعكرونة", yu = "الخبز", xu = "القائمة", bu = "تواصل", vu = "الكل", wu = "ابحث عن طبق...", ju = "اتصال", Nu = "واتساب", $u = "الموقع", Su = "العنوان", ku = "ساعات العمل", Cu = "أضف إلى السلة", Eu = "تمت الإضافة", Ru = "تخصيص", Ou = "الحجم", Pu = "إضافات", Tu = "ملاحظات", Au = "السلة", Lu = "عنصر", Mu = "السلة فارغة", Iu = "تفريغ السلة", zu = "إرسال عبر واتساب", Fu = "الإجمالي", Du = "الاسم", Uu = "نوع الطلب", Bu = "استلام", Vu = "توصيل", qu = "ساعة/طاولة", Wu = "نص الرسالة", Hu = "QR", Ku = "إنستغرام", Yu = "السعر الأساسي", Ju = "الإضافات", Qu = "حجز طاولة", Gu = "احجز طاولة", Xu = "التاريخ", Zu = "الوقت", ed = "المنطقة", td = "عدد الضيوف", sd = "اسمك", nd = "رقم الهاتف", ad = "طلبات خاصة", rd = "إرسال طلب الحجز", id = "تم إرسال طلب الحجز!", od = "يرجى انتظار التأكيد من المطعم.", cd = "إذا لم تتلق رداً خلال 15 دقيقة، يرجى الاتصال بالمطعم.", ld = "يرجى انتظار التأكيد من المطعم لطلبك.", ud = "إذا لم تتلق رداً خلال 5 دقائق، يرجى الاتصال بالمطعم.", dd = "اليوم", pd = "غداً", hd = "احجز طاولتك في مطعمنا واستمتع بتجربة طعام لا تُنسى. نحن نتطلع لاستقبالك!", fd = "اختر التاريخ المفضل لديك", md = "اختر الوقت", gd = "عدد الأشخاص", _d = "إشعار مهم", yd = "تحتاج مساعدة فورية؟ اتصل بنا:", xd = "أي طلبات خاصة أو ملاحظات...", bd = "ضيف", vd = "ضيوف", wd = "طلب حجز طاولة", jd = "التاريخ:", Nd = "الوقت:", $d = "المنطقة:", Sd = "الضيوف:", kd = "الاسم:", Cd = "الهاتف:", Ed = "ملاحظات:", Rd = "يرجى تأكيد هذا الحجز.", Od = "شكراً لك! 🙏", Pd = "الأحد-الخميس:", Td = "الجمعة:", Ad = "السبت:", Ld = "إشعار مهم", Md = "رسوم التوصيل غير مشمولة في السعر الإجمالي", Id = "متابعة إلى واتساب", zd = "إلغاء", Fd = "🍽️ طلب جديد", Dd = "📋 عناصر الطلب:", Ud = "👤 معلومات العميل:", Bd = "نوع الطلب", Vd = "الاسم", qd = "الهاتف", Wd = "الكمية", Hd = "العنصر", Kd = "الخيارات", Yd = "يرجى تأكيد هذا الطلب. شكراً لك! 🙏", Jd = "يُقدم حتى 13:00", Qd = "الأحد", Gd = "الاثنين", Xd = "الثلاثاء", Zd = "الأربعاء", ep = "الخميس", tp = "الجمعة", sp = "السبت", np = "شروط الخدمة", ap = "سياسة الخصوصية", rp = "بيان إمكانية الوصول", ip = "آخر تحديث", op = "قبول الشروط", cp = "باستخدام موقعنا وخدماتنا، فإنك توافق على الالتزام بشروط الخدمة هذه.", lp = "استخدام الخدمة", up = "تم تصميم موقعنا لتصفح القائمة وتقديم الطلبات عبر واتساب وإجراء الحجوزات.", dp = "الطلبات والحجوزات", pp = "جميع الطلبات تتم معالجتها عبر واتساب. الحجوزات تخضع للتوفر والتأكيد.", hp = "شروط الدفع", fp = "يتم التعامل مع الدفع مباشرة في المطعم. الطلبات عبر الإنترنت للراحة والتأكيد فقط.", mp = "حدود المسؤولية", gp = "نحن غير مسؤولين عن خدمات الطرف الثالث مثل واتساب. استخدام الخدمات الخارجية يخضع لشروطها.", _p = "تغييرات الشروط", yp = "قد نقوم بتحديث هذه الشروط من وقت لآخر. الاستخدام المستمر يشكل قبولاً للشروط المنقحة.", xp = "جمع المعلومات", bp = "نحن نحترم خصوصيتك. موقعنا لا يستخدم ملفات تعريف الارتباط أو التتبع عبر الإنترنت. يتم تخزين المعلومات محلياً في متصفحك للاستمرارية، وقد تشمل الاسم وتفضيلات الطلب.", vp = "استخدام المعلومات", wp = "نستخدم المعلومات فقط لتقديم خدماتنا وتحسين تجربتك. لا نشارك البيانات الشخصية مع أطراف ثالثة.", jp = "ملفات تعريف الارتباط والتتبع", Np = "موقعنا لا يستخدم ملفات تعريف الارتباط أو تقنيات التتبع. جميع البيانات مخزنة محلياً في متصفحك.", $p = "تكامل واتساب", Sp = "تقديم الطلبات يتم عبر واتساب (خدمة خارجية). استخدام واتساب يخضع لشروط وسياسة خصوصية واتساب.", kp = "تخزين البيانات", Cp = "يتم تخزين البيانات محلياً على جهازك وعلى واتساب لمعالجة الطلبات وأغراض التواصل.", Ep = "حقوق المستخدم", Rp = "لأي أسئلة أو طلبات بخصوص بياناتك، يرجى التواصل معنا عبر صفحة الاتصال.", Op = "التزامنا", Pp = "نحن ملتزمون بجعل موقعنا قابلاً للوصول وفقاً للمعايير الحديثة. هدفنا توفير تجربة مستخدم متاحة ومتساوية ومريحة لجميع المستخدمين.", Tp = "معايير إمكانية الوصول", Ap = "يتبع موقعنا إرشادات إمكانية الوصول الحديثة بما في ذلك التنقل بلوحة المفاتيح وتوافق قارئ الشاشة والتصميم البصري الواضح.", Lp = "ميزات إمكانية الوصول", Mp = "يتضمن الموقع هيكل عناوين مناسب ونص بديل للصور ودعم التنقل بلوحة المفاتيح وتصميم متجاوب لمختلف الأجهزة والتقنيات المساعدة.", Ip = "التواصل بخصوص إمكانية الوصول", zp = "إذا واجهت أي مشاكل في إمكانية الوصول أو لديك اقتراحات للتحسين، يرجى التواصل معنا عبر الهاتف أو واتساب المدرجين في صفحة الاتصال.", Fp = "اسم العميل مطلوب قبل الإرسال إلى واتساب", Dp = "العودة إلى القائمة", Up = "مغلق", Bp = "للتوضيح فقط", Vp = "المطعم مغلق حالياً. الرجاء المحاولة خلال ساعات العمل.", qp = "إغلاق", Wp = "المطعم مغلق حالياً. يمكن تقديم الطلبات فقط خلال ساعات العمل.", Hp = "حسنًا", Kp = {
  wa_header: ou,
  wa_total: cu,
  wa_name: lu,
  wa_type: uu,
  wa_time: du,
  opt_size: pu,
  opt_extras: hu,
  opt_notes: fu,
  opt_doneness: mu,
  opt_sugar: gu,
  opt_pasta_type: _u,
  opt_bread: yu,
  menu: xu,
  contact: bu,
  all: vu,
  search_placeholder: wu,
  call: ju,
  whatsapp: Nu,
  location: $u,
  address: Su,
  open_hours: ku,
  add_to_cart: Cu,
  added: Eu,
  customize: Ru,
  size: Ou,
  extras: Pu,
  notes: Tu,
  cart: Au,
  items: Lu,
  empty_cart: Mu,
  clear_cart: Iu,
  checkout: zu,
  total: Fu,
  customer_name: Du,
  order_type: Uu,
  pickup: Bu,
  delivery: Vu,
  time_or_table: qu,
  message_preview: Wu,
  qr: Hu,
  instagram: Ku,
  base_price: Yu,
  extras_total: Ju,
  reservation: Qu,
  book_table: Gu,
  reservation_date: Xu,
  reservation_time: Zu,
  reservation_area: ed,
  reservation_guests: td,
  reservation_name: sd,
  reservation_phone: nd,
  reservation_notes: ad,
  send_reservation: rd,
  reservation_sent: id,
  reservation_wait: od,
  reservation_no_response: cd,
  order_wait: ld,
  order_no_response: ud,
  today: dd,
  tomorrow: pd,
  reservation_description: hd,
  choose_date: fd,
  select_time: md,
  number_people: gd,
  important_notice: _d,
  need_assistance: yd,
  special_requests_placeholder: xd,
  guests_singular: bd,
  guests_plural: vd,
  reservation_request: wd,
  date_label: jd,
  time_label: Nd,
  area_label: $d,
  guests_label: Sd,
  name_label: kd,
  phone_label: Cd,
  notes_label: Ed,
  confirm_reservation: Rd,
  thank_you: Od,
  sun_thu: Pd,
  fri: Td,
  sat: Ad,
  important_notice_cart: Ld,
  delivery_notice: Md,
  continue_to_whatsapp: Id,
  cancel: zd,
  wa_order_header: Fd,
  wa_order_items: Dd,
  wa_customer_info: Ud,
  wa_order_type: Bd,
  wa_customer_name: Vd,
  wa_customer_phone: qd,
  wa_quantity: Wd,
  wa_item: Hd,
  wa_options: Kd,
  wa_confirm_order: Yd,
  served_until_13: Jd,
  day_sun: Qd,
  day_mon: Gd,
  day_tue: Xd,
  day_wed: Zd,
  day_thu: ep,
  day_fri: tp,
  day_sat: sp,
  "day_tue-sat": "الثلاثاء-السبت",
  "day_mon-sat": "الاثنين-السبت",
  terms_of_service: np,
  privacy_policy: ap,
  accessibility_statement: rp,
  last_updated: ip,
  terms_acceptance: op,
  terms_acceptance_text: cp,
  terms_service_usage: lp,
  terms_service_usage_text: up,
  terms_orders: dp,
  terms_orders_text: pp,
  terms_payment: hp,
  terms_payment_text: fp,
  terms_liability: mp,
  terms_liability_text: gp,
  terms_changes: _p,
  terms_changes_text: yp,
  privacy_info_collection: xp,
  privacy_info_collection_text: bp,
  privacy_info_usage: vp,
  privacy_info_usage_text: wp,
  privacy_cookies: jp,
  privacy_cookies_text: Np,
  privacy_whatsapp: $p,
  privacy_whatsapp_text: Sp,
  privacy_data_storage: kp,
  privacy_data_storage_text: Cp,
  privacy_user_rights: Ep,
  privacy_user_rights_text: Rp,
  accessibility_commitment: Op,
  accessibility_commitment_text: Pp,
  accessibility_standards: Tp,
  accessibility_standards_text: Ap,
  accessibility_features: Lp,
  accessibility_features_text: Mp,
  accessibility_contact: Ip,
  accessibility_contact_text: zp,
  name_required: Fp,
  back_to_menu: Dp,
  closed: Up,
  for_illustration_only: Bp,
  restaurant_closed_message: Vp,
  close: qp,
  closed_popup_message: Wp,
  got_it_button: Hp
}, Yp = {
  en: { translation: xo },
  he: { translation: iu },
  ar: { translation: Kp }
};
function hs(n) {
  const e = n === "ar" || n === "he" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", e), document.documentElement.setAttribute("lang", n), console.log("🎯 TABLY CORE i18n is active! Language:", n, "Direction:", e);
}
Y.use(gn).init({
  resources: Yp,
  lng: "he",
  fallbackLng: "en",
  interpolation: { escapeValue: !1 }
}).then(() => hs(Y.language));
Y.on("languageChanged", hs);
export {
  oh as AccessibilityPage,
  ah as AnimationProvider,
  Zp as CartButton,
  eh as CartDrawer,
  Xp as CartProvider,
  th as CategoryTabs,
  ch as ContactPage,
  sh as ImageLightbox,
  nh as ItemCard,
  rh as OptionModal,
  lh as PrivacyPage,
  uh as QRPage,
  sa as ReservationModal,
  dh as ReservationPage,
  ih as SearchBar,
  ph as TermsPage,
  hs as applyDir,
  kt as cartTotal,
  Y as i18n,
  Zn as isRestaurantOpen,
  ta as useAnimation,
  Kt as useCart
};
