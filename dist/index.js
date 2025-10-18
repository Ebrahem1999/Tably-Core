import A, { forwardRef as Ht, createElement as Qe, createContext as Kt, useContext as Yt, useState as nt, useRef as Ce, useEffect as be, useCallback as Xs } from "react";
import { createPortal as Jt } from "react-dom";
import { useNavigate as Le } from "react-router-dom";
var Ge = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function Zs() {
  if (kt)
    return me;
  kt = 1;
  var n = A, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(d, i, c) {
    var l, f = {}, p = null, g = null;
    c !== void 0 && (p = "" + c), i.key !== void 0 && (p = "" + i.key), i.ref !== void 0 && (g = i.ref);
    for (l in i)
      s.call(i, l) && !o.hasOwnProperty(l) && (f[l] = i[l]);
    if (d && d.defaultProps)
      for (l in i = d.defaultProps, i)
        f[l] === void 0 && (f[l] = i[l]);
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
var Ct;
function en() {
  return Ct || (Ct = 1, process.env.NODE_ENV !== "production" && function() {
    var n = A, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), d = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m = Symbol.iterator, x = "@@iterator";
    function b(h) {
      if (h === null || typeof h != "object")
        return null;
      var v = m && h[m] || h[x];
      return typeof v == "function" ? v : null;
    }
    var N = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(h) {
      {
        for (var v = arguments.length, $ = new Array(v > 1 ? v - 1 : 0), R = 1; R < v; R++)
          $[R - 1] = arguments[R];
        y("error", h, $);
      }
    }
    function y(h, v, $) {
      {
        var R = N.ReactDebugCurrentFrame, F = R.getStackAddendum();
        F !== "" && (v += "%s", $ = $.concat([F]));
        var V = $.map(function(I) {
          return String(I);
        });
        V.unshift("Warning: " + v), Function.prototype.apply.call(console[h], console, V);
      }
    }
    var w = !1, j = !1, S = !1, T = !1, E = !1, z;
    z = Symbol.for("react.module.reference");
    function O(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === s || h === o || E || h === a || h === c || h === l || T || h === g || w || j || S || typeof h == "object" && h !== null && (h.$$typeof === p || h.$$typeof === f || h.$$typeof === u || h.$$typeof === d || h.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === z || h.getModuleId !== void 0));
    }
    function C(h, v, $) {
      var R = h.displayName;
      if (R)
        return R;
      var F = v.displayName || v.name || "";
      return F !== "" ? $ + "(" + F + ")" : $;
    }
    function k(h) {
      return h.displayName || "Context";
    }
    function D(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
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
        case a:
          return "StrictMode";
        case c:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case d:
            var v = h;
            return k(v) + ".Consumer";
          case u:
            var $ = h;
            return k($._context) + ".Provider";
          case i:
            return C(h, h.render, "ForwardRef");
          case f:
            var R = h.displayName || null;
            return R !== null ? R : D(h.type) || "Memo";
          case p: {
            var F = h, V = F._payload, I = F._init;
            try {
              return D(I(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, W = 0, q, L, U, ee, se, pe, dt;
    function pt() {
    }
    pt.__reactDisabledLog = !0;
    function $s() {
      {
        if (W === 0) {
          q = console.log, L = console.info, U = console.warn, ee = console.error, se = console.group, pe = console.groupCollapsed, dt = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: pt,
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
    function Ss() {
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
              value: L
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
              value: dt
            })
          });
        }
        W < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Fe = N.ReactCurrentDispatcher, De;
    function je(h, v, $) {
      {
        if (De === void 0)
          try {
            throw Error();
          } catch (F) {
            var R = F.stack.trim().match(/\n( *(at )?)/);
            De = R && R[1] || "";
          }
        return `
` + De + h;
      }
    }
    var Ue = !1, Ne;
    {
      var ks = typeof WeakMap == "function" ? WeakMap : Map;
      Ne = new ks();
    }
    function ht(h, v) {
      if (!h || Ue)
        return "";
      {
        var $ = Ne.get(h);
        if ($ !== void 0)
          return $;
      }
      var R;
      Ue = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = Fe.current, Fe.current = null, $s();
      try {
        if (v) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (G) {
              R = G;
            }
            Reflect.construct(h, [], I);
          } else {
            try {
              I.call();
            } catch (G) {
              R = G;
            }
            h.call(I.prototype);
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
          for (var M = G.stack.split(`
`), Q = R.stack.split(`
`), H = M.length - 1, Y = Q.length - 1; H >= 1 && Y >= 0 && M[H] !== Q[Y]; )
            Y--;
          for (; H >= 1 && Y >= 0; H--, Y--)
            if (M[H] !== Q[Y]) {
              if (H !== 1 || Y !== 1)
                do
                  if (H--, Y--, Y < 0 || M[H] !== Q[Y]) {
                    var Z = `
` + M[H].replace(" at new ", " at ");
                    return h.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", h.displayName)), typeof h == "function" && Ne.set(h, Z), Z;
                  }
                while (H >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        Ue = !1, Fe.current = V, Ss(), Error.prepareStackTrace = F;
      }
      var oe = h ? h.displayName || h.name : "", ne = oe ? je(oe) : "";
      return typeof h == "function" && Ne.set(h, ne), ne;
    }
    function Cs(h, v, $) {
      return ht(h, !1);
    }
    function Es(h) {
      var v = h.prototype;
      return !!(v && v.isReactComponent);
    }
    function $e(h, v, $) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return ht(h, Es(h));
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
          case i:
            return Cs(h.render);
          case f:
            return $e(h.type, v, $);
          case p: {
            var R = h, F = R._payload, V = R._init;
            try {
              return $e(V(F), v, $);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, ft = {}, mt = N.ReactDebugCurrentFrame;
    function Se(h) {
      if (h) {
        var v = h._owner, $ = $e(h.type, h._source, v ? v.type : null);
        mt.setExtraStackFrame($);
      } else
        mt.setExtraStackFrame(null);
    }
    function Rs(h, v, $, R, F) {
      {
        var V = Function.call.bind(he);
        for (var I in h)
          if (V(h, I)) {
            var M = void 0;
            try {
              if (typeof h[I] != "function") {
                var Q = Error((R || "React class") + ": " + $ + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Q.name = "Invariant Violation", Q;
              }
              M = h[I](v, I, R, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (H) {
              M = H;
            }
            M && !(M instanceof Error) && (Se(F), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", $, I, typeof M), Se(null)), M instanceof Error && !(M.message in ft) && (ft[M.message] = !0, Se(F), _("Failed %s type: %s", $, M.message), Se(null));
          }
      }
    }
    var Os = Array.isArray;
    function Be(h) {
      return Os(h);
    }
    function Ps(h) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, $ = v && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return $;
      }
    }
    function Ts(h) {
      try {
        return gt(h), !1;
      } catch {
        return !0;
      }
    }
    function gt(h) {
      return "" + h;
    }
    function _t(h) {
      if (Ts(h))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ps(h)), gt(h);
    }
    var fe = N.ReactCurrentOwner, As = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xt, yt, Ve;
    Ve = {};
    function Ls(h) {
      if (he.call(h, "ref")) {
        var v = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Ms(h) {
      if (he.call(h, "key")) {
        var v = Object.getOwnPropertyDescriptor(h, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function Is(h, v) {
      if (typeof h.ref == "string" && fe.current && v && fe.current.stateNode !== v) {
        var $ = D(fe.current.type);
        Ve[$] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(fe.current.type), h.ref), Ve[$] = !0);
      }
    }
    function zs(h, v) {
      {
        var $ = function() {
          xt || (xt = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        $.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: $,
          configurable: !0
        });
      }
    }
    function Fs(h, v) {
      {
        var $ = function() {
          yt || (yt = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        $.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: $,
          configurable: !0
        });
      }
    }
    var Ds = function(h, v, $, R, F, V, I) {
      var M = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: h,
        key: v,
        ref: $,
        props: I,
        // Record the component responsible for creating this element.
        _owner: V
      };
      return M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(M, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(M, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    };
    function Us(h, v, $, R, F) {
      {
        var V, I = {}, M = null, Q = null;
        $ !== void 0 && (_t($), M = "" + $), Ms(v) && (_t(v.key), M = "" + v.key), Ls(v) && (Q = v.ref, Is(v, F));
        for (V in v)
          he.call(v, V) && !As.hasOwnProperty(V) && (I[V] = v[V]);
        if (h && h.defaultProps) {
          var H = h.defaultProps;
          for (V in H)
            I[V] === void 0 && (I[V] = H[V]);
        }
        if (M || Q) {
          var Y = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          M && zs(I, Y), Q && Fs(I, Y);
        }
        return Ds(h, M, Q, F, R, fe.current, I);
      }
    }
    var qe = N.ReactCurrentOwner, bt = N.ReactDebugCurrentFrame;
    function ie(h) {
      if (h) {
        var v = h._owner, $ = $e(h.type, h._source, v ? v.type : null);
        bt.setExtraStackFrame($);
      } else
        bt.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function He(h) {
      return typeof h == "object" && h !== null && h.$$typeof === e;
    }
    function vt() {
      {
        if (qe.current) {
          var h = D(qe.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function Bs(h) {
      {
        if (h !== void 0) {
          var v = h.fileName.replace(/^.*[\\\/]/, ""), $ = h.lineNumber;
          return `

Check your code at ` + v + ":" + $ + ".";
        }
        return "";
      }
    }
    var wt = {};
    function Vs(h) {
      {
        var v = vt();
        if (!v) {
          var $ = typeof h == "string" ? h : h.displayName || h.name;
          $ && (v = `

Check the top-level render call using <` + $ + ">.");
        }
        return v;
      }
    }
    function jt(h, v) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var $ = Vs(v);
        if (wt[$])
          return;
        wt[$] = !0;
        var R = "";
        h && h._owner && h._owner !== qe.current && (R = " It was passed a child from " + D(h._owner.type) + "."), ie(h), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, R), ie(null);
      }
    }
    function Nt(h, v) {
      {
        if (typeof h != "object")
          return;
        if (Be(h))
          for (var $ = 0; $ < h.length; $++) {
            var R = h[$];
            He(R) && jt(R, v);
          }
        else if (He(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var F = b(h);
          if (typeof F == "function" && F !== h.entries)
            for (var V = F.call(h), I; !(I = V.next()).done; )
              He(I.value) && jt(I.value, v);
        }
      }
    }
    function qs(h) {
      {
        var v = h.type;
        if (v == null || typeof v == "string")
          return;
        var $;
        if (typeof v == "function")
          $ = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === f))
          $ = v.propTypes;
        else
          return;
        if ($) {
          var R = D(v);
          Rs($, h.props, "prop", R, h);
        } else if (v.PropTypes !== void 0 && !We) {
          We = !0;
          var F = D(v);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ws(h) {
      {
        for (var v = Object.keys(h.props), $ = 0; $ < v.length; $++) {
          var R = v[$];
          if (R !== "children" && R !== "key") {
            ie(h), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), ie(null);
            break;
          }
        }
        h.ref !== null && (ie(h), _("Invalid attribute `ref` supplied to `React.Fragment`."), ie(null));
      }
    }
    var $t = {};
    function St(h, v, $, R, F, V) {
      {
        var I = O(h);
        if (!I) {
          var M = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Q = Bs(F);
          Q ? M += Q : M += vt();
          var H;
          h === null ? H = "null" : Be(h) ? H = "array" : h !== void 0 && h.$$typeof === e ? (H = "<" + (D(h.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : H = typeof h, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", H, M);
        }
        var Y = Us(h, v, $, F, V);
        if (Y == null)
          return Y;
        if (I) {
          var Z = v.children;
          if (Z !== void 0)
            if (R)
              if (Be(Z)) {
                for (var oe = 0; oe < Z.length; oe++)
                  Nt(Z[oe], h);
                Object.freeze && Object.freeze(Z);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Nt(Z, h);
        }
        if (he.call(v, "key")) {
          var ne = D(h), G = Object.keys(v).filter(function(Gs) {
            return Gs !== "key";
          }), Ke = G.length > 0 ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$t[ne + Ke]) {
            var Qs = G.length > 0 ? "{" + G.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ke, ne, Qs, ne), $t[ne + Ke] = !0;
          }
        }
        return h === s ? Ws(Y) : qs(Y), Y;
      }
    }
    function Hs(h, v, $) {
      return St(h, v, $, !0);
    }
    function Ks(h, v, $) {
      return St(h, v, $, !1);
    }
    var Ys = Ks, Js = Hs;
    ge.Fragment = s, ge.jsx = Ys, ge.jsxs = Js;
  }()), ge;
}
process.env.NODE_ENV === "production" ? Ge.exports = Zs() : Ge.exports = en();
var r = Ge.exports;
const Qt = A.createContext(null);
function tn(n, e) {
  if (!n.options || !e)
    return 0;
  let t = 0;
  return Object.entries(n.options).forEach(([s, a]) => {
    if (a.type === "multi" && e[s] && e[s].forEach((u) => {
      let d;
      typeof u == "number" ? d = a.choices[u] : d = a.choices.find(
        (i) => (typeof i == "string" ? i : i.name) === u
      ), d && typeof d == "object" && d.price && (t += d.price);
    }), a.type === "select" && e[s] !== void 0) {
      let o;
      typeof e[s] == "number" ? o = a.choices[e[s]] : o = a.choices.find(
        (u) => (typeof u == "string" ? u : u.name) === e[s]
      ), o && typeof o == "object" && o.price && (t += o.price);
    }
  }), t;
}
const sn = (() => {
  try {
    const n = localStorage.getItem("qr_cart");
    return n ? JSON.parse(n) : { items: [], customer: { name: "", type: "pickup", timeOrTable: "" } };
  } catch {
    return { items: [], customer: { name: "", type: "pickup", timeOrTable: "" } };
  }
})();
function nn(n, e) {
  switch (e.type) {
    case "ADD": {
      const { item: t, quantity: s, options: a } = e.payload, o = JSON.stringify({ id: t.id, options: a }), u = n.items.find((l) => l.key === o), d = tn(t, a), i = t.price + d;
      let c;
      return u ? c = n.items.map((l) => l.key === o ? {
        ...l,
        quantity: l.quantity + s,
        totalPrice: i,
        extraCharges: d
      } : l) : c = [...n.items, {
        key: o,
        id: t.id,
        options: a,
        quantity: s,
        totalPrice: i,
        basePrice: t.price,
        extraCharges: d
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
function oh({ children: n }) {
  const [e, t] = A.useReducer(nn, sn);
  A.useEffect(() => {
    localStorage.setItem("qr_cart", JSON.stringify(e));
  }, [e]);
  const s = A.useMemo(() => ({ state: e, dispatch: t }), [e]);
  return /* @__PURE__ */ r.jsx(Qt.Provider, { value: s, children: n });
}
function at() {
  return A.useContext(Qt);
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
const an = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Gt = (...n) => n.filter((e, t, s) => !!e && e.trim() !== "" && s.indexOf(e) === t).join(" ").trim();
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var rn = {
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
const on = Ht(
  ({
    color: n = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: s,
    className: a = "",
    children: o,
    iconNode: u,
    ...d
  }, i) => Qe(
    "svg",
    {
      ref: i,
      ...rn,
      width: e,
      height: e,
      stroke: n,
      strokeWidth: s ? Number(t) * 24 / Number(e) : t,
      className: Gt("lucide", a),
      ...d
    },
    [
      ...u.map(([c, l]) => Qe(c, l)),
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
const J = (n, e) => {
  const t = Ht(
    ({ className: s, ...a }, o) => Qe(on, {
      ref: o,
      iconNode: e,
      className: Gt(`lucide-${an(n)}`, s),
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
const rt = J("ArrowLeft", [
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
const cn = J("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ln = J("CirclePlus", [
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
const Xe = J("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const un = J("Globe", [
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
const dn = J("Instagram", [
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
const it = J("MapPin", [
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
const ot = J("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pn = J("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hn = J("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = J("Phone", [
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
const fn = J("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mn = J("ShoppingCart", [
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
const gn = J("Trash2", [
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
const _n = J("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xt = J("Users", [
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
const Me = J("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function ch({ onClick: n }) {
  const { state: e } = at(), t = e.items.reduce((s, a) => s + a.quantity, 0);
  return /* @__PURE__ */ r.jsxs("button", { onClick: n, className: "relative tab", children: [
    /* @__PURE__ */ r.jsx(mn, { size: 18 }),
    t > 0 && /* @__PURE__ */ r.jsx("span", { className: "absolute -top-2 -end-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5", children: t })
  ] });
}
const xn = (n, e, t, s) => {
  var o, u, d, i;
  const a = [t, {
    code: e,
    ...s || {}
  }];
  if ((u = (o = n == null ? void 0 : n.services) == null ? void 0 : o.logger) != null && u.forward)
    return n.services.logger.forward(a, "warn", "react-i18next::", !0);
  ae(a[0]) && (a[0] = `react-i18next:: ${a[0]}`), (i = (d = n == null ? void 0 : n.services) == null ? void 0 : d.logger) != null && i.warn ? n.services.logger.warn(...a) : console != null && console.warn && console.warn(...a);
}, Rt = {}, Ze = (n, e, t, s) => {
  ae(t) && Rt[t] || (ae(t) && (Rt[t] = /* @__PURE__ */ new Date()), xn(n, e, t, s));
}, Zt = (n, e) => () => {
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
}, et = (n, e, t) => {
  n.loadNamespaces(e, Zt(n, t));
}, Ot = (n, e, t, s) => {
  if (ae(t) && (t = [t]), n.options.preload && n.options.preload.indexOf(e) > -1)
    return et(n, t, s);
  t.forEach((a) => {
    n.options.ns.indexOf(a) < 0 && n.options.ns.push(a);
  }), n.loadLanguages(e, Zt(n, s));
}, yn = (n, e, t = {}) => !e.languages || !e.languages.length ? (Ze(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(n, {
  lng: t.lng,
  precheck: (s, a) => {
    var o;
    if (((o = t.bindI18n) == null ? void 0 : o.indexOf("languageChanging")) > -1 && s.services.backendConnector.backend && s.isLanguageChangingTo && !a(s.isLanguageChangingTo, n))
      return !1;
  }
}), ae = (n) => typeof n == "string", bn = (n) => typeof n == "object" && n !== null, vn = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, wn = {
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
}, jn = (n) => wn[n], Nn = (n) => n.replace(vn, jn);
let tt = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Nn
};
const $n = (n = {}) => {
  tt = {
    ...tt,
    ...n
  };
}, Sn = () => tt;
let es;
const kn = (n) => {
  es = n;
}, Cn = () => es, ts = {
  type: "3rdParty",
  init(n) {
    $n(n.options.react), kn(n);
  }
}, En = Kt();
class Rn {
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
const On = (n, e) => {
  const t = Ce();
  return be(() => {
    t.current = e ? t.current : n;
  }, [n, e]), t.current;
}, ss = (n, e, t, s) => n.getFixedT(e, t, s), Pn = (n, e, t, s) => Xs(ss(n, e, t, s), [n, e, t, s]), X = (n, e = {}) => {
  var w, j, S, T;
  const {
    i18n: t
  } = e, {
    i18n: s,
    defaultNS: a
  } = Yt(En) || {}, o = t || s || Cn();
  if (o && !o.reportNamespaces && (o.reportNamespaces = new Rn()), !o) {
    Ze(o, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const E = (O, C) => ae(C) ? C : bn(C) && ae(C.defaultValue) ? C.defaultValue : Array.isArray(O) ? O[O.length - 1] : O, z = [E, {}, !1];
    return z.t = E, z.i18n = {}, z.ready = !1, z;
  }
  (w = o.options.react) != null && w.wait && Ze(o, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const u = {
    ...Sn(),
    ...o.options.react,
    ...e
  }, {
    useSuspense: d,
    keyPrefix: i
  } = u;
  let c = n || a || ((j = o.options) == null ? void 0 : j.defaultNS);
  c = ae(c) ? [c] : c || ["translation"], (T = (S = o.reportNamespaces).addUsedNamespaces) == null || T.call(S, c);
  const l = (o.isInitialized || o.initializedStoreOnce) && c.every((E) => yn(E, o, u)), f = Pn(o, e.lng || null, u.nsMode === "fallback" ? c : c[0], i), p = () => f, g = () => ss(o, e.lng || null, u.nsMode === "fallback" ? c : c[0], i), [m, x] = nt(p);
  let b = c.join();
  e.lng && (b = `${e.lng}${b}`);
  const N = On(b), _ = Ce(!0);
  be(() => {
    const {
      bindI18n: E,
      bindI18nStore: z
    } = u;
    _.current = !0, !l && !d && (e.lng ? Ot(o, e.lng, c, () => {
      _.current && x(g);
    }) : et(o, c, () => {
      _.current && x(g);
    })), l && N && N !== b && _.current && x(g);
    const O = () => {
      _.current && x(g);
    };
    return E && (o == null || o.on(E, O)), z && (o == null || o.store.on(z, O)), () => {
      _.current = !1, o && (E == null || E.split(" ").forEach((C) => o.off(C, O))), z && o && z.split(" ").forEach((C) => o.store.off(C, O));
    };
  }, [o, b]), be(() => {
    _.current && l && x(p);
  }, [o, i, l]);
  const y = [m, o, l];
  if (y.t = m, y.i18n = o, y.ready = l, l || !l && !d)
    return y;
  throw new Promise((E) => {
    e.lng ? Ot(o, e.lng, c, () => E()) : et(o, c, () => E());
  });
}, Tn = "zuwade", An = "Zuwade", Ln = "/zuwade-logo.jpg", Mn = "+972-54-750-7503", In = "+972547507503", zn = "Zuwade TA", Fn = "קסטרו שפרעם", Dn = {
  lat: 32.81557,
  lng: 35.152813
}, Un = "zuwade.ta", Bn = {
  "Mon-Sat": "09:00-19:00",
  Sun: "Closed"
}, Vn = {
  primary: "#10b981",
  accent: "#0ea5e9",
  bg: "#0b0f14",
  card: "#121821",
  text: "#e5e7eb"
}, qn = [
  "ar",
  "he",
  "en"
], Wn = "₪", Hn = {
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
  slug: Tn,
  name: An,
  logo: Ln,
  phone: Mn,
  whatsapp: In,
  address: zn,
  waze_name: Fn,
  coords: Dn,
  instagram: Un,
  hours: Bn,
  theme: Vn,
  languages: qn,
  currency: Wn,
  reservation: Hn
}, Kn = {
  name: "Zuwade",
  brand_subtitle: "TAKE AWAY"
}, Yn = [
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
], Jn = [
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
], ns = {
  restaurant: Kn,
  categories: Yn,
  items: Jn
}, Qn = {
  name: "זוואדי",
  brand_subtitle: "TAKE AWAY"
}, Gn = [
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
], Xn = [
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
], as = {
  restaurant: Qn,
  categories: Gn,
  items: Xn
}, Zn = {
  name: "زواوي",
  brand_subtitle: "TAKE AWAY"
}, ea = [
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
], ta = [
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
], rs = {
  restaurant: Zn,
  categories: ea,
  items: ta
}, sa = "https://79vup8a13c.execute-api.eu-central-1.amazonaws.com", na = async (n = {}) => {
  console.log("🛒 Tracking order submission...");
  try {
    const e = `${sa}/api/analytics/order`, t = {
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
function Pt(n) {
  if (!n)
    return null;
  const e = n.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!e)
    return null;
  const t = Number.parseInt(e[1], 10), s = Number.parseInt(e[2], 10);
  return Number.isNaN(t) || Number.isNaN(s) || s < 0 || s > 59 || t < 0 || t > 24 || t === 24 && s !== 0 ? null : t * 60 + s;
}
function aa(n) {
  if (!n)
    return [];
  const e = n.replace(/\s+/g, " ").replace(/\s*[\u2013-]\s*/g, "-").trim();
  if (!e)
    return [];
  if (e.includes("-")) {
    const [s, a] = e.split("-"), o = Ye(s), u = Ye(a);
    if (o === -1 || u === -1)
      return [];
    const d = [];
    let i = o;
    for (d.push(i); i !== u && (i = (i + 1) % de.length, d.push(i), !(d.length > de.length)); )
      ;
    return Array.from(new Set(d));
  }
  const t = Ye(e);
  return t === -1 ? [] : [t];
}
function Ye(n = "") {
  const e = n.slice(0, 3).toLowerCase();
  return de.findIndex(
    (s) => s.toLowerCase() === e
  );
}
function ra(n) {
  if (!n || typeof n != "string")
    return [];
  const t = n.split(",").map((s) => s.trim()).flatMap(aa);
  return Array.from(new Set(t));
}
function ia(n) {
  const e = de.map(() => []);
  return Object.entries(n || {}).forEach(([t, s]) => {
    const a = ra(t);
    if (!a.length || !s || /closed/i.test(String(s)))
      return;
    String(s).split(",").map((u) => u.trim()).filter(Boolean).forEach((u) => {
      const d = u.replace(/\u2013/g, "-"), [i, c] = d.split("-").map((p) => p.trim()), l = Pt(i), f = Pt(c);
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
function oa() {
  var c, l, f;
  const n = /* @__PURE__ */ new Date(), t = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Jerusalem",
    weekday: "short",
    hour12: !1,
    hour: "2-digit",
    minute: "2-digit"
  }).formatToParts(n), s = ((c = t.find((p) => p.type === "weekday")) == null ? void 0 : c.value) ?? "", a = ((l = t.find((p) => p.type === "hour")) == null ? void 0 : l.value) ?? "0", o = ((f = t.find((p) => p.type === "minute")) == null ? void 0 : f.value) ?? "0", u = de.findIndex((p) => p === s), d = Number.parseInt(a, 10), i = Number.parseInt(o, 10);
  return {
    dayIndex: u,
    minutes: d * 60 + i
  };
}
function is(n) {
  if (!n || typeof n != "object")
    return !0;
  const { dayIndex: e, minutes: t } = oa();
  if (e === -1 || Number.isNaN(t))
    return !0;
  const a = ia(n)[e];
  return !a || a.length === 0 ? !1 : a.some(
    (o) => t >= o.start && t < o.end
  );
}
const Tt = { en: ns, he: as, ar: rs };
function xe(n, e) {
  return (Tt[e] || Tt.en).items.find((s) => s.id === n);
}
function ca(n, e, t) {
  var p, g, m, x, b, N;
  const s = (_, y) => {
    var j;
    const w = (j = y == null ? void 0 : y.options) == null ? void 0 : j[_];
    return (w == null ? void 0 : w.label) || {
      size: e("opt_size"),
      extras: e("opt_extras"),
      notes: e("opt_notes"),
      doneness: e("opt_doneness"),
      sugar: e("opt_sugar"),
      pasta_type: e("opt_pasta_type"),
      bread: e("opt_bread"),
      wrap: e("opt_wrap")
    }[_] || _;
  }, a = t.language === "ar" || t.language === "he", o = n.items.map((_) => {
    const y = xe(_.id, t.language);
    return {
      ..._,
      name: (y == null ? void 0 : y.name) || `Item ${_.id}`,
      image: (y == null ? void 0 : y.image) || "/placeholder.jpg",
      desc: (y == null ? void 0 : y.desc) || ""
    };
  }), u = (_) => _, d = [];
  if (a) {
    const _ = e("wa_order_header").replace(/[🍽️📋👤🙏]/g, "").trim();
    d.push(u(`${_} 🍽️`)), d.push("");
    const y = e("wa_order_items").replace(/[🍽️📋👤🙏]/g, "").trim();
    d.push(u(`${y} 📋`)), o.forEach((S, T) => {
      var z;
      const E = [];
      if (S.options) {
        const O = xe(S.id, t.language);
        for (const [C, k] of Object.entries(S.options)) {
          if (k == null || k === "" || Array.isArray(k) && k.length === 0)
            continue;
          const D = s(C, O), B = (z = O == null ? void 0 : O.options) == null ? void 0 : z[C];
          let W = k;
          if (B && B.choices)
            if (Array.isArray(k))
              W = k.map((q) => {
                const L = B.choices[q];
                return typeof L == "string" ? L : (L == null ? void 0 : L.name) || `Choice ${q}`;
              }).join(", ");
            else if (typeof k == "number" && B.choices[k]) {
              const q = B.choices[k];
              W = typeof q == "string" ? q : (q == null ? void 0 : q.name) || `Choice ${k}`;
            } else {
              const q = B.choices.find(
                (L) => (typeof L == "string" ? L : L.name) === k
              );
              W = typeof q == "string" ? q : (q == null ? void 0 : q.name) || k;
            }
          E.push(`${D}: ${W}`);
        }
      }
      d.push(u(`${T + 1}. ${S.name}`)), d.push(u(`   ${e("wa_quantity")}: ${S.quantity}`)), E.length > 0 && E.forEach((O) => {
        d.push(u(`   ${O}`));
      }), d.push("");
    });
    const w = e("wa_customer_info").replace(/[🍽️📋👤🙏]/g, "").trim();
    if (d.push(u(`${w} 👤`)), (p = n.customer) != null && p.name && (d.push(`${e("wa_customer_name")}: ${n.customer.name}`), d.push("")), (g = n.customer) != null && g.phone && d.push(`${e("wa_customer_phone")}: ${n.customer.phone}`), (m = n.customer) != null && m.type) {
      const S = n.customer.type === "delivery" ? e("delivery") : e("pickup"), T = n.customer.type === "delivery" ? "🚚" : "🏪";
      d.push(`${e("wa_order_type")}:`), d.push(`• ${S} ${T}`), d.push("");
    }
    d.push("");
    const j = e("wa_confirm_order").replace(/[🍽️📋👤🙏]/g, "").trim();
    return d.push(u(`${j} 🙏`)), d.join(`
`);
  }
  const i = e("wa_order_header").replace(/[🍽️📋👤🙏]/g, "").trim();
  d.push(`🍽️ ${i}`), d.push("");
  const c = e("wa_order_items").replace(/[🍽️📋👤🙏]/g, "").trim();
  d.push(`📋 ${c}`), o.forEach((_, y) => {
    var j;
    const w = [];
    if (_.options) {
      const S = xe(_.id, t.language);
      for (const [T, E] of Object.entries(_.options)) {
        if (E == null || E === "" || Array.isArray(E) && E.length === 0)
          continue;
        const z = s(T, S), O = (j = S == null ? void 0 : S.options) == null ? void 0 : j[T];
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
        w.push(`${z}: ${C}`);
      }
    }
    d.push(`${y + 1}. ${_.name}`), d.push(`   ${e("wa_quantity")}: ${_.quantity}`), w.length > 0 && w.forEach((S) => {
      d.push(`   ${S}`);
    }), d.push("");
  });
  const l = e("wa_customer_info").replace(/[🍽️📋👤🙏]/g, "").trim();
  if (a ? d.push(`${l} 👤`) : d.push(`👤 ${l}`), (x = n.customer) != null && x.name && (d.push(`${e("wa_customer_name")}: ${n.customer.name}`), d.push("")), (b = n.customer) != null && b.phone && d.push(`${e("wa_customer_phone")}: ${n.customer.phone}`), (N = n.customer) != null && N.type) {
    const _ = n.customer.type === "delivery" ? e("delivery") : e("pickup"), y = n.customer.type === "delivery" ? "🚚" : "🏪";
    d.push(`${e("wa_order_type")}:`), d.push(`• ${_} ${y}`), d.push("");
  }
  d.push("");
  const f = e("wa_confirm_order").replace(/[🍽️📋👤🙏]/g, "").trim();
  return a ? d.push(`${f} 🙏`) : d.push(`${f} 🙏`), d.join(`
`);
}
function lh({ open: n, onClose: e }) {
  const { state: t, dispatch: s } = at(), { t: a, i18n: o } = X(), u = Et(t.items), d = ca(t, a, o), [i, c] = A.useState(!1), [l, f] = A.useState(!1), [p, g] = A.useState(!1);
  A.useEffect(() => {
    n || (c(!1), g(!1));
  }, [n]);
  const m = t.items.map((j) => {
    const S = xe(j.id, o.language);
    return {
      ...j,
      name: (S == null ? void 0 : S.name) || `Item ${j.id}`,
      image: (S == null ? void 0 : S.image) || "/placeholder.jpg",
      desc: (S == null ? void 0 : S.desc) || ""
    };
  }), x = document.dir === "rtl", b = x ? "left-0" : "right-0", N = x ? "border-r" : "border-l", _ = x ? "-translate-x-full" : "translate-x-full", y = () => {
    if (P.hours && !is(P.hours)) {
      g(!0);
      return;
    }
    if (!t.customer.name || t.customer.name.trim() === "") {
      f(!0);
      return;
    }
    f(!1), c(!0);
  }, w = async () => {
    var S, T, E;
    try {
      const z = t.items || [], O = Et(z), C = z.reduce((k, D) => k + D.quantity, 0);
      na({
        orderType: ((S = t.customer) == null ? void 0 : S.type) || "unknown",
        itemCount: C,
        totalAmount: O,
        customerName: ((T = t.customer) == null ? void 0 : T.name) || "anonymous",
        customerPhone: ((E = t.customer) == null ? void 0 : E.phone) || "not provided",
        items: z.map((k) => ({
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
    } catch (z) {
      console.warn("Error in order tracking, but continuing with WhatsApp:", z);
    }
    const j = `https://wa.me/${P.whatsapp}?text=${encodeURIComponent(d)}`;
    window.open(j, "_blank"), c(!1);
  };
  return Jt(
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
          className: `absolute top-0 ${b} z-10
        h-full w-full sm:w-[430px]
        bg-[var(--card)] shadow-2xl overflow-hidden
        flex flex-col
        ${N} border-white/10
        transform transition-transform ${n ? "translate-x-0" : _}`,
          children: [
            /* @__PURE__ */ r.jsxs("div", { className: "p-4 flex items-center justify-between border-b border-white/10", children: [
              /* @__PURE__ */ r.jsx("div", { className: "text-lg font-semibold", children: a("cart") }),
              /* @__PURE__ */ r.jsx("button", { className: "tab", onClick: e, children: /* @__PURE__ */ r.jsx(Me, {}) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "flex-1 p-4 space-y-3 overflow-auto", children: m.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: "h-full flex items-center justify-center text-white/60 text-lg font-medium", children: a("empty_cart") }) : m.map((j) => /* @__PURE__ */ r.jsx("div", { className: "card p-3", children: /* @__PURE__ */ r.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ r.jsx(
                "img",
                {
                  src: j.image,
                  alt: j.name,
                  className: "w-16 h-16 object-cover rounded-lg"
                }
              ),
              /* @__PURE__ */ r.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ r.jsx("div", { className: "font-semibold", children: j.name }),
                  /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      className: "text-red-400",
                      onClick: () => s({ type: "REMOVE", key: j.key }),
                      children: /* @__PURE__ */ r.jsx(gn, { size: 16 })
                    }
                  )
                ] }),
                (() => {
                  const S = xe(j.id, o.language), T = (S == null ? void 0 : S.options) || {}, E = j.options || {}, z = {};
                  return Object.entries(E).forEach(([O, C]) => {
                    C !== null && C !== "" && (!Array.isArray(C) || C.length > 0) && (z[O] = C);
                  }), Object.entries(T).forEach(([O, C]) => {
                    !z[O] && C.choices && C.choices.length > 0 && C.type === "select" && (z[O] = 0);
                  }), /* @__PURE__ */ r.jsx("div", { className: "text-xs text-white/60", children: Object.entries(z).map(([O, C]) => {
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
                        B = C.map((L) => {
                          const U = k.choices[L];
                          return U && typeof U == "object" && U.price && (W += U.price), typeof U == "string" ? U : (U == null ? void 0 : U.name) || `Choice ${L}`;
                        }).join(", ");
                      else if (typeof C == "number" && k.choices[C]) {
                        const L = k.choices[C];
                        L && typeof L == "object" && L.price && (W = L.price), B = typeof L == "string" ? L : (L == null ? void 0 : L.name) || `Choice ${C}`;
                      } else {
                        const L = k.choices.find(
                          (U) => (typeof U == "string" ? U : U.name) === C
                        );
                        L && typeof L == "object" && L.price && (W = L.price), B = typeof L == "string" ? L : (L == null ? void 0 : L.name) || C;
                      }
                    return /* @__PURE__ */ r.jsxs("div", { children: [
                      /* @__PURE__ */ r.jsxs("span", { className: "text-white/70", children: [
                        D,
                        ":"
                      ] }),
                      " ",
                      B,
                      W > 0 && /* @__PURE__ */ r.jsxs("span", { className: "text-green-400 ml-1", children: [
                        "+",
                        W,
                        P.currency
                      ] })
                    ] }, O);
                  }) });
                })(),
                /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 pt-2", children: [
                  /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      className: "tab",
                      onClick: () => s({ type: "DEC", key: j.key }),
                      children: /* @__PURE__ */ r.jsx(hn, { size: 14 })
                    }
                  ),
                  /* @__PURE__ */ r.jsx("div", { className: "min-w-[2rem] text-center", children: j.quantity }),
                  /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      className: "tab",
                      onClick: () => s({ type: "INC", key: j.key }),
                      children: /* @__PURE__ */ r.jsx(fn, { size: 14 })
                    }
                  ),
                  /* @__PURE__ */ r.jsx("div", { className: "flex-1" }),
                  /* @__PURE__ */ r.jsxs("div", { className: "font-semibold", children: [
                    (j.totalPrice || j.price) * j.quantity,
                    (j.totalPrice || j.price) * j.quantity > 0 && P.currency
                  ] })
                ] })
              ] })
            ] }) }, j.key)) }),
            m.length > 0 && /* @__PURE__ */ r.jsxs("div", { className: "p-4 border-t border-white/10 space-y-3", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                /* @__PURE__ */ r.jsxs("label", { className: "text-sm", children: [
                  /* @__PURE__ */ r.jsxs("div", { className: "text-white/70", children: [
                    a("customer_name"),
                    " ",
                    /* @__PURE__ */ r.jsx("span", { className: "text-red-400", children: "*" })
                  ] }),
                  /* @__PURE__ */ r.jsx(
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
                  l && /* @__PURE__ */ r.jsx("div", { className: "text-red-400 text-xs mt-1", children: a("name_required") })
                ] }),
                /* @__PURE__ */ r.jsxs("label", { className: "text-sm", children: [
                  /* @__PURE__ */ r.jsx("div", { className: "text-white/70", children: a("order_type") }),
                  /* @__PURE__ */ r.jsxs(
                    "select",
                    {
                      value: t.customer.type,
                      onChange: (j) => s({ type: "SET_CUSTOMER", payload: { type: j.target.value } }),
                      children: [
                        /* @__PURE__ */ r.jsx("option", { value: "pickup", children: a("pickup") }),
                        /* @__PURE__ */ r.jsx("option", { value: "delivery", children: a("delivery") })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ r.jsx("button", { className: "btn-outline", onClick: () => s({ type: "CLEAR" }), children: a("clear_cart") }),
                /* @__PURE__ */ r.jsxs("div", { className: "text-lg font-bold", children: [
                  a("total"),
                  ": ",
                  u,
                  u > 0 && P.currency
                ] })
              ] }),
              t.customer.type === "delivery" && /* @__PURE__ */ r.jsx("div", { className: "bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 text-sm", children: /* @__PURE__ */ r.jsxs("div", { className: "font-medium text-orange-400 mb-1", children: [
                "🚚 ",
                a("delivery_notice")
              ] }) }),
              /* @__PURE__ */ r.jsx("button", { className: "btn w-full", onClick: y, children: a("checkout") })
            ] })
          ]
        }
      ),
      p && /* @__PURE__ */ r.jsx("div", { className: "absolute inset-0 z-30 flex items-center justify-center p-4", children: /* @__PURE__ */ r.jsx("div", { className: "bg-[var(--card)] border border-red-500/30 rounded-xl p-6 max-w-md w-full shadow-2xl", children: /* @__PURE__ */ r.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-semibold", children: a("important_notice_cart") }),
        /* @__PURE__ */ r.jsx("p", { className: "text-sm text-white/80", children: a("restaurant_closed_message") }),
        /* @__PURE__ */ r.jsx("button", { className: "btn w-full", onClick: () => g(!1), children: a("close") })
      ] }) }) }),
      i && /* @__PURE__ */ r.jsx("div", { className: "absolute inset-0 z-20 flex items-center justify-center p-4", children: /* @__PURE__ */ r.jsx("div", { className: "bg-[var(--card)] border border-white/10 rounded-xl p-6 max-w-md w-full shadow-2xl", children: /* @__PURE__ */ r.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ r.jsx("div", { className: "w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ r.jsx(ot, { size: 32, className: "text-blue-400" }) }),
        /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-semibold mb-3", children: a("important_notice_cart") }),
        /* @__PURE__ */ r.jsxs("div", { className: "text-sm text-white/80 space-y-2 mb-6", children: [
          /* @__PURE__ */ r.jsxs("p", { children: [
            "• ",
            a("order_wait")
          ] }),
          /* @__PURE__ */ r.jsxs("p", { children: [
            "• ",
            a("order_no_response")
          ] })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ r.jsx("button", { className: "btn-outline flex-1", onClick: () => c(!1), children: a("cancel") }),
          /* @__PURE__ */ r.jsx("button", { className: "btn flex-1", onClick: w, children: a("continue_to_whatsapp") })
        ] })
      ] }) }) })
    ] }),
    document.body
  );
}
function la({ categories: n, current: e, onChange: t }) {
  const { t: s } = X();
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
      n.map((a) => /* @__PURE__ */ r.jsxs(
        "button",
        {
          className: `tab ${e === a.id ? "bg-green-500/20 border-green-400/50 text-green-400 ring-2 ring-green-400/30" : "hover:bg-white/5"} transition-all duration-200`,
          onClick: () => t(a.id),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "text-lg", children: a.emoji }),
            /* @__PURE__ */ r.jsx("span", { children: a.title })
          ]
        },
        a.id
      ))
    ] })
  ] });
}
function ua({ open: n, src: e, alt: t, onClose: s }) {
  if (A.useEffect(() => {
    if (!n)
      return;
    const o = (u) => u.key === "Escape" && s();
    return document.addEventListener("keydown", o), () => document.removeEventListener("keydown", o);
  }, [n, s]), !n)
    return null;
  const a = document.dir === "rtl" ? "left-3" : "right-3";
  return Jt(
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
                  className: `absolute top-3 ${a} bg-black/60 hover:bg-black/80 text-white rounded-full p-2 cursor-pointer`,
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
function At({ item: n, currency: e, onAdd: t, onPreview: s }) {
  var o;
  const { t: a } = X();
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
          /* @__PURE__ */ r.jsx("div", { className: "absolute bottom-1 right-1 bg-black/40 text-white/80 text-[10px] px-1 py-0.5 rounded", children: a("for_illustration_only") })
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
      ((o = n.options) == null ? void 0 : o.size) && /* @__PURE__ */ r.jsx("div", { className: "text-xs text-white/60", children: /* @__PURE__ */ r.jsx("div", { className: "flex flex-wrap gap-1", children: n.options.size.choices.map((u, d) => {
        const i = typeof u == "string" ? u : u.name, c = typeof u == "object" ? u.price : 0, l = n.price + c;
        return /* @__PURE__ */ r.jsxs("span", { className: "bg-white/10 px-2 py-1 rounded text-xs", children: [
          i,
          " ",
          l,
          l > 0 && e
        ] }, d);
      }) }) }),
      !n.noCart && /* @__PURE__ */ r.jsx("div", { className: "pt-2 mt-auto", children: /* @__PURE__ */ r.jsxs("button", { className: "btn w-full", onClick: () => t(n), children: [
        /* @__PURE__ */ r.jsx(ln, { size: 18 }),
        " ",
        a("add_to_cart")
      ] }) })
    ] })
  ] });
}
const da = {
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
    this.prefix = t.prefix || "i18next:", this.logger = e || da, this.options = t, this.debug = t.debug;
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
      let [d, i] = u;
      for (let c = 0; c < i; c++)
        d(...s);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((u) => {
      let [d, i] = u;
      for (let c = 0; c < i; c++)
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
function Lt(n) {
  return n == null ? "" : "" + n;
}
function pa(n, e, t) {
  n.forEach((s) => {
    e[s] && (t[s] = e[s]);
  });
}
const ha = /###/g;
function ye(n, e, t) {
  function s(d) {
    return d && d.indexOf("###") > -1 ? d.replace(ha, ".") : d;
  }
  function a() {
    return !n || typeof n == "string";
  }
  const o = typeof e != "string" ? e : e.split(".");
  let u = 0;
  for (; u < o.length - 1; ) {
    if (a())
      return {};
    const d = s(o[u]);
    !n[d] && t && (n[d] = new t()), Object.prototype.hasOwnProperty.call(n, d) ? n = n[d] : n = {}, ++u;
  }
  return a() ? {} : {
    obj: n,
    k: s(o[u])
  };
}
function Mt(n, e, t) {
  const {
    obj: s,
    k: a
  } = ye(n, e, Object);
  if (s !== void 0 || e.length === 1) {
    s[a] = t;
    return;
  }
  let o = e[e.length - 1], u = e.slice(0, e.length - 1), d = ye(n, u, Object);
  for (; d.obj === void 0 && u.length; )
    o = `${u[u.length - 1]}.${o}`, u = u.slice(0, u.length - 1), d = ye(n, u, Object), d && d.obj && typeof d.obj[`${d.k}.${o}`] < "u" && (d.obj = void 0);
  d.obj[`${d.k}.${o}`] = t;
}
function fa(n, e, t, s) {
  const {
    obj: a,
    k: o
  } = ye(n, e, Object);
  a[o] = a[o] || [], s && (a[o] = a[o].concat(t)), s || a[o].push(t);
}
function Oe(n, e) {
  const {
    obj: t,
    k: s
  } = ye(n, e);
  if (t)
    return t[s];
}
function ma(n, e, t) {
  const s = Oe(n, t);
  return s !== void 0 ? s : Oe(e, t);
}
function os(n, e, t) {
  for (const s in e)
    s !== "__proto__" && s !== "constructor" && (s in n ? typeof n[s] == "string" || n[s] instanceof String || typeof e[s] == "string" || e[s] instanceof String ? t && (n[s] = e[s]) : os(n[s], e[s], t) : n[s] = e[s]);
  return n;
}
function ce(n) {
  return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var ga = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function _a(n) {
  return typeof n == "string" ? n.replace(/[&<>"'\/]/g, (e) => ga[e]) : n;
}
class xa {
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
const ya = [" ", ",", "?", "!", ";"], ba = new xa(20);
function va(n, e, t) {
  e = e || "", t = t || "";
  const s = ya.filter((u) => e.indexOf(u) < 0 && t.indexOf(u) < 0);
  if (s.length === 0)
    return !0;
  const a = ba.getRegExp(`(${s.map((u) => u === "?" ? "\\?" : u).join("|")})`);
  let o = !a.test(n);
  if (!o) {
    const u = n.indexOf(t);
    u > 0 && !a.test(n.substring(0, u)) && (o = !0);
  }
  return o;
}
function st(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!n)
    return;
  if (n[e])
    return n[e];
  const s = e.split(t);
  let a = n;
  for (let o = 0; o < s.length; ) {
    if (!a || typeof a != "object")
      return;
    let u, d = "";
    for (let i = o; i < s.length; ++i)
      if (i !== o && (d += t), d += s[i], u = a[d], u !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof u) > -1 && i < s.length - 1)
          continue;
        o += i - o + 1;
        break;
      }
    a = u;
  }
  return a;
}
function Pe(n) {
  return n && n.indexOf("_") > 0 ? n.replace("_", "-") : n;
}
class It extends Ie {
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
    const o = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, u = a.ignoreJSONStructure !== void 0 ? a.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let d;
    e.indexOf(".") > -1 ? d = e.split(".") : (d = [e, t], s && (Array.isArray(s) ? d.push(...s) : typeof s == "string" && o ? d.push(...s.split(o)) : d.push(s)));
    const i = Oe(this.data, d);
    return !i && !t && !s && e.indexOf(".") > -1 && (e = d[0], t = d[1], s = d.slice(2).join(".")), i || !u || typeof s != "string" ? i : st(this.data && this.data[e] && this.data[e][t], s, o);
  }
  addResource(e, t, s, a) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const u = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let d = [e, t];
    s && (d = d.concat(u ? s.split(u) : s)), e.indexOf(".") > -1 && (d = e.split("."), a = t, t = d[1]), this.addNamespaces(t), Mt(this.data, d, a), o.silent || this.emit("added", e, t, s, a);
  }
  addResources(e, t, s) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const o in s)
      (typeof s[o] == "string" || Object.prototype.toString.apply(s[o]) === "[object Array]") && this.addResource(e, t, o, s[o], {
        silent: !0
      });
    a.silent || this.emit("added", e, t, s);
  }
  addResourceBundle(e, t, s, a, o) {
    let u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, d = [e, t];
    e.indexOf(".") > -1 && (d = e.split("."), a = s, s = t, t = d[1]), this.addNamespaces(t);
    let i = Oe(this.data, d) || {};
    u.skipCopy || (s = JSON.parse(JSON.stringify(s))), a ? os(i, s, o) : i = {
      ...i,
      ...s
    }, Mt(this.data, d, i), u.silent || this.emit("added", e, t, s);
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
var cs = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, e, t, s, a) {
    return n.forEach((o) => {
      this.processors[o] && (e = this.processors[o].process(e, t, s, a));
    }), e;
  }
};
const zt = {};
class Te extends Ie {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), pa(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = te.create("translator");
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
    let o = t.ns || this.options.defaultNS || [];
    const u = s && e.indexOf(s) > -1, d = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !va(e, s, a);
    if (u && !d) {
      const i = e.match(this.interpolator.nestingRegexp);
      if (i && i.length > 0)
        return {
          key: e,
          namespaces: o
        };
      const c = e.split(s);
      (s !== a || s === a && this.options.ns.indexOf(c[0]) > -1) && (o = c.shift()), e = c.join(a);
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
    const a = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, o = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: u,
      namespaces: d
    } = this.extractFromKey(e[e.length - 1], t), i = d[d.length - 1], c = t.lng || this.language, l = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (c && c.toLowerCase() === "cimode") {
      if (l) {
        const w = t.nsSeparator || this.options.nsSeparator;
        return a ? {
          res: `${i}${w}${u}`,
          usedKey: u,
          exactUsedKey: u,
          usedLng: c,
          usedNS: i,
          usedParams: this.getUsedParamsDetails(t)
        } : `${i}${w}${u}`;
      }
      return a ? {
        res: u,
        usedKey: u,
        exactUsedKey: u,
        usedLng: c,
        usedNS: i,
        usedParams: this.getUsedParamsDetails(t)
      } : u;
    }
    const f = this.resolve(e, t);
    let p = f && f.res;
    const g = f && f.usedKey || u, m = f && f.exactUsedKey || u, x = Object.prototype.toString.apply(p), b = ["[object Number]", "[object Function]", "[object RegExp]"], N = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, _ = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (_ && p && (typeof p != "string" && typeof p != "boolean" && typeof p != "number") && b.indexOf(x) < 0 && !(typeof N == "string" && x === "[object Array]")) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const w = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, p, {
          ...t,
          ns: d
        }) : `key '${u} (${this.language})' returned an object instead of string.`;
        return a ? (f.res = w, f.usedParams = this.getUsedParamsDetails(t), f) : w;
      }
      if (o) {
        const w = x === "[object Array]", j = w ? [] : {}, S = w ? m : g;
        for (const T in p)
          if (Object.prototype.hasOwnProperty.call(p, T)) {
            const E = `${S}${o}${T}`;
            j[T] = this.translate(E, {
              ...t,
              joinArrays: !1,
              ns: d
            }), j[T] === E && (j[T] = p[T]);
          }
        p = j;
      }
    } else if (_ && typeof N == "string" && x === "[object Array]")
      p = p.join(N), p && (p = this.extendTranslation(p, e, t, s));
    else {
      let w = !1, j = !1;
      const S = t.count !== void 0 && typeof t.count != "string", T = Te.hasDefaultValue(t), E = S ? this.pluralResolver.getSuffix(c, t.count, t) : "", z = t.ordinal && S ? this.pluralResolver.getSuffix(c, t.count, {
        ordinal: !1
      }) : "", O = S && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), C = O && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${E}`] || t[`defaultValue${z}`] || t.defaultValue;
      !this.isValidLookup(p) && T && (w = !0, p = C), this.isValidLookup(p) || (j = !0, p = u);
      const D = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && j ? void 0 : p, B = T && C !== p && this.options.updateMissing;
      if (j || w || B) {
        if (this.logger.log(B ? "updateKey" : "missingKey", c, i, u, B ? C : p), o) {
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
        const L = (U, ee, se) => {
          const pe = T && se !== p ? se : D;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(U, i, ee, pe, B, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(U, i, ee, pe, B, t), this.emit("missingKey", U, i, ee, p);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && S ? W.forEach((U) => {
          const ee = this.pluralResolver.getSuffixes(U, t);
          O && t[`defaultValue${this.options.pluralSeparator}zero`] && ee.indexOf(`${this.options.pluralSeparator}zero`) < 0 && ee.push(`${this.options.pluralSeparator}zero`), ee.forEach((se) => {
            L([U], u + se, t[`defaultValue${se}`] || C);
          });
        }) : L(W, u, C));
      }
      p = this.extendTranslation(p, e, t, f, s), j && p === u && this.options.appendNamespaceToMissingKey && (p = `${i}:${u}`), (j || w) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? p = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${i}:${u}` : u, w ? p : void 0) : p = this.options.parseMissingKeyHandler(p));
    }
    return a ? (f.res = p, f.usedParams = this.getUsedParamsDetails(t), f) : p;
  }
  extendTranslation(e, t, s, a, o) {
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
      const c = typeof e == "string" && (s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let l;
      if (c) {
        const p = e.match(this.interpolator.nestingRegexp);
        l = p && p.length;
      }
      let f = s.replace && typeof s.replace != "string" ? s.replace : s;
      if (this.options.interpolation.defaultVariables && (f = {
        ...this.options.interpolation.defaultVariables,
        ...f
      }), e = this.interpolator.interpolate(e, f, s.lng || this.language, s), c) {
        const p = e.match(this.interpolator.nestingRegexp), g = p && p.length;
        l < g && (s.nest = !1);
      }
      !s.lng && this.options.compatibilityAPI !== "v1" && a && a.res && (s.lng = a.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var p = arguments.length, g = new Array(p), m = 0; m < p; m++)
          g[m] = arguments[m];
        return o && o[0] === g[0] && !s.context ? (u.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${t[0]}`), null) : u.translate(...g, t);
      }, s)), s.interpolation && this.interpolator.reset();
    }
    const d = s.postProcess || this.options.postProcess, i = typeof d == "string" ? [d] : d;
    return e != null && i && i.length && s.applyPostProcessor !== !1 && (e = cs.handle(i, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...a,
        usedParams: this.getUsedParamsDetails(s)
      },
      ...s
    } : s, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s, a, o, u, d;
    return typeof e == "string" && (e = [e]), e.forEach((i) => {
      if (this.isValidLookup(s))
        return;
      const c = this.extractFromKey(i, t), l = c.key;
      a = l;
      let f = c.namespaces;
      this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
      const p = t.count !== void 0 && typeof t.count != "string", g = p && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), m = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "", x = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      f.forEach((b) => {
        this.isValidLookup(s) || (d = b, !zt[`${x[0]}-${b}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(d) && (zt[`${x[0]}-${b}`] = !0, this.logger.warn(`key "${a}" for languages "${x.join(", ")}" won't get resolved as namespace "${d}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), x.forEach((N) => {
          if (this.isValidLookup(s))
            return;
          u = N;
          const _ = [l];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(_, l, N, b, t);
          else {
            let w;
            p && (w = this.pluralResolver.getSuffix(N, t.count, t));
            const j = `${this.options.pluralSeparator}zero`, S = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (p && (_.push(l + w), t.ordinal && w.indexOf(S) === 0 && _.push(l + w.replace(S, this.options.pluralSeparator)), g && _.push(l + j)), m) {
              const T = `${l}${this.options.contextSeparator}${t.context}`;
              _.push(T), p && (_.push(T + w), t.ordinal && w.indexOf(S) === 0 && _.push(T + w.replace(S, this.options.pluralSeparator)), g && _.push(T + j));
            }
          }
          let y;
          for (; y = _.pop(); )
            this.isValidLookup(s) || (o = y, s = this.getResource(N, b, y, t));
        }));
      });
    }), {
      res: s,
      usedKey: a,
      exactUsedKey: o,
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
      for (const o of t)
        delete a[o];
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
function Je(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
class Ft {
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
      return this.options.lowerCaseLng ? s = s.map((a) => a.toLowerCase()) : s.length === 2 ? (s[0] = s[0].toLowerCase(), s[1] = s[1].toUpperCase(), t.indexOf(s[1].toLowerCase()) > -1 && (s[1] = Je(s[1].toLowerCase()))) : s.length === 3 && (s[0] = s[0].toLowerCase(), s[1].length === 2 && (s[1] = s[1].toUpperCase()), s[0] !== "sgn" && s[2].length === 2 && (s[2] = s[2].toUpperCase()), t.indexOf(s[1].toLowerCase()) > -1 && (s[1] = Je(s[1].toLowerCase())), t.indexOf(s[2].toLowerCase()) > -1 && (s[2] = Je(s[2].toLowerCase()))), s.join("-");
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
      t = this.options.supportedLngs.find((o) => {
        if (o === a)
          return o;
        if (!(o.indexOf("-") < 0 && a.indexOf("-") < 0) && (o.indexOf("-") > 0 && a.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === a || o.indexOf(a) === 0 && a.length > 1))
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
    const s = this.getFallbackCodes(t || this.options.fallbackLng || [], e), a = [], o = (u) => {
      u && (this.isSupportedCode(u) ? a.push(u) : this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`));
    };
    return typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(e))) : typeof e == "string" && o(this.formatLanguageCode(e)), s.forEach((u) => {
      a.indexOf(u) < 0 && o(this.formatLanguageCode(u));
    }), a;
  }
}
let wa = [{
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
}], ja = {
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
const Na = ["v1", "v2", "v3"], $a = ["v4"], Dt = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function Sa() {
  const n = {};
  return wa.forEach((e) => {
    e.lngs.forEach((t) => {
      n[t] = {
        numbers: e.nr,
        plurals: ja[e.fc]
      };
    });
  }), n;
}
class ka {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = te.create("pluralResolver"), (!this.options.compatibilityJSON || $a.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Sa();
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
    return this.getSuffixes(e, s).map((a) => `${t}${a}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const s = this.getRule(e, t);
    return s ? this.shouldUseIntlApi() ? s.resolvedOptions().pluralCategories.sort((a, o) => Dt[a] - Dt[o]).map((a) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${a}`) : s.numbers.map((a) => this.getSuffix(e, a, t)) : [];
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
    const o = () => this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString();
    return this.options.compatibilityJSON === "v1" ? a === 1 ? "" : typeof a == "number" ? `_plural_${a.toString()}` : o() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? o() : this.options.prepend && s.toString() ? this.options.prepend + s.toString() : s.toString();
  }
  shouldUseIntlApi() {
    return !Na.includes(this.options.compatibilityJSON);
  }
}
function Ut(n, e, t) {
  let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = ma(n, e, t);
  return !o && a && typeof t == "string" && (o = st(n, t, s), o === void 0 && (o = st(e, t, s))), o;
}
class Ca {
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
    this.escape = t.escape !== void 0 ? t.escape : _a, this.escapeValue = t.escapeValue !== void 0 ? t.escapeValue : !0, this.useRawValueToEscape = t.useRawValueToEscape !== void 0 ? t.useRawValueToEscape : !1, this.prefix = t.prefix ? ce(t.prefix) : t.prefixEscaped || "{{", this.suffix = t.suffix ? ce(t.suffix) : t.suffixEscaped || "}}", this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",", this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "", this.nestingPrefix = t.nestingPrefix ? ce(t.nestingPrefix) : t.nestingPrefixEscaped || ce("$t("), this.nestingSuffix = t.nestingSuffix ? ce(t.nestingSuffix) : t.nestingSuffixEscaped || ce(")"), this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",", this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3, this.alwaysFormat = t.alwaysFormat !== void 0 ? t.alwaysFormat : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, s) => t && t.source === s ? (t.lastIndex = 0, t) : new RegExp(s, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, s, a) {
    let o, u, d;
    const i = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function c(m) {
      return m.replace(/\$/g, "$$$$");
    }
    const l = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const _ = Ut(t, i, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(_, void 0, s, {
          ...a,
          ...t,
          interpolationkey: m
        }) : _;
      }
      const x = m.split(this.formatSeparator), b = x.shift().trim(), N = x.join(this.formatSeparator).trim();
      return this.format(Ut(t, i, b, this.options.keySeparator, this.options.ignoreJSONStructure), N, s, {
        ...a,
        ...t,
        interpolationkey: b
      });
    };
    this.resetRegExp();
    const f = a && a.missingInterpolationHandler || this.options.missingInterpolationHandler, p = a && a.interpolation && a.interpolation.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (m) => c(m)
    }, {
      regex: this.regexp,
      safeValue: (m) => this.escapeValue ? c(this.escape(m)) : c(m)
    }].forEach((m) => {
      for (d = 0; o = m.regex.exec(e); ) {
        const x = o[1].trim();
        if (u = l(x), u === void 0)
          if (typeof f == "function") {
            const N = f(e, o, a);
            u = typeof N == "string" ? N : "";
          } else if (a && Object.prototype.hasOwnProperty.call(a, x))
            u = "";
          else if (p) {
            u = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${x} for interpolating ${e}`), u = "";
        else
          typeof u != "string" && !this.useRawValueToEscape && (u = Lt(u));
        const b = m.safeValue(u);
        if (e = e.replace(o[0], b), p ? (m.regex.lastIndex += u.length, m.regex.lastIndex -= o[0].length) : m.regex.lastIndex = 0, d++, d >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a, o, u;
    function d(i, c) {
      const l = this.nestingOptionsSeparator;
      if (i.indexOf(l) < 0)
        return i;
      const f = i.split(new RegExp(`${l}[ ]*{`));
      let p = `{${f[1]}`;
      i = f[0], p = this.interpolate(p, u);
      const g = p.match(/'/g), m = p.match(/"/g);
      (g && g.length % 2 === 0 && !m || m.length % 2 !== 0) && (p = p.replace(/'/g, '"'));
      try {
        u = JSON.parse(p), c && (u = {
          ...c,
          ...u
        });
      } catch (x) {
        return this.logger.warn(`failed parsing options string in nesting for key ${i}`, x), `${i}${l}${p}`;
      }
      return delete u.defaultValue, i;
    }
    for (; a = this.nestingRegexp.exec(e); ) {
      let i = [];
      u = {
        ...s
      }, u = u.replace && typeof u.replace != "string" ? u.replace : u, u.applyPostProcessor = !1, delete u.defaultValue;
      let c = !1;
      if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
        const l = a[1].split(this.formatSeparator).map((f) => f.trim());
        a[1] = l.shift(), i = l, c = !0;
      }
      if (o = t(d.call(this, a[1].trim(), u), u), o && a[0] === e && typeof o != "string")
        return o;
      typeof o != "string" && (o = Lt(o)), o || (this.logger.warn(`missed to resolve ${a[1]} for nesting ${e}`), o = ""), c && (o = i.reduce((l, f) => this.format(l, f, s.lng, {
        ...s,
        interpolationkey: a[1].trim()
      }), o.trim())), e = e.replace(a[0], o), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
function Ea(n) {
  let e = n.toLowerCase().trim();
  const t = {};
  if (n.indexOf("(") > -1) {
    const s = n.split("(");
    e = s[0].toLowerCase().trim();
    const a = s[1].substring(0, s[1].length - 1);
    e === "currency" && a.indexOf(":") < 0 ? t.currency || (t.currency = a.trim()) : e === "relativetime" && a.indexOf(":") < 0 ? t.range || (t.range = a.trim()) : a.split(";").forEach((u) => {
      if (!u)
        return;
      const [d, ...i] = u.split(":"), c = i.join(":").trim().replace(/^'+|'+$/g, "");
      t[d.trim()] || (t[d.trim()] = c), c === "false" && (t[d.trim()] = !1), c === "true" && (t[d.trim()] = !0), isNaN(c) || (t[d.trim()] = parseInt(c, 10));
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}
function le(n) {
  const e = {};
  return function(s, a, o) {
    const u = a + JSON.stringify(o);
    let d = e[u];
    return d || (d = n(Pe(a), o), e[u] = d), d(s);
  };
}
class Ra {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = te.create("formatter"), this.options = e, this.formats = {
      number: le((t, s) => {
        const a = new Intl.NumberFormat(t, {
          ...s
        });
        return (o) => a.format(o);
      }),
      currency: le((t, s) => {
        const a = new Intl.NumberFormat(t, {
          ...s,
          style: "currency"
        });
        return (o) => a.format(o);
      }),
      datetime: le((t, s) => {
        const a = new Intl.DateTimeFormat(t, {
          ...s
        });
        return (o) => a.format(o);
      }),
      relativetime: le((t, s) => {
        const a = new Intl.RelativeTimeFormat(t, {
          ...s
        });
        return (o) => a.format(o, s.range || "day");
      }),
      list: le((t, s) => {
        const a = new Intl.ListFormat(t, {
          ...s
        });
        return (o) => a.format(o);
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
    return t.split(this.formatSeparator).reduce((d, i) => {
      const {
        formatName: c,
        formatOptions: l
      } = Ea(i);
      if (this.formats[c]) {
        let f = d;
        try {
          const p = a && a.formatParams && a.formatParams[a.interpolationkey] || {}, g = p.locale || p.lng || a.locale || a.lng || s;
          f = this.formats[c](d, g, {
            ...l,
            ...a,
            ...p
          });
        } catch (p) {
          this.logger.warn(p);
        }
        return f;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return d;
    }, e);
  }
}
function Oa(n, e) {
  n.pending[e] !== void 0 && (delete n.pending[e], n.pendingCount--);
}
class Pa extends Ie {
  constructor(e, t, s) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = a, this.logger = te.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = a.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5, this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(s, a.backend, a);
  }
  queueLoad(e, t, s, a) {
    const o = {}, u = {}, d = {}, i = {};
    return e.forEach((c) => {
      let l = !0;
      t.forEach((f) => {
        const p = `${c}|${f}`;
        !s.reload && this.store.hasResourceBundle(c, f) ? this.state[p] = 2 : this.state[p] < 0 || (this.state[p] === 1 ? u[p] === void 0 && (u[p] = !0) : (this.state[p] = 1, l = !1, u[p] === void 0 && (u[p] = !0), o[p] === void 0 && (o[p] = !0), i[f] === void 0 && (i[f] = !0)));
      }), l || (d[c] = !0);
    }), (Object.keys(o).length || Object.keys(u).length) && this.queue.push({
      pending: u,
      pendingCount: Object.keys(u).length,
      loaded: {},
      errors: [],
      callback: a
    }), {
      toLoad: Object.keys(o),
      pending: Object.keys(u),
      toLoadLanguages: Object.keys(d),
      toLoadNamespaces: Object.keys(i)
    };
  }
  loaded(e, t, s) {
    const a = e.split("|"), o = a[0], u = a[1];
    t && this.emit("failedLoading", o, u, t), s && this.store.addResourceBundle(o, u, s, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2;
    const d = {};
    this.queue.forEach((i) => {
      fa(i.loaded, [o], u), Oa(i, e), t && i.errors.push(t), i.pendingCount === 0 && !i.done && (Object.keys(i.loaded).forEach((c) => {
        d[c] || (d[c] = {});
        const l = i.loaded[c];
        l.length && l.forEach((f) => {
          d[c][f] === void 0 && (d[c][f] = !0);
        });
      }), i.done = !0, i.errors.length ? i.callback(i.errors) : i.callback());
    }), this.emit("loaded", d), this.queue = this.queue.filter((i) => !i.done);
  }
  read(e, t, s) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, u = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length)
      return u(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: s,
        tried: a,
        wait: o,
        callback: u
      });
      return;
    }
    this.readingCalls++;
    const d = (c, l) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const f = this.waitingReads.shift();
        this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
      }
      if (c && l && a < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, s, a + 1, o * 2, u);
        }, o);
        return;
      }
      u(c, l);
    }, i = this.backend[s].bind(this.backend);
    if (i.length === 2) {
      try {
        const c = i(e, t);
        c && typeof c.then == "function" ? c.then((l) => d(null, l)).catch(d) : d(null, c);
      } catch (c) {
        d(c);
      }
      return;
    }
    return i(e, t, d);
  }
  prepareLoading(e, t) {
    let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), a && a();
    typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)), typeof t == "string" && (t = [t]);
    const o = this.queueLoad(e, t, s, a);
    if (!o.toLoad.length)
      return o.pending.length || a(), null;
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
    const s = e.split("|"), a = s[0], o = s[1];
    this.read(a, o, "read", void 0, void 0, (u, d) => {
      u && this.logger.warn(`${t}loading namespace ${o} for language ${a} failed`, u), !u && d && this.logger.log(`${t}loaded namespace ${o} for language ${a}`, d), this.loaded(e, u, d);
    });
  }
  saveMissing(e, t, s, a, o) {
    let u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, d = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(s == null || s === "")) {
      if (this.backend && this.backend.create) {
        const i = {
          ...u,
          isUpdate: o
        }, c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let l;
            c.length === 5 ? l = c(e, t, s, a, i) : l = c(e, t, s, a), l && typeof l.then == "function" ? l.then((f) => d(null, f)).catch(d) : d(null, l);
          } catch (l) {
            d(l);
          }
        else
          c(e, t, s, a, d, i);
      }
      !e || !e[0] || this.store.addResource(e[0], t, s, a);
    }
  }
}
function Bt() {
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
function Vt(n) {
  return typeof n.ns == "string" && (n.ns = [n.ns]), typeof n.fallbackLng == "string" && (n.fallbackLng = [n.fallbackLng]), typeof n.fallbackNS == "string" && (n.fallbackNS = [n.fallbackNS]), n.supportedLngs && n.supportedLngs.indexOf("cimode") < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), n;
}
function ke() {
}
function Ta(n) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((t) => {
    typeof n[t] == "function" && (n[t] = n[t].bind(n));
  });
}
class ve extends Ie {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Vt(e), this.services = {}, this.logger = te, this.modules = {
      external: []
    }, Ta(this), t && !this.isInitialized && !e.isClone) {
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
    const a = Bt();
    this.options = {
      ...a,
      ...this.options,
      ...Vt(t)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...a.interpolation,
      ...this.options.interpolation
    }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    function o(l) {
      return l ? typeof l == "function" ? new l() : l : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? te.init(o(this.modules.logger), this.options) : te.init(null, this.options);
      let l;
      this.modules.formatter ? l = this.modules.formatter : typeof Intl < "u" && (l = Ra);
      const f = new Ft(this.options);
      this.store = new It(this.options.resources, this.options);
      const p = this.services;
      p.logger = te, p.resourceStore = this.store, p.languageUtils = f, p.pluralResolver = new ka(f, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), l && (!this.options.interpolation.format || this.options.interpolation.format === a.interpolation.format) && (p.formatter = o(l), p.formatter.init(p, this.options), this.options.interpolation.format = p.formatter.format.bind(p.formatter)), p.interpolator = new Ca(this.options), p.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, p.backendConnector = new Pa(o(this.modules.backend), p.resourceStore, p, this.options), p.backendConnector.on("*", function(g) {
        for (var m = arguments.length, x = new Array(m > 1 ? m - 1 : 0), b = 1; b < m; b++)
          x[b - 1] = arguments[b];
        e.emit(g, ...x);
      }), this.modules.languageDetector && (p.languageDetector = o(this.modules.languageDetector), p.languageDetector.init && p.languageDetector.init(p, this.options.detection, this.options)), this.modules.i18nFormat && (p.i18nFormat = o(this.modules.i18nFormat), p.i18nFormat.init && p.i18nFormat.init(this)), this.translator = new Te(this.services, this.options), this.translator.on("*", function(g) {
        for (var m = arguments.length, x = new Array(m > 1 ? m - 1 : 0), b = 1; b < m; b++)
          x[b - 1] = arguments[b];
        e.emit(g, ...x);
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
    const i = _e(), c = () => {
      const l = (f, p) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), i.resolve(p), s(f, p);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return l(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, l);
    };
    return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), i;
  }
  loadResources(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ke;
    const a = typeof e == "string" ? e : this.language;
    if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (a && a.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return s();
      const o = [], u = (d) => {
        if (!d || d === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(d).forEach((c) => {
          c !== "cimode" && o.indexOf(c) < 0 && o.push(c);
        });
      };
      a ? u(a) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((i) => u(i)), this.options.preload && this.options.preload.forEach((d) => u(d)), this.services.backendConnector.load(o, this.options.ns, (d) => {
        !d && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(d);
      });
    } else
      s(null);
  }
  reloadResources(e, t, s) {
    const a = _e();
    return e || (e = this.languages), t || (t = this.options.ns), s || (s = ke), this.services.backendConnector.reload(e, t, (o) => {
      a.resolve(), s(o);
    }), a;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && cs.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    const o = (i) => {
      this.language = i, this.languages = this.services.languageUtils.toResolveHierarchy(i), this.resolvedLanguage = void 0, this.setResolvedLanguage(i);
    }, u = (i, c) => {
      c ? (o(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, a.resolve(function() {
        return s.t(...arguments);
      }), t && t(i, function() {
        return s.t(...arguments);
      });
    }, d = (i) => {
      !e && !i && this.services.languageDetector && (i = []);
      const c = typeof i == "string" ? i : this.services.languageUtils.getBestMatchFromCodes(i);
      c && (this.language || o(c), this.translator.language || this.translator.changeLanguage(c), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(c)), this.loadResources(c, (l) => {
        u(l, c);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? d(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(d) : this.services.languageDetector.detect(d) : d(e), a;
  }
  getFixedT(e, t, s) {
    var a = this;
    const o = function(u, d) {
      let i;
      if (typeof d != "object") {
        for (var c = arguments.length, l = new Array(c > 2 ? c - 2 : 0), f = 2; f < c; f++)
          l[f - 2] = arguments[f];
        i = a.options.overloadTranslationOptionHandler([u, d].concat(l));
      } else
        i = {
          ...d
        };
      i.lng = i.lng || o.lng, i.lngs = i.lngs || o.lngs, i.ns = i.ns || o.ns, i.keyPrefix = i.keyPrefix || s || o.keyPrefix;
      const p = a.options.keySeparator || ".";
      let g;
      return i.keyPrefix && Array.isArray(u) ? g = u.map((m) => `${i.keyPrefix}${p}${m}`) : g = i.keyPrefix ? `${i.keyPrefix}${p}${u}` : u, a.t(g, i);
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
    const s = t.lng || this.resolvedLanguage || this.languages[0], a = this.options ? this.options.fallbackLng : !1, o = this.languages[this.languages.length - 1];
    if (s.toLowerCase() === "cimode")
      return !0;
    const u = (d, i) => {
      const c = this.services.backendConnector.state[`${d}|${i}`];
      return c === -1 || c === 2;
    };
    if (t.precheck) {
      const d = t.precheck(this, u);
      if (d !== void 0)
        return d;
    }
    return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || u(s, e) && (!a || u(o, e)));
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
    const a = this.options.preload || [], o = e.filter((u) => a.indexOf(u) < 0);
    return o.length ? (this.options.preload = a.concat(o), this.loadResources((u) => {
      s.resolve(), t && t(u);
    }), s) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)
      return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], s = this.services && this.services.languageUtils || new Ft(Bt());
    return t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new ve(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ke;
    const s = e.forkResourceStore;
    s && delete e.forkResourceStore;
    const a = {
      ...this.options,
      ...e,
      isClone: !0
    }, o = new ve(a);
    return (e.debug !== void 0 || e.prefix !== void 0) && (o.logger = o.logger.clone(e)), ["store", "services", "language"].forEach((d) => {
      o[d] = this[d];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, s && (o.store = new It(this.store.data, a), o.services.resourceStore = o.store), o.translator = new Te(o.services, a), o.translator.on("*", function(d) {
      for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
        c[l - 1] = arguments[l];
      o.emit(d, ...c);
    }), o.init(a, t), o.translator.options = a, o.translator.backendConnector.services.utils = {
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
const K = ve.createInstance();
K.createInstance = ve.createInstance;
K.createInstance;
K.dir;
K.init;
K.loadResources;
K.reloadResources;
K.use;
K.changeLanguage;
K.getFixedT;
K.t;
K.exists;
K.setDefaultNamespace;
K.hasLoadedNamespace;
K.loadNamespaces;
K.loadLanguages;
const Aa = "New order from template menu", La = "Total", Ma = "Name", Ia = "Type", za = "Time/Table", Fa = "Size", Da = "Extras", Ua = "Notes", Ba = "Doneness", Va = "Sugar", qa = "Pasta Type", Wa = "Bread", Ha = "Menu", Ka = "Contact", Ya = "All", Ja = "Search dishes...", Qa = "Call", Ga = "WhatsApp", Xa = "Location", Za = "Address", er = "Opening Hours", tr = "Add to Cart", sr = "Added", nr = "Customize", ar = "Size", rr = "Extras", ir = "Notes", or = "Cart", cr = "items", lr = "Your cart is empty", ur = "Clear cart", dr = "Send via WhatsApp", pr = "Total", hr = "Name", fr = "Order type", mr = "Pickup", gr = "Delivery", _r = "Time/Table", xr = "Message preview", yr = "QR", br = "Instagram", vr = "Base price", wr = "Extras", jr = "Reservation", Nr = "Book a Table", $r = "Date", Sr = "Time", kr = "Area", Cr = "Number of Guests", Er = "Your Name", Rr = "Phone Number", Or = "Special Requests", Pr = "Send Reservation Request", Tr = "Reservation request sent!", Ar = "Please wait for confirmation from the restaurant.", Lr = "If you don't receive a response within 15 minutes, please call the restaurant.", Mr = "Please wait for confirmation from the restaurant for your order.", Ir = "If you don't receive a response within 5 minutes, please call the restaurant.", zr = "Today", Fr = "Tomorrow", Dr = "Reserve your table at our restaurant and enjoy an unforgettable dining experience. We look forward to welcoming you!", Ur = "Choose your preferred date", Br = "Select time slot", Vr = "Number of people", qr = "Important Notice", Wr = "Need immediate assistance? Call us:", Hr = "Any special requests or notes...", Kr = "Guest", Yr = "Guests", Jr = "Table Reservation Request", Qr = "Date:", Gr = "Time:", Xr = "Area:", Zr = "Guests:", ei = "Name:", ti = "Phone:", si = "Notes:", ni = "Please confirm this reservation.", ai = "Thank you! 🙏", ri = "Sun–Thu:", ii = "Fri:", oi = "Sat:", ci = "Important Notice", li = "Delivery fees not included in total price", ui = "Continue to WhatsApp", di = "Cancel", pi = "The restaurant is currently closed. Please try again during opening hours.", hi = "Close", fi = "🍽️ NEW ORDER REQUEST", mi = "📋 ORDER ITEMS:", gi = "👤 CUSTOMER INFORMATION:", _i = "Order Type", xi = "Name", yi = "Phone", bi = "Qty", vi = "Item", wi = "Options", ji = "Please confirm this order. Thank you! 🙏", Ni = "Served until 13:00", $i = "Sunday", Si = "Monday", ki = "Tuesday", Ci = "Wednesday", Ei = "Thursday", Ri = "Friday", Oi = "Saturday", Pi = "For illustration only", Ti = "Terms of Service", Ai = "Privacy Policy", Li = "Accessibility Statement", Mi = "Last updated", Ii = "Acceptance of Terms", zi = "By using our website and services, you agree to comply with these terms of service.", Fi = "Service Usage", Di = "Our website is designed for browsing our menu, placing orders via WhatsApp, and making reservations.", Ui = "Orders and Reservations", Bi = "All orders are processed through WhatsApp. Reservations are subject to availability and confirmation.", Vi = "Payment Terms", qi = "Payment is handled directly at the restaurant. Online orders are for convenience and confirmation only.", Wi = "Limitation of Liability", Hi = "We are not responsible for third-party services such as WhatsApp. Use of external services is subject to their terms.", Ki = "Changes to Terms", Yi = "We may update these terms from time to time. Continued use constitutes acceptance of revised terms.", Ji = "Information Collection", Qi = "We respect your privacy. Our website does not use cookies or online tracking. Information is stored locally in your browser (LocalStorage) for continuity, and may include name and order preferences (personal/family).", Gi = "Information Usage", Xi = "We only use information to provide our services and improve your experience. We do not share personal data with third parties.", Zi = "Cookies and Tracking", eo = "Our website does not use cookies or tracking technologies. All data is stored locally in your browser.", to = "WhatsApp Integration", so = "Order placement occurs through WhatsApp (external service). WhatsApp usage is subject to WhatsApp's terms and privacy policy.", no = "Data Storage", ao = "Data is stored locally on your device and on WhatsApp for order processing and communication purposes.", ro = "User Rights", io = "For any questions or requests regarding your data, please contact us through our contact page.", oo = "Our Commitment", co = "We are committed to making our website accessible according to Israeli Standard TI 5568 based on WCAG 2.0 Level AA. Our goal is to provide an accessible, equal, and comfortable user experience for all users.", lo = "Accessibility Standards", uo = "Our website follows modern accessibility guidelines including keyboard navigation, screen reader compatibility, and clear visual design.", po = "Accessibility Features", ho = "The website includes proper heading structure, alternative text for images, keyboard navigation support, and responsive design for various devices and assistive technologies.", fo = "Accessibility Contact", mo = "If you encounter any accessibility issues or have suggestions for improvement, please contact us via phone or WhatsApp listed on our contact page.", go = "Customer name is required before sending to WhatsApp", _o = "Back to Menu", xo = "Closed", yo = "The restaurant is currently closed. Orders can be placed only during opening hours.", bo = "Got it", ls = {
  wa_header: Aa,
  wa_total: La,
  wa_name: Ma,
  wa_type: Ia,
  wa_time: za,
  opt_size: Fa,
  opt_extras: Da,
  opt_notes: Ua,
  opt_doneness: Ba,
  opt_sugar: Va,
  opt_pasta_type: qa,
  opt_bread: Wa,
  menu: Ha,
  contact: Ka,
  all: Ya,
  search_placeholder: Ja,
  call: Qa,
  whatsapp: Ga,
  location: Xa,
  address: Za,
  open_hours: er,
  add_to_cart: tr,
  added: sr,
  customize: nr,
  size: ar,
  extras: rr,
  notes: ir,
  cart: or,
  items: cr,
  empty_cart: lr,
  clear_cart: ur,
  checkout: dr,
  total: pr,
  customer_name: hr,
  order_type: fr,
  pickup: mr,
  delivery: gr,
  time_or_table: _r,
  message_preview: xr,
  qr: yr,
  instagram: br,
  base_price: vr,
  extras_total: wr,
  reservation: jr,
  book_table: Nr,
  reservation_date: $r,
  reservation_time: Sr,
  reservation_area: kr,
  reservation_guests: Cr,
  reservation_name: Er,
  reservation_phone: Rr,
  reservation_notes: Or,
  send_reservation: Pr,
  reservation_sent: Tr,
  reservation_wait: Ar,
  reservation_no_response: Lr,
  order_wait: Mr,
  order_no_response: Ir,
  today: zr,
  tomorrow: Fr,
  reservation_description: Dr,
  choose_date: Ur,
  select_time: Br,
  number_people: Vr,
  important_notice: qr,
  need_assistance: Wr,
  special_requests_placeholder: Hr,
  guests_singular: Kr,
  guests_plural: Yr,
  reservation_request: Jr,
  date_label: Qr,
  time_label: Gr,
  area_label: Xr,
  guests_label: Zr,
  name_label: ei,
  phone_label: ti,
  notes_label: si,
  confirm_reservation: ni,
  thank_you: ai,
  sun_thu: ri,
  fri: ii,
  sat: oi,
  important_notice_cart: ci,
  delivery_notice: li,
  continue_to_whatsapp: ui,
  cancel: di,
  restaurant_closed_message: pi,
  close: hi,
  wa_order_header: fi,
  wa_order_items: mi,
  wa_customer_info: gi,
  wa_order_type: _i,
  wa_customer_name: xi,
  wa_customer_phone: yi,
  wa_quantity: bi,
  wa_item: vi,
  wa_options: wi,
  wa_confirm_order: ji,
  served_until_13: Ni,
  day_sun: $i,
  day_mon: Si,
  day_tue: ki,
  day_wed: Ci,
  day_thu: Ei,
  day_fri: Ri,
  day_sat: Oi,
  "day_tue-sat": "Tuesday-Saturday",
  "day_mon-sat": "Monday-Saturday",
  for_illustration_only: Pi,
  terms_of_service: Ti,
  privacy_policy: Ai,
  accessibility_statement: Li,
  last_updated: Mi,
  terms_acceptance: Ii,
  terms_acceptance_text: zi,
  terms_service_usage: Fi,
  terms_service_usage_text: Di,
  terms_orders: Ui,
  terms_orders_text: Bi,
  terms_payment: Vi,
  terms_payment_text: qi,
  terms_liability: Wi,
  terms_liability_text: Hi,
  terms_changes: Ki,
  terms_changes_text: Yi,
  privacy_info_collection: Ji,
  privacy_info_collection_text: Qi,
  privacy_info_usage: Gi,
  privacy_info_usage_text: Xi,
  privacy_cookies: Zi,
  privacy_cookies_text: eo,
  privacy_whatsapp: to,
  privacy_whatsapp_text: so,
  privacy_data_storage: no,
  privacy_data_storage_text: ao,
  privacy_user_rights: ro,
  privacy_user_rights_text: io,
  accessibility_commitment: oo,
  accessibility_commitment_text: co,
  accessibility_standards: lo,
  accessibility_standards_text: uo,
  accessibility_features: po,
  accessibility_features_text: ho,
  accessibility_contact: fo,
  accessibility_contact_text: mo,
  name_required: go,
  back_to_menu: _o,
  closed: xo,
  closed_popup_message: yo,
  got_it_button: bo
}, vo = "הזמנה חדשה מתפריט התבנית", wo = "סך הכול", jo = "שם", No = "סוג", $o = "שעה/שולחן", So = "גודל", ko = "תוספות", Co = "הערות", Eo = "דרגת עשייה", Ro = "סוכר", Oo = "סוג פסטה", Po = "לחם", To = "תפריט", Ao = "צור קשר", Lo = "הכל", Mo = "חיפוש מנות...", Io = "התקשר", zo = "וואטסאפ", Fo = "מיקום", Do = "כתובת", Uo = "שעות פתיחה", Bo = "להוסיף לסל", Vo = "נוסף", qo = "התאמה", Wo = "גודל", Ho = "תוספות", Ko = "הערות", Yo = "הסל", Jo = "פריטים", Qo = "הסל ריק", Go = "נקה סל", Xo = "שלח בוואטסאפ", Zo = "סך הכל", ec = "שם", tc = "סוג הזמנה", sc = "איסוף עצמי", nc = "משלוח", ac = "שעה/שולחן", rc = "תצוגה מקדימה", ic = "QR", oc = "אינסטגרם", cc = "מחיר בסיס", lc = "תוספות", uc = "הזמנת שולחן", dc = "הזמן שולחן", pc = "תאריך", hc = "שעה", fc = "אזור", mc = "מספר אורחים", gc = "השם שלך", _c = "מספר טלפון", xc = "בקשות מיוחדות", yc = "שלח בקשת הזמנה", bc = "בקשת ההזמנה נשלחה!", vc = "אנא המתן לאישור מהמסעדה.", wc = "אם לא תקבל תגובה תוך 15 דקות, אנא התקשר למסעדה.", jc = "אנא המתן לאישור מהמסעדה עבור ההזמנה שלך.", Nc = "אם לא תקבל תגובה תוך 5 דקות, אנא התקשר למסעדה.", $c = "היום", Sc = "מחר", kc = "הזמן שולחן במסעדה שלנו ותהנה מחווית אוכל בלתי נשכחת. אנחנו מצפים לראות אותך!", Cc = "בחר את התאריך המועדף עליך", Ec = "בחר זמן", Rc = "מספר אנשים", Oc = "הודעה חשובה", Pc = "צריך עזרה מיידית? התקשר אלינו:", Tc = "בקשות מיוחדות או הערות...", Ac = "אורח", Lc = "אורחים", Mc = "בקשת הזמנת שולחן", Ic = "תאריך:", zc = "שעה:", Fc = "אזור:", Dc = "אורחים:", Uc = "שם:", Bc = "טלפון:", Vc = "הערות:", qc = "אנא אשר את ההזמנה הזו.", Wc = "תודה! 🙏", Hc = "א׳-ה׳:", Kc = "ו׳:", Yc = "ש׳:", Jc = "הודעה חשובה", Qc = "עמלת משלוח לא כלולה במחיר הכולל", Gc = "המשך לווטסאפ", Xc = "ביטול", Zc = "🍽️ בקשת הזמנה חדשה", el = "📋 פריטי ההזמנה:", tl = "👤 פרטי הלקוח:", sl = "סוג הזמנה", nl = "שם", al = "טלפון", rl = "כמות", il = "פריט", ol = "אפשרויות", cl = "אנא אשר את ההזמנה הזו. תודה! 🙏", ll = "מוגש עד 13:00", ul = "ראשון", dl = "שני", pl = "שלישי", hl = "רביעי", fl = "חמישי", ml = "שישי", gl = "שבת", _l = "להמחשה בלבד", xl = "תנאי שימוש", yl = "מדיניות פרטיות", bl = "הצהרת נגישות", vl = "תאריך עדכון אחרון", wl = "אחריות", jl = "אין אחריות לשירותי צד-שלישי (כגון WhatsApp). כל שימוש בשירותים חיצוניים כפוף לתנאורים.", Nl = "שינויים בתנאים", $l = "יתכן שנעדכן שינויים בתנאי השימוש מעת לעת. המשך השימוש כהסכמה לתנאים כפופה.", Sl = "יצירת קשר בנושא נגישות", kl = "אם נתקלתם בבעיה או הצעה לשיפור, נעמוד לכפות אליכן בטלפון או בוואטסאפ המופיעים במיקום יצירת קשר.", Cl = "מטרת עיכוב היחידי", El = "האתר מכיל לפרטים, בחירת פריטים, והזמנת מקום לוואטסאפ של המטעדה.", Rl = "זכויות המשתמש", Ol = "כפי שלאה או בקשה לחתיקה מידע, נעמוד לכפות אליכן דרך עמוד יצירת קשר.", Pl = "תאריך עדכון אחרון", Tl = "26.9.2025", Al = "אחריות", Ll = "אין אחריות לשירותי צד-שלישי (כגון WhatsApp). כל שימוש בשירותים חיצוניים כפוף לתנאורים.", Ml = "שינויים בתנאים", Il = "יתכן שנעדכן שינויים בתנאי השימוש מעת לעת. המשך השימוש כהסכמה לתנאים כפופה.", zl = "מדיניות פרטיות", Fl = "אנו מכבדים את פרטיותכם. האתר אינו מפעיל עוגיות (cookies) ואינו מבצע מעקב אינטרנטי. המידע שמורן בעלות הקרייות ומורה מקומית בדפדפן (LocalStorage) לצורך המשכיות כבב, ויכול לכלול שם ופוטר המנה (אישי/משפחה).", Dl = "מטרת עיכוב היחידי", Ul = "שליחת הזמנה/פנירה מתבצעת באמצעות WhatsApp (שירות חיצוני). על כן, השימוש ב-WhatsApp כפוף לתנאי השימוש ומדיניות הפרטיות של WhatsApp.", Bl = "מטרת עיכוב היחידי", Vl = "האתר מכיל לפרטים, בחירת פריטים, והזמנת מקום לוואטסאפ של המטעדה.", ql = "זכויות המשתמש", Wl = "כפי שלאה או בקשה לחתיקה מידע, נעמוד לכפות אליכן דרך עמוד יצירת קשר.", Hl = "הצהרת נגישות", Kl = 'אנו פועלים להנגיש את האתר בהתאם לתקן הישראלי ת"י 5568 הכמבוס על 2.0 WCAG ברמה AA. מטרתנו להנביח חווית שימוש נגישה, שוויונית ונוחה לכלל המשתמשים.', Yl = "יצירת קשר בנושא נגישות", Jl = "אם נתקלתם בבעיה או הצעה לשיפור, נעמוד לכפות אליכן בטלפון או בוואטסאפ המופיעים במיקום יצירת קשר.", Ql = "מטרת עיכוב היחידי", Gl = "האתר מכיל לפרטים, בחירת פריטים, והזמנת מקום לוואטסאפ של המטעדה.", Xl = "יצירת קשר בנושא נגישות", Zl = "אם נתקלתם בבעיה או הצעה לשיפור, נעמוד לכפות אליכן בטלפון או בוואטסאפ המופיעים במיקום יצירת קשר.", eu = "שם הלקוח נדרש לפני שליחה לוואטסאפ", tu = "חזרה לתפריט", su = "סגור", nu = "המסעדה סגורה כעת. נסה שוב בשעות הפתיחה.", au = "סגור", ru = "המסעדה סגורה כעת. ניתן לבצע הזמנות רק במהלך שעות הפתיחה.", iu = "הבנתי", us = {
  wa_header: vo,
  wa_total: wo,
  wa_name: jo,
  wa_type: No,
  wa_time: $o,
  opt_size: So,
  opt_extras: ko,
  opt_notes: Co,
  opt_doneness: Eo,
  opt_sugar: Ro,
  opt_pasta_type: Oo,
  opt_bread: Po,
  menu: To,
  contact: Ao,
  all: Lo,
  search_placeholder: Mo,
  call: Io,
  whatsapp: zo,
  location: Fo,
  address: Do,
  open_hours: Uo,
  add_to_cart: Bo,
  added: Vo,
  customize: qo,
  size: Wo,
  extras: Ho,
  notes: Ko,
  cart: Yo,
  items: Jo,
  empty_cart: Qo,
  clear_cart: Go,
  checkout: Xo,
  total: Zo,
  customer_name: ec,
  order_type: tc,
  pickup: sc,
  delivery: nc,
  time_or_table: ac,
  message_preview: rc,
  qr: ic,
  instagram: oc,
  base_price: cc,
  extras_total: lc,
  reservation: uc,
  book_table: dc,
  reservation_date: pc,
  reservation_time: hc,
  reservation_area: fc,
  reservation_guests: mc,
  reservation_name: gc,
  reservation_phone: _c,
  reservation_notes: xc,
  send_reservation: yc,
  reservation_sent: bc,
  reservation_wait: vc,
  reservation_no_response: wc,
  order_wait: jc,
  order_no_response: Nc,
  today: $c,
  tomorrow: Sc,
  reservation_description: kc,
  choose_date: Cc,
  select_time: Ec,
  number_people: Rc,
  important_notice: Oc,
  need_assistance: Pc,
  special_requests_placeholder: Tc,
  guests_singular: Ac,
  guests_plural: Lc,
  reservation_request: Mc,
  date_label: Ic,
  time_label: zc,
  area_label: Fc,
  guests_label: Dc,
  name_label: Uc,
  phone_label: Bc,
  notes_label: Vc,
  confirm_reservation: qc,
  thank_you: Wc,
  sun_thu: Hc,
  fri: Kc,
  sat: Yc,
  important_notice_cart: Jc,
  delivery_notice: Qc,
  continue_to_whatsapp: Gc,
  cancel: Xc,
  wa_order_header: Zc,
  wa_order_items: el,
  wa_customer_info: tl,
  wa_order_type: sl,
  wa_customer_name: nl,
  wa_customer_phone: al,
  wa_quantity: rl,
  wa_item: il,
  wa_options: ol,
  wa_confirm_order: cl,
  served_until_13: ll,
  day_sun: ul,
  day_mon: dl,
  day_tue: pl,
  day_wed: hl,
  day_thu: fl,
  day_fri: ml,
  day_sat: gl,
  "day_tue-sat": "שלישי-שבת",
  "day_mon-sat": "שני-שבת",
  for_illustration_only: _l,
  terms_of_service: xl,
  privacy_policy: yl,
  accessibility_statement: bl,
  last_updated: vl,
  terms_acceptance: wl,
  terms_acceptance_text: jl,
  terms_service_usage: Nl,
  terms_service_usage_text: $l,
  terms_orders: Sl,
  terms_orders_text: kl,
  terms_payment: Cl,
  terms_payment_text: El,
  terms_liability: Rl,
  terms_liability_text: Ol,
  terms_changes: Pl,
  terms_changes_text: Tl,
  privacy_info_collection: Al,
  privacy_info_collection_text: Ll,
  privacy_info_usage: Ml,
  privacy_info_usage_text: Il,
  privacy_cookies: zl,
  privacy_cookies_text: Fl,
  privacy_whatsapp: Dl,
  privacy_whatsapp_text: Ul,
  privacy_data_storage: Bl,
  privacy_data_storage_text: Vl,
  privacy_user_rights: ql,
  privacy_user_rights_text: Wl,
  accessibility_commitment: Hl,
  accessibility_commitment_text: Kl,
  accessibility_standards: Yl,
  accessibility_standards_text: Jl,
  accessibility_features: Ql,
  accessibility_features_text: Gl,
  accessibility_contact: Xl,
  accessibility_contact_text: Zl,
  name_required: eu,
  back_to_menu: tu,
  closed: su,
  restaurant_closed_message: nu,
  close: au,
  closed_popup_message: ru,
  got_it_button: iu
}, ou = "طلب جديد عبر قائمة القالب", cu = "الإجمالي", lu = "الاسم", uu = "النوع", du = "ساعة/طاولة", pu = "الحجم", hu = "إضافات", fu = "ملاحظات", mu = "درجة الاستواء", gu = "سكر", _u = "نوع المعكرونة", xu = "الخبز", yu = "القائمة", bu = "تواصل", vu = "الكل", wu = "ابحث عن طبق...", ju = "اتصال", Nu = "واتساب", $u = "الموقع", Su = "العنوان", ku = "ساعات العمل", Cu = "أضف إلى السلة", Eu = "تمت الإضافة", Ru = "تخصيص", Ou = "الحجم", Pu = "إضافات", Tu = "ملاحظات", Au = "السلة", Lu = "عنصر", Mu = "السلة فارغة", Iu = "تفريغ السلة", zu = "إرسال عبر واتساب", Fu = "الإجمالي", Du = "الاسم", Uu = "نوع الطلب", Bu = "استلام", Vu = "توصيل", qu = "ساعة/طاولة", Wu = "نص الرسالة", Hu = "QR", Ku = "إنستغرام", Yu = "السعر الأساسي", Ju = "الإضافات", Qu = "حجز طاولة", Gu = "احجز طاولة", Xu = "التاريخ", Zu = "الوقت", ed = "المنطقة", td = "عدد الضيوف", sd = "اسمك", nd = "رقم الهاتف", ad = "طلبات خاصة", rd = "إرسال طلب الحجز", id = "تم إرسال طلب الحجز!", od = "يرجى انتظار التأكيد من المطعم.", cd = "إذا لم تتلق رداً خلال 15 دقيقة، يرجى الاتصال بالمطعم.", ld = "يرجى انتظار التأكيد من المطعم لطلبك.", ud = "إذا لم تتلق رداً خلال 5 دقائق، يرجى الاتصال بالمطعم.", dd = "اليوم", pd = "غداً", hd = "احجز طاولتك في مطعمنا واستمتع بتجربة طعام لا تُنسى. نحن نتطلع لاستقبالك!", fd = "اختر التاريخ المفضل لديك", md = "اختر الوقت", gd = "عدد الأشخاص", _d = "إشعار مهم", xd = "تحتاج مساعدة فورية؟ اتصل بنا:", yd = "أي طلبات خاصة أو ملاحظات...", bd = "ضيف", vd = "ضيوف", wd = "طلب حجز طاولة", jd = "التاريخ:", Nd = "الوقت:", $d = "المنطقة:", Sd = "الضيوف:", kd = "الاسم:", Cd = "الهاتف:", Ed = "ملاحظات:", Rd = "يرجى تأكيد هذا الحجز.", Od = "شكراً لك! 🙏", Pd = "الأحد-الخميس:", Td = "الجمعة:", Ad = "السبت:", Ld = "إشعار مهم", Md = "رسوم التوصيل غير مشمولة في السعر الإجمالي", Id = "متابعة إلى واتساب", zd = "إلغاء", Fd = "🍽️ طلب جديد", Dd = "📋 عناصر الطلب:", Ud = "👤 معلومات العميل:", Bd = "نوع الطلب", Vd = "الاسم", qd = "الهاتف", Wd = "الكمية", Hd = "العنصر", Kd = "الخيارات", Yd = "يرجى تأكيد هذا الطلب. شكراً لك! 🙏", Jd = "يُقدم حتى 13:00", Qd = "الأحد", Gd = "الاثنين", Xd = "الثلاثاء", Zd = "الأربعاء", ep = "الخميس", tp = "الجمعة", sp = "السبت", np = "شروط الخدمة", ap = "سياسة الخصوصية", rp = "بيان إمكانية الوصول", ip = "آخر تحديث", op = "قبول الشروط", cp = "باستخدام موقعنا وخدماتنا، فإنك توافق على الالتزام بشروط الخدمة هذه.", lp = "استخدام الخدمة", up = "تم تصميم موقعنا لتصفح القائمة وتقديم الطلبات عبر واتساب وإجراء الحجوزات.", dp = "الطلبات والحجوزات", pp = "جميع الطلبات تتم معالجتها عبر واتساب. الحجوزات تخضع للتوفر والتأكيد.", hp = "شروط الدفع", fp = "يتم التعامل مع الدفع مباشرة في المطعم. الطلبات عبر الإنترنت للراحة والتأكيد فقط.", mp = "حدود المسؤولية", gp = "نحن غير مسؤولين عن خدمات الطرف الثالث مثل واتساب. استخدام الخدمات الخارجية يخضع لشروطها.", _p = "تغييرات الشروط", xp = "قد نقوم بتحديث هذه الشروط من وقت لآخر. الاستخدام المستمر يشكل قبولاً للشروط المنقحة.", yp = "جمع المعلومات", bp = "نحن نحترم خصوصيتك. موقعنا لا يستخدم ملفات تعريف الارتباط أو التتبع عبر الإنترنت. يتم تخزين المعلومات محلياً في متصفحك للاستمرارية، وقد تشمل الاسم وتفضيلات الطلب.", vp = "استخدام المعلومات", wp = "نستخدم المعلومات فقط لتقديم خدماتنا وتحسين تجربتك. لا نشارك البيانات الشخصية مع أطراف ثالثة.", jp = "ملفات تعريف الارتباط والتتبع", Np = "موقعنا لا يستخدم ملفات تعريف الارتباط أو تقنيات التتبع. جميع البيانات مخزنة محلياً في متصفحك.", $p = "تكامل واتساب", Sp = "تقديم الطلبات يتم عبر واتساب (خدمة خارجية). استخدام واتساب يخضع لشروط وسياسة خصوصية واتساب.", kp = "تخزين البيانات", Cp = "يتم تخزين البيانات محلياً على جهازك وعلى واتساب لمعالجة الطلبات وأغراض التواصل.", Ep = "حقوق المستخدم", Rp = "لأي أسئلة أو طلبات بخصوص بياناتك، يرجى التواصل معنا عبر صفحة الاتصال.", Op = "التزامنا", Pp = "نحن ملتزمون بجعل موقعنا قابلاً للوصول وفقاً للمعايير الحديثة. هدفنا توفير تجربة مستخدم متاحة ومتساوية ومريحة لجميع المستخدمين.", Tp = "معايير إمكانية الوصول", Ap = "يتبع موقعنا إرشادات إمكانية الوصول الحديثة بما في ذلك التنقل بلوحة المفاتيح وتوافق قارئ الشاشة والتصميم البصري الواضح.", Lp = "ميزات إمكانية الوصول", Mp = "يتضمن الموقع هيكل عناوين مناسب ونص بديل للصور ودعم التنقل بلوحة المفاتيح وتصميم متجاوب لمختلف الأجهزة والتقنيات المساعدة.", Ip = "التواصل بخصوص إمكانية الوصول", zp = "إذا واجهت أي مشاكل في إمكانية الوصول أو لديك اقتراحات للتحسين، يرجى التواصل معنا عبر الهاتف أو واتساب المدرجين في صفحة الاتصال.", Fp = "اسم العميل مطلوب قبل الإرسال إلى واتساب", Dp = "العودة إلى القائمة", Up = "مغلق", Bp = "للتوضيح فقط", Vp = "المطعم مغلق حالياً. الرجاء المحاولة خلال ساعات العمل.", qp = "إغلاق", Wp = "المطعم مغلق حالياً. يمكن تقديم الطلبات فقط خلال ساعات العمل.", Hp = "حسنًا", ds = {
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
  opt_bread: xu,
  menu: yu,
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
  need_assistance: xd,
  special_requests_placeholder: yd,
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
  terms_changes_text: xp,
  privacy_info_collection: yp,
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
}, Kp = {
  en: { translation: ls },
  he: { translation: us },
  ar: { translation: ds }
};
function ps(n) {
  const e = n === "ar" || n === "he" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", e), document.documentElement.setAttribute("lang", n), console.log("🎯 TABLY CORE i18n is active! Language:", n, "Direction:", e);
}
K.use(ts).init({
  resources: Kp,
  lng: "he",
  fallbackLng: "en",
  interpolation: { escapeValue: !1 }
}).then(() => ps(K.language));
K.on("languageChanged", ps);
function uh() {
  const [n, e] = A.useState(K.language), [t, s] = A.useState(!1), a = [
    { code: "ar", name: "العربية" },
    { code: "he", name: "עברית" },
    { code: "en", name: "English" }
  ], o = a.find((d) => d.code === n) || a[0], u = (d) => {
    e(d), K.changeLanguage(d), s(!1);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: () => s(!t),
        className: "tab flex items-center gap-2 min-w-[80px] justify-between",
        children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ r.jsx(un, { size: 16, className: "opacity-70" }),
            /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium", children: o.code.toUpperCase() })
          ] }),
          /* @__PURE__ */ r.jsx(
            cn,
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
      /* @__PURE__ */ r.jsx("div", { className: "absolute top-full right-0 mt-2 bg-[var(--card)] border border-white/10 rounded-lg shadow-xl z-50 min-w-[120px] overflow-hidden", children: a.map((d) => /* @__PURE__ */ r.jsxs(
        "button",
        {
          onClick: () => u(d.code),
          className: `w-full px-3 py-2 text-left hover:bg-white/5 transition-colors flex items-center justify-between text-sm ${d.code === n ? "bg-white/10 text-green-400" : "text-white/80"}`,
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "font-medium", children: d.name }),
            d.code === n && /* @__PURE__ */ r.jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full" })
          ]
        },
        d.code
      )) })
    ] })
  ] });
}
const hs = Kt();
function dh({ children: n }) {
  const [e, t] = nt(null), s = (a) => {
    t(a), setTimeout(() => {
      t(null);
    }, 800);
  };
  return /* @__PURE__ */ r.jsx(hs.Provider, { value: { animation: e, triggerAnimation: s }, children: n });
}
function Yp() {
  return Yt(hs);
}
function Jp({ open: n, onClose: e, item: t, onConfirm: s }) {
  const { t: a } = X(), { triggerAnimation: o } = Yp(), [u, d] = A.useState(1), [i, c] = A.useState({}), l = () => {
    if (!t)
      return 0;
    let g = 0;
    return t.options && Object.entries(t.options).forEach(([m, x]) => {
      if (x.type === "multi" && i[m] && i[m].forEach((N) => {
        const _ = x.choices.find(
          (y) => (typeof y == "string" ? y : y.name) === N
        );
        _ && typeof _ == "object" && _.price && (g += _.price);
      }), x.type === "select" && i[m]) {
        const b = x.choices.find(
          (N) => (typeof N == "string" ? N : N.name) === i[m]
        );
        b && typeof b == "object" && b.price && (g += b.price);
      }
    }), (t.price + g) * u;
  };
  if (A.useEffect(() => {
    if (t != null && t.options) {
      const g = {};
      for (const [m, x] of Object.entries(t.options))
        x.type === "single" && (g[m] = x.choices[0]), x.type === "select" && (g[m] = x.choices[0].name || x.choices[0]), x.type === "multi" && (g[m] = []), x.type === "text" && (g[m] = "");
      c(g), d(1);
    }
  }, [t]), !n || !t)
    return null;
  const f = () => {
    const g = {};
    t.options && Object.entries(t.options).forEach(([m, x]) => {
      const b = i[m];
      if (b != null && b !== "")
        if (x.type === "text")
          g[m] = b;
        else if (Array.isArray(b))
          g[m] = b.map((N) => {
            const _ = x.choices.findIndex(
              (y) => (typeof y == "string" ? y : y.name) === N
            );
            return _ >= 0 ? _ : N;
          });
        else {
          const N = x.choices.findIndex(
            (_) => (typeof _ == "string" ? _ : _.name) === b
          );
          g[m] = N >= 0 ? N : b;
        }
    }), s({ quantity: u, options: g }), e(), setTimeout(() => {
      o(t);
    }, 100);
  }, p = (g, m) => {
    if (m.type === "single")
      return /* @__PURE__ */ r.jsxs("label", { className: "block space-y-1", children: [
        /* @__PURE__ */ r.jsx("div", { className: "text-sm text-white/80", children: m.label }),
        /* @__PURE__ */ r.jsx(
          "select",
          {
            value: i[g],
            onChange: (x) => c({ ...i, [g]: x.target.value }),
            className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
            children: m.choices.map((x) => /* @__PURE__ */ r.jsx("option", { value: x, children: x }, x))
          }
        )
      ] });
    if (m.type === "select") {
      const x = i[g], b = (N) => {
        const _ = typeof N == "string" ? N : N.name;
        c({ ...i, [g]: _ });
      };
      return /* @__PURE__ */ r.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ r.jsx("div", { className: "text-sm text-white/80", children: m.label }),
        /* @__PURE__ */ r.jsx("div", { className: "flex flex-wrap gap-1.5 sm:gap-2", children: m.choices.map((N) => {
          const _ = typeof N == "string" ? N : N.name, y = typeof N == "object" ? N.price : 0, w = x === _;
          return /* @__PURE__ */ r.jsxs(
            "button",
            {
              type: "button",
              onClick: () => b(N),
              className: `tab text-xs sm:text-sm ${w ? "bg-green-500/20 border-green-400/50 text-green-400 ring-2 ring-green-400/30" : "hover:bg-white/5"} flex items-center gap-1 transition-all duration-200`,
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "truncate", children: _ }),
                y > 0 && /* @__PURE__ */ r.jsxs("span", { className: "text-xs text-green-400 flex-shrink-0", children: [
                  "+",
                  y,
                  P.currency
                ] })
              ]
            },
            _
          );
        }) })
      ] });
    }
    if (m.type === "multi") {
      const x = i[g] || [], b = (N) => {
        const _ = typeof N == "string" ? N : N.name, w = x.includes(_) ? x.filter((j) => j !== _) : [...x, _];
        c({ ...i, [g]: w });
      };
      return /* @__PURE__ */ r.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ r.jsx("div", { className: "text-sm text-white/80", children: m.label }),
        /* @__PURE__ */ r.jsx("div", { className: "flex flex-wrap gap-1.5 sm:gap-2", children: m.choices.map((N) => {
          const _ = typeof N == "string" ? N : N.name, y = typeof N == "object" ? N.price : 0, w = x.includes(_);
          return /* @__PURE__ */ r.jsxs(
            "button",
            {
              type: "button",
              onClick: () => b(N),
              className: `tab text-xs sm:text-sm ${w ? "bg-green-500/20 border-green-400/50 text-green-400 ring-2 ring-green-400/30" : "hover:bg-white/5"} flex items-center gap-1 transition-all duration-200`,
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "truncate", children: _ }),
                y > 0 && /* @__PURE__ */ r.jsxs("span", { className: "text-xs text-green-400 flex-shrink-0", children: [
                  "+",
                  y,
                  P.currency
                ] })
              ]
            },
            _
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
          value: i[g] || "",
          onChange: (x) => c({ ...i, [g]: x.target.value }),
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
      /* @__PURE__ */ r.jsx("div", { className: "grid gap-3", children: t.options && Object.entries(t.options).map(([g, m]) => /* @__PURE__ */ r.jsx("div", { children: p(g, m) }, g)) }),
      (() => {
        if (l() - t.price * u > 0) {
          let m = 0, x = 0;
          return t.options && Object.entries(t.options).forEach(([b, N]) => {
            if (N.type === "select" && i[b]) {
              const _ = N.choices.find(
                (y) => (typeof y == "string" ? y : y.name) === i[b]
              );
              _ && typeof _ == "object" && _.price && (m += _.price * u);
            } else
              N.type === "multi" && i[b] && i[b].forEach((y) => {
                const w = N.choices.find(
                  (j) => (typeof j == "string" ? j : j.name) === y
                );
                w && typeof w == "object" && w.price && (x += w.price * u);
              });
          }), /* @__PURE__ */ r.jsxs("div", { className: "bg-black/20 border border-white/10 rounded-lg p-3 space-y-1", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ r.jsxs("span", { children: [
                a("base_price"),
                ":"
              ] }),
              /* @__PURE__ */ r.jsxs("span", { children: [
                t.price * u,
                t.price * u > 0 && P.currency
              ] })
            ] }),
            m > 0 && /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between text-sm text-green-400", children: [
              /* @__PURE__ */ r.jsxs("span", { children: [
                a("opt_size"),
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
                a("opt_extras"),
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
                a("total"),
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
          /* @__PURE__ */ r.jsx("button", { className: "tab text-sm", onClick: () => d(Math.max(1, u - 1)), children: "-" }),
          /* @__PURE__ */ r.jsx("div", { className: "min-w-[2rem] text-center text-sm", children: u }),
          /* @__PURE__ */ r.jsx("button", { className: "tab text-sm", onClick: () => d(u + 1), children: "+" })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex-1 text-center sm:text-right", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "text-xs sm:text-sm text-white/60", children: [
            a("total"),
            ":"
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "text-base sm:text-lg font-bold text-green-400", children: [
            l(),
            P.currency
          ] })
        ] }),
        /* @__PURE__ */ r.jsx("button", { className: "btn w-full sm:w-auto text-sm sm:text-base", onClick: f, children: a("add_to_cart") })
      ] })
    ] })
  ] }) });
}
function Qp({ open: n, onClose: e }) {
  const { t, i18n: s } = X(), [a, o] = A.useState({
    date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
    // Today as default
    time: "",
    area: "",
    guests: 2,
    name: "",
    phone: "",
    notes: ""
  }), u = (c) => s.language === "ar" ? c.name_ar : s.language === "he" ? c.name_he : c.name, d = () => {
    const c = [], l = /* @__PURE__ */ new Date();
    for (let f = 0; f < P.reservation.max_advance_days; f++) {
      const p = new Date(l);
      p.setDate(l.getDate() + f);
      const g = p.toISOString().split("T")[0], m = p.toLocaleDateString(s.language, {
        weekday: "short",
        month: "short",
        day: "numeric"
      });
      c.push({ value: g, label: m });
    }
    return c;
  }, i = (c) => {
    c.preventDefault();
    const l = P.reservation.areas.find(
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

${t("thank_you")}`, g = `https://wa.me/${P.reservation.whatsapp}?text=${encodeURIComponent(p)}`;
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
                /* @__PURE__ */ r.jsx(Ee, { size: 20 }),
                t("book_table")
              ] }),
              /* @__PURE__ */ r.jsx("button", { className: "tab", onClick: e, children: /* @__PURE__ */ r.jsx(Me, { size: 16 }) })
            ] }),
            /* @__PURE__ */ r.jsxs("form", { onSubmit: i, className: "p-5 space-y-4", children: [
              /* @__PURE__ */ r.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ r.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ r.jsx(Ee, { size: 14 }),
                  t("reservation_date")
                ] }),
                /* @__PURE__ */ r.jsx(
                  "select",
                  {
                    value: a.date,
                    onChange: (c) => o({ ...a, date: c.target.value }),
                    className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
                    required: !0,
                    children: d().map((c) => /* @__PURE__ */ r.jsx("option", { value: c.value, children: c.label }, c.value))
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ r.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ r.jsx(Xe, { size: 14 }),
                  t("reservation_time")
                ] }),
                /* @__PURE__ */ r.jsxs(
                  "select",
                  {
                    value: a.time,
                    onChange: (c) => o({ ...a, time: c.target.value }),
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
                  /* @__PURE__ */ r.jsx(it, { size: 14 }),
                  t("reservation_area")
                ] }),
                /* @__PURE__ */ r.jsxs(
                  "select",
                  {
                    value: a.area,
                    onChange: (c) => o({ ...a, area: c.target.value }),
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
                  /* @__PURE__ */ r.jsx(Xt, { size: 14 }),
                  t("reservation_guests")
                ] }),
                /* @__PURE__ */ r.jsx(
                  "select",
                  {
                    value: a.guests,
                    onChange: (c) => o({ ...a, guests: parseInt(c.target.value) }),
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
                  /* @__PURE__ */ r.jsx(_n, { size: 14 }),
                  t("reservation_name")
                ] }),
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    type: "text",
                    value: a.name,
                    onChange: (c) => o({ ...a, name: c.target.value }),
                    className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ r.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ r.jsx(ct, { size: 14 }),
                  t("reservation_phone")
                ] }),
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    type: "tel",
                    value: a.phone,
                    onChange: (c) => o({ ...a, phone: c.target.value }),
                    className: "w-full bg-[var(--card)] border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:ring-2 focus:ring-green-400/30 focus:border-green-400/50 transition-all duration-200",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsxs("label", { className: "block space-y-1", children: [
                /* @__PURE__ */ r.jsxs("div", { className: "text-sm text-white/80 flex items-center gap-2", children: [
                  /* @__PURE__ */ r.jsx(pn, { size: 14 }),
                  t("reservation_notes")
                ] }),
                /* @__PURE__ */ r.jsx(
                  "textarea",
                  {
                    rows: 3,
                    value: a.notes,
                    onChange: (c) => o({ ...a, notes: c.target.value }),
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
function Gp({ value: n, onChange: e }) {
  const { t } = X();
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
function ph() {
  const { t: n } = X(), e = Le();
  return A.useEffect(() => {
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
function hh() {
  const { t: n } = X();
  return /* @__PURE__ */ r.jsxs("div", { className: "py-10 max-w-3xl mx-auto space-y-4", children: [
    /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold", children: n("contact") }),
    /* @__PURE__ */ r.jsxs("div", { className: "card p-6 grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ r.jsxs("a", { className: "btn", href: `tel:${P.phone}`, children: [
        /* @__PURE__ */ r.jsx(ct, { size: 18 }),
        " ",
        n("call")
      ] }),
      /* @__PURE__ */ r.jsxs("a", { className: "btn-outline", href: `https://wa.me/${P.whatsapp}`, children: [
        /* @__PURE__ */ r.jsx(ot, { size: 18 }),
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
            /* @__PURE__ */ r.jsx(dn, { size: 18 }),
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
            /* @__PURE__ */ r.jsx(it, { size: 18 }),
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
const qt = { en: ns, he: as, ar: rs };
function fh() {
  const { i18n: n, t: e } = X();
  Le();
  const [t, s] = A.useState("all"), [a, o] = A.useState(""), [u, d] = A.useState(null), [i, c] = A.useState(null), [l, f] = A.useState(!1), { dispatch: p } = at();
  A.useEffect(() => {
    try {
      P.hours && !is(P.hours) && f(!0);
    } catch {
    }
  }, []);
  const g = qt[n.language] || qt.ar, m = g.items.filter(
    (_) => (_.name + " " + _.desc).toLowerCase().includes(a.toLowerCase())
  ), x = t === "all" ? m.reduce((_, y) => {
    const w = y.category;
    return _[w] || (_[w] = []), _[w].push(y), _;
  }, {}) : m.filter((_) => _.category === t), b = (_) => d(_), N = ({ quantity: _, options: y }) => {
    p({ type: "ADD", payload: { item: u, quantity: _, options: y } });
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
            e("location")
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
            e("call")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col md:flex-row md:items-center gap-3 mb-4", children: [
      /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold tracking-tight flex-1", children: e("menu") }),
      /* @__PURE__ */ r.jsx("div", { className: "md:w-64", children: /* @__PURE__ */ r.jsx(Gp, { value: a, onChange: o }) })
    ] }),
    /* @__PURE__ */ r.jsx(
      la,
      {
        categories: g.categories,
        current: t,
        onChange: s
      }
    ),
    t === "all" ? (
      // Render grouped items with category headers
      Object.entries(x).map(([_, y]) => /* @__PURE__ */ r.jsxs("div", { className: "mb-8 mt-4", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ r.jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" }),
          /* @__PURE__ */ r.jsx("div", { className: "bg-[var(--card)] border border-white/10 rounded-full px-4 py-2", children: (() => {
            const w = g.categories.find((j) => j.id === _);
            return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
              /* @__PURE__ */ r.jsxs("h2", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
                (w == null ? void 0 : w.emoji) && /* @__PURE__ */ r.jsx("span", { children: w.emoji }),
                /* @__PURE__ */ r.jsx("span", { children: (w == null ? void 0 : w.title) || _ })
              ] }),
              _ === "breakfast" && /* @__PURE__ */ r.jsx("div", { className: "text-xs text-white/60 bg-white/5 rounded-full px-2 py-1", children: e("served_until_13") })
            ] });
          })() }),
          /* @__PURE__ */ r.jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "flex gap-4 overflow-x-auto pb-4 no-scrollbar items-stretch md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-x-visible md:pb-0", children: y.map((w) => /* @__PURE__ */ r.jsx(
          At,
          {
            item: w,
            currency: P.currency,
            onAdd: b,
            onPreview: (j) => c({ src: j.image, alt: j.name })
          },
          w.id
        )) })
      ] }, _))
    ) : (
      // Render single category items with header
      /* @__PURE__ */ r.jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ r.jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" }),
          /* @__PURE__ */ r.jsx("div", { className: "bg-[var(--card)] border border-white/10 rounded-full px-4 py-2", children: (() => {
            const _ = g.categories.find((y) => y.id === t);
            return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
              /* @__PURE__ */ r.jsxs("h2", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
                (_ == null ? void 0 : _.emoji) && /* @__PURE__ */ r.jsx("span", { children: _.emoji }),
                /* @__PURE__ */ r.jsx("span", { children: (_ == null ? void 0 : _.title) || t })
              ] }),
              t === "breakfast" && /* @__PURE__ */ r.jsx("div", { className: "text-xs text-white/60 bg-white/5 rounded-full px-2 py-1", children: e("served_until_13") })
            ] });
          })() }),
          /* @__PURE__ */ r.jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch", children: x.map((_) => /* @__PURE__ */ r.jsx(
          At,
          {
            item: _,
            currency: P.currency,
            onAdd: b,
            onPreview: (y) => c({ src: y.image, alt: y.name })
          },
          _.id
        )) })
      ] })
    ),
    /* @__PURE__ */ r.jsx(
      Jp,
      {
        open: !!u,
        item: u,
        onClose: () => d(null),
        onConfirm: N
      }
    ),
    /* @__PURE__ */ r.jsx(
      ua,
      {
        open: !!i,
        src: i == null ? void 0 : i.src,
        alt: i == null ? void 0 : i.alt,
        onClose: () => c(null)
      }
    ),
    l && /* @__PURE__ */ r.jsxs("div", { className: "fixed inset-0 z-[9000] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ r.jsx("div", { className: "absolute inset-0 bg-black/60" }),
      /* @__PURE__ */ r.jsx("div", { className: "relative bg-[var(--card)] border border-white/10 rounded-xl p-6 max-w-md w-full shadow-2xl", children: /* @__PURE__ */ r.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-semibold", children: e("important_notice_cart") }),
        /* @__PURE__ */ r.jsx("p", { className: "text-sm text-white/80", children: e("closed_popup_message") }),
        /* @__PURE__ */ r.jsx("button", { className: "btn w-full", onClick: () => f(!1), children: e("got_it_button") })
      ] }) })
    ] })
  ] });
}
function mh() {
  const { t: n } = X(), e = Le();
  return A.useEffect(() => {
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
var Xp = Object.defineProperty, Ae = Object.getOwnPropertySymbols, fs = Object.prototype.hasOwnProperty, ms = Object.prototype.propertyIsEnumerable, Wt = (n, e, t) => e in n ? Xp(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, we = (n, e) => {
  for (var t in e || (e = {}))
    fs.call(e, t) && Wt(n, t, e[t]);
  if (Ae)
    for (var t of Ae(e))
      ms.call(e, t) && Wt(n, t, e[t]);
  return n;
}, lt = (n, e) => {
  var t = {};
  for (var s in n)
    fs.call(n, s) && e.indexOf(s) < 0 && (t[s] = n[s]);
  if (n != null && Ae)
    for (var s of Ae(n))
      e.indexOf(s) < 0 && ms.call(n, s) && (t[s] = n[s]);
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
    constructor(i, c, l, f) {
      if (this.version = i, this.errorCorrectionLevel = c, this.modules = [], this.isFunction = [], i < e.MIN_VERSION || i > e.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (f < -1 || f > 7)
        throw new RangeError("Mask value out of range");
      this.size = i * 4 + 17;
      let p = [];
      for (let m = 0; m < this.size; m++)
        p.push(!1);
      for (let m = 0; m < this.size; m++)
        this.modules.push(p.slice()), this.isFunction.push(p.slice());
      this.drawFunctionPatterns();
      const g = this.addEccAndInterleave(l);
      if (this.drawCodewords(g), f == -1) {
        let m = 1e9;
        for (let x = 0; x < 8; x++) {
          this.applyMask(x), this.drawFormatBits(x);
          const b = this.getPenaltyScore();
          b < m && (f = x, m = b), this.applyMask(x);
        }
      }
      o(0 <= f && f <= 7), this.mask = f, this.applyMask(f), this.drawFormatBits(f), this.isFunction = [];
    }
    static encodeText(i, c) {
      const l = n.QrSegment.makeSegments(i);
      return e.encodeSegments(l, c);
    }
    static encodeBinary(i, c) {
      const l = n.QrSegment.makeBytes(i);
      return e.encodeSegments([l], c);
    }
    static encodeSegments(i, c, l = 1, f = 40, p = -1, g = !0) {
      if (!(e.MIN_VERSION <= l && l <= f && f <= e.MAX_VERSION) || p < -1 || p > 7)
        throw new RangeError("Invalid value");
      let m, x;
      for (m = l; ; m++) {
        const y = e.getNumDataCodewords(m, c) * 8, w = d.getTotalBits(i, m);
        if (w <= y) {
          x = w;
          break;
        }
        if (m >= f)
          throw new RangeError("Data too long");
      }
      for (const y of [e.Ecc.MEDIUM, e.Ecc.QUARTILE, e.Ecc.HIGH])
        g && x <= e.getNumDataCodewords(m, y) * 8 && (c = y);
      let b = [];
      for (const y of i) {
        s(y.mode.modeBits, 4, b), s(y.numChars, y.mode.numCharCountBits(m), b);
        for (const w of y.getData())
          b.push(w);
      }
      o(b.length == x);
      const N = e.getNumDataCodewords(m, c) * 8;
      o(b.length <= N), s(0, Math.min(4, N - b.length), b), s(0, (8 - b.length % 8) % 8, b), o(b.length % 8 == 0);
      for (let y = 236; b.length < N; y ^= 253)
        s(y, 8, b);
      let _ = [];
      for (; _.length * 8 < b.length; )
        _.push(0);
      return b.forEach((y, w) => _[w >>> 3] |= y << 7 - (w & 7)), new e(m, c, _, p);
    }
    getModule(i, c) {
      return 0 <= i && i < this.size && 0 <= c && c < this.size && this.modules[c][i];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let l = 0; l < this.size; l++)
        this.setFunctionModule(6, l, l % 2 == 0), this.setFunctionModule(l, 6, l % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const i = this.getAlignmentPatternPositions(), c = i.length;
      for (let l = 0; l < c; l++)
        for (let f = 0; f < c; f++)
          l == 0 && f == 0 || l == 0 && f == c - 1 || l == c - 1 && f == 0 || this.drawAlignmentPattern(i[l], i[f]);
      this.drawFormatBits(0), this.drawVersion();
    }
    drawFormatBits(i) {
      const c = this.errorCorrectionLevel.formatBits << 3 | i;
      let l = c;
      for (let p = 0; p < 10; p++)
        l = l << 1 ^ (l >>> 9) * 1335;
      const f = (c << 10 | l) ^ 21522;
      o(f >>> 15 == 0);
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
      let i = this.version;
      for (let l = 0; l < 12; l++)
        i = i << 1 ^ (i >>> 11) * 7973;
      const c = this.version << 12 | i;
      o(c >>> 18 == 0);
      for (let l = 0; l < 18; l++) {
        const f = a(c, l), p = this.size - 11 + l % 3, g = Math.floor(l / 3);
        this.setFunctionModule(p, g, f), this.setFunctionModule(g, p, f);
      }
    }
    drawFinderPattern(i, c) {
      for (let l = -4; l <= 4; l++)
        for (let f = -4; f <= 4; f++) {
          const p = Math.max(Math.abs(f), Math.abs(l)), g = i + f, m = c + l;
          0 <= g && g < this.size && 0 <= m && m < this.size && this.setFunctionModule(g, m, p != 2 && p != 4);
        }
    }
    drawAlignmentPattern(i, c) {
      for (let l = -2; l <= 2; l++)
        for (let f = -2; f <= 2; f++)
          this.setFunctionModule(i + f, c + l, Math.max(Math.abs(f), Math.abs(l)) != 1);
    }
    setFunctionModule(i, c, l) {
      this.modules[c][i] = l, this.isFunction[c][i] = !0;
    }
    addEccAndInterleave(i) {
      const c = this.version, l = this.errorCorrectionLevel;
      if (i.length != e.getNumDataCodewords(c, l))
        throw new RangeError("Invalid argument");
      const f = e.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][c], p = e.ECC_CODEWORDS_PER_BLOCK[l.ordinal][c], g = Math.floor(e.getNumRawDataModules(c) / 8), m = f - g % f, x = Math.floor(g / f);
      let b = [];
      const N = e.reedSolomonComputeDivisor(p);
      for (let y = 0, w = 0; y < f; y++) {
        let j = i.slice(w, w + x - p + (y < m ? 0 : 1));
        w += j.length;
        const S = e.reedSolomonComputeRemainder(j, N);
        y < m && j.push(0), b.push(j.concat(S));
      }
      let _ = [];
      for (let y = 0; y < b[0].length; y++)
        b.forEach((w, j) => {
          (y != x - p || j >= m) && _.push(w[y]);
        });
      return o(_.length == g), _;
    }
    drawCodewords(i) {
      if (i.length != Math.floor(e.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let c = 0;
      for (let l = this.size - 1; l >= 1; l -= 2) {
        l == 6 && (l = 5);
        for (let f = 0; f < this.size; f++)
          for (let p = 0; p < 2; p++) {
            const g = l - p, x = (l + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[x][g] && c < i.length * 8 && (this.modules[x][g] = a(i[c >>> 3], 7 - (c & 7)), c++);
          }
      }
      o(c == i.length * 8);
    }
    applyMask(i) {
      if (i < 0 || i > 7)
        throw new RangeError("Mask value out of range");
      for (let c = 0; c < this.size; c++)
        for (let l = 0; l < this.size; l++) {
          let f;
          switch (i) {
            case 0:
              f = (l + c) % 2 == 0;
              break;
            case 1:
              f = c % 2 == 0;
              break;
            case 2:
              f = l % 3 == 0;
              break;
            case 3:
              f = (l + c) % 3 == 0;
              break;
            case 4:
              f = (Math.floor(l / 3) + Math.floor(c / 2)) % 2 == 0;
              break;
            case 5:
              f = l * c % 2 + l * c % 3 == 0;
              break;
            case 6:
              f = (l * c % 2 + l * c % 3) % 2 == 0;
              break;
            case 7:
              f = ((l + c) % 2 + l * c % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[c][l] && f && (this.modules[c][l] = !this.modules[c][l]);
        }
    }
    getPenaltyScore() {
      let i = 0;
      for (let p = 0; p < this.size; p++) {
        let g = !1, m = 0, x = [0, 0, 0, 0, 0, 0, 0];
        for (let b = 0; b < this.size; b++)
          this.modules[p][b] == g ? (m++, m == 5 ? i += e.PENALTY_N1 : m > 5 && i++) : (this.finderPenaltyAddHistory(m, x), g || (i += this.finderPenaltyCountPatterns(x) * e.PENALTY_N3), g = this.modules[p][b], m = 1);
        i += this.finderPenaltyTerminateAndCount(g, m, x) * e.PENALTY_N3;
      }
      for (let p = 0; p < this.size; p++) {
        let g = !1, m = 0, x = [0, 0, 0, 0, 0, 0, 0];
        for (let b = 0; b < this.size; b++)
          this.modules[b][p] == g ? (m++, m == 5 ? i += e.PENALTY_N1 : m > 5 && i++) : (this.finderPenaltyAddHistory(m, x), g || (i += this.finderPenaltyCountPatterns(x) * e.PENALTY_N3), g = this.modules[b][p], m = 1);
        i += this.finderPenaltyTerminateAndCount(g, m, x) * e.PENALTY_N3;
      }
      for (let p = 0; p < this.size - 1; p++)
        for (let g = 0; g < this.size - 1; g++) {
          const m = this.modules[p][g];
          m == this.modules[p][g + 1] && m == this.modules[p + 1][g] && m == this.modules[p + 1][g + 1] && (i += e.PENALTY_N2);
        }
      let c = 0;
      for (const p of this.modules)
        c = p.reduce((g, m) => g + (m ? 1 : 0), c);
      const l = this.size * this.size, f = Math.ceil(Math.abs(c * 20 - l * 10) / l) - 1;
      return o(0 <= f && f <= 9), i += f * e.PENALTY_N4, o(0 <= i && i <= 2568888), i;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const i = Math.floor(this.version / 7) + 2, c = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (i * 2 - 2)) * 2;
        let l = [6];
        for (let f = this.size - 7; l.length < i; f -= c)
          l.splice(1, 0, f);
        return l;
      }
    }
    static getNumRawDataModules(i) {
      if (i < e.MIN_VERSION || i > e.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let c = (16 * i + 128) * i + 64;
      if (i >= 2) {
        const l = Math.floor(i / 7) + 2;
        c -= (25 * l - 10) * l - 55, i >= 7 && (c -= 36);
      }
      return o(208 <= c && c <= 29648), c;
    }
    static getNumDataCodewords(i, c) {
      return Math.floor(e.getNumRawDataModules(i) / 8) - e.ECC_CODEWORDS_PER_BLOCK[c.ordinal][i] * e.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][i];
    }
    static reedSolomonComputeDivisor(i) {
      if (i < 1 || i > 255)
        throw new RangeError("Degree out of range");
      let c = [];
      for (let f = 0; f < i - 1; f++)
        c.push(0);
      c.push(1);
      let l = 1;
      for (let f = 0; f < i; f++) {
        for (let p = 0; p < c.length; p++)
          c[p] = e.reedSolomonMultiply(c[p], l), p + 1 < c.length && (c[p] ^= c[p + 1]);
        l = e.reedSolomonMultiply(l, 2);
      }
      return c;
    }
    static reedSolomonComputeRemainder(i, c) {
      let l = c.map((f) => 0);
      for (const f of i) {
        const p = f ^ l.shift();
        l.push(0), c.forEach((g, m) => l[m] ^= e.reedSolomonMultiply(g, p));
      }
      return l;
    }
    static reedSolomonMultiply(i, c) {
      if (i >>> 8 || c >>> 8)
        throw new RangeError("Byte out of range");
      let l = 0;
      for (let f = 7; f >= 0; f--)
        l = l << 1 ^ (l >>> 7) * 285, l ^= (c >>> f & 1) * i;
      return o(l >>> 8 == 0), l;
    }
    finderPenaltyCountPatterns(i) {
      const c = i[1];
      o(c <= this.size * 3);
      const l = c > 0 && i[2] == c && i[3] == c * 3 && i[4] == c && i[5] == c;
      return (l && i[0] >= c * 4 && i[6] >= c ? 1 : 0) + (l && i[6] >= c * 4 && i[0] >= c ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(i, c, l) {
      return i && (this.finderPenaltyAddHistory(c, l), c = 0), c += this.size, this.finderPenaltyAddHistory(c, l), this.finderPenaltyCountPatterns(l);
    }
    finderPenaltyAddHistory(i, c) {
      c[0] == 0 && (i += this.size), c.pop(), c.unshift(i);
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
  function s(i, c, l) {
    if (c < 0 || c > 31 || i >>> c)
      throw new RangeError("Value out of range");
    for (let f = c - 1; f >= 0; f--)
      l.push(i >>> f & 1);
  }
  function a(i, c) {
    return (i >>> c & 1) != 0;
  }
  function o(i) {
    if (!i)
      throw new Error("Assertion error");
  }
  const u = class {
    constructor(i, c, l) {
      if (this.mode = i, this.numChars = c, this.bitData = l, c < 0)
        throw new RangeError("Invalid argument");
      this.bitData = l.slice();
    }
    static makeBytes(i) {
      let c = [];
      for (const l of i)
        s(l, 8, c);
      return new u(u.Mode.BYTE, i.length, c);
    }
    static makeNumeric(i) {
      if (!u.isNumeric(i))
        throw new RangeError("String contains non-numeric characters");
      let c = [];
      for (let l = 0; l < i.length; ) {
        const f = Math.min(i.length - l, 3);
        s(parseInt(i.substr(l, f), 10), f * 3 + 1, c), l += f;
      }
      return new u(u.Mode.NUMERIC, i.length, c);
    }
    static makeAlphanumeric(i) {
      if (!u.isAlphanumeric(i))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let c = [], l;
      for (l = 0; l + 2 <= i.length; l += 2) {
        let f = u.ALPHANUMERIC_CHARSET.indexOf(i.charAt(l)) * 45;
        f += u.ALPHANUMERIC_CHARSET.indexOf(i.charAt(l + 1)), s(f, 11, c);
      }
      return l < i.length && s(u.ALPHANUMERIC_CHARSET.indexOf(i.charAt(l)), 6, c), new u(u.Mode.ALPHANUMERIC, i.length, c);
    }
    static makeSegments(i) {
      return i == "" ? [] : u.isNumeric(i) ? [u.makeNumeric(i)] : u.isAlphanumeric(i) ? [u.makeAlphanumeric(i)] : [u.makeBytes(u.toUtf8ByteArray(i))];
    }
    static makeEci(i) {
      let c = [];
      if (i < 0)
        throw new RangeError("ECI assignment value out of range");
      if (i < 128)
        s(i, 8, c);
      else if (i < 16384)
        s(2, 2, c), s(i, 14, c);
      else if (i < 1e6)
        s(6, 3, c), s(i, 21, c);
      else
        throw new RangeError("ECI assignment value out of range");
      return new u(u.Mode.ECI, 0, c);
    }
    static isNumeric(i) {
      return u.NUMERIC_REGEX.test(i);
    }
    static isAlphanumeric(i) {
      return u.ALPHANUMERIC_REGEX.test(i);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(i, c) {
      let l = 0;
      for (const f of i) {
        const p = f.mode.numCharCountBits(c);
        if (f.numChars >= 1 << p)
          return 1 / 0;
        l += 4 + p + f.bitData.length;
      }
      return l;
    }
    static toUtf8ByteArray(i) {
      i = encodeURI(i);
      let c = [];
      for (let l = 0; l < i.length; l++)
        i.charAt(l) != "%" ? c.push(i.charCodeAt(l)) : (c.push(parseInt(i.substr(l + 1, 2), 16)), l += 2);
      return c;
    }
  };
  let d = u;
  d.NUMERIC_REGEX = /^[0-9]*$/, d.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, d.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", n.QrSegment = d;
})(re || (re = {}));
((n) => {
  ((e) => {
    const t = class {
      constructor(a, o) {
        this.ordinal = a, this.formatBits = o;
      }
    };
    let s = t;
    s.LOW = new t(0, 1), s.MEDIUM = new t(1, 0), s.QUARTILE = new t(2, 3), s.HIGH = new t(3, 2), e.Ecc = s;
  })(n.QrCode || (n.QrCode = {}));
})(re || (re = {}));
((n) => {
  ((e) => {
    const t = class {
      constructor(a, o) {
        this.modeBits = a, this.numBitsCharCount = o;
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
var gs = {
  L: ue.QrCode.Ecc.LOW,
  M: ue.QrCode.Ecc.MEDIUM,
  Q: ue.QrCode.Ecc.QUARTILE,
  H: ue.QrCode.Ecc.HIGH
}, _s = 128, xs = "L", ys = "#FFFFFF", bs = "#000000", vs = !1, ut = 4, Zp = 0.1;
function ws(n, e = 0) {
  const t = [];
  return n.forEach(function(s, a) {
    let o = null;
    s.forEach(function(u, d) {
      if (!u && o !== null) {
        t.push(`M${o + e} ${a + e}h${d - o}v1H${o + e}z`), o = null;
        return;
      }
      if (d === s.length - 1) {
        if (!u)
          return;
        o === null ? t.push(`M${d + e},${a + e} h1v1H${d + e}z`) : t.push(`M${o + e},${a + e} h${d + 1 - o}v1H${o + e}z`);
        return;
      }
      u && o === null && (o = d);
    });
  }), t.join("");
}
function js(n, e) {
  return n.slice().map((t, s) => s < e.y || s >= e.y + e.h ? t : t.map((a, o) => o < e.x || o >= e.x + e.w ? a : !1));
}
function Ns(n, e, t, s) {
  if (s == null)
    return null;
  const a = t ? ut : 0, o = n.length + a * 2, u = Math.floor(e * Zp), d = o / e, i = (s.width || u) * d, c = (s.height || u) * d, l = s.x == null ? n.length / 2 - i / 2 : s.x * d, f = s.y == null ? n.length / 2 - c / 2 : s.y * d;
  let p = null;
  if (s.excavate) {
    let g = Math.floor(l), m = Math.floor(f), x = Math.ceil(i + l - g), b = Math.ceil(c + f - m);
    p = { x: g, y: m, w: x, h: b };
  }
  return { x: l, y: f, h: c, w: i, excavation: p };
}
var eh = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}();
function th(n) {
  const e = n, {
    value: t,
    size: s = _s,
    level: a = xs,
    bgColor: o = ys,
    fgColor: u = bs,
    includeMargin: d = vs,
    style: i,
    imageSettings: c
  } = e, l = lt(e, [
    "value",
    "size",
    "level",
    "bgColor",
    "fgColor",
    "includeMargin",
    "style",
    "imageSettings"
  ]), f = c == null ? void 0 : c.src, p = Ce(null), g = Ce(null), [m, x] = nt(!1);
  be(() => {
    if (p.current != null) {
      const _ = p.current, y = _.getContext("2d");
      if (!y)
        return;
      let w = ue.QrCode.encodeText(t, gs[a]).getModules();
      const j = d ? ut : 0, S = w.length + j * 2, T = Ns(w, s, d, c), E = g.current, z = T != null && E !== null && E.complete && E.naturalHeight !== 0 && E.naturalWidth !== 0;
      z && T.excavation != null && (w = js(w, T.excavation));
      const O = window.devicePixelRatio || 1;
      _.height = _.width = s * O;
      const C = s / S * O;
      y.scale(C, C), y.fillStyle = o, y.fillRect(0, 0, S, S), y.fillStyle = u, eh ? y.fill(new Path2D(ws(w, j))) : w.forEach(function(k, D) {
        k.forEach(function(B, W) {
          B && y.fillRect(W + j, D + j, 1, 1);
        });
      }), z && y.drawImage(E, T.x + j, T.y + j, T.w, T.h);
    }
  }), be(() => {
    x(!1);
  }, [f]);
  const b = we({ height: s, width: s }, i);
  let N = null;
  return f != null && (N = /* @__PURE__ */ A.createElement("img", {
    src: f,
    key: f,
    style: { display: "none" },
    onLoad: () => {
      x(!0);
    },
    ref: g
  })), /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("canvas", we({
    style: b,
    height: s,
    width: s,
    ref: p
  }, l)), N);
}
function sh(n) {
  const e = n, {
    value: t,
    size: s = _s,
    level: a = xs,
    bgColor: o = ys,
    fgColor: u = bs,
    includeMargin: d = vs,
    imageSettings: i
  } = e, c = lt(e, [
    "value",
    "size",
    "level",
    "bgColor",
    "fgColor",
    "includeMargin",
    "imageSettings"
  ]);
  let l = ue.QrCode.encodeText(t, gs[a]).getModules();
  const f = d ? ut : 0, p = l.length + f * 2, g = Ns(l, s, d, i);
  let m = null;
  i != null && g != null && (g.excavation != null && (l = js(l, g.excavation)), m = /* @__PURE__ */ A.createElement("image", {
    xlinkHref: i.src,
    height: g.h,
    width: g.w,
    x: g.x + f,
    y: g.y + f,
    preserveAspectRatio: "none"
  }));
  const x = ws(l, f);
  return /* @__PURE__ */ A.createElement("svg", we({
    height: s,
    width: s,
    viewBox: `0 0 ${p} ${p}`
  }, c), /* @__PURE__ */ A.createElement("path", {
    fill: o,
    d: `M0,0 h${p}v${p}H0z`,
    shapeRendering: "crispEdges"
  }), /* @__PURE__ */ A.createElement("path", {
    fill: u,
    d: x,
    shapeRendering: "crispEdges"
  }), m);
}
var nh = (n) => {
  const e = n, { renderAs: t } = e, s = lt(e, ["renderAs"]);
  return t === "svg" ? /* @__PURE__ */ A.createElement(sh, we({}, s)) : /* @__PURE__ */ A.createElement(th, we({}, s));
};
function gh() {
  const { t: n } = X(), [e, t] = A.useState(window.location.origin), s = A.useRef(null), a = () => {
    const o = s.current.querySelector("canvas");
    if (!o)
      return;
    const u = document.createElement("a");
    u.href = o.toDataURL("image/png"), u.download = "qr-menu.png", u.click();
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "py-10 max-w-lg mx-auto space-y-4 text-center", children: [
    /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold", children: n("qr") }),
    /* @__PURE__ */ r.jsxs("div", { className: "card p-6 flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ r.jsx("div", { ref: s, className: "bg-white p-4 rounded-2xl", children: /* @__PURE__ */ r.jsx(nh, { value: e, size: 256, includeMargin: !0 }) }),
      /* @__PURE__ */ r.jsx("input", { value: e, onChange: (o) => t(o.target.value), className: "w-full" }),
      /* @__PURE__ */ r.jsx("button", { className: "btn w-full", onClick: a, children: "PNG" })
    ] })
  ] });
}
function _h() {
  const { t: n, i18n: e } = X(), [t, s] = A.useState(!1), a = (o) => e.language === "ar" ? o.name_ar : e.language === "he" ? o.name_he : o.name;
  return /* @__PURE__ */ r.jsxs("div", { className: "py-8", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-bold tracking-tight mb-4", children: n("book_table") }),
      /* @__PURE__ */ r.jsx("p", { className: "text-white/70 max-w-2xl mx-auto", children: n("reservation_description") })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "card p-6", children: [
        /* @__PURE__ */ r.jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ r.jsx(Xe, { size: 20 }),
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
          /* @__PURE__ */ r.jsx(it, { size: 20 }),
          n("reservation_area")
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "space-y-2", children: P.reservation.areas.map((o) => /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ r.jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full" }),
          /* @__PURE__ */ r.jsx("span", { children: a(o) })
        ] }, o.id)) })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "card p-6 mb-8", children: [
      /* @__PURE__ */ r.jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ r.jsx(Ee, { size: 20 }),
        n("reservation")
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "grid md:grid-cols-3 gap-4 mb-6", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ r.jsx("div", { className: "w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ r.jsx(Ee, { size: 24, className: "text-green-400" }) }),
          /* @__PURE__ */ r.jsxs("div", { className: "text-sm font-medium", children: [
            "1. ",
            n("reservation_date")
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "text-xs text-white/60", children: n("choose_date") })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ r.jsx("div", { className: "w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ r.jsx(Xe, { size: 24, className: "text-blue-400" }) }),
          /* @__PURE__ */ r.jsxs("div", { className: "text-sm font-medium", children: [
            "2. ",
            n("reservation_time")
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "text-xs text-white/60", children: n("select_time") })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ r.jsx("div", { className: "w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ r.jsx(Xt, { size: 24, className: "text-purple-400" }) }),
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
        /* @__PURE__ */ r.jsx(ot, { size: 20 }),
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
        /* @__PURE__ */ r.jsx(ct, { size: 16 }),
        /* @__PURE__ */ r.jsxs("span", { children: [
          n("need_assistance"),
          " "
        ] }),
        /* @__PURE__ */ r.jsx("a", { href: `tel:${P.phone}`, className: "text-green-400 hover:underline", children: P.phone })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(Qp, { open: t, onClose: () => s(!1) })
  ] });
}
function xh() {
  const { t: n } = X(), e = Le();
  return A.useEffect(() => {
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
function yh(n = "en", e = {}) {
  const t = {
    resources: ze,
    lng: n,
    fallbackLng: "en",
    interpolation: { escapeValue: !1 },
    ...e
  };
  return K.use(ts).init(t);
}
function bh() {
  return ze;
}
function vh(n) {
  return Object.values(ze).every(
    (e) => e.translation && e.translation[n] !== void 0
  );
}
function wh() {
  const n = /* @__PURE__ */ new Set();
  return Object.values(ze).forEach((e) => {
    e.translation && Object.keys(e.translation).forEach((t) => n.add(t));
  }), Array.from(n);
}
const ze = {
  en: { translation: ls },
  he: { translation: us },
  ar: { translation: ds }
};
export {
  ph as AccessibilityPage,
  dh as AnimationProvider,
  ch as CartButton,
  lh as CartDrawer,
  oh as CartProvider,
  la as CategoryTabs,
  hh as ContactPage,
  ua as ImageLightbox,
  At as ItemCard,
  uh as LanguageSwitcher,
  fh as MenuPage,
  Jp as OptionModal,
  mh as PrivacyPage,
  gh as QRPage,
  Qp as ReservationModal,
  _h as ReservationPage,
  Gp as SearchBar,
  xh as TermsPage,
  ps as applyDir,
  ds as arLocales,
  Et as cartTotal,
  ls as enLocales,
  wh as getAllTranslationKeys,
  bh as getTablyLocaleResources,
  vh as hasTranslationKey,
  us as heLocales,
  K as i18n,
  yh as initializeTablyI18n,
  is as isRestaurantOpen,
  ze as localeResources,
  Yp as useAnimation,
  at as useCart
};
