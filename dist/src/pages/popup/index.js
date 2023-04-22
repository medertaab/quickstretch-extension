import { r as react, j as jsx, a as r$2, b as jsxs, F as Fragment, c as addHmrIntoView, d as createRoot } from "../../../assets/js/_virtual_reload-on-update-in-view.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const index = "";
const Context$1 = react.exports.createContext(void 0);
function useAutoplay() {
  const autoplayContext = react.exports.useContext(Context$1);
  return autoplayContext;
}
function AutoplayProvider({
  children
}) {
  const [autoplay, setAutoplay] = react.exports.useState(true);
  function toggleAutoplay() {
    if (autoplay) {
      setAutoplay(false);
      localStorage.setItem("autoplay", "false");
    } else {
      setAutoplay(true);
      localStorage.setItem("autoplay", "true");
    }
  }
  const value = {
    autoplay,
    setAutoplay,
    toggleAutoplay
  };
  return /* @__PURE__ */ jsx(Context$1.Provider, {
    value,
    children
  });
}
const Context = react.exports.createContext(void 0);
function useTheme() {
  return react.exports.useContext(Context);
}
function ThemeProvider({
  children
}) {
  const [theme, setTheme] = react.exports.useState("light");
  react.exports.useEffect(() => {
    if (localStorage.getItem("theme")) {
      const cachedTheme = localStorage.getItem("theme");
      setTheme(cachedTheme);
    }
  }, []);
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }
  const value = {
    theme,
    toggleTheme,
    setTheme
  };
  return /* @__PURE__ */ jsx(Context.Provider, {
    value,
    children
  });
}
var reactIs$2 = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$2 = 60103, c$1 = 60106, d$1 = 60107, e$1 = 60108, f$1 = 60114, g$2 = 60109, h$1 = 60110, k$2 = 60112, l$1 = 60113, m$1 = 60120, n$1 = 60115, p$1 = 60116, q$2 = 60121, r$1 = 60122, u = 60117, v$2 = 60129, w$2 = 60131;
if ("function" === typeof Symbol && Symbol.for) {
  var x$2 = Symbol.for;
  b$2 = x$2("react.element");
  c$1 = x$2("react.portal");
  d$1 = x$2("react.fragment");
  e$1 = x$2("react.strict_mode");
  f$1 = x$2("react.profiler");
  g$2 = x$2("react.provider");
  h$1 = x$2("react.context");
  k$2 = x$2("react.forward_ref");
  l$1 = x$2("react.suspense");
  m$1 = x$2("react.suspense_list");
  n$1 = x$2("react.memo");
  p$1 = x$2("react.lazy");
  q$2 = x$2("react.block");
  r$1 = x$2("react.server.block");
  u = x$2("react.fundamental");
  v$2 = x$2("react.debug_trace_mode");
  w$2 = x$2("react.legacy_hidden");
}
function y$1(a) {
  if ("object" === typeof a && null !== a) {
    var t2 = a.$$typeof;
    switch (t2) {
      case b$2:
        switch (a = a.type, a) {
          case d$1:
          case f$1:
          case e$1:
          case l$1:
          case m$1:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case h$1:
              case k$2:
              case p$1:
              case n$1:
              case g$2:
                return a;
              default:
                return t2;
            }
        }
      case c$1:
        return t2;
    }
  }
}
var z$2 = g$2, A$2 = b$2, B$1 = k$2, C = d$1, D = p$1, E$1 = n$1, F$1 = c$1, G$1 = f$1, H$1 = e$1, I$1 = l$1;
reactIs_production_min$1.ContextConsumer = h$1;
reactIs_production_min$1.ContextProvider = z$2;
reactIs_production_min$1.Element = A$2;
reactIs_production_min$1.ForwardRef = B$1;
reactIs_production_min$1.Fragment = C;
reactIs_production_min$1.Lazy = D;
reactIs_production_min$1.Memo = E$1;
reactIs_production_min$1.Portal = F$1;
reactIs_production_min$1.Profiler = G$1;
reactIs_production_min$1.StrictMode = H$1;
reactIs_production_min$1.Suspense = I$1;
reactIs_production_min$1.isAsyncMode = function() {
  return false;
};
reactIs_production_min$1.isConcurrentMode = function() {
  return false;
};
reactIs_production_min$1.isContextConsumer = function(a) {
  return y$1(a) === h$1;
};
reactIs_production_min$1.isContextProvider = function(a) {
  return y$1(a) === g$2;
};
reactIs_production_min$1.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === b$2;
};
reactIs_production_min$1.isForwardRef = function(a) {
  return y$1(a) === k$2;
};
reactIs_production_min$1.isFragment = function(a) {
  return y$1(a) === d$1;
};
reactIs_production_min$1.isLazy = function(a) {
  return y$1(a) === p$1;
};
reactIs_production_min$1.isMemo = function(a) {
  return y$1(a) === n$1;
};
reactIs_production_min$1.isPortal = function(a) {
  return y$1(a) === c$1;
};
reactIs_production_min$1.isProfiler = function(a) {
  return y$1(a) === f$1;
};
reactIs_production_min$1.isStrictMode = function(a) {
  return y$1(a) === e$1;
};
reactIs_production_min$1.isSuspense = function(a) {
  return y$1(a) === l$1;
};
reactIs_production_min$1.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === d$1 || a === f$1 || a === v$2 || a === e$1 || a === l$1 || a === m$1 || a === w$2 || "object" === typeof a && null !== a && (a.$$typeof === p$1 || a.$$typeof === n$1 || a.$$typeof === g$2 || a.$$typeof === h$1 || a.$$typeof === k$2 || a.$$typeof === u || a.$$typeof === q$2 || a[0] === r$1) ? true : false;
};
reactIs_production_min$1.typeOf = y$1;
(function(module) {
  {
    module.exports = reactIs_production_min$1;
  }
})(reactIs$2);
function stylis_min(W2) {
  function M2(d2, c2, e2, h2, a) {
    for (var m2 = 0, b2 = 0, v2 = 0, n2 = 0, q2, g2, x2 = 0, K2 = 0, k2, u2 = k2 = q2 = 0, l2 = 0, r2 = 0, I2 = 0, t2 = 0, B3 = e2.length, J2 = B3 - 1, y2, f2 = "", p2 = "", F3 = "", G3 = "", C2; l2 < B3; ) {
      g2 = e2.charCodeAt(l2);
      l2 === J2 && 0 !== b2 + n2 + v2 + m2 && (0 !== b2 && (g2 = 47 === b2 ? 10 : 47), n2 = v2 = m2 = 0, B3++, J2++);
      if (0 === b2 + n2 + v2 + m2) {
        if (l2 === J2 && (0 < r2 && (f2 = f2.replace(N2, "")), 0 < f2.trim().length)) {
          switch (g2) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f2 += e2.charAt(l2);
          }
          g2 = 59;
        }
        switch (g2) {
          case 123:
            f2 = f2.trim();
            q2 = f2.charCodeAt(0);
            k2 = 1;
            for (t2 = ++l2; l2 < B3; ) {
              switch (g2 = e2.charCodeAt(l2)) {
                case 123:
                  k2++;
                  break;
                case 125:
                  k2--;
                  break;
                case 47:
                  switch (g2 = e2.charCodeAt(l2 + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u2 = l2 + 1; u2 < J2; ++u2) {
                          switch (e2.charCodeAt(u2)) {
                            case 47:
                              if (42 === g2 && 42 === e2.charCodeAt(u2 - 1) && l2 + 2 !== u2) {
                                l2 = u2 + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (47 === g2) {
                                l2 = u2 + 1;
                                break a;
                              }
                          }
                        }
                        l2 = u2;
                      }
                  }
                  break;
                case 91:
                  g2++;
                case 40:
                  g2++;
                case 34:
                case 39:
                  for (; l2++ < J2 && e2.charCodeAt(l2) !== g2; ) {
                  }
              }
              if (0 === k2)
                break;
              l2++;
            }
            k2 = e2.substring(t2, l2);
            0 === q2 && (q2 = (f2 = f2.replace(ca, "").trim()).charCodeAt(0));
            switch (q2) {
              case 64:
                0 < r2 && (f2 = f2.replace(N2, ""));
                g2 = f2.charCodeAt(1);
                switch (g2) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r2 = c2;
                    break;
                  default:
                    r2 = O2;
                }
                k2 = M2(c2, r2, k2, g2, a + 1);
                t2 = k2.length;
                0 < A2 && (r2 = X2(O2, f2, I2), C2 = H2(3, k2, r2, c2, D2, z2, t2, g2, a, h2), f2 = r2.join(""), void 0 !== C2 && 0 === (t2 = (k2 = C2.trim()).length) && (g2 = 0, k2 = ""));
                if (0 < t2)
                  switch (g2) {
                    case 115:
                      f2 = f2.replace(da, ea);
                    case 100:
                    case 109:
                    case 45:
                      k2 = f2 + "{" + k2 + "}";
                      break;
                    case 107:
                      f2 = f2.replace(fa, "$1 $2");
                      k2 = f2 + "{" + k2 + "}";
                      k2 = 1 === w2 || 2 === w2 && L2("@" + k2, 3) ? "@-webkit-" + k2 + "@" + k2 : "@" + k2;
                      break;
                    default:
                      k2 = f2 + k2, 112 === h2 && (k2 = (p2 += k2, ""));
                  }
                else
                  k2 = "";
                break;
              default:
                k2 = M2(c2, X2(c2, f2, I2), k2, h2, a + 1);
            }
            F3 += k2;
            k2 = I2 = r2 = u2 = q2 = 0;
            f2 = "";
            g2 = e2.charCodeAt(++l2);
            break;
          case 125:
          case 59:
            f2 = (0 < r2 ? f2.replace(N2, "") : f2).trim();
            if (1 < (t2 = f2.length))
              switch (0 === u2 && (q2 = f2.charCodeAt(0), 45 === q2 || 96 < q2 && 123 > q2) && (t2 = (f2 = f2.replace(" ", ":")).length), 0 < A2 && void 0 !== (C2 = H2(1, f2, c2, d2, D2, z2, p2.length, h2, a, h2)) && 0 === (t2 = (f2 = C2.trim()).length) && (f2 = "\0\0"), q2 = f2.charCodeAt(0), g2 = f2.charCodeAt(1), q2) {
                case 0:
                  break;
                case 64:
                  if (105 === g2 || 99 === g2) {
                    G3 += f2 + e2.charAt(l2);
                    break;
                  }
                default:
                  58 !== f2.charCodeAt(t2 - 1) && (p2 += P2(f2, q2, g2, f2.charCodeAt(2)));
              }
            I2 = r2 = u2 = q2 = 0;
            f2 = "";
            g2 = e2.charCodeAt(++l2);
        }
      }
      switch (g2) {
        case 13:
        case 10:
          47 === b2 ? b2 = 0 : 0 === 1 + q2 && 107 !== h2 && 0 < f2.length && (r2 = 1, f2 += "\0");
          0 < A2 * Y2 && H2(0, f2, c2, d2, D2, z2, p2.length, h2, a, h2);
          z2 = 1;
          D2++;
          break;
        case 59:
        case 125:
          if (0 === b2 + n2 + v2 + m2) {
            z2++;
            break;
          }
        default:
          z2++;
          y2 = e2.charAt(l2);
          switch (g2) {
            case 9:
            case 32:
              if (0 === n2 + m2 + b2)
                switch (x2) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y2 = "";
                    break;
                  default:
                    32 !== g2 && (y2 = " ");
                }
              break;
            case 0:
              y2 = "\\0";
              break;
            case 12:
              y2 = "\\f";
              break;
            case 11:
              y2 = "\\v";
              break;
            case 38:
              0 === n2 + b2 + m2 && (r2 = I2 = 1, y2 = "\f" + y2);
              break;
            case 108:
              if (0 === n2 + b2 + m2 + E2 && 0 < u2)
                switch (l2 - u2) {
                  case 2:
                    112 === x2 && 58 === e2.charCodeAt(l2 - 3) && (E2 = x2);
                  case 8:
                    111 === K2 && (E2 = K2);
                }
              break;
            case 58:
              0 === n2 + b2 + m2 && (u2 = l2);
              break;
            case 44:
              0 === b2 + v2 + n2 + m2 && (r2 = 1, y2 += "\r");
              break;
            case 34:
            case 39:
              0 === b2 && (n2 = n2 === g2 ? 0 : 0 === n2 ? g2 : n2);
              break;
            case 91:
              0 === n2 + b2 + v2 && m2++;
              break;
            case 93:
              0 === n2 + b2 + v2 && m2--;
              break;
            case 41:
              0 === n2 + b2 + m2 && v2--;
              break;
            case 40:
              if (0 === n2 + b2 + m2) {
                if (0 === q2)
                  switch (2 * x2 + 3 * K2) {
                    case 533:
                      break;
                    default:
                      q2 = 1;
                  }
                v2++;
              }
              break;
            case 64:
              0 === b2 + v2 + n2 + m2 + u2 + k2 && (k2 = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n2 + m2 + v2))
                switch (b2) {
                  case 0:
                    switch (2 * g2 + 3 * e2.charCodeAt(l2 + 1)) {
                      case 235:
                        b2 = 47;
                        break;
                      case 220:
                        t2 = l2, b2 = 42;
                    }
                    break;
                  case 42:
                    47 === g2 && 42 === x2 && t2 + 2 !== l2 && (33 === e2.charCodeAt(t2 + 2) && (p2 += e2.substring(t2, l2 + 1)), y2 = "", b2 = 0);
                }
          }
          0 === b2 && (f2 += y2);
      }
      K2 = x2;
      x2 = g2;
      l2++;
    }
    t2 = p2.length;
    if (0 < t2) {
      r2 = c2;
      if (0 < A2 && (C2 = H2(2, p2, r2, d2, D2, z2, t2, h2, a, h2), void 0 !== C2 && 0 === (p2 = C2).length))
        return G3 + p2 + F3;
      p2 = r2.join(",") + "{" + p2 + "}";
      if (0 !== w2 * E2) {
        2 !== w2 || L2(p2, 2) || (E2 = 0);
        switch (E2) {
          case 111:
            p2 = p2.replace(ha, ":-moz-$1") + p2;
            break;
          case 112:
            p2 = p2.replace(Q2, "::-webkit-input-$1") + p2.replace(Q2, "::-moz-$1") + p2.replace(Q2, ":-ms-input-$1") + p2;
        }
        E2 = 0;
      }
    }
    return G3 + p2 + F3;
  }
  function X2(d2, c2, e2) {
    var h2 = c2.trim().split(ia);
    c2 = h2;
    var a = h2.length, m2 = d2.length;
    switch (m2) {
      case 0:
      case 1:
        var b2 = 0;
        for (d2 = 0 === m2 ? "" : d2[0] + " "; b2 < a; ++b2) {
          c2[b2] = Z2(d2, c2[b2], e2).trim();
        }
        break;
      default:
        var v2 = b2 = 0;
        for (c2 = []; b2 < a; ++b2) {
          for (var n2 = 0; n2 < m2; ++n2) {
            c2[v2++] = Z2(d2[n2] + " ", h2[b2], e2).trim();
          }
        }
    }
    return c2;
  }
  function Z2(d2, c2, e2) {
    var h2 = c2.charCodeAt(0);
    33 > h2 && (h2 = (c2 = c2.trim()).charCodeAt(0));
    switch (h2) {
      case 38:
        return c2.replace(F2, "$1" + d2.trim());
      case 58:
        return d2.trim() + c2.replace(F2, "$1" + d2.trim());
      default:
        if (0 < 1 * e2 && 0 < c2.indexOf("\f"))
          return c2.replace(F2, (58 === d2.charCodeAt(0) ? "" : "$1") + d2.trim());
    }
    return d2 + c2;
  }
  function P2(d2, c2, e2, h2) {
    var a = d2 + ";", m2 = 2 * c2 + 3 * e2 + 4 * h2;
    if (944 === m2) {
      d2 = a.indexOf(":", 9) + 1;
      var b2 = a.substring(d2, a.length - 1).trim();
      b2 = a.substring(0, d2).trim() + b2 + ";";
      return 1 === w2 || 2 === w2 && L2(b2, 1) ? "-webkit-" + b2 + b2 : b2;
    }
    if (0 === w2 || 2 === w2 && !L2(a, 1))
      return a;
    switch (m2) {
      case 1015:
        return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
      case 951:
        return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
      case 963:
        return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
      case 1009:
        if (100 !== a.charCodeAt(4))
          break;
      case 969:
      case 942:
        return "-webkit-" + a + a;
      case 978:
        return "-webkit-" + a + "-moz-" + a + a;
      case 1019:
      case 983:
        return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
      case 883:
        if (45 === a.charCodeAt(8))
          return "-webkit-" + a + a;
        if (0 < a.indexOf("image-set(", 11))
          return a.replace(ja, "$1-webkit-$2") + a;
        break;
      case 932:
        if (45 === a.charCodeAt(4))
          switch (a.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
            case 115:
              return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
            case 98:
              return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
          }
        return "-webkit-" + a + "-ms-" + a + a;
      case 964:
        return "-webkit-" + a + "-ms-flex-" + a + a;
      case 1023:
        if (99 !== a.charCodeAt(8))
          break;
        b2 = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
        return "-webkit-box-pack" + b2 + "-webkit-" + a + "-ms-flex-pack" + b2 + a;
      case 1005:
        return ka.test(a) ? a.replace(aa, ":-webkit-") + a.replace(aa, ":-moz-") + a : a;
      case 1e3:
        b2 = a.substring(13).trim();
        c2 = b2.indexOf("-") + 1;
        switch (b2.charCodeAt(0) + b2.charCodeAt(c2)) {
          case 226:
            b2 = a.replace(G2, "tb");
            break;
          case 232:
            b2 = a.replace(G2, "tb-rl");
            break;
          case 220:
            b2 = a.replace(G2, "lr");
            break;
          default:
            return a;
        }
        return "-webkit-" + a + "-ms-" + b2 + a;
      case 1017:
        if (-1 === a.indexOf("sticky", 9))
          break;
      case 975:
        c2 = (a = d2).length - 10;
        b2 = (33 === a.charCodeAt(c2) ? a.substring(0, c2) : a).substring(d2.indexOf(":", 7) + 1).trim();
        switch (m2 = b2.charCodeAt(0) + (b2.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b2.charCodeAt(8))
              break;
          case 115:
            a = a.replace(b2, "-webkit-" + b2) + ";" + a;
            break;
          case 207:
          case 102:
            a = a.replace(b2, "-webkit-" + (102 < m2 ? "inline-" : "") + "box") + ";" + a.replace(b2, "-webkit-" + b2) + ";" + a.replace(b2, "-ms-" + b2 + "box") + ";" + a;
        }
        return a + ";";
      case 938:
        if (45 === a.charCodeAt(5))
          switch (a.charCodeAt(6)) {
            case 105:
              return b2 = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + b2 + "-ms-flex-" + b2 + a;
            case 115:
              return "-webkit-" + a + "-ms-flex-item-" + a.replace(ba, "") + a;
            default:
              return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(ba, "") + a;
          }
        break;
      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4))
          break;
      case 931:
      case 953:
        if (true === la.test(d2))
          return 115 === (b2 = d2.substring(d2.indexOf(":") + 1)).charCodeAt(0) ? P2(d2.replace("stretch", "fill-available"), c2, e2, h2).replace(":fill-available", ":stretch") : a.replace(b2, "-webkit-" + b2) + a.replace(b2, "-moz-" + b2.replace("fill-", "")) + a;
        break;
      case 962:
        if (a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a, 211 === e2 + h2 && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10))
          return a.substring(0, a.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a;
    }
    return a;
  }
  function L2(d2, c2) {
    var e2 = d2.indexOf(1 === c2 ? ":" : "{"), h2 = d2.substring(0, 3 !== c2 ? e2 : 10);
    e2 = d2.substring(e2 + 1, d2.length - 1);
    return R(2 !== c2 ? h2 : h2.replace(na, "$1"), e2, c2);
  }
  function ea(d2, c2) {
    var e2 = P2(c2, c2.charCodeAt(0), c2.charCodeAt(1), c2.charCodeAt(2));
    return e2 !== c2 + ";" ? e2.replace(oa, " or ($1)").substring(4) : "(" + c2 + ")";
  }
  function H2(d2, c2, e2, h2, a, m2, b2, v2, n2, q2) {
    for (var g2 = 0, x2 = c2, w3; g2 < A2; ++g2) {
      switch (w3 = S2[g2].call(B2, d2, x2, e2, h2, a, m2, b2, v2, n2, q2)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          x2 = w3;
      }
    }
    if (x2 !== c2)
      return x2;
  }
  function T2(d2) {
    switch (d2) {
      case void 0:
      case null:
        A2 = S2.length = 0;
        break;
      default:
        if ("function" === typeof d2)
          S2[A2++] = d2;
        else if ("object" === typeof d2)
          for (var c2 = 0, e2 = d2.length; c2 < e2; ++c2) {
            T2(d2[c2]);
          }
        else
          Y2 = !!d2 | 0;
    }
    return T2;
  }
  function U2(d2) {
    d2 = d2.prefix;
    void 0 !== d2 && (R = null, d2 ? "function" !== typeof d2 ? w2 = 1 : (w2 = 2, R = d2) : w2 = 0);
    return U2;
  }
  function B2(d2, c2) {
    var e2 = d2;
    33 > e2.charCodeAt(0) && (e2 = e2.trim());
    V2 = e2;
    e2 = [V2];
    if (0 < A2) {
      var h2 = H2(-1, c2, e2, e2, D2, z2, 0, 0, 0, 0);
      void 0 !== h2 && "string" === typeof h2 && (c2 = h2);
    }
    var a = M2(O2, e2, c2, 0, 0);
    0 < A2 && (h2 = H2(-2, a, e2, e2, D2, z2, a.length, 0, 0, 0), void 0 !== h2 && (a = h2));
    V2 = "";
    E2 = 0;
    z2 = D2 = 1;
    return a;
  }
  var ca = /^\0+/g, N2 = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F2 = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q2 = /::(place)/g, ha = /:(read-only)/g, G2 = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z2 = 1, D2 = 1, E2 = 0, w2 = 1, O2 = [], S2 = [], A2 = 0, R = null, Y2 = 0, V2 = "";
  B2.use = T2;
  B2.set = U2;
  void 0 !== W2 && U2(W2);
  return B2;
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
);
var reactIs$1 = { exports: {} };
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = "function" === typeof Symbol && Symbol.for, c = b$1 ? Symbol.for("react.element") : 60103, d = b$1 ? Symbol.for("react.portal") : 60106, e = b$1 ? Symbol.for("react.fragment") : 60107, f = b$1 ? Symbol.for("react.strict_mode") : 60108, g$1 = b$1 ? Symbol.for("react.profiler") : 60114, h = b$1 ? Symbol.for("react.provider") : 60109, k$1 = b$1 ? Symbol.for("react.context") : 60110, l = b$1 ? Symbol.for("react.async_mode") : 60111, m = b$1 ? Symbol.for("react.concurrent_mode") : 60111, n = b$1 ? Symbol.for("react.forward_ref") : 60112, p = b$1 ? Symbol.for("react.suspense") : 60113, q$1 = b$1 ? Symbol.for("react.suspense_list") : 60120, r = b$1 ? Symbol.for("react.memo") : 60115, t = b$1 ? Symbol.for("react.lazy") : 60116, v$1 = b$1 ? Symbol.for("react.block") : 60121, w$1 = b$1 ? Symbol.for("react.fundamental") : 60117, x$1 = b$1 ? Symbol.for("react.responder") : 60118, y = b$1 ? Symbol.for("react.scope") : 60119;
function z$1(a) {
  if ("object" === typeof a && null !== a) {
    var u2 = a.$$typeof;
    switch (u2) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g$1:
          case f:
          case p:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k$1:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u2;
            }
        }
      case d:
        return u2;
    }
  }
}
function A$1(a) {
  return z$1(a) === m;
}
reactIs_production_min.AsyncMode = l;
reactIs_production_min.ConcurrentMode = m;
reactIs_production_min.ContextConsumer = k$1;
reactIs_production_min.ContextProvider = h;
reactIs_production_min.Element = c;
reactIs_production_min.ForwardRef = n;
reactIs_production_min.Fragment = e;
reactIs_production_min.Lazy = t;
reactIs_production_min.Memo = r;
reactIs_production_min.Portal = d;
reactIs_production_min.Profiler = g$1;
reactIs_production_min.StrictMode = f;
reactIs_production_min.Suspense = p;
reactIs_production_min.isAsyncMode = function(a) {
  return A$1(a) || z$1(a) === l;
};
reactIs_production_min.isConcurrentMode = A$1;
reactIs_production_min.isContextConsumer = function(a) {
  return z$1(a) === k$1;
};
reactIs_production_min.isContextProvider = function(a) {
  return z$1(a) === h;
};
reactIs_production_min.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};
reactIs_production_min.isForwardRef = function(a) {
  return z$1(a) === n;
};
reactIs_production_min.isFragment = function(a) {
  return z$1(a) === e;
};
reactIs_production_min.isLazy = function(a) {
  return z$1(a) === t;
};
reactIs_production_min.isMemo = function(a) {
  return z$1(a) === r;
};
reactIs_production_min.isPortal = function(a) {
  return z$1(a) === d;
};
reactIs_production_min.isProfiler = function(a) {
  return z$1(a) === g$1;
};
reactIs_production_min.isStrictMode = function(a) {
  return z$1(a) === f;
};
reactIs_production_min.isSuspense = function(a) {
  return z$1(a) === p;
};
reactIs_production_min.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g$1 || a === f || a === p || a === q$1 || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k$1 || a.$$typeof === n || a.$$typeof === w$1 || a.$$typeof === x$1 || a.$$typeof === y || a.$$typeof === v$1);
};
reactIs_production_min.typeOf = z$1;
(function(module) {
  {
    module.exports = reactIs_production_min;
  }
})(reactIs$1);
var reactIs = reactIs$1.exports;
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e2) {
        }
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;
function v() {
  return (v = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
var g = function(e2, t2) {
  for (var n2 = [e2[0]], r2 = 0, o = t2.length; r2 < o; r2 += 1)
    n2.push(t2[r2], e2[r2 + 1]);
  return n2;
}, S = function(t2) {
  return null !== t2 && "object" == typeof t2 && "[object Object]" === (t2.toString ? t2.toString() : Object.prototype.toString.call(t2)) && !reactIs$2.exports.typeOf(t2);
}, w = Object.freeze([]), E = Object.freeze({});
function b(e2) {
  return "function" == typeof e2;
}
function _(e2) {
  return e2.displayName || e2.name || "Component";
}
function N(e2) {
  return e2 && "string" == typeof e2.styledComponentId;
}
var A = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", I = "undefined" != typeof window && "HTMLElement" in window, P = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env && (void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY ? "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY : false)), O = {};
function j(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e2 + " for more information." + (n2.length > 0 ? " Args: " + n2.join(", ") : ""));
}
var T = function() {
  function e2(e3) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e3;
  }
  var t2 = e2.prototype;
  return t2.indexOfGroup = function(e3) {
    for (var t3 = 0, n2 = 0; n2 < e3; n2++)
      t3 += this.groupSizes[n2];
    return t3;
  }, t2.insertRules = function(e3, t3) {
    if (e3 >= this.groupSizes.length) {
      for (var n2 = this.groupSizes, r2 = n2.length, o = r2; e3 >= o; )
        (o <<= 1) < 0 && j(16, "" + e3);
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(n2), this.length = o;
      for (var s = r2; s < o; s++)
        this.groupSizes[s] = 0;
    }
    for (var i = this.indexOfGroup(e3 + 1), a = 0, c2 = t3.length; a < c2; a++)
      this.tag.insertRule(i, t3[a]) && (this.groupSizes[e3]++, i++);
  }, t2.clearGroup = function(e3) {
    if (e3 < this.length) {
      var t3 = this.groupSizes[e3], n2 = this.indexOfGroup(e3), r2 = n2 + t3;
      this.groupSizes[e3] = 0;
      for (var o = n2; o < r2; o++)
        this.tag.deleteRule(n2);
    }
  }, t2.getGroup = function(e3) {
    var t3 = "";
    if (e3 >= this.length || 0 === this.groupSizes[e3])
      return t3;
    for (var n2 = this.groupSizes[e3], r2 = this.indexOfGroup(e3), o = r2 + n2, s = r2; s < o; s++)
      t3 += this.tag.getRule(s) + "/*!sc*/\n";
    return t3;
  }, e2;
}(), x = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), V = 1, B = function(e2) {
  if (x.has(e2))
    return x.get(e2);
  for (; k.has(V); )
    V++;
  var t2 = V++;
  return x.set(e2, t2), k.set(t2, e2), t2;
}, z = function(e2) {
  return k.get(e2);
}, M = function(e2, t2) {
  t2 >= V && (V = t2 + 1), x.set(e2, t2), k.set(t2, e2);
}, G = "style[" + A + '][data-styled-version="5.3.9"]', L = new RegExp("^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), F = function(e2, t2, n2) {
  for (var r2, o = n2.split(","), s = 0, i = o.length; s < i; s++)
    (r2 = o[s]) && e2.registerName(t2, r2);
}, Y = function(e2, t2) {
  for (var n2 = (t2.textContent || "").split("/*!sc*/\n"), r2 = [], o = 0, s = n2.length; o < s; o++) {
    var i = n2[o].trim();
    if (i) {
      var a = i.match(L);
      if (a) {
        var c2 = 0 | parseInt(a[1], 10), u2 = a[2];
        0 !== c2 && (M(u2, c2), F(e2, u2, a[3]), e2.getTag().insertRules(c2, r2)), r2.length = 0;
      } else
        r2.push(i);
    }
  }
}, q = function() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}, H = function(e2) {
  var t2 = document.head, n2 = e2 || t2, r2 = document.createElement("style"), o = function(e3) {
    for (var t3 = e3.childNodes, n3 = t3.length; n3 >= 0; n3--) {
      var r3 = t3[n3];
      if (r3 && 1 === r3.nodeType && r3.hasAttribute(A))
        return r3;
    }
  }(n2), s = void 0 !== o ? o.nextSibling : null;
  r2.setAttribute(A, "active"), r2.setAttribute("data-styled-version", "5.3.9");
  var i = q();
  return i && r2.setAttribute("nonce", i), n2.insertBefore(r2, s), r2;
}, $ = function() {
  function e2(e3) {
    var t3 = this.element = H(e3);
    t3.appendChild(document.createTextNode("")), this.sheet = function(e4) {
      if (e4.sheet)
        return e4.sheet;
      for (var t4 = document.styleSheets, n2 = 0, r2 = t4.length; n2 < r2; n2++) {
        var o = t4[n2];
        if (o.ownerNode === e4)
          return o;
      }
      j(17);
    }(t3), this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    try {
      return this.sheet.insertRule(t3, e3), this.length++, true;
    } catch (e4) {
      return false;
    }
  }, t2.deleteRule = function(e3) {
    this.sheet.deleteRule(e3), this.length--;
  }, t2.getRule = function(e3) {
    var t3 = this.sheet.cssRules[e3];
    return void 0 !== t3 && "string" == typeof t3.cssText ? t3.cssText : "";
  }, e2;
}(), W = function() {
  function e2(e3) {
    var t3 = this.element = H(e3);
    this.nodes = t3.childNodes, this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    if (e3 <= this.length && e3 >= 0) {
      var n2 = document.createTextNode(t3), r2 = this.nodes[e3];
      return this.element.insertBefore(n2, r2 || null), this.length++, true;
    }
    return false;
  }, t2.deleteRule = function(e3) {
    this.element.removeChild(this.nodes[e3]), this.length--;
  }, t2.getRule = function(e3) {
    return e3 < this.length ? this.nodes[e3].textContent : "";
  }, e2;
}(), U = function() {
  function e2(e3) {
    this.rules = [], this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    return e3 <= this.length && (this.rules.splice(e3, 0, t3), this.length++, true);
  }, t2.deleteRule = function(e3) {
    this.rules.splice(e3, 1), this.length--;
  }, t2.getRule = function(e3) {
    return e3 < this.length ? this.rules[e3] : "";
  }, e2;
}(), J = I, X = { isServer: !I, useCSSOMInjection: !P }, Z = function() {
  function e2(e3, t3, n2) {
    void 0 === e3 && (e3 = E), void 0 === t3 && (t3 = {}), this.options = v({}, X, {}, e3), this.gs = t3, this.names = new Map(n2), this.server = !!e3.isServer, !this.server && I && J && (J = false, function(e4) {
      for (var t4 = document.querySelectorAll(G), n3 = 0, r2 = t4.length; n3 < r2; n3++) {
        var o = t4[n3];
        o && "active" !== o.getAttribute(A) && (Y(e4, o), o.parentNode && o.parentNode.removeChild(o));
      }
    }(this));
  }
  e2.registerId = function(e3) {
    return B(e3);
  };
  var t2 = e2.prototype;
  return t2.reconstructWithOptions = function(t3, n2) {
    return void 0 === n2 && (n2 = true), new e2(v({}, this.options, {}, t3), this.gs, n2 && this.names || void 0);
  }, t2.allocateGSInstance = function(e3) {
    return this.gs[e3] = (this.gs[e3] || 0) + 1;
  }, t2.getTag = function() {
    return this.tag || (this.tag = (n2 = (t3 = this.options).isServer, r2 = t3.useCSSOMInjection, o = t3.target, e3 = n2 ? new U(o) : r2 ? new $(o) : new W(o), new T(e3)));
    var e3, t3, n2, r2, o;
  }, t2.hasNameForId = function(e3, t3) {
    return this.names.has(e3) && this.names.get(e3).has(t3);
  }, t2.registerName = function(e3, t3) {
    if (B(e3), this.names.has(e3))
      this.names.get(e3).add(t3);
    else {
      var n2 = /* @__PURE__ */ new Set();
      n2.add(t3), this.names.set(e3, n2);
    }
  }, t2.insertRules = function(e3, t3, n2) {
    this.registerName(e3, t3), this.getTag().insertRules(B(e3), n2);
  }, t2.clearNames = function(e3) {
    this.names.has(e3) && this.names.get(e3).clear();
  }, t2.clearRules = function(e3) {
    this.getTag().clearGroup(B(e3)), this.clearNames(e3);
  }, t2.clearTag = function() {
    this.tag = void 0;
  }, t2.toString = function() {
    return function(e3) {
      for (var t3 = e3.getTag(), n2 = t3.length, r2 = "", o = 0; o < n2; o++) {
        var s = z(o);
        if (void 0 !== s) {
          var i = e3.names.get(s), a = t3.getGroup(o);
          if (i && a && i.size) {
            var c2 = A + ".g" + o + '[id="' + s + '"]', u2 = "";
            void 0 !== i && i.forEach(function(e4) {
              e4.length > 0 && (u2 += e4 + ",");
            }), r2 += "" + a + c2 + '{content:"' + u2 + '"}/*!sc*/\n';
          }
        }
      }
      return r2;
    }(this);
  }, e2;
}(), K = /(a)(d)/gi, Q = function(e2) {
  return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
};
function ee(e2) {
  var t2, n2 = "";
  for (t2 = Math.abs(e2); t2 > 52; t2 = t2 / 52 | 0)
    n2 = Q(t2 % 52) + n2;
  return (Q(t2 % 52) + n2).replace(K, "$1-$2");
}
var te = function(e2, t2) {
  for (var n2 = t2.length; n2; )
    e2 = 33 * e2 ^ t2.charCodeAt(--n2);
  return e2;
}, ne = function(e2) {
  return te(5381, e2);
};
function re(e2) {
  for (var t2 = 0; t2 < e2.length; t2 += 1) {
    var n2 = e2[t2];
    if (b(n2) && !N(n2))
      return false;
  }
  return true;
}
var oe = ne("5.3.9"), se = function() {
  function e2(e3, t2, n2) {
    this.rules = e3, this.staticRulesId = "", this.isStatic = (void 0 === n2 || n2.isStatic) && re(e3), this.componentId = t2, this.baseHash = te(oe, t2), this.baseStyle = n2, Z.registerId(t2);
  }
  return e2.prototype.generateAndInjectStyles = function(e3, t2, n2) {
    var r2 = this.componentId, o = [];
    if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e3, t2, n2)), this.isStatic && !n2.hash)
      if (this.staticRulesId && t2.hasNameForId(r2, this.staticRulesId))
        o.push(this.staticRulesId);
      else {
        var s = Ne(this.rules, e3, t2, n2).join(""), i = ee(te(this.baseHash, s) >>> 0);
        if (!t2.hasNameForId(r2, i)) {
          var a = n2(s, "." + i, void 0, r2);
          t2.insertRules(r2, i, a);
        }
        o.push(i), this.staticRulesId = i;
      }
    else {
      for (var c2 = this.rules.length, u2 = te(this.baseHash, n2.hash), l2 = "", d2 = 0; d2 < c2; d2++) {
        var h2 = this.rules[d2];
        if ("string" == typeof h2)
          l2 += h2;
        else if (h2) {
          var p2 = Ne(h2, e3, t2, n2), f2 = Array.isArray(p2) ? p2.join("") : p2;
          u2 = te(u2, f2 + d2), l2 += f2;
        }
      }
      if (l2) {
        var m2 = ee(u2 >>> 0);
        if (!t2.hasNameForId(r2, m2)) {
          var y2 = n2(l2, "." + m2, void 0, r2);
          t2.insertRules(r2, m2, y2);
        }
        o.push(m2);
      }
    }
    return o.join(" ");
  }, e2;
}(), ie = /^\s*\/\/.*$/gm, ae = [":", "[", ".", "#"];
function ce(e2) {
  var t2, n2, r2, o, s = void 0 === e2 ? E : e2, i = s.options, a = void 0 === i ? E : i, c2 = s.plugins, u2 = void 0 === c2 ? w : c2, l2 = new stylis_min(a), d2 = [], h2 = function(e3) {
    function t3(t4) {
      if (t4)
        try {
          e3(t4 + "}");
        } catch (e4) {
        }
    }
    return function(n3, r3, o2, s2, i2, a2, c3, u3, l3, d3) {
      switch (n3) {
        case 1:
          if (0 === l3 && 64 === r3.charCodeAt(0))
            return e3(r3 + ";"), "";
          break;
        case 2:
          if (0 === u3)
            return r3 + "/*|*/";
          break;
        case 3:
          switch (u3) {
            case 102:
            case 112:
              return e3(o2[0] + r3), "";
            default:
              return r3 + (0 === d3 ? "/*|*/" : "");
          }
        case -2:
          r3.split("/*|*/}").forEach(t3);
      }
    };
  }(function(e3) {
    d2.push(e3);
  }), f2 = function(e3, r3, s2) {
    return 0 === r3 && -1 !== ae.indexOf(s2[n2.length]) || s2.match(o) ? e3 : "." + t2;
  };
  function m2(e3, s2, i2, a2) {
    void 0 === a2 && (a2 = "&");
    var c3 = e3.replace(ie, ""), u3 = s2 && i2 ? i2 + " " + s2 + " { " + c3 + " }" : c3;
    return t2 = a2, n2 = s2, r2 = new RegExp("\\" + n2 + "\\b", "g"), o = new RegExp("(\\" + n2 + "\\b){2,}"), l2(i2 || !s2 ? "" : s2, u3);
  }
  return l2.use([].concat(u2, [function(e3, t3, o2) {
    2 === e3 && o2.length && o2[0].lastIndexOf(n2) > 0 && (o2[0] = o2[0].replace(r2, f2));
  }, h2, function(e3) {
    if (-2 === e3) {
      var t3 = d2;
      return d2 = [], t3;
    }
  }])), m2.hash = u2.length ? u2.reduce(function(e3, t3) {
    return t3.name || j(15), te(e3, t3.name);
  }, 5381).toString() : "", m2;
}
var ue = r$2.createContext();
ue.Consumer;
var de = r$2.createContext(), he = (de.Consumer, new Z()), pe = ce();
function fe() {
  return react.exports.useContext(ue) || he;
}
function me() {
  return react.exports.useContext(de) || pe;
}
var ve = function() {
  function e2(e3, t2) {
    var n2 = this;
    this.inject = function(e4, t3) {
      void 0 === t3 && (t3 = pe);
      var r2 = n2.name + t3.hash;
      e4.hasNameForId(n2.id, r2) || e4.insertRules(n2.id, r2, t3(n2.rules, r2, "@keyframes"));
    }, this.toString = function() {
      return j(12, String(n2.name));
    }, this.name = e3, this.id = "sc-keyframes-" + e3, this.rules = t2;
  }
  return e2.prototype.getName = function(e3) {
    return void 0 === e3 && (e3 = pe), this.name + e3.hash;
  }, e2;
}(), ge = /([A-Z])/, Se = /([A-Z])/g, we = /^ms-/, Ee = function(e2) {
  return "-" + e2.toLowerCase();
};
function be(e2) {
  return ge.test(e2) ? e2.replace(Se, Ee).replace(we, "-ms-") : e2;
}
var _e = function(e2) {
  return null == e2 || false === e2 || "" === e2;
};
function Ne(e2, n2, r2, o) {
  if (Array.isArray(e2)) {
    for (var s, i = [], a = 0, c2 = e2.length; a < c2; a += 1)
      "" !== (s = Ne(e2[a], n2, r2, o)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
    return i;
  }
  if (_e(e2))
    return "";
  if (N(e2))
    return "." + e2.styledComponentId;
  if (b(e2)) {
    if ("function" != typeof (l2 = e2) || l2.prototype && l2.prototype.isReactComponent || !n2)
      return e2;
    var u2 = e2(n2);
    return Ne(u2, n2, r2, o);
  }
  var l2;
  return e2 instanceof ve ? r2 ? (e2.inject(r2, o), e2.getName(o)) : e2 : S(e2) ? function e3(t2, n3) {
    var r3, o2, s2 = [];
    for (var i2 in t2)
      t2.hasOwnProperty(i2) && !_e(t2[i2]) && (Array.isArray(t2[i2]) && t2[i2].isCss || b(t2[i2]) ? s2.push(be(i2) + ":", t2[i2], ";") : S(t2[i2]) ? s2.push.apply(s2, e3(t2[i2], i2)) : s2.push(be(i2) + ": " + (r3 = i2, null == (o2 = t2[i2]) || "boolean" == typeof o2 || "" === o2 ? "" : "number" != typeof o2 || 0 === o2 || r3 in unitlessKeys ? String(o2).trim() : o2 + "px") + ";"));
    return n3 ? [n3 + " {"].concat(s2, ["}"]) : s2;
  }(e2) : e2.toString();
}
var Ae = function(e2) {
  return Array.isArray(e2) && (e2.isCss = true), e2;
};
function Ce(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  return b(e2) || S(e2) ? Ae(Ne(g(w, [e2].concat(n2)))) : 0 === n2.length && 1 === e2.length && "string" == typeof e2[0] ? e2 : Ae(Ne(g(e2, n2)));
}
var Re = function(e2, t2, n2) {
  return void 0 === n2 && (n2 = E), e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
}, De = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, je = /(^-|-$)/g;
function Te(e2) {
  return e2.replace(De, "-").replace(je, "");
}
var xe = function(e2) {
  return ee(ne(e2) >>> 0);
};
function ke(e2) {
  return "string" == typeof e2 && true;
}
var Ve = function(e2) {
  return "function" == typeof e2 || "object" == typeof e2 && null !== e2 && !Array.isArray(e2);
}, Be = function(e2) {
  return "__proto__" !== e2 && "constructor" !== e2 && "prototype" !== e2;
};
function ze(e2, t2, n2) {
  var r2 = e2[n2];
  Ve(t2) && Ve(r2) ? Me(r2, t2) : e2[n2] = t2;
}
function Me(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  for (var o = 0, s = n2; o < s.length; o++) {
    var i = s[o];
    if (Ve(i))
      for (var a in i)
        Be(a) && ze(e2, i[a], a);
  }
  return e2;
}
var Ge = r$2.createContext();
Ge.Consumer;
var Ye = {};
function qe(e2, t2, n2) {
  var o = N(e2), i = !ke(e2), a = t2.attrs, c2 = void 0 === a ? w : a, d2 = t2.componentId, h2 = void 0 === d2 ? function(e3, t3) {
    var n3 = "string" != typeof e3 ? "sc" : Te(e3);
    Ye[n3] = (Ye[n3] || 0) + 1;
    var r2 = n3 + "-" + xe("5.3.9" + n3 + Ye[n3]);
    return t3 ? t3 + "-" + r2 : r2;
  }(t2.displayName, t2.parentComponentId) : d2, p2 = t2.displayName, f2 = void 0 === p2 ? function(e3) {
    return ke(e3) ? "styled." + e3 : "Styled(" + _(e3) + ")";
  }(e2) : p2, g2 = t2.displayName && t2.componentId ? Te(t2.displayName) + "-" + t2.componentId : t2.componentId || h2, S2 = o && e2.attrs ? Array.prototype.concat(e2.attrs, c2).filter(Boolean) : c2, A2 = t2.shouldForwardProp;
  o && e2.shouldForwardProp && (A2 = t2.shouldForwardProp ? function(n3, r2, o2) {
    return e2.shouldForwardProp(n3, r2, o2) && t2.shouldForwardProp(n3, r2, o2);
  } : e2.shouldForwardProp);
  var C2, I2 = new se(n2, g2, o ? e2.componentStyle : void 0), P2 = I2.isStatic && 0 === c2.length, O2 = function(e3, t3) {
    return function(e4, t4, n3, r2) {
      var o2 = e4.attrs, i2 = e4.componentStyle, a2 = e4.defaultProps, c3 = e4.foldedComponentIds, d3 = e4.shouldForwardProp, h3 = e4.styledComponentId, p3 = e4.target;
      var f3 = function(e5, t5, n4) {
        void 0 === e5 && (e5 = E);
        var r3 = v({}, t5, { theme: e5 }), o3 = {};
        return n4.forEach(function(e6) {
          var t6, n5, s, i3 = e6;
          for (t6 in b(i3) && (i3 = i3(r3)), i3)
            r3[t6] = o3[t6] = "className" === t6 ? (n5 = o3[t6], s = i3[t6], n5 && s ? n5 + " " + s : n5 || s) : i3[t6];
        }), [r3, o3];
      }(Re(t4, react.exports.useContext(Ge), a2) || E, t4, o2), y2 = f3[0], g3 = f3[1], S3 = function(e5, t5, n4, r3) {
        var o3 = fe(), s = me(), i3 = t5 ? e5.generateAndInjectStyles(E, o3, s) : e5.generateAndInjectStyles(n4, o3, s);
        return i3;
      }(i2, r2, y2), w2 = n3, _2 = g3.$as || t4.$as || g3.as || t4.as || p3, N2 = ke(_2), A3 = g3 !== t4 ? v({}, t4, {}, g3) : t4, C3 = {};
      for (var I3 in A3)
        "$" !== I3[0] && "as" !== I3 && ("forwardedAs" === I3 ? C3.as = A3[I3] : (d3 ? d3(I3, isPropValid, _2) : !N2 || isPropValid(I3)) && (C3[I3] = A3[I3]));
      return t4.style && g3.style !== t4.style && (C3.style = v({}, t4.style, {}, g3.style)), C3.className = Array.prototype.concat(c3, h3, S3 !== h3 ? S3 : null, t4.className, g3.className).filter(Boolean).join(" "), C3.ref = w2, react.exports.createElement(_2, C3);
    }(C2, e3, t3, P2);
  };
  return O2.displayName = f2, (C2 = r$2.forwardRef(O2)).attrs = S2, C2.componentStyle = I2, C2.displayName = f2, C2.shouldForwardProp = A2, C2.foldedComponentIds = o ? Array.prototype.concat(e2.foldedComponentIds, e2.styledComponentId) : w, C2.styledComponentId = g2, C2.target = o ? e2.target : e2, C2.withComponent = function(e3) {
    var r2 = t2.componentId, o2 = function(e4, t3) {
      if (null == e4)
        return {};
      var n3, r3, o3 = {}, s2 = Object.keys(e4);
      for (r3 = 0; r3 < s2.length; r3++)
        n3 = s2[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e4[n3]);
      return o3;
    }(t2, ["componentId"]), s = r2 && r2 + "-" + (ke(e3) ? e3 : Te(_(e3)));
    return qe(e3, v({}, o2, { attrs: S2, componentId: s }), n2);
  }, Object.defineProperty(C2, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(t3) {
    this._foldedDefaultProps = o ? Me({}, e2.defaultProps, t3) : t3;
  } }), Object.defineProperty(C2, "toString", { value: function() {
    return "." + C2.styledComponentId;
  } }), i && hoistNonReactStatics_cjs(C2, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true }), C2;
}
var He = function(e2) {
  return function e3(t2, r2, o) {
    if (void 0 === o && (o = E), !reactIs$2.exports.isValidElementType(r2))
      return j(1, String(r2));
    var s = function() {
      return t2(r2, o, Ce.apply(void 0, arguments));
    };
    return s.withConfig = function(n2) {
      return e3(t2, r2, v({}, o, {}, n2));
    }, s.attrs = function(n2) {
      return e3(t2, r2, v({}, o, { attrs: Array.prototype.concat(o.attrs, n2).filter(Boolean) }));
    }, s;
  }(qe, e2);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e2) {
  He[e2] = He(e2);
});
var $e = function() {
  function e2(e3, t3) {
    this.rules = e3, this.componentId = t3, this.isStatic = re(e3), Z.registerId(this.componentId + 1);
  }
  var t2 = e2.prototype;
  return t2.createStyles = function(e3, t3, n2, r2) {
    var o = r2(Ne(this.rules, t3, n2, r2).join(""), ""), s = this.componentId + e3;
    n2.insertRules(s, s, o);
  }, t2.removeStyles = function(e3, t3) {
    t3.clearRules(this.componentId + e3);
  }, t2.renderStyles = function(e3, t3, n2, r2) {
    e3 > 2 && Z.registerId(this.componentId + e3), this.removeStyles(e3, n2), this.createStyles(e3, t3, n2, r2);
  }, e2;
}();
function We(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), o = 1; o < t2; o++)
    n2[o - 1] = arguments[o];
  var i = Ce.apply(void 0, [e2].concat(n2)), a = "sc-global-" + xe(JSON.stringify(i)), u2 = new $e(i, a);
  function l2(e3) {
    var t3 = fe(), n3 = me(), o2 = react.exports.useContext(Ge), l3 = react.exports.useRef(t3.allocateGSInstance(a)).current;
    return t3.server && h2(l3, e3, t3, o2, n3), react.exports.useLayoutEffect(function() {
      if (!t3.server)
        return h2(l3, e3, t3, o2, n3), function() {
          return u2.removeStyles(l3, t3);
        };
    }, [l3, e3, t3, o2, n3]), null;
  }
  function h2(e3, t3, n3, r2, o2) {
    if (u2.isStatic)
      u2.renderStyles(e3, O, n3, o2);
    else {
      var s = v({}, t3, { theme: Re(t3, r2, l2.defaultProps) });
      u2.renderStyles(e3, s, n3, o2);
    }
  }
  return r$2.memo(l2);
}
const styled = He;
const AppStyled = styled.div`
  position: relative;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  text-align: center;
  height: 100%;
`;
function Header(props) {
  const {
    mode,
    setMode
  } = props;
  function title() {
    if (!mode || mode === "breathing" || mode === "settings") {
      return "QuickStretch";
    }
    return `${mode.split("_stretch")[0]}Stretch`;
  }
  return /* @__PURE__ */ jsxs(HeaderStyled, {
    children: [/* @__PURE__ */ jsx("button", {
      type: "button",
      className: "home-button",
      onClick: () => setMode(""),
      children: mode && /* @__PURE__ */ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 576 512",
        children: /* @__PURE__ */ jsx("path", {
          d: "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
        })
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "logo",
      onClick: () => setMode(""),
      children: [/* @__PURE__ */ jsx("img", {
        src: "/logo.png"
      }), /* @__PURE__ */ jsx("h1", {
        children: title()
      })]
    }), /* @__PURE__ */ jsx("button", {
      type: "button",
      className: "settings-button",
      onClick: () => setMode("settings"),
      children: /* @__PURE__ */ jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        children: /* @__PURE__ */ jsx("path", {
          d: "M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
        })
      })
    })]
  });
}
const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  padding: 0 0.2rem;

  button {
    width: fit-content;
  }

  svg {
    height: 1.1rem;
    fill: var(--default-black);
    opacity: 60%;
    transition: 0.125s ease-in-out;
  }

  svg:hover {
    opacity: 100%;
  }

  .logo {
    flex: 1fr;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0.7rem 0 0 0;
    padding: 0;
  }

  h1:first-letter {
    text-transform: uppercase;
  }

  img {
    height: 2rem;
    animation: shake-infinite 3s linear 1s infinite;
  }

  img:hover {
    animation: shake 0.5s linear;
  }

  @keyframes shake-infinite {
    0% {
      transform: rotate(0);
    }
    4% {
      transform: rotate(-10deg);
    }
    8% {
      transform: rotate(10deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    12% {
      transform: rotate(0);
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0);
    }
    40% {
      transform: rotate(-10deg);
    }
    70% {
      transform: rotate(10deg);
    }
    90% {
      transform: rotate(-10deg);
    }
    99% {
      transform: rotate(0);
    }
  }
`;
const ALL_STRETCHES = {
  neck_stretch: {
    title: "Neck stretch",
    details: "This stretch will help with your neck mobility. Pull your shoulders back, keep your back straight and feet on the ground",
    speed: 900,
    breakDuration: 5,
    exercises: [{
      title: "Left and right",
      duration: 30,
      instructions: ["Sit with your back straight", "Slowly turn your head to the left, as if you're trying to look over your shoulder", "Hold for two seconds", "Repeat on the right side"],
      images: ["/neck_stretch/leftandright/1.png", "/neck_stretch/leftandright/2.png", "/neck_stretch/leftandright/1.png", "/neck_stretch/leftandright/3.png"]
    }, {
      title: "Up and down",
      duration: 30,
      instructions: ["Place your hands on your chest", "Gently tilt your head upwards, looking towards the ceiling", "Hold for two seconds", "Slowly lower your head and tuck your chin in towards your chest, feeling a stretch in the back of your neck"],
      images: ["/neck_stretch/upanddown/1.png", "/neck_stretch/upanddown/2.png", "/neck_stretch/upanddown/1.png", "/neck_stretch/upanddown/3.png"]
    }, {
      title: "Side to side",
      duration: 30,
      instructions: ["Tilt your head towards your left shoulder, feeling a stretch in the right side of your neck", "Hold for two seconds", "Repeat on the right side"],
      images: ["/neck_stretch/sidetoside/1.png", "/neck_stretch/sidetoside/2.png", "/neck_stretch/sidetoside/1.png", "/neck_stretch/sidetoside/3.png"]
    }, {
      title: "In and out",
      duration: 30,
      instructions: ["Tuck your chin in towards your chest, feeling a stretch in the back of your neck", "Hold for two seconds", "Stretch your head forward as far as you comfortably can, feeling a stretch in the front of your neck"],
      images: ["/neck_stretch/inandout/1.png", "/neck_stretch/inandout/2.png", "/neck_stretch/inandout/1.png", "/neck_stretch/inandout/3.png"]
    }, {
      title: "Sliding head",
      duration: 30,
      instructions: ["Keep your eyes level", "Slide your head to the left, feeling a stretch in the right side of your neck", "Hold for two seconds", "Repeat on the right side"],
      images: ["/neck_stretch/sliding/1.png", "/neck_stretch/sliding/2.png", "/neck_stretch/sliding/3.png", "/neck_stretch/sliding/2.png"]
    }, {
      title: "Half circle",
      duration: 30,
      instructions: ["Lift your ear on one side", "Slowly lower your head to tuck your chin in towards your chest, feeling a stretch in the back of your neck", "Repeat on the other side"],
      images: ["/neck_stretch/halfcircle/1.png", "/neck_stretch/halfcircle/2.png", "/neck_stretch/halfcircle/3.png", "/neck_stretch/halfcircle/2.png"]
    }]
  },
  hand_stretch: {
    title: "Hand stretch",
    details: "These exercises can provide relief from hand, wrist and foreard pain, like that resulting from carpal tunnel syndrome",
    speed: 1200,
    breakDuration: 5,
    exercises: [{
      title: "Fist stretch",
      duration: 30,
      instructions: ["Keep your elbows relaxed", "Make a fist with each hand", "Bend both of them up and down as far as you can comfortably"],
      images: ["/hand_stretch/fist1/1.png", "/hand_stretch/fist1/2.png"]
    }, {
      title: "Side fist stretch",
      duration: 30,
      instructions: ["Rotate your fists sideways so that your palms face each other", "Bend both fists away from and towards yourself as far as you can comfortably"],
      images: ["/hand_stretch/fist2/1.png", "/hand_stretch/fist2/2.png"]
    }, {
      title: "Wrist extension up",
      duration: 30,
      instructions: ["Extend one arm in front of you", "Point your hand towards the ceiling", "Gently assist the stretch with your other hand"],
      images: ["/hand_stretch/wrist1/1.png", "/hand_stretch/wrist1/2.png"]
    }, {
      title: "Wrist flexion",
      duration: 30,
      instructions: ["Rotate your arm so that your palm faces down", "Point your hand towards the floor", "Gently assist the stretch with your other hand by pulling your hand towards your body"],
      images: ["/hand_stretch/wrist2/1.png", "/hand_stretch/wrist2/2.png"]
    }]
  },
  shoulder_stretch: {
    title: "Shoulder stretch",
    details: "These exercises exercises are beneficial in improving flexibility, reducing stiffness, and relieving tension in the shoulders and upper back",
    breakDuration: 5,
    speed: 400,
    exercises: [{
      title: "Shoulder rotation forward",
      duration: 20,
      instructions: ["Rotate your shoulders forward"],
      images: ["/shoulder_stretch/rotateforward/1.png", "/shoulder_stretch/rotateforward/2.png", "/shoulder_stretch/rotateforward/3.png", "/shoulder_stretch/rotateforward/4.png", "/shoulder_stretch/rotateforward/5.png"]
    }, {
      title: "Shoulder rotation backward",
      duration: 20,
      instructions: ["Rotate your shoulders backward"],
      images: ["/shoulder_stretch/rotateback/1.png", "/shoulder_stretch/rotateback/2.png", "/shoulder_stretch/rotateback/3.png", "/shoulder_stretch/rotateback/4.png", "/shoulder_stretch/rotateback/5.png"]
    }, {
      title: "Right cross arm stretch",
      duration: 30,
      instructions: ["Bring your right arm forward and keep the elbow relaxed", "Use your left arm to gently pull the right arm across"],
      images: ["/shoulder_stretch/crossright/1.png", "/shoulder_stretch/crossright/2.png"]
    }, {
      title: "Left cross arm stretch",
      duration: 30,
      instructions: ["Bring your left arm forward and keep the elbow relaxed", "Use your right arm to gently pull the right arm across"],
      images: ["/shoulder_stretch/crossleft/1.png", "/shoulder_stretch/crossleft/2.png"]
    }, {
      title: "Chest stretch",
      duration: 30,
      instructions: ["Clasp your hands behind you", "Extend them down and back behind you", "Gently keep pushing your chest forward"],
      images: ["/shoulder_stretch/chest/1.png", "/shoulder_stretch/chest/2.png"]
    }]
  }
};
function ModeButton(props) {
  var _a;
  const {
    title,
    mode,
    setMode
  } = props;
  const duration2 = (_a = ALL_STRETCHES[mode]) == null ? void 0 : _a.exercises.reduce((acc, val) => {
    return acc = acc + val.duration + 5;
  }, 0);
  const durationRounded = Math.round(duration2 / 60 * 2) / 2;
  return /* @__PURE__ */ jsxs(ModeButtonStyled, {
    onClick: () => setMode(mode),
    children: [/* @__PURE__ */ jsxs("div", {
      className: "images",
      children: [/* @__PURE__ */ jsx("img", {
        src: `/card_images/${mode}.png`,
        alt: `${mode}`
      }), /* @__PURE__ */ jsx("img", {
        src: `/card_images/${mode}_under.png`,
        className: "under-image",
        alt: `${mode}-highlighted`
      })]
    }), /* @__PURE__ */ jsx("h2", {
      children: title
    }), mode !== "breathing" && /* @__PURE__ */ jsxs("p", {
      children: [durationRounded, " min"]
    })]
  });
}
const ModeButtonStyled = styled.li`
  list-style: none;
  width: 9rem;
  border: 1px solid var(--default-black);
  background-color: #ebe9e5d8;
  box-sizing: border-box;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.1s ease-in;
  position: relative;
  overflow: hidden;

  a {
    width: 100%;
    height: 100%;
  }

  h2 {
    font-size: 1rem;
    font-weight: 500;
    color: #353535;
  }

  p {
    font-size: 0.8rem;
    color: #353535;
  }

  .images {
    width: min-content;
    position: relative;
    margin: 0.5rem auto 0 auto;
  }

  img {
    height: 3.5rem;
    transition: 0.2s ease-in-out;
  }

  .under-image {
    position: absolute;
    left: 0;
    opacity: 0%;
    transition: 0.15s ease-in-out;
    z-index: -1;
  }

  &:hover {
    .under-image {
      opacity: 100%;
      margin: 0 auto;
    }
`;
function Main(props) {
  const {
    setMode
  } = props;
  return /* @__PURE__ */ jsxs(ModeList, {
    children: [/* @__PURE__ */ jsx(ModeButton, {
      title: "Neck stretch",
      mode: "neck_stretch",
      setMode
    }), /* @__PURE__ */ jsx(ModeButton, {
      title: "Hand stretch",
      mode: "hand_stretch",
      setMode
    }), /* @__PURE__ */ jsx(ModeButton, {
      title: "Shoulder stretch",
      mode: "shoulder_stretch",
      setMode
    }), /* @__PURE__ */ jsx(ModeButton, {
      title: "Breathing",
      mode: "breathing",
      setMode
    })]
  });
}
const ModeList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 100;
  justify-content: center;
`;
function ControlButton$1(props) {
  const {
    status,
    startBreathing,
    stopBreathing
  } = props;
  if (!status.on)
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx(PromptStyled, {
        children: "Press start to begin"
      }), /* @__PURE__ */ jsx(ControlButtonStyled, {
        type: "button",
        onClick: startBreathing,
        children: "Start"
      })]
    });
  if (status.on)
    return /* @__PURE__ */ jsx(ControlButtonStyled, {
      type: "button",
      onClick: stopBreathing,
      children: "Stop"
    });
  return /* @__PURE__ */ jsx(Fragment, {});
}
const ControlButtonStyled = styled.button`
  height: 2rem;
  width: 6rem;
  margin-top: 0.8rem;
  min-width: fit-content;
  border-radius: 1rem;
  transition: 0.1s ease-in-out;
  background-color: var(--accent);
  cursor: pointer;

  &:hover {
    background-color: var(--accent-transparent);
  }
`;
const PromptStyled = styled.p`
  font-size: 0.9rem;
`;
const sprites = {
  in: ["/breathing/in/1.png", "/breathing/in/2.png", "/breathing/in/3.png", "/breathing/in/4.png", "/breathing/in/5.png", "/breathing/in/6.png", "/breathing/in/7.png"],
  out: ["/breathing/out/1.png", "/breathing/out/2.png", "/breathing/out/3.png", "/breathing/out/4.png", "/breathing/out/5.png", "/breathing/out/6.png", "/breathing/out/7.png"],
  rest: ["/breathing/rest/1.png"],
  hold: ["/breathing/hold/1.png"]
};
const duration = {
  in: 4e3,
  hold: 5e3,
  out: 4e3,
  rest: 3e3
};
const BreathingCircleStyled = styled.div`
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  margin: 0 auto;
  margin-top: 0.5rem;

  .sprite {
    z-index: 2;
    position: absolute;
    height: 9rem;
  }

  .topCircle {
    height: 0%;
    aspect-ratio: 1;
    background-color: white;
    border-radius: 50%;
    animation: circle 10s infinite ease-in-out;
    transition: background-color 0.1s linear;
  }

  .topCircle.in {
    height: 180px;
    background-color: rgba(21, 219, 219, 0.765);
    transition: height 4.5s, background-color 4.5s linear;
  }

  .topCircle.hold {
    height: 180px;
    background-color: rgba(21, 219, 219, 0.765);
  }

  .topCircle.out {
    height: 0%;
    background-color: white;
    transition: height 5s, background-color 5s linear;
  }

  .topCircle.rest {
    background-color: white;
    height: 0%;
  }

  .bottomCircle {
    position: absolute;
    aspect-ratio: 1/1;
    height: 180px;
    background-color: rgba(255, 255, 255, 0.368);
    border-radius: 50%;
    z-index: -0.5;
    border: 3px solid rgba(21, 219, 219, 0.765);
    box-sizing: border-box;
  }
`;
function Instructions(props) {
  const {
    status
  } = props;
  const [fadeout, setFadeout] = react.exports.useState(false);
  react.exports.useEffect(() => {
    if (status.mode === "out")
      return;
    setFadeout(false);
    const modeDuration = duration[status.mode];
    const timeout = setTimeout(() => {
      setFadeout(true);
    }, modeDuration - 500);
    return () => clearTimeout(timeout);
  }, [status]);
  return /* @__PURE__ */ jsx(InstructionsStyled, {
    className: `${status.mode !== "rest" && "fade-in"} ${fadeout && "fade-out"}`,
    children: status.text
  });
}
const InstructionsStyled = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;
function BreathingCircle(props) {
  const {
    status,
    breathingRef,
    setStatus
  } = props;
  const [sprite, setSprite] = react.exports.useState(0);
  const spriteRef = react.exports.useRef(null);
  react.exports.useEffect(() => {
    Object.keys(sprites).forEach((mode) => {
      sprites[mode].forEach((image) => {
        const imageElement = new Image();
        imageElement.src = image;
      });
    });
  }, []);
  react.exports.useEffect(() => {
    if (sprite === sprites[status.mode].length - 1) {
      clearInterval(spriteRef.current);
    }
  }, [sprite]);
  react.exports.useEffect(() => {
    if (!status.on) {
      clearInterval(spriteRef.current);
    }
  }, [status]);
  function animateSprite() {
    spriteRef.current = setInterval(() => {
      setSprite((prev) => prev + 1);
    }, 400);
  }
  react.exports.useEffect(() => {
    if (!status.on)
      return;
    if (status.mode === "hold") {
      setSprite(0);
      breathingRef.current = setTimeout(() => {
        setStatus({
          on: true,
          mode: "out",
          text: "Slowly breathe out"
        });
      }, duration.hold);
    }
    if (status.mode === "out") {
      setSprite(0);
      breathingRef.current = setTimeout(() => {
        setStatus({
          on: true,
          mode: "rest",
          text: "Slowly breathe out"
        });
      }, duration.out);
      animateSprite();
    }
    if (status.mode === "rest") {
      setSprite(0);
      breathingRef.current = setTimeout(() => {
        setStatus({
          on: true,
          mode: "in",
          text: "Slowly breathe in"
        });
      }, duration.rest);
    }
    if (status.mode === "in") {
      setSprite(0);
      breathingRef.current = setTimeout(() => {
        setStatus({
          on: true,
          mode: "hold",
          text: "Hold your breath"
        });
      }, duration.in);
      animateSprite();
    }
  }, [status, breathingRef]);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs(BreathingCircleStyled, {
      children: [/* @__PURE__ */ jsx("div", {
        className: `topCircle ${status.mode}`
      }), /* @__PURE__ */ jsx("div", {
        className: "bottomCircle"
      }), status.on && /* @__PURE__ */ jsx("img", {
        className: "sprite",
        src: sprites[status.mode][sprite]
      }), !status.on && /* @__PURE__ */ jsx("img", {
        className: "sprite",
        src: sprites.in[0]
      })]
    }), /* @__PURE__ */ jsx(Instructions, {
      status
    })]
  });
}
function BreathingCard() {
  const [status, setStatus] = react.exports.useState({
    on: false,
    mode: "rest",
    text: " "
  });
  const breathingRef = react.exports.useRef(null);
  function startBreathing() {
    setStatus({
      on: true,
      mode: "in",
      text: "Slowly breathe in"
    });
  }
  function stopBreathing() {
    clearTimeout(breathingRef.current);
    breathingRef.current = null;
    setStatus({
      on: false,
      mode: "rest",
      text: " "
    });
  }
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(BreathingCircle, {
      status,
      breathingRef,
      setStatus
    }), /* @__PURE__ */ jsx(ControlButton$1, {
      status,
      startBreathing,
      stopBreathing
    })]
  });
}
function Breathing() {
  return /* @__PURE__ */ jsx(BreathingCard, {});
}
const CompleteCardStyled = styled.div`
  position: absolute;
  z-index: 5;
  inset: 0;
  height: 90%;
  width: 90%;
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--default-light);
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 4px 1.2rem var(--accent);
  box-sizing: border-box;
  flex-direction: column;
  margin: 0 auto;

  h3 {
    margin: 0;
  }

  .close-button {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1.2rem;
    padding: 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }

  .notice {
    font-size: 0.8rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 15rem;
    margin: 1rem auto;

    * {
      display: flex;
      flex-direction: column;
    }

    .stats-streak {
      font-size: 0.7rem;
    }

    .stats-number {
      font-size: 2rem;
    }
  }

  .share-button {
    width: 12rem;
    height: 2.5rem;
    border-radius: 1.25rem;
    background-color: var(--accent);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin: 1rem auto 0 auto;
    transition: 150ms ease-in-out;

    &:hover {
      opacity: 80%;
      cursor: pointer;
    }

    svg {
      height: 1rem;
      margin-right: 0.25rem;
    }
  }
`;
function CompleteCard(props) {
  const {
    title,
    setIsComplete,
    progress,
    mode
  } = props;
  function handleStreak(progress2) {
    const isFullyCompleted = Object.values(progress2).every((value) => value === true);
    const today = new Date().toLocaleDateString();
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = yesterdayDate.toLocaleDateString();
    const latestDate = localStorage.getItem(`${mode}-latest`);
    const previousDate = localStorage.getItem(`${mode}-previous`);
    if (!isFullyCompleted) {
      if (latestDate && latestDate !== today && latestDate !== yesterday) {
        localStorage.setItem(`${mode}-streak`, "0");
      }
      return;
    }
    if (latestDate === today) {
      return;
    }
    if (latestDate === yesterday || !previousDate) {
      const oldStreak = localStorage.getItem(`${mode}-streak`);
      const newStreak = Number(oldStreak) + 1;
      localStorage.setItem(`${mode}-streak`, String(newStreak));
      const maxStreak = Number(localStorage.getItem(`${mode}-maxstreak`));
      if (newStreak > maxStreak) {
        localStorage.setItem(`${mode}-maxstreak`, String(newStreak));
      }
    } else {
      localStorage.setItem(`${mode}-streak`, "1");
    }
    localStorage.setItem(`${mode}-previous`, latestDate || "");
    localStorage.setItem(`${mode}-latest`, today);
  }
  handleStreak(progress);
  return /* @__PURE__ */ jsxs(CompleteCardStyled, {
    className: "fade-in",
    children: [/* @__PURE__ */ jsx("button", {
      className: "close-button",
      type: "button",
      onClick: () => setIsComplete(false),
      children: "\u274C"
    }), /* @__PURE__ */ jsx("h3", {
      children: "Nice job!"
    }), /* @__PURE__ */ jsxs("p", {
      children: ["You completed today's ", /* @__PURE__ */ jsx("strong", {
        children: title
      }), " set"]
    }), /* @__PURE__ */ jsxs("div", {
      className: "stats-grid",
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx("span", {
          className: "stats-number",
          children: localStorage.getItem(`${mode}-streak`)
        }), /* @__PURE__ */ jsx("span", {
          className: "stats-streak",
          children: "Current streak"
        })]
      }), /* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx("span", {
          className: "stats-number",
          children: localStorage.getItem(`${mode}-maxstreak`)
        }), /* @__PURE__ */ jsx("span", {
          className: "stats-streak",
          children: "Longest streak"
        })]
      })]
    })]
  });
}
function Sprite(props) {
  const {
    data,
    speed
  } = props;
  const [index2, setIndex] = react.exports.useState(0);
  const sprite = data == null ? void 0 : data.images[index2];
  let spriteRef = react.exports.useRef(null);
  react.exports.useEffect(() => {
    if (data) {
      spriteRef = setTimeout(() => {
        if (index2 >= data.images.length - 1) {
          setIndex(0);
        } else {
          setIndex((prev) => prev + 1);
        }
      }, speed);
    } else {
      clearInterval(spriteRef);
    }
  }, [data, index2]);
  return /* @__PURE__ */ jsxs(SpriteContainer, {
    children: [!sprite && /* @__PURE__ */ jsx(SpriteImage, {
      src: "/neck_stretch/leftandright/1.png",
      alt: "Execising bunny idle"
    }), sprite && /* @__PURE__ */ jsx(SpriteImage, {
      src: sprite,
      alt: `${data.title} demonstration`
    })]
  });
}
const SpriteContainer = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
`;
const SpriteImage = styled.img`
  height: 9rem;
  margin: 0 auto;
`;
const ExerciseContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 30rem;
  width: 100%;
  height: fit-content;
  background-color: var(--accent-transparent);
  border-radius: 1rem;
  padding: 0.5rem;
  position: relative;

  .main-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    margin: 0 auto;
  }

  .exercise-info {
    width: 100%;
    flex: 1;
  }

  .status {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    top: 6.5rem;

    h4 {
      position: absolute;
      margin-right: 1rem;
      bottom: 1.5rem;
      animation: ${(props) => props.status === "break" ? "glow 1s ease-in-out infinite" : "none"};
    }
  }

  h3 {
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }

  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;

    svg {
      position: absolute;
      right: 0;
      height: 1.1rem;
      fill: var(--default-black);
      cursor: pointer;
    }
  }

  ul {
    padding: 0;
  }

  li {
    text-align: left;
    font-size: 0.7rem;
    margin-top: 0.7rem;
    list-style: none;
    animation: ${(props) => props.status === "break" ? "text-shimmer 1s ease-in-out infinite" : "none"};
  }

  @keyframes glow {
    0% {
      color: var(--default-black);
    }
    50% {
      color: green;
    }
    100% {
      color: var(--default-black);
    }
  }

  @keyframes text-shimmer {
    0% {
      opacity: 100%;
    }
    50% {
      opacity: 50%;
    }
    100% {
      opacity: 100%;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
function StartButton(props) {
  return /* @__PURE__ */ jsx(StartButtonStyled, {
    type: "button",
    onClick: props.onClick,
    title: "Start exercises",
    children: /* @__PURE__ */ jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 384 512",
      children: /* @__PURE__ */ jsx("path", {
        d: "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
      })
    })
  });
}
const StartButtonStyled = styled.button`
  height: 3.5rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--accent);
  transition: 0.1s ease-in-out;
  margin-right: 1rem;

  &:hover {
    opacity: 80%;
    cursor: pointer;
  }

  &:active {
    transform: translateY(2px);
  }

  svg {
    height: 55%;
    margin-left: 5%;
    fill: var(--default-black);
  }
`;
const StretchPage = styled.div`
  box-sizing: border-box;
  padding: 0.5rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  cursor: default;

  .button-back {
    left: 0;
    margin-left: 1rem;
    position: absolute;

    img {
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  .under-exercise {
    position: relative;
    max-width: 31rem;
    width: 100%;
  }

  .under-exercise > *:last-child {
    position: absolute;
    top: 0;
    right: 0;
  }

  .progress-circles {
    margin-top: 1rem;
  }

  .control-buttons-container {
    padding: 0;
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  @media (max-width: 550px) {
    .under-exercise > *:last-child {
      right: -1rem;
    }
  }
`;
styled.div`
  max-width: 80%;
  margin-top: 0.1rem;

  p {
    font-size: 0.7rem;
    opacity: 80%;
    font-style: italic;
  }

  h2 {
    font-size: 1.7rem;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    p {
      display: ${(props) => props.status !== "off" && "none"};
    }
  }
`;
const ProgressCircle = styled.div`
  display: inline-block;
  height: 9px;
  aspect-ratio: 1/1;
  border-radius: 100%;
  background-color: ${(props) => props.complete ? "var(--accent)" : "var(--default-black)"};
  opacity: ${(props) => props.complete ? "100%" : "40%"};
  margin: 0 3px;
`;
const Timer = styled.div`
  height: 3.5rem;
  aspect-ratio: 1/1;
  margin-right: 1rem;
  border-radius: 50%;
  box-sizing: border-box;
  color: var(--default-black);
  border: 3px solid
    ${(props) => props.isPaused || props.status === "break" ? "var(--secondary-accent)" : "var(--accent-dark)"};
  border: 3px solid
    ${(props) => props.isPaused && !props.autoplay ? "var(--accent-transparent2)" : "var(--accent-dark)"};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.15s ease-in-out;
  position: relative;
  font-size: 1.1rem;
  font-weight: 700;

  span {
    position: absolute;
    top: 1.5rem;
    font-size: 1.5rem;
    opacity: 60%;
  }
`;
function ExerciseCard(props) {
  const {
    currentExercise,
    status,
    seconds,
    autoplay,
    speed,
    handleStart,
    isPaused
  } = props;
  const [instructionsOn, setInstructionsOn] = react.exports.useState(false);
  if (!currentExercise)
    return /* @__PURE__ */ jsx(ExerciseContainer, {
      status,
      children: /* @__PURE__ */ jsxs("div", {
        className: "main-content",
        children: [/* @__PURE__ */ jsx(Sprite, {
          data: currentExercise
        }), /* @__PURE__ */ jsx("div", {
          className: "status",
          children: /* @__PURE__ */ jsx(StartButton, {
            onClick: handleStart
          })
        })]
      })
    });
  return /* @__PURE__ */ jsxs(ExerciseContainer, {
    status,
    children: [/* @__PURE__ */ jsxs("div", {
      className: "main-content",
      children: [/* @__PURE__ */ jsx(Sprite, {
        data: currentExercise,
        speed
      }), autoplay && /* @__PURE__ */ jsxs("div", {
        className: "status",
        children: [/* @__PURE__ */ jsx(Timer, {
          isPaused,
          status,
          autoplay,
          children: seconds
        }), /* @__PURE__ */ jsx("h4", {
          children: status === "break" && "Get ready!"
        }), /* @__PURE__ */ jsx("h4", {
          children: seconds === currentExercise.duration && "Go!"
        })]
      }), !autoplay && /* @__PURE__ */ jsxs("div", {
        className: "status",
        children: [/* @__PURE__ */ jsx(Timer, {
          isPaused,
          status,
          autoplay,
          children: seconds
        }), /* @__PURE__ */ jsx("h4", {
          children: seconds === currentExercise.duration && "Next exercise:"
        })]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "exercise-info",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "title-container",
        children: [/* @__PURE__ */ jsx("h3", {
          className: "title",
          children: currentExercise.title
        }), !instructionsOn && /* @__PURE__ */ jsx("svg", {
          className: "instructions-button",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512",
          onClick: () => setInstructionsOn(true),
          children: /* @__PURE__ */ jsx("path", {
            d: "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
          })
        }), instructionsOn && /* @__PURE__ */ jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512",
          onClick: () => setInstructionsOn(false),
          children: /* @__PURE__ */ jsx("path", {
            d: "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
          })
        })]
      }), instructionsOn && /* @__PURE__ */ jsx("ul", {
        children: currentExercise.instructions.map((instruction, id) => {
          return /* @__PURE__ */ jsx("li", {
            children: instruction
          }, id);
        })
      })]
    })]
  });
}
const buttonIcons = {
  Pause: /* @__PURE__ */ jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512",
    children: /* @__PURE__ */ jsx("path", {
      d: "M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
    })
  }),
  Resume: /* @__PURE__ */ jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 384 512",
    children: /* @__PURE__ */ jsx("path", {
      d: "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
    })
  }),
  Stop: /* @__PURE__ */ jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 384 512",
    children: /* @__PURE__ */ jsx("path", {
      d: "M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
    })
  }),
  Skip: /* @__PURE__ */ jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    children: /* @__PURE__ */ jsx("path", {
      d: "M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"
    })
  })
};
function ControlButton(props) {
  const {
    title,
    onClick,
    isLast,
    status,
    autoplay
  } = props;
  if (isLast || status === "off") {
    return /* @__PURE__ */ jsxs(DisabledButton, {
      title,
      type: "button",
      disabled: true,
      onClick,
      children: [buttonIcons[title], /* @__PURE__ */ jsx("span", {
        children: title
      })]
    });
  }
  return /* @__PURE__ */ jsxs(StyledControlButton, {
    title,
    type: "button",
    onClick,
    children: [buttonIcons[title], /* @__PURE__ */ jsx("span", {
      children: title
    })]
  });
}
const StyledControlButton = styled.button`
  margin: 0;
  height: 2rem;
  width: 6rem;
  min-width: fit-content;
  border: 3px solid var(--accent);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.1s ease-in-out;
  background-color: ${(props) => props.title === "Resume" && "var(--accent)"};
  background-color: ${(props) => props.title === "Start" && "var(--accent)"};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.title === "Resume" ? "var(--accent-transparent)" : "var(--accent)"};
    background-color: ${(props) => props.title === "Start" ? "var(--accent-transparent)" : "var(--accent)"};
    span {
      color: #353535;
    }
    svg {
      fill: #353535;
    }
  }

  svg {
    height: 55%;
    fill: var(--default-black);
    transition: 0.1s ease-in-out;
  }

  span {
    font-size: 0.8rem;
    margin-left: 0.2rem;
    color: ${(props) => props.title === "Resume" && "#353535"};
    color: ${(props) => props.title === "Start" && "#353535"};
    transition: 0.1s ease-in-out;
  }
`;
const DisabledButton = styled.button`
  height: 2rem;
  width: 6rem;
  min-width: fit-content;
  border: 2px solid var(--default-black);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: var(--default-black);
  opacity: 50%;

  svg {
    height: 55%;
    fill: var(--default-black);
  }

  span {
    font-size: 0.8rem;
    margin-left: 0.2rem;
  }
`;
function usePreloadImages() {
  function preloadImages(exercises) {
    exercises.forEach((exercise) => {
      exercise.images.forEach((image) => {
        const imageElement = new Image();
        imageElement.src = image;
      });
    });
  }
  return preloadImages;
}
function Stretch(props) {
  const {
    mode
  } = props;
  const {
    autoplay
  } = useAutoplay();
  const preloadImages = usePreloadImages();
  const data = mode ? ALL_STRETCHES[mode] : ALL_STRETCHES.neck_stretch;
  data.exercises.reduce((acc, val) => {
    return acc = acc + val.duration + 5;
  }, 0);
  const [currentExercise, setCurrentExercise] = react.exports.useState(null);
  const [seconds, setSeconds] = react.exports.useState(null);
  const [status, setStatus] = react.exports.useState("off");
  const [isPaused, setIsPaused] = react.exports.useState(false);
  const [isComplete, setIsComplete] = react.exports.useState(false);
  const [isLast, setIsLast] = react.exports.useState(false);
  const [progress, setProgress] = react.exports.useState({});
  const timer = react.exports.useRef();
  const scrollRef = react.exports.useRef(null);
  react.exports.useEffect(() => {
    clearProgress();
    preloadImages(data.exercises);
  }, []);
  react.exports.useEffect(() => {
    var _a;
    (_a = scrollRef.current) == null ? void 0 : _a.scrollIntoView();
  }, [data, currentExercise]);
  react.exports.useEffect(() => {
    if (data.exercises.indexOf(currentExercise) === data.exercises.length - 1) {
      setIsLast(true);
    }
    if (seconds === 0 && status === "on") {
      const index2 = data.exercises.indexOf(currentExercise);
      setProgress({
        ...progress,
        [index2]: true
      });
      if (isLast) {
        setIsComplete(true);
        setStatus("off");
        setCurrentExercise(null);
        handleTimer.stop();
      } else {
        if (!autoplay) {
          handleTimer.pause();
          setCurrentExercise((prev) => {
            return data.exercises[data.exercises.indexOf(prev) + 1];
          });
          setSeconds(currentExercise.duration);
        } else {
          takeBreak();
        }
      }
    }
    if (seconds === 0 && status === "break") {
      setStatus("on");
      setSeconds(currentExercise.duration);
      handleTimer.start();
    }
  }, [status, seconds, progress, currentExercise, data, isLast]);
  function handleStart() {
    if (currentExercise)
      return;
    clearProgress();
    setIsLast(false);
    setIsComplete(false);
    setCurrentExercise(data.exercises[0]);
    if (autoplay) {
      setStatus("break");
      setSeconds(data.breakDuration);
      handleTimer.start();
    } else {
      setStatus("on");
      setSeconds(data.exercises[0].duration);
      setIsPaused(true);
    }
  }
  function handlePause() {
    handleTimer.pause();
  }
  function handleResume() {
    if (!autoplay) {
      setStatus("on");
    }
    setIsPaused(false);
    handleTimer.start();
  }
  function handleSkip() {
    if (isLast)
      return;
    if (status === "off")
      return;
    setIsPaused(false);
    clearInterval(timer.current);
    timer.current = 0;
    setCurrentExercise((prev) => {
      return data.exercises[data.exercises.indexOf(prev) + 1];
    });
    setStatus("break");
    if (autoplay) {
      setSeconds(data.breakDuration);
      handleTimer.start();
    } else {
      setSeconds(currentExercise.duration);
      handleTimer.pause();
    }
  }
  function handleStop() {
    setStatus("off");
    setCurrentExercise(null);
    handleTimer.stop();
    clearProgress();
  }
  function takeBreak() {
    setStatus("break");
    setCurrentExercise((prev) => {
      return data.exercises[data.exercises.indexOf(prev) + 1];
    });
    setSeconds(data.breakDuration);
    handleTimer.start();
  }
  function clearProgress() {
    setProgress(data.exercises.reduce((acc, val, index2) => {
      return {
        ...acc,
        [index2]: false
      };
    }, {}));
  }
  const handleTimer = {
    start: function() {
      if (!timer.current) {
        timer.current = setInterval(() => {
          setSeconds((prev) => prev - 1);
        }, 1e3);
      }
    },
    pause: function() {
      if (status === "off")
        return;
      setIsPaused(true);
      clearInterval(timer.current);
      timer.current = 0;
    },
    stop: function() {
      setIsPaused(false);
      setIsLast(false);
      clearInterval(timer.current);
      timer.current = 0;
      setSeconds(null);
    }
  };
  return /* @__PURE__ */ jsxs(StretchPage, {
    children: [/* @__PURE__ */ jsx(ExerciseCard, {
      currentExercise,
      status,
      seconds,
      autoplay,
      speed: data.speed,
      handleStart,
      isPaused
    }), /* @__PURE__ */ jsx("div", {
      className: "progress-circles",
      children: Object.keys(progress).map((key) => {
        return /* @__PURE__ */ jsx(ProgressCircle, {
          complete: progress[key]
        }, key);
      })
    }), /* @__PURE__ */ jsxs("ul", {
      ref: scrollRef,
      className: "control-buttons-container",
      children: [/* @__PURE__ */ jsx(ControlButton, {
        title: "Stop",
        onClick: handleStop,
        status
      }), isPaused && autoplay && /* @__PURE__ */ jsx(ControlButton, {
        title: "Resume",
        onClick: handleResume
      }), isPaused && !autoplay && /* @__PURE__ */ jsx(ControlButton, {
        title: "Start",
        onClick: handleResume
      }), !isPaused && /* @__PURE__ */ jsx(ControlButton, {
        title: "Pause",
        onClick: handlePause,
        status
      }), /* @__PURE__ */ jsx(ControlButton, {
        title: "Skip",
        onClick: handleSkip,
        isLast,
        status
      })]
    }), isComplete && /* @__PURE__ */ jsx(CompleteCard, {
      mode,
      title: data.title,
      setIsComplete,
      progress
    })]
  });
}
function ToggleButton(props) {
  const {
    on,
    toggle,
    children
  } = props;
  return /* @__PURE__ */ jsxs(Toggle, {
    on,
    children: [/* @__PURE__ */ jsx("span", {
      className: "label-text",
      children
    }), /* @__PURE__ */ jsx("input", {
      type: "checkbox",
      checked: on,
      onChange: toggle
    }), /* @__PURE__ */ jsx("span", {
      className: "toggle-on",
      children: /* @__PURE__ */ jsx("span", {
        className: "toggle-button"
      })
    })]
  });
}
const Toggle = styled.label`
  .label-text {
    margin-right: 0.5rem;
  }

  display: flex;
  align-items: center;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .toggle-on {
    margin-left: 0.5rem;
    width: 2.2rem;
    height: 1.2rem;
    border: 3px solid
      ${(props) => props.on ? "var(--accent-dark)" : "#b1b1b1"};
    border-radius: 1rem;
    display: inline-block;
    top: 0;
    left: 0;
    background-color: ${(props) => props.on ? "var(--accent-dark)" : "#b1b1b1"};
    position: relative;
    margin-left: auto;
  }

  .toggle-button {
    position: absolute;
    left: ${(props) => props.on ? "1rem" : "0"};
    border-radius: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    background-color: var(--default-light);
    transition: all 0.1s ease-in-out;
  }
`;
function Settings() {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const {
    autoplay,
    toggleAutoplay
  } = useAutoplay();
  react.exports.useState("0");
  react.exports.useState("Save");
  const currentStreaks = Object.keys(localStorage).reduce((acc, val) => {
    if (val.includes("streak") && !val.includes("max")) {
      const keyname = val.split("_")[0].toLowerCase();
      acc[keyname] = localStorage.getItem(val);
    }
    return acc;
  }, {});
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs(SettingsStyled, {
      children: [/* @__PURE__ */ jsx(ToggleButton, {
        toggle: toggleTheme,
        on: theme === "dark",
        children: "Dark mode:"
      }), /* @__PURE__ */ jsx(ToggleButton, {
        toggle: toggleAutoplay,
        on: autoplay,
        children: "Autoplay:"
      }), /* @__PURE__ */ jsx("h3", {
        children: "Current streaks:"
      }), /* @__PURE__ */ jsxs("ul", {
        className: "streaks",
        children: [Object.keys(currentStreaks).length < 1 && "Complete an exercise to get a streak going", Object.keys(currentStreaks).map((key) => {
          return /* @__PURE__ */ jsxs("li", {
            children: [/* @__PURE__ */ jsxs("span", {
              children: [key, " stretch: "]
            }), /* @__PURE__ */ jsxs("span", {
              children: [currentStreaks[key], " ", currentStreaks[key] === "1" ? "day" : "days"]
            })]
          }, key);
        })]
      })]
    }), /* @__PURE__ */ jsx("span", {
      className: "copyright",
      children: "\xA9 MT"
    })]
  });
}
const SettingsStyled = styled.div`
  min-height: 10rem;
  min-width: 15rem;
  background-color: var(--accent-transparent);
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;

  button {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 1.5rem;
    padding: 0.5rem;
    color: var(--default-black);

    svg {
      fill: var(--default-black);
    }

    &:hover {
      cursor: pointer;
    }
  }

  h3 {
    margin-top: 1rem;
  }

  .streaks {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: var(--default-black);

    li {
      display: flex;
      justify-content: space-between;
      width: 10rem;
    }

    li *::first-letter {
      text-transform: uppercase;
    }
  }
`;
function GlobalStyles() {
  const {
    theme
  } = useTheme();
  if (theme === "light") {
    return /* @__PURE__ */ jsx(LightGlobalStyles, {});
  } else {
    return /* @__PURE__ */ jsx(DarkGlobalStyles, {});
  }
}
const LightGlobalStyles = We`
  :root {
    --default-black: #353535;
    --default-light: #EBE9E5;
    --default-light-transparent: #ffffff53;
    --accent: #92e723;
    --accent-transparent: #a2e72393;
    --accent-transparent2: #a2e7235b;
    --accent-dark: #73c507;
    --secondary-accent: #f1c23f;

    background-color: var(--default-light);
  }
`;
const DarkGlobalStyles = We`
  :root {
    --default-black: #EBE9E5;
    --default-light: #161616;
    --default-light-transparent: #35353545;
    --accent: #92e723;
    --accent-transparent: #a2e72393;
    --accent-transparent2: #a2e7235b;
    --accent-dark: #73c507;
    --secondary-accent: #f1c23f;

    background-color: var(--default-light);
  }
`;
function Popup() {
  const [mode, setMode] = react.exports.useState("");
  return /* @__PURE__ */ jsx(ThemeProvider, {
    children: /* @__PURE__ */ jsxs(AutoplayProvider, {
      children: [/* @__PURE__ */ jsx(GlobalStyles, {}), /* @__PURE__ */ jsxs(AppStyled, {
        id: "app",
        children: [/* @__PURE__ */ jsx(Header, {
          setMode,
          mode
        }), !mode && /* @__PURE__ */ jsx(Main, {
          setMode
        }), mode === "breathing" && /* @__PURE__ */ jsx(Breathing, {}), mode === "settings" && /* @__PURE__ */ jsx(Settings, {}), mode !== "" && mode !== "breathing" && mode !== "settings" && /* @__PURE__ */ jsx(Stretch, {
          mode
        })]
      })]
    })
  });
}
addHmrIntoView("pages/popup");
function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }
  const root = createRoot(appContainer);
  root.render(/* @__PURE__ */ jsx(Popup, {}));
}
init();
