"use strict";
(self.webpackChunkdoc_orion = self.webpackChunkdoc_orion || []).push([
  [780],
  {
    6780: (e, t, r) => {
      function n(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function o(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function a(e, t, r) {
        var a,
          c = t.initialState;
        return {
          getState: function () {
            return c;
          },
          dispatch: function (a, i) {
            var l = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? n(Object(r), !0).forEach(function (t) {
                      o(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r),
                    )
                  : n(Object(r)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t),
                      );
                    });
              }
              return e;
            })({}, c);
            (c = e(c, { type: a, props: t, payload: i })),
              r({ state: c, prevState: l });
          },
          pendingRequests:
            ((a = []),
            {
              add: function (e) {
                return (
                  a.push(e),
                  e.finally(function () {
                    a = a.filter(function (t) {
                      return t !== e;
                    });
                  })
                );
              },
              cancelAll: function () {
                a.forEach(function (e) {
                  return e.cancel();
                });
              },
              isEmpty: function () {
                return 0 === a.length;
              },
            }),
        };
      }
      function c(e) {
        return e.reduce(function (e, t) {
          return e.concat(t);
        }, []);
      }
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                s(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function s(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function u(e) {
        return 0 === e.collections.length
          ? 0
          : e.collections.reduce(function (e, t) {
              return e + t.items.length;
            }, 0);
      }
      r.r(t), r.d(t, { DocSearchModal: () => Dr });
      var f = 0;
      var m = function () {};
      function p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function d(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function h(e, t) {
        var r = [];
        return Promise.resolve(e(t)).then(function (e) {
          return (
            Array.isArray(e),
            Promise.all(
              e
                .filter(function (e) {
                  return Boolean(e);
                })
                .map(function (e) {
                  if ((e.sourceId, r.includes(e.sourceId)))
                    throw new Error(
                      "[Autocomplete] The `sourceId` ".concat(
                        JSON.stringify(e.sourceId),
                        " is not unique.",
                      ),
                    );
                  r.push(e.sourceId);
                  var t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? p(Object(r), !0).forEach(function (t) {
                            d(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(r),
                          )
                        : p(Object(r)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                            );
                          });
                    }
                    return e;
                  })(
                    {
                      getItemInputValue: function (e) {
                        return e.state.query;
                      },
                      getItemUrl: function () {},
                      onSelect: function (e) {
                        (0, e.setIsOpen)(!1);
                      },
                      onActive: m,
                    },
                    e,
                  );
                  return Promise.resolve(t);
                }),
            )
          );
        });
      }
      function v(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return y(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return y(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return y(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function g(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                O(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function O(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function S(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(r), !0).forEach(function (t) {
                j(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : S(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function j(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function w(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(r), !0).forEach(function (t) {
                I(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : w(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function I(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function D(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return C(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return C(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return C(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function k(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? k(Object(r), !0).forEach(function (t) {
                x(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : k(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function x(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function N(e) {
        return Boolean(e.execute);
      }
      function R(e, t) {
        return (
          (r = e),
          Boolean(null == r ? void 0 : r.execute)
            ? A(
                A({}, e),
                {},
                {
                  requests: e.queries.map(function (r) {
                    return {
                      query: r,
                      sourceId: t,
                      transformResponse: e.transformResponse,
                    };
                  }),
                },
              )
            : { items: e, sourceId: t }
        );
        var r;
      }
      function _(e) {
        var t = e
          .reduce(function (e, t) {
            if (!N(t)) return e.push(t), e;
            var r = t.searchClient,
              n = t.execute,
              o = t.requesterId,
              a = t.requests,
              c = e.find(function (e) {
                return (
                  N(t) &&
                  N(e) &&
                  e.searchClient === r &&
                  Boolean(o) &&
                  e.requesterId === o
                );
              });
            if (c) {
              var i;
              (i = c.items).push.apply(i, D(a));
            } else {
              var l = { execute: n, requesterId: o, items: a, searchClient: r };
              e.push(l);
            }
            return e;
          }, [])
          .map(function (e) {
            if (!N(e)) return Promise.resolve(e);
            var t = e,
              r = t.execute,
              n = t.items;
            return r({ searchClient: t.searchClient, requests: n });
          });
        return Promise.all(t).then(function (e) {
          return c(e);
        });
      }
      function q(e, t) {
        return t.map(function (t) {
          var r = e.filter(function (e) {
              return e.sourceId === t.sourceId;
            }),
            n = r.map(function (e) {
              return e.items;
            }),
            o = r[0].transformResponse,
            a = o
              ? o(
                  (function (e) {
                    var t = e.map(function (e) {
                      var t;
                      return P(
                        P({}, e),
                        {},
                        {
                          hits:
                            null === (t = e.hits) || void 0 === t
                              ? void 0
                              : t.map(function (t) {
                                  return P(
                                    P({}, t),
                                    {},
                                    {
                                      __autocomplete_indexName: e.index,
                                      __autocomplete_queryID: e.queryID,
                                    },
                                  );
                                }),
                        },
                      );
                    });
                    return {
                      results: t,
                      hits: t
                        .map(function (e) {
                          return e.hits;
                        })
                        .filter(Boolean),
                      facetHits: t
                        .map(function (e) {
                          var t;
                          return null === (t = e.facetHits) || void 0 === t
                            ? void 0
                            : t.map(function (e) {
                                return {
                                  label: e.value,
                                  count: e.count,
                                  _highlightResult: {
                                    label: { value: e.highlighted },
                                  },
                                };
                              });
                        })
                        .filter(Boolean),
                    };
                  })(n),
                )
              : n;
          return (
            Array.isArray(a),
            a.every(Boolean),
            'The `getItems` function from source "'
              .concat(
                t.sourceId,
                '" must return an array of items but returned ',
              )
              .concat(
                JSON.stringify(void 0),
                ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems",
              ),
            { source: t, items: a }
          );
        });
      }
      function T(e, t) {
        var r = t;
        return {
          then: function (t, n) {
            return T(e.then(H(t, r, e), H(n, r, e)), r);
          },
          catch: function (t) {
            return T(e.catch(H(t, r, e)), r);
          },
          finally: function (t) {
            return (
              t && r.onCancelList.push(t),
              T(
                e.finally(
                  H(
                    t &&
                      function () {
                        return (r.onCancelList = []), t();
                      },
                    r,
                    e,
                  ),
                ),
                r,
              )
            );
          },
          cancel: function () {
            r.isCanceled = !0;
            var e = r.onCancelList;
            (r.onCancelList = []),
              e.forEach(function (e) {
                e();
              });
          },
          isCanceled: function () {
            return !0 === r.isCanceled;
          },
        };
      }
      function L(e) {
        return T(
          new Promise(function (t, r) {
            return e(t, r);
          }),
          { isCanceled: !1, onCancelList: [] },
        );
      }
      function M(e) {
        return T(e, { isCanceled: !1, onCancelList: [] });
      }
      function H(e, t, r) {
        return e
          ? function (r) {
              return t.isCanceled ? r : e(r);
            }
          : r;
      }
      function F(e) {
        var t = (function (e) {
          var t = e.collections
            .map(function (e) {
              return e.items.length;
            })
            .reduce(function (e, t, r) {
              var n = (e[r - 1] || 0) + t;
              return e.push(n), e;
            }, [])
            .reduce(function (t, r) {
              return r <= e.activeItemId ? t + 1 : t;
            }, 0);
          return e.collections[t];
        })(e);
        if (!t) return null;
        var r =
            t.items[
              (function (e) {
                for (
                  var t = e.state, r = e.collection, n = !1, o = 0, a = 0;
                  !1 === n;

                ) {
                  var c = t.collections[o];
                  if (c === r) {
                    n = !0;
                    break;
                  }
                  (a += c.items.length), o++;
                }
                return t.activeItemId - a;
              })({ state: e, collection: t })
            ],
          n = t.source;
        return {
          item: r,
          itemInputValue: n.getItemInputValue({ item: r, state: e }),
          itemUrl: n.getItemUrl({ item: r, state: e }),
          source: n,
        };
      }
      (L.resolve = function (e) {
        return M(Promise.resolve(e));
      }),
        (L.reject = function (e) {
          return M(Promise.reject(e));
        });
      var U = ["event", "nextState", "props", "query", "refresh", "store"];
      function B(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? B(Object(r), !0).forEach(function (t) {
                K(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : B(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function K(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function $(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var J,
        z,
        W,
        Q = null,
        Z =
          ((J = -1),
          (z = -1),
          (W = void 0),
          function (e) {
            var t = ++J;
            return Promise.resolve(e).then(function (e) {
              return W && t < z ? W : ((z = t), (W = e), e);
            });
          });
      function Y(e) {
        var t = e.event,
          r = e.nextState,
          n = void 0 === r ? {} : r,
          o = e.props,
          a = e.query,
          i = e.refresh,
          l = e.store,
          s = $(e, U);
        Q && o.environment.clearTimeout(Q);
        var u = s.setCollections,
          f = s.setIsOpen,
          m = s.setQuery,
          p = s.setActiveItemId,
          d = s.setStatus;
        if ((m(a), p(o.defaultActiveItemId), !a && !1 === o.openOnFocus)) {
          var h,
            v = l.getState().collections.map(function (e) {
              return V(V({}, e), {}, { items: [] });
            });
          d("idle"),
            u(v),
            f(
              null !== (h = n.isOpen) && void 0 !== h
                ? h
                : o.shouldPanelOpen({ state: l.getState() }),
            );
          var y = M(
            Z(v).then(function () {
              return Promise.resolve();
            }),
          );
          return l.pendingRequests.add(y);
        }
        d("loading"),
          (Q = o.environment.setTimeout(function () {
            d("stalled");
          }, o.stallThreshold));
        var g = M(
          Z(
            o
              .getSources(V({ query: a, refresh: i, state: l.getState() }, s))
              .then(function (e) {
                return Promise.all(
                  e.map(function (e) {
                    return Promise.resolve(
                      e.getItems(
                        V({ query: a, refresh: i, state: l.getState() }, s),
                      ),
                    ).then(function (t) {
                      return R(t, e.sourceId);
                    });
                  }),
                )
                  .then(_)
                  .then(function (t) {
                    return q(t, e);
                  })
                  .then(function (e) {
                    return (function (e) {
                      var t = e.collections,
                        r = e.props,
                        n = e.state,
                        o = t.reduce(function (e, t) {
                          return E(
                            E({}, e),
                            {},
                            j(
                              {},
                              t.source.sourceId,
                              E(
                                E({}, t.source),
                                {},
                                {
                                  getItems: function () {
                                    return c(t.items);
                                  },
                                },
                              ),
                            ),
                          );
                        }, {});
                      return c(
                        r.reshape({
                          sources: Object.values(o),
                          sourcesBySourceId: o,
                          state: n,
                        }),
                      )
                        .filter(Boolean)
                        .map(function (e) {
                          return { source: e, items: e.getItems() };
                        });
                    })({ collections: e, props: o, state: l.getState() });
                  });
              }),
          ),
        )
          .then(function (e) {
            var r;
            d("idle"), u(e);
            var c = o.shouldPanelOpen({ state: l.getState() });
            f(
              null !== (r = n.isOpen) && void 0 !== r
                ? r
                : (o.openOnFocus && !a && c) || c,
            );
            var m = F(l.getState());
            if (null !== l.getState().activeItemId && m) {
              var p = m.item,
                h = m.itemInputValue,
                v = m.itemUrl,
                y = m.source;
              y.onActive(
                V(
                  {
                    event: t,
                    item: p,
                    itemInputValue: h,
                    itemUrl: v,
                    refresh: i,
                    source: y,
                    state: l.getState(),
                  },
                  s,
                ),
              );
            }
          })
          .finally(function () {
            d("idle"), Q && o.environment.clearTimeout(Q);
          });
        return l.pendingRequests.add(g);
      }
      var G = ["event", "props", "refresh", "store"];
      function X(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? X(Object(r), !0).forEach(function (t) {
                te(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : X(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function te(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function re(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var ne = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;
      var oe = ["props", "refresh", "store"],
        ae = ["inputElement", "formElement", "panelElement"],
        ce = ["inputElement"],
        ie = ["inputElement", "maxLength"],
        le = ["item", "source"];
      function se(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? se(Object(r), !0).forEach(function (t) {
                fe(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : se(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function fe(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function me(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function pe(e) {
        var t = e.props,
          r = e.refresh,
          n = e.store,
          o = me(e, oe);
        return {
          getEnvironmentProps: function (e) {
            var r = e.inputElement,
              o = e.formElement,
              a = e.panelElement;
            function c(e) {
              (!n.getState().isOpen && n.pendingRequests.isEmpty()) ||
                e.target === r ||
                (!1 ===
                  [o, a].some(function (t) {
                    return (r = t), (n = e.target), r === n || r.contains(n);
                    var r, n;
                  }) &&
                  (n.dispatch("blur", null),
                  t.debug || n.pendingRequests.cancelAll()));
            }
            return ue(
              {
                onTouchStart: c,
                onMouseDown: c,
                onTouchMove: function (e) {
                  !1 !== n.getState().isOpen &&
                    r === t.environment.document.activeElement &&
                    e.target !== r &&
                    r.blur();
                },
              },
              me(e, ae),
            );
          },
          getRootProps: function (e) {
            return ue(
              {
                role: "combobox",
                "aria-expanded": n.getState().isOpen,
                "aria-haspopup": "listbox",
                "aria-owns": n.getState().isOpen
                  ? "".concat(t.id, "-list")
                  : void 0,
                "aria-labelledby": "".concat(t.id, "-label"),
              },
              e,
            );
          },
          getFormProps: function (e) {
            e.inputElement;
            return ue(
              {
                action: "",
                noValidate: !0,
                role: "search",
                onSubmit: function (a) {
                  var c;
                  a.preventDefault(),
                    t.onSubmit(
                      ue({ event: a, refresh: r, state: n.getState() }, o),
                    ),
                    n.dispatch("submit", null),
                    null === (c = e.inputElement) || void 0 === c || c.blur();
                },
                onReset: function (a) {
                  var c;
                  a.preventDefault(),
                    t.onReset(
                      ue({ event: a, refresh: r, state: n.getState() }, o),
                    ),
                    n.dispatch("reset", null),
                    null === (c = e.inputElement) || void 0 === c || c.focus();
                },
              },
              me(e, ce),
            );
          },
          getLabelProps: function (e) {
            return ue(
              {
                htmlFor: "".concat(t.id, "-input"),
                id: "".concat(t.id, "-label"),
              },
              e,
            );
          },
          getInputProps: function (e) {
            var a;
            function c(e) {
              (t.openOnFocus || Boolean(n.getState().query)) &&
                Y(
                  ue(
                    {
                      event: e,
                      props: t,
                      query: n.getState().completion || n.getState().query,
                      refresh: r,
                      store: n,
                    },
                    o,
                  ),
                ),
                n.dispatch("focus", null);
            }
            var i = e || {},
              l = (i.inputElement, i.maxLength),
              s = void 0 === l ? 512 : l,
              u = me(i, ie),
              f = F(n.getState()),
              p = (function (e) {
                return Boolean(e && e.match(ne));
              })(
                (null === (a = t.environment.navigator) || void 0 === a
                  ? void 0
                  : a.userAgent) || "",
              ),
              d = null != f && f.itemUrl && !p ? "go" : "search";
            return ue(
              {
                "aria-autocomplete": "both",
                "aria-activedescendant":
                  n.getState().isOpen && null !== n.getState().activeItemId
                    ? ""
                        .concat(t.id, "-item-")
                        .concat(n.getState().activeItemId)
                    : void 0,
                "aria-controls": n.getState().isOpen
                  ? "".concat(t.id, "-list")
                  : void 0,
                "aria-labelledby": "".concat(t.id, "-label"),
                value: n.getState().completion || n.getState().query,
                id: "".concat(t.id, "-input"),
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "off",
                enterKeyHint: d,
                spellCheck: "false",
                autoFocus: t.autoFocus,
                placeholder: t.placeholder,
                maxLength: s,
                type: "search",
                onChange: function (e) {
                  Y(
                    ue(
                      {
                        event: e,
                        props: t,
                        query: e.currentTarget.value.slice(0, s),
                        refresh: r,
                        store: n,
                      },
                      o,
                    ),
                  );
                },
                onKeyDown: function (e) {
                  !(function (e) {
                    var t = e.event,
                      r = e.props,
                      n = e.refresh,
                      o = e.store,
                      a = re(e, G);
                    if ("ArrowUp" === t.key || "ArrowDown" === t.key) {
                      var c = function () {
                          var e = r.environment.document.getElementById(
                            ""
                              .concat(r.id, "-item-")
                              .concat(o.getState().activeItemId),
                          );
                          e &&
                            (e.scrollIntoViewIfNeeded
                              ? e.scrollIntoViewIfNeeded(!1)
                              : e.scrollIntoView(!1));
                        },
                        i = function () {
                          var e = F(o.getState());
                          if (null !== o.getState().activeItemId && e) {
                            var r = e.item,
                              c = e.itemInputValue,
                              i = e.itemUrl,
                              l = e.source;
                            l.onActive(
                              ee(
                                {
                                  event: t,
                                  item: r,
                                  itemInputValue: c,
                                  itemUrl: i,
                                  refresh: n,
                                  source: l,
                                  state: o.getState(),
                                },
                                a,
                              ),
                            );
                          }
                        };
                      t.preventDefault(),
                        !1 === o.getState().isOpen &&
                        (r.openOnFocus || Boolean(o.getState().query))
                          ? Y(
                              ee(
                                {
                                  event: t,
                                  props: r,
                                  query: o.getState().query,
                                  refresh: n,
                                  store: o,
                                },
                                a,
                              ),
                            ).then(function () {
                              o.dispatch(t.key, {
                                nextActiveItemId: r.defaultActiveItemId,
                              }),
                                i(),
                                setTimeout(c, 0);
                            })
                          : (o.dispatch(t.key, {}), i(), c());
                    } else if ("Escape" === t.key)
                      t.preventDefault(),
                        o.dispatch(t.key, null),
                        o.pendingRequests.cancelAll();
                    else if ("Tab" === t.key)
                      o.dispatch("blur", null), o.pendingRequests.cancelAll();
                    else if ("Enter" === t.key) {
                      if (
                        null === o.getState().activeItemId ||
                        o.getState().collections.every(function (e) {
                          return 0 === e.items.length;
                        })
                      )
                        return void (r.debug || o.pendingRequests.cancelAll());
                      t.preventDefault();
                      var l = F(o.getState()),
                        s = l.item,
                        u = l.itemInputValue,
                        f = l.itemUrl,
                        m = l.source;
                      if (t.metaKey || t.ctrlKey)
                        void 0 !== f &&
                          (m.onSelect(
                            ee(
                              {
                                event: t,
                                item: s,
                                itemInputValue: u,
                                itemUrl: f,
                                refresh: n,
                                source: m,
                                state: o.getState(),
                              },
                              a,
                            ),
                          ),
                          r.navigator.navigateNewTab({
                            itemUrl: f,
                            item: s,
                            state: o.getState(),
                          }));
                      else if (t.shiftKey)
                        void 0 !== f &&
                          (m.onSelect(
                            ee(
                              {
                                event: t,
                                item: s,
                                itemInputValue: u,
                                itemUrl: f,
                                refresh: n,
                                source: m,
                                state: o.getState(),
                              },
                              a,
                            ),
                          ),
                          r.navigator.navigateNewWindow({
                            itemUrl: f,
                            item: s,
                            state: o.getState(),
                          }));
                      else if (t.altKey);
                      else {
                        if (void 0 !== f)
                          return (
                            m.onSelect(
                              ee(
                                {
                                  event: t,
                                  item: s,
                                  itemInputValue: u,
                                  itemUrl: f,
                                  refresh: n,
                                  source: m,
                                  state: o.getState(),
                                },
                                a,
                              ),
                            ),
                            void r.navigator.navigate({
                              itemUrl: f,
                              item: s,
                              state: o.getState(),
                            })
                          );
                        Y(
                          ee(
                            {
                              event: t,
                              nextState: { isOpen: !1 },
                              props: r,
                              query: u,
                              refresh: n,
                              store: o,
                            },
                            a,
                          ),
                        ).then(function () {
                          m.onSelect(
                            ee(
                              {
                                event: t,
                                item: s,
                                itemInputValue: u,
                                itemUrl: f,
                                refresh: n,
                                source: m,
                                state: o.getState(),
                              },
                              a,
                            ),
                          );
                        });
                      }
                    }
                  })(ue({ event: e, props: t, refresh: r, store: n }, o));
                },
                onFocus: c,
                onBlur: m,
                onClick: function (r) {
                  e.inputElement !== t.environment.document.activeElement ||
                    n.getState().isOpen ||
                    c(r);
                },
              },
              u,
            );
          },
          getPanelProps: function (e) {
            return ue(
              {
                onMouseDown: function (e) {
                  e.preventDefault();
                },
                onMouseLeave: function () {
                  n.dispatch("mouseleave", null);
                },
              },
              e,
            );
          },
          getListProps: function (e) {
            return ue(
              {
                role: "listbox",
                "aria-labelledby": "".concat(t.id, "-label"),
                id: "".concat(t.id, "-list"),
              },
              e,
            );
          },
          getItemProps: function (e) {
            var a = e.item,
              c = e.source,
              i = me(e, le);
            return ue(
              {
                id: "".concat(t.id, "-item-").concat(a.__autocomplete_id),
                role: "option",
                "aria-selected":
                  n.getState().activeItemId === a.__autocomplete_id,
                onMouseMove: function (e) {
                  if (a.__autocomplete_id !== n.getState().activeItemId) {
                    n.dispatch("mousemove", a.__autocomplete_id);
                    var t = F(n.getState());
                    if (null !== n.getState().activeItemId && t) {
                      var c = t.item,
                        i = t.itemInputValue,
                        l = t.itemUrl,
                        s = t.source;
                      s.onActive(
                        ue(
                          {
                            event: e,
                            item: c,
                            itemInputValue: i,
                            itemUrl: l,
                            refresh: r,
                            source: s,
                            state: n.getState(),
                          },
                          o,
                        ),
                      );
                    }
                  }
                },
                onMouseDown: function (e) {
                  e.preventDefault();
                },
                onClick: function (e) {
                  var i = c.getItemInputValue({ item: a, state: n.getState() }),
                    l = c.getItemUrl({ item: a, state: n.getState() });
                  (l
                    ? Promise.resolve()
                    : Y(
                        ue(
                          {
                            event: e,
                            nextState: { isOpen: !1 },
                            props: t,
                            query: i,
                            refresh: r,
                            store: n,
                          },
                          o,
                        ),
                      )
                  ).then(function () {
                    c.onSelect(
                      ue(
                        {
                          event: e,
                          item: a,
                          itemInputValue: i,
                          itemUrl: l,
                          refresh: r,
                          source: c,
                          state: n.getState(),
                        },
                        o,
                      ),
                    );
                  });
                },
              },
              i,
            );
          },
        };
      }
      var de = [{ segment: "autocomplete-core", version: "1.7.4" }];
      function he(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? he(Object(r), !0).forEach(function (t) {
                ye(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : he(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function ye(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function ge(e) {
        var t,
          r,
          n,
          o,
          a = e.plugins,
          c = e.options,
          i =
            null ===
              (t = ((null === (r = c.__autocomplete_metadata) || void 0 === r
                ? void 0
                : r.userAgents) || [])[0]) || void 0 === t
              ? void 0
              : t.segment,
          l = i
            ? ye(
                {},
                i,
                Object.keys(
                  (null === (n = c.__autocomplete_metadata) || void 0 === n
                    ? void 0
                    : n.options) || {},
                ),
              )
            : {};
        return {
          plugins: a.map(function (e) {
            return {
              name: e.name,
              options: Object.keys(e.__autocomplete_pluginOptions || []),
            };
          }),
          options: ve({ "autocomplete-core": Object.keys(c) }, l),
          ua: de.concat(
            (null === (o = c.__autocomplete_metadata) || void 0 === o
              ? void 0
              : o.userAgents) || [],
          ),
        };
      }
      function be(e) {
        var t,
          r = e.state;
        return !1 === r.isOpen || null === r.activeItemId
          ? null
          : (null === (t = F(r)) || void 0 === t ? void 0 : t.itemInputValue) ||
              null;
      }
      function Oe(e, t, r, n) {
        if (!r) return null;
        if (e < 0 && (null === t || (null !== n && 0 === t))) return r + e;
        var o = (null === t ? -1 : t) + e;
        return o <= -1 || o >= r ? (null === n ? null : 0) : o;
      }
      function Se(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Se(Object(r), !0).forEach(function (t) {
                je(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Se(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function je(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var we = function (e, t) {
        switch (t.type) {
          case "setActiveItemId":
          case "mousemove":
            return Ee(Ee({}, e), {}, { activeItemId: t.payload });
          case "setQuery":
            return Ee(Ee({}, e), {}, { query: t.payload, completion: null });
          case "setCollections":
            return Ee(Ee({}, e), {}, { collections: t.payload });
          case "setIsOpen":
            return Ee(Ee({}, e), {}, { isOpen: t.payload });
          case "setStatus":
            return Ee(Ee({}, e), {}, { status: t.payload });
          case "setContext":
            return Ee(
              Ee({}, e),
              {},
              { context: Ee(Ee({}, e.context), t.payload) },
            );
          case "ArrowDown":
            var r = Ee(
              Ee({}, e),
              {},
              {
                activeItemId: t.payload.hasOwnProperty("nextActiveItemId")
                  ? t.payload.nextActiveItemId
                  : Oe(1, e.activeItemId, u(e), t.props.defaultActiveItemId),
              },
            );
            return Ee(Ee({}, r), {}, { completion: be({ state: r }) });
          case "ArrowUp":
            var n = Ee(
              Ee({}, e),
              {},
              {
                activeItemId: Oe(
                  -1,
                  e.activeItemId,
                  u(e),
                  t.props.defaultActiveItemId,
                ),
              },
            );
            return Ee(Ee({}, n), {}, { completion: be({ state: n }) });
          case "Escape":
            return e.isOpen
              ? Ee(
                  Ee({}, e),
                  {},
                  { activeItemId: null, isOpen: !1, completion: null },
                )
              : Ee(
                  Ee({}, e),
                  {},
                  {
                    activeItemId: null,
                    query: "",
                    status: "idle",
                    collections: [],
                  },
                );
          case "submit":
            return Ee(
              Ee({}, e),
              {},
              { activeItemId: null, isOpen: !1, status: "idle" },
            );
          case "reset":
            return Ee(
              Ee({}, e),
              {},
              {
                activeItemId:
                  !0 === t.props.openOnFocus
                    ? t.props.defaultActiveItemId
                    : null,
                status: "idle",
                query: "",
              },
            );
          case "focus":
            return Ee(
              Ee({}, e),
              {},
              {
                activeItemId: t.props.defaultActiveItemId,
                isOpen:
                  (t.props.openOnFocus || Boolean(e.query)) &&
                  t.props.shouldPanelOpen({ state: e }),
              },
            );
          case "blur":
            return t.props.debug
              ? e
              : Ee(Ee({}, e), {}, { isOpen: !1, activeItemId: null });
          case "mouseleave":
            return Ee(
              Ee({}, e),
              {},
              { activeItemId: t.props.defaultActiveItemId },
            );
          default:
            return (
              "The reducer action ".concat(
                JSON.stringify(t.type),
                " is not supported.",
              ),
              e
            );
        }
      };
      function Pe(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Pe(Object(r), !0).forEach(function (t) {
                De(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Pe(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function De(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function Ce(e) {
        var t = [],
          r = (function (e, t) {
            var r,
              n = "undefined" != typeof window ? window : {},
              o = e.plugins || [];
            return b(
              b(
                {
                  debug: !1,
                  openOnFocus: !1,
                  placeholder: "",
                  autoFocus: !1,
                  defaultActiveItemId: null,
                  stallThreshold: 300,
                  environment: n,
                  shouldPanelOpen: function (e) {
                    return u(e.state) > 0;
                  },
                  reshape: function (e) {
                    return e.sources;
                  },
                },
                e,
              ),
              {},
              {
                id:
                  null !== (r = e.id) && void 0 !== r
                    ? r
                    : "autocomplete-".concat(f++),
                plugins: o,
                initialState: b(
                  {
                    activeItemId: null,
                    query: "",
                    completion: null,
                    collections: [],
                    isOpen: !1,
                    status: "idle",
                    context: {},
                  },
                  e.initialState,
                ),
                onStateChange: function (t) {
                  var r;
                  null === (r = e.onStateChange) ||
                    void 0 === r ||
                    r.call(e, t),
                    o.forEach(function (e) {
                      var r;
                      return null === (r = e.onStateChange) || void 0 === r
                        ? void 0
                        : r.call(e, t);
                    });
                },
                onSubmit: function (t) {
                  var r;
                  null === (r = e.onSubmit) || void 0 === r || r.call(e, t),
                    o.forEach(function (e) {
                      var r;
                      return null === (r = e.onSubmit) || void 0 === r
                        ? void 0
                        : r.call(e, t);
                    });
                },
                onReset: function (t) {
                  var r;
                  null === (r = e.onReset) || void 0 === r || r.call(e, t),
                    o.forEach(function (e) {
                      var r;
                      return null === (r = e.onReset) || void 0 === r
                        ? void 0
                        : r.call(e, t);
                    });
                },
                getSources: function (r) {
                  return Promise.all(
                    []
                      .concat(
                        v(
                          o.map(function (e) {
                            return e.getSources;
                          }),
                        ),
                        [e.getSources],
                      )
                      .filter(Boolean)
                      .map(function (e) {
                        return h(e, r);
                      }),
                  )
                    .then(function (e) {
                      return c(e);
                    })
                    .then(function (e) {
                      return e.map(function (e) {
                        return b(
                          b({}, e),
                          {},
                          {
                            onSelect: function (r) {
                              e.onSelect(r),
                                t.forEach(function (e) {
                                  var t;
                                  return null === (t = e.onSelect) ||
                                    void 0 === t
                                    ? void 0
                                    : t.call(e, r);
                                });
                            },
                            onActive: function (r) {
                              e.onActive(r),
                                t.forEach(function (e) {
                                  var t;
                                  return null === (t = e.onActive) ||
                                    void 0 === t
                                    ? void 0
                                    : t.call(e, r);
                                });
                            },
                          },
                        );
                      });
                    });
                },
                navigator: b(
                  {
                    navigate: function (e) {
                      var t = e.itemUrl;
                      n.location.assign(t);
                    },
                    navigateNewTab: function (e) {
                      var t = e.itemUrl,
                        r = n.open(t, "_blank", "noopener");
                      null == r || r.focus();
                    },
                    navigateNewWindow: function (e) {
                      var t = e.itemUrl;
                      n.open(t, "_blank", "noopener");
                    },
                  },
                  e.navigator,
                ),
              },
            );
          })(e, t),
          n = a(we, r, function (e) {
            var t = e.prevState,
              n = e.state;
            r.onStateChange(Ie({ prevState: t, state: n, refresh: s }, o));
          }),
          o = (function (e) {
            var t = e.store;
            return {
              setActiveItemId: function (e) {
                t.dispatch("setActiveItemId", e);
              },
              setQuery: function (e) {
                t.dispatch("setQuery", e);
              },
              setCollections: function (e) {
                var r = 0,
                  n = e.map(function (e) {
                    return l(
                      l({}, e),
                      {},
                      {
                        items: c(e.items).map(function (e) {
                          return l(l({}, e), {}, { __autocomplete_id: r++ });
                        }),
                      },
                    );
                  });
                t.dispatch("setCollections", n);
              },
              setIsOpen: function (e) {
                t.dispatch("setIsOpen", e);
              },
              setStatus: function (e) {
                t.dispatch("setStatus", e);
              },
              setContext: function (e) {
                t.dispatch("setContext", e);
              },
            };
          })({ store: n }),
          i = pe(Ie({ props: r, refresh: s, store: n }, o));
        function s() {
          return Y(
            Ie(
              {
                event: new Event("input"),
                nextState: { isOpen: n.getState().isOpen },
                props: r,
                query: n.getState().query,
                refresh: s,
                store: n,
              },
              o,
            ),
          );
        }
        return (
          r.plugins.forEach(function (e) {
            var r;
            return null === (r = e.subscribe) || void 0 === r
              ? void 0
              : r.call(
                  e,
                  Ie(
                    Ie({}, o),
                    {},
                    {
                      refresh: s,
                      onSelect: function (e) {
                        t.push({ onSelect: e });
                      },
                      onActive: function (e) {
                        t.push({ onActive: e });
                      },
                    },
                  ),
                );
          }),
          (function (e) {
            var t,
              r,
              n = e.metadata,
              o = e.environment;
            if (
              null === (t = o.navigator) ||
              void 0 === t ||
              null === (r = t.userAgent) ||
              void 0 === r
                ? void 0
                : r.includes("Algolia Crawler")
            ) {
              var a = o.document.createElement("meta"),
                c = o.document.querySelector("head");
              (a.name = "algolia:metadata"),
                setTimeout(function () {
                  (a.content = JSON.stringify(n)), c.appendChild(a);
                }, 0);
            }
          })({
            metadata: ge({ plugins: r.plugins, options: e }),
            environment: r.environment,
          }),
          Ie(Ie({ refresh: s }, i), o)
        );
      }
      var ke = r(7294);
      function Ae(e) {
        var t = e.translations,
          r = (void 0 === t ? {} : t).searchByText,
          n = void 0 === r ? "Search by" : r;
        return ke.createElement(
          "a",
          {
            href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(
              window.location.hostname,
              "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch",
            ),
            target: "_blank",
            rel: "noopener noreferrer",
          },
          ke.createElement("span", { className: "DocSearch-Label" }, n),
          ke.createElement(
            "svg",
            {
              width: "77",
              height: "19",
              "aria-label": "Algolia",
              role: "img",
              id: "Layer_1",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 2196.2 500",
            },
            ke.createElement(
              "defs",
              null,
              ke.createElement(
                "style",
                null,
                ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}",
              ),
            ),
            ke.createElement("path", {
              className: "cls-2",
              d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z",
            }),
            ke.createElement("rect", {
              className: "cls-1",
              x: "1845.88",
              y: "104.73",
              width: "62.58",
              height: "277.9",
              rx: "5.9",
              ry: "5.9",
            }),
            ke.createElement("path", {
              className: "cls-2",
              d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z",
            }),
            ke.createElement("path", {
              className: "cls-2",
              d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z",
            }),
            ke.createElement("path", {
              className: "cls-2",
              d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z",
            }),
            ke.createElement("path", {
              className: "cls-2",
              d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z",
            }),
            ke.createElement("path", {
              className: "cls-2",
              d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z",
            }),
            ke.createElement("path", {
              className: "cls-2",
              d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z",
            }),
            ke.createElement("path", {
              className: "cls-1",
              d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z",
            }),
          ),
        );
      }
      function xe(e) {
        return ke.createElement(
          "svg",
          { width: "15", height: "15", "aria-label": e.ariaLabel, role: "img" },
          ke.createElement(
            "g",
            {
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.2",
            },
            e.children,
          ),
        );
      }
      function Ne(e) {
        var t = e.translations,
          r = void 0 === t ? {} : t,
          n = r.selectText,
          o = void 0 === n ? "to select" : n,
          a = r.selectKeyAriaLabel,
          c = void 0 === a ? "Enter key" : a,
          i = r.navigateText,
          l = void 0 === i ? "to navigate" : i,
          s = r.navigateUpKeyAriaLabel,
          u = void 0 === s ? "Arrow up" : s,
          f = r.navigateDownKeyAriaLabel,
          m = void 0 === f ? "Arrow down" : f,
          p = r.closeText,
          d = void 0 === p ? "to close" : p,
          h = r.closeKeyAriaLabel,
          v = void 0 === h ? "Escape key" : h,
          y = r.searchByText,
          g = void 0 === y ? "Search by" : y;
        return ke.createElement(
          ke.Fragment,
          null,
          ke.createElement(
            "div",
            { className: "DocSearch-Logo" },
            ke.createElement(Ae, { translations: { searchByText: g } }),
          ),
          ke.createElement(
            "ul",
            { className: "DocSearch-Commands" },
            ke.createElement(
              "li",
              null,
              ke.createElement(
                "kbd",
                { className: "DocSearch-Commands-Key" },
                ke.createElement(
                  xe,
                  { ariaLabel: c },
                  ke.createElement("path", {
                    d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3",
                  }),
                ),
              ),
              ke.createElement("span", { className: "DocSearch-Label" }, o),
            ),
            ke.createElement(
              "li",
              null,
              ke.createElement(
                "kbd",
                { className: "DocSearch-Commands-Key" },
                ke.createElement(
                  xe,
                  { ariaLabel: m },
                  ke.createElement("path", {
                    d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3",
                  }),
                ),
              ),
              ke.createElement(
                "kbd",
                { className: "DocSearch-Commands-Key" },
                ke.createElement(
                  xe,
                  { ariaLabel: u },
                  ke.createElement("path", {
                    d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3",
                  }),
                ),
              ),
              ke.createElement("span", { className: "DocSearch-Label" }, l),
            ),
            ke.createElement(
              "li",
              null,
              ke.createElement(
                "kbd",
                { className: "DocSearch-Commands-Key" },
                ke.createElement(
                  xe,
                  { ariaLabel: v },
                  ke.createElement("path", {
                    d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956",
                  }),
                ),
              ),
              ke.createElement("span", { className: "DocSearch-Label" }, d),
            ),
          ),
        );
      }
      function Re(e) {
        var t = e.hit,
          r = e.children;
        return ke.createElement("a", { href: t.url }, r);
      }
      function _e() {
        return ke.createElement(
          "svg",
          {
            width: "40",
            height: "40",
            viewBox: "0 0 20 20",
            fill: "none",
            fillRule: "evenodd",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          ke.createElement("path", {
            d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0",
          }),
        );
      }
      function qe(e) {
        var t = e.translations,
          r = void 0 === t ? {} : t,
          n = r.titleText,
          o = void 0 === n ? "Unable to fetch results" : n,
          a = r.helpText,
          c =
            void 0 === a
              ? "You might want to check your network connection."
              : a;
        return ke.createElement(
          "div",
          { className: "DocSearch-ErrorScreen" },
          ke.createElement(
            "div",
            { className: "DocSearch-Screen-Icon" },
            ke.createElement(_e, null),
          ),
          ke.createElement("p", { className: "DocSearch-Title" }, o),
          ke.createElement("p", { className: "DocSearch-Help" }, c),
        );
      }
      function Te() {
        return ke.createElement(
          "svg",
          {
            width: "40",
            height: "40",
            viewBox: "0 0 20 20",
            fill: "none",
            fillRule: "evenodd",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          ke.createElement("path", {
            d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2",
          }),
        );
      }
      var Le = ["translations"];
      function Me(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return He(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return He(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return He(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function He(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Fe(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function Ue(e) {
        var t = e.translations,
          r = void 0 === t ? {} : t,
          n = Fe(e, Le),
          o = r.noResultsText,
          a = void 0 === o ? "No results for" : o,
          c = r.suggestedQueryText,
          i = void 0 === c ? "Try searching for" : c,
          l = r.reportMissingResultsText,
          s = void 0 === l ? "Believe this query should return results?" : l,
          u = r.reportMissingResultsLinkText,
          f = void 0 === u ? "Let us know." : u,
          m = n.state.context.searchSuggestions;
        return ke.createElement(
          "div",
          { className: "DocSearch-NoResults" },
          ke.createElement(
            "div",
            { className: "DocSearch-Screen-Icon" },
            ke.createElement(Te, null),
          ),
          ke.createElement(
            "p",
            { className: "DocSearch-Title" },
            a,
            ' "',
            ke.createElement("strong", null, n.state.query),
            '"',
          ),
          m &&
            m.length > 0 &&
            ke.createElement(
              "div",
              { className: "DocSearch-NoResults-Prefill-List" },
              ke.createElement("p", { className: "DocSearch-Help" }, i, ":"),
              ke.createElement(
                "ul",
                null,
                m.slice(0, 3).reduce(function (e, t) {
                  return [].concat(Me(e), [
                    ke.createElement(
                      "li",
                      { key: t },
                      ke.createElement(
                        "button",
                        {
                          className: "DocSearch-Prefill",
                          key: t,
                          type: "button",
                          onClick: function () {
                            n.setQuery(t.toLowerCase() + " "),
                              n.refresh(),
                              n.inputRef.current.focus();
                          },
                        },
                        t,
                      ),
                    ),
                  ]);
                }, []),
              ),
            ),
          n.getMissingResultsUrl &&
            ke.createElement(
              "p",
              { className: "DocSearch-Help" },
              "".concat(s, " "),
              ke.createElement(
                "a",
                {
                  href: n.getMissingResultsUrl({ query: n.state.query }),
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                f,
              ),
            ),
        );
      }
      var Be = function () {
        return ke.createElement(
          "svg",
          { width: "20", height: "20", viewBox: "0 0 20 20" },
          ke.createElement("path", {
            d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",
            stroke: "currentColor",
            fill: "none",
            fillRule: "evenodd",
            strokeLinejoin: "round",
          }),
        );
      };
      function Ve(e) {
        switch (e.type) {
          case "lvl1":
            return ke.createElement(Be, null);
          case "content":
            return ke.createElement($e, null);
          default:
            return ke.createElement(Ke, null);
        }
      }
      function Ke() {
        return ke.createElement(
          "svg",
          { width: "20", height: "20", viewBox: "0 0 20 20" },
          ke.createElement("path", {
            d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z",
            stroke: "currentColor",
            fill: "none",
            fillRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        );
      }
      function $e() {
        return ke.createElement(
          "svg",
          { width: "20", height: "20", viewBox: "0 0 20 20" },
          ke.createElement("path", {
            d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z",
            stroke: "currentColor",
            fill: "none",
            fillRule: "evenodd",
            strokeLinejoin: "round",
          }),
        );
      }
      function Je() {
        return ke.createElement(
          "svg",
          {
            className: "DocSearch-Hit-Select-Icon",
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
          },
          ke.createElement(
            "g",
            {
              stroke: "currentColor",
              fill: "none",
              fillRule: "evenodd",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            ke.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }),
            ke.createElement("path", { d: "M8 17l-6-6 6-6" }),
          ),
        );
      }
      var ze = ["hit", "attribute", "tagName"];
      function We(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Qe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? We(Object(r), !0).forEach(function (t) {
                Ze(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : We(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function Ze(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function Ye(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function Ge(e, t) {
        return t.split(".").reduce(function (e, t) {
          return null != e && e[t] ? e[t] : null;
        }, e);
      }
      function Xe(e) {
        var t = e.hit,
          r = e.attribute,
          n = e.tagName,
          o = void 0 === n ? "span" : n,
          a = Ye(e, ze);
        return (0, ke.createElement)(
          o,
          Qe(
            Qe({}, a),
            {},
            {
              dangerouslySetInnerHTML: {
                __html:
                  Ge(t, "_snippetResult.".concat(r, ".value")) || Ge(t, r),
              },
            },
          ),
        );
      }
      function et(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == r) return;
            var n,
              o,
              a = [],
              c = !0,
              i = !1;
            try {
              for (
                r = r.call(e);
                !(c = (n = r.next()).done) &&
                (a.push(n.value), !t || a.length !== t);
                c = !0
              );
            } catch (l) {
              (i = !0), (o = l);
            } finally {
              try {
                c || null == r.return || r.return();
              } finally {
                if (i) throw o;
              }
            }
            return a;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return tt(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return tt(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function tt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function rt() {
        return (
          (rt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          rt.apply(this, arguments)
        );
      }
      function nt(e) {
        return e.collection && 0 !== e.collection.items.length
          ? ke.createElement(
              "section",
              { className: "DocSearch-Hits" },
              ke.createElement(
                "div",
                { className: "DocSearch-Hit-source" },
                e.title,
              ),
              ke.createElement(
                "ul",
                e.getListProps(),
                e.collection.items.map(function (t, r) {
                  return ke.createElement(
                    ot,
                    rt(
                      {
                        key: [e.title, t.objectID].join(":"),
                        item: t,
                        index: r,
                      },
                      e,
                    ),
                  );
                }),
              ),
            )
          : null;
      }
      function ot(e) {
        var t = e.item,
          r = e.index,
          n = e.renderIcon,
          o = e.renderAction,
          a = e.getItemProps,
          c = e.onItemClick,
          i = e.collection,
          l = e.hitComponent,
          s = et(ke.useState(!1), 2),
          u = s[0],
          f = s[1],
          m = et(ke.useState(!1), 2),
          p = m[0],
          d = m[1],
          h = ke.useRef(null),
          v = l;
        return ke.createElement(
          "li",
          rt(
            {
              className: [
                "DocSearch-Hit",
                t.__docsearch_parent && "DocSearch-Hit--Child",
                u && "DocSearch-Hit--deleting",
                p && "DocSearch-Hit--favoriting",
              ]
                .filter(Boolean)
                .join(" "),
              onTransitionEnd: function () {
                h.current && h.current();
              },
            },
            a({
              item: t,
              source: i.source,
              onClick: function () {
                c(t);
              },
            }),
          ),
          ke.createElement(
            v,
            { hit: t },
            ke.createElement(
              "div",
              { className: "DocSearch-Hit-Container" },
              n({ item: t, index: r }),
              t.hierarchy[t.type] &&
                "lvl1" === t.type &&
                ke.createElement(
                  "div",
                  { className: "DocSearch-Hit-content-wrapper" },
                  ke.createElement(Xe, {
                    className: "DocSearch-Hit-title",
                    hit: t,
                    attribute: "hierarchy.lvl1",
                  }),
                  t.content &&
                    ke.createElement(Xe, {
                      className: "DocSearch-Hit-path",
                      hit: t,
                      attribute: "content",
                    }),
                ),
              t.hierarchy[t.type] &&
                ("lvl2" === t.type ||
                  "lvl3" === t.type ||
                  "lvl4" === t.type ||
                  "lvl5" === t.type ||
                  "lvl6" === t.type) &&
                ke.createElement(
                  "div",
                  { className: "DocSearch-Hit-content-wrapper" },
                  ke.createElement(Xe, {
                    className: "DocSearch-Hit-title",
                    hit: t,
                    attribute: "hierarchy.".concat(t.type),
                  }),
                  ke.createElement(Xe, {
                    className: "DocSearch-Hit-path",
                    hit: t,
                    attribute: "hierarchy.lvl1",
                  }),
                ),
              "content" === t.type &&
                ke.createElement(
                  "div",
                  { className: "DocSearch-Hit-content-wrapper" },
                  ke.createElement(Xe, {
                    className: "DocSearch-Hit-title",
                    hit: t,
                    attribute: "content",
                  }),
                  ke.createElement(Xe, {
                    className: "DocSearch-Hit-path",
                    hit: t,
                    attribute: "hierarchy.lvl1",
                  }),
                ),
              o({
                item: t,
                runDeleteTransition: function (e) {
                  f(!0), (h.current = e);
                },
                runFavoriteTransition: function (e) {
                  d(!0), (h.current = e);
                },
              }),
            ),
          ),
        );
      }
      var at = /(<mark>|<\/mark>)/g,
        ct = RegExp(at.source);
      function it(e) {
        var t,
          r,
          n,
          o,
          a,
          c = e;
        if (!c.__docsearch_parent && !e._highlightResult)
          return e.hierarchy.lvl0;
        var i = (
          (c.__docsearch_parent
            ? null === (t = c.__docsearch_parent) ||
              void 0 === t ||
              null === (r = t._highlightResult) ||
              void 0 === r ||
              null === (n = r.hierarchy) ||
              void 0 === n
              ? void 0
              : n.lvl0
            : null === (o = e._highlightResult) ||
              void 0 === o ||
              null === (a = o.hierarchy) ||
              void 0 === a
            ? void 0
            : a.lvl0) || {}
        ).value;
        return i && ct.test(i) ? i.replace(at, "") : i;
      }
      function lt() {
        return (
          (lt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          lt.apply(this, arguments)
        );
      }
      function st(e) {
        return ke.createElement(
          "div",
          { className: "DocSearch-Dropdown-Container" },
          e.state.collections.map(function (t) {
            if (0 === t.items.length) return null;
            var r = it(t.items[0]);
            return ke.createElement(
              nt,
              lt({}, e, {
                key: t.source.sourceId,
                title: r,
                collection: t,
                renderIcon: function (e) {
                  var r,
                    n = e.item,
                    o = e.index;
                  return ke.createElement(
                    ke.Fragment,
                    null,
                    n.__docsearch_parent &&
                      ke.createElement(
                        "svg",
                        {
                          className: "DocSearch-Hit-Tree",
                          viewBox: "0 0 24 54",
                        },
                        ke.createElement(
                          "g",
                          {
                            stroke: "currentColor",
                            fill: "none",
                            fillRule: "evenodd",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          },
                          n.__docsearch_parent !==
                            (null === (r = t.items[o + 1]) || void 0 === r
                              ? void 0
                              : r.__docsearch_parent)
                            ? ke.createElement("path", {
                                d: "M8 6v21M20 27H8.3",
                              })
                            : ke.createElement("path", {
                                d: "M8 6v42M20 27H8.3",
                              }),
                        ),
                      ),
                    ke.createElement(
                      "div",
                      { className: "DocSearch-Hit-icon" },
                      ke.createElement(Ve, { type: n.type }),
                    ),
                  );
                },
                renderAction: function () {
                  return ke.createElement(
                    "div",
                    { className: "DocSearch-Hit-action" },
                    ke.createElement(Je, null),
                  );
                },
              }),
            );
          }),
          e.resultsFooterComponent &&
            ke.createElement(
              "section",
              { className: "DocSearch-HitsFooter" },
              ke.createElement(e.resultsFooterComponent, { state: e.state }),
            ),
        );
      }
      function ut() {
        return ke.createElement(
          "svg",
          { width: "20", height: "20", viewBox: "0 0 20 20" },
          ke.createElement(
            "g",
            {
              stroke: "currentColor",
              fill: "none",
              fillRule: "evenodd",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            ke.createElement("path", {
              d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0",
            }),
            ke.createElement("path", {
              d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13",
            }),
          ),
        );
      }
      function ft() {
        return ke.createElement(
          "svg",
          { width: "20", height: "20", viewBox: "0 0 20 20" },
          ke.createElement("path", {
            d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z",
            stroke: "currentColor",
            fill: "none",
            fillRule: "evenodd",
            strokeLinejoin: "round",
          }),
        );
      }
      function mt() {
        return ke.createElement(
          "svg",
          { width: "20", height: "20", viewBox: "0 0 20 20" },
          ke.createElement("path", {
            d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
            stroke: "currentColor",
            fill: "none",
            fillRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        );
      }
      var pt = ["translations"];
      function dt() {
        return (
          (dt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          dt.apply(this, arguments)
        );
      }
      function ht(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function vt(e) {
        var t = e.translations,
          r = void 0 === t ? {} : t,
          n = ht(e, pt),
          o = r.recentSearchesTitle,
          a = void 0 === o ? "Recent" : o,
          c = r.noRecentSearchesText,
          i = void 0 === c ? "No recent searches" : c,
          l = r.saveRecentSearchButtonTitle,
          s = void 0 === l ? "Save this search" : l,
          u = r.removeRecentSearchButtonTitle,
          f = void 0 === u ? "Remove this search from history" : u,
          m = r.favoriteSearchesTitle,
          p = void 0 === m ? "Favorite" : m,
          d = r.removeFavoriteSearchButtonTitle,
          h = void 0 === d ? "Remove this search from favorites" : d;
        return "idle" === n.state.status && !1 === n.hasCollections
          ? n.disableUserPersonalization
            ? null
            : ke.createElement(
                "div",
                { className: "DocSearch-StartScreen" },
                ke.createElement("p", { className: "DocSearch-Help" }, i),
              )
          : !1 === n.hasCollections
          ? null
          : ke.createElement(
              "div",
              { className: "DocSearch-Dropdown-Container" },
              ke.createElement(
                nt,
                dt({}, n, {
                  title: a,
                  collection: n.state.collections[0],
                  renderIcon: function () {
                    return ke.createElement(
                      "div",
                      { className: "DocSearch-Hit-icon" },
                      ke.createElement(ut, null),
                    );
                  },
                  renderAction: function (e) {
                    var t = e.item,
                      r = e.runFavoriteTransition,
                      o = e.runDeleteTransition;
                    return ke.createElement(
                      ke.Fragment,
                      null,
                      ke.createElement(
                        "div",
                        { className: "DocSearch-Hit-action" },
                        ke.createElement(
                          "button",
                          {
                            className: "DocSearch-Hit-action-button",
                            title: s,
                            type: "submit",
                            onClick: function (e) {
                              e.preventDefault(),
                                e.stopPropagation(),
                                r(function () {
                                  n.favoriteSearches.add(t),
                                    n.recentSearches.remove(t),
                                    n.refresh();
                                });
                            },
                          },
                          ke.createElement(ft, null),
                        ),
                      ),
                      ke.createElement(
                        "div",
                        { className: "DocSearch-Hit-action" },
                        ke.createElement(
                          "button",
                          {
                            className: "DocSearch-Hit-action-button",
                            title: f,
                            type: "submit",
                            onClick: function (e) {
                              e.preventDefault(),
                                e.stopPropagation(),
                                o(function () {
                                  n.recentSearches.remove(t), n.refresh();
                                });
                            },
                          },
                          ke.createElement(mt, null),
                        ),
                      ),
                    );
                  },
                }),
              ),
              ke.createElement(
                nt,
                dt({}, n, {
                  title: p,
                  collection: n.state.collections[1],
                  renderIcon: function () {
                    return ke.createElement(
                      "div",
                      { className: "DocSearch-Hit-icon" },
                      ke.createElement(ft, null),
                    );
                  },
                  renderAction: function (e) {
                    var t = e.item,
                      r = e.runDeleteTransition;
                    return ke.createElement(
                      "div",
                      { className: "DocSearch-Hit-action" },
                      ke.createElement(
                        "button",
                        {
                          className: "DocSearch-Hit-action-button",
                          title: h,
                          type: "submit",
                          onClick: function (e) {
                            e.preventDefault(),
                              e.stopPropagation(),
                              r(function () {
                                n.favoriteSearches.remove(t), n.refresh();
                              });
                          },
                        },
                        ke.createElement(mt, null),
                      ),
                    );
                  },
                }),
              ),
            );
      }
      var yt = ["translations"];
      function gt() {
        return (
          (gt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          gt.apply(this, arguments)
        );
      }
      function bt(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var Ot = ke.memo(
        function (e) {
          var t = e.translations,
            r = void 0 === t ? {} : t,
            n = bt(e, yt);
          if ("error" === n.state.status)
            return ke.createElement(qe, {
              translations: null == r ? void 0 : r.errorScreen,
            });
          var o = n.state.collections.some(function (e) {
            return e.items.length > 0;
          });
          return n.state.query
            ? !1 === o
              ? ke.createElement(
                  Ue,
                  gt({}, n, {
                    translations: null == r ? void 0 : r.noResultsScreen,
                  }),
                )
              : ke.createElement(st, n)
            : ke.createElement(
                vt,
                gt({}, n, {
                  hasCollections: o,
                  translations: null == r ? void 0 : r.startScreen,
                }),
              );
        },
        function (e, t) {
          return "loading" === t.state.status || "stalled" === t.state.status;
        },
      );
      function St() {
        return ke.createElement(
          "svg",
          { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" },
          ke.createElement(
            "g",
            { fill: "none", fillRule: "evenodd" },
            ke.createElement(
              "g",
              { transform: "translate(1 1)", strokeWidth: "2" },
              ke.createElement("circle", {
                strokeOpacity: ".3",
                cx: "18",
                cy: "18",
                r: "18",
              }),
              ke.createElement(
                "path",
                { d: "M36 18c0-9.94-8.06-18-18-18" },
                ke.createElement("animateTransform", {
                  attributeName: "transform",
                  type: "rotate",
                  from: "0 18 18",
                  to: "360 18 18",
                  dur: "1s",
                  repeatCount: "indefinite",
                }),
              ),
            ),
          ),
        );
      }
      var Et = r(830),
        jt = ["translations"];
      function wt() {
        return (
          (wt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          wt.apply(this, arguments)
        );
      }
      function Pt(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function It(e) {
        var t = e.translations,
          r = void 0 === t ? {} : t,
          n = Pt(e, jt),
          o = r.resetButtonTitle,
          a = void 0 === o ? "Clear the query" : o,
          c = r.resetButtonAriaLabel,
          i = void 0 === c ? "Clear the query" : c,
          l = r.cancelButtonText,
          s = void 0 === l ? "Cancel" : l,
          u = r.cancelButtonAriaLabel,
          f = void 0 === u ? "Cancel" : u,
          m = n.getFormProps({ inputElement: n.inputRef.current }).onReset;
        return (
          ke.useEffect(
            function () {
              n.autoFocus && n.inputRef.current && n.inputRef.current.focus();
            },
            [n.autoFocus, n.inputRef],
          ),
          ke.useEffect(
            function () {
              n.isFromSelection &&
                n.inputRef.current &&
                n.inputRef.current.select();
            },
            [n.isFromSelection, n.inputRef],
          ),
          ke.createElement(
            ke.Fragment,
            null,
            ke.createElement(
              "form",
              {
                className: "DocSearch-Form",
                onSubmit: function (e) {
                  e.preventDefault();
                },
                onReset: m,
              },
              ke.createElement(
                "label",
                wt(
                  { className: "DocSearch-MagnifierLabel" },
                  n.getLabelProps(),
                ),
                ke.createElement(Et.W, null),
              ),
              ke.createElement(
                "div",
                { className: "DocSearch-LoadingIndicator" },
                ke.createElement(St, null),
              ),
              ke.createElement(
                "input",
                wt(
                  { className: "DocSearch-Input", ref: n.inputRef },
                  n.getInputProps({
                    inputElement: n.inputRef.current,
                    autoFocus: n.autoFocus,
                    maxLength: 64,
                  }),
                ),
              ),
              ke.createElement(
                "button",
                {
                  type: "reset",
                  title: a,
                  className: "DocSearch-Reset",
                  "aria-label": i,
                  hidden: !n.state.query,
                },
                ke.createElement(mt, null),
              ),
            ),
            ke.createElement(
              "button",
              {
                className: "DocSearch-Cancel",
                type: "reset",
                "aria-label": f,
                onClick: n.onClose,
              },
              s,
            ),
          )
        );
      }
      var Dt = ["_highlightResult", "_snippetResult"];
      function Ct(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function kt(e) {
        return !1 ===
          (function () {
            var e = "__TEST_KEY__";
            try {
              return (
                localStorage.setItem(e, ""), localStorage.removeItem(e), !0
              );
            } catch (t) {
              return !1;
            }
          })()
          ? {
              setItem: function () {},
              getItem: function () {
                return [];
              },
            }
          : {
              setItem: function (t) {
                return window.localStorage.setItem(e, JSON.stringify(t));
              },
              getItem: function () {
                var t = window.localStorage.getItem(e);
                return t ? JSON.parse(t) : [];
              },
            };
      }
      function At(e) {
        var t = e.key,
          r = e.limit,
          n = void 0 === r ? 5 : r,
          o = kt(t),
          a = o.getItem().slice(0, n);
        return {
          add: function (e) {
            var t = e,
              r = (t._highlightResult, t._snippetResult, Ct(t, Dt)),
              c = a.findIndex(function (e) {
                return e.objectID === r.objectID;
              });
            c > -1 && a.splice(c, 1),
              a.unshift(r),
              (a = a.slice(0, n)),
              o.setItem(a);
          },
          remove: function (e) {
            (a = a.filter(function (t) {
              return t.objectID !== e.objectID;
            })),
              o.setItem(a);
          },
          getAll: function () {
            return a;
          },
        };
      }
      function xt(e) {
        const t = `algoliasearch-client-js-${e.key}`;
        let r;
        const n = () => (
            void 0 === r && (r = e.localStorage || window.localStorage), r
          ),
          o = () => JSON.parse(n().getItem(t) || "{}");
        return {
          get: (e, t, r = { miss: () => Promise.resolve() }) =>
            Promise.resolve()
              .then(() => {
                const r = JSON.stringify(e),
                  n = o()[r];
                return Promise.all([n || t(), void 0 !== n]);
              })
              .then(([e, t]) => Promise.all([e, t || r.miss(e)]))
              .then(([e]) => e),
          set: (e, r) =>
            Promise.resolve().then(() => {
              const a = o();
              return (
                (a[JSON.stringify(e)] = r), n().setItem(t, JSON.stringify(a)), r
              );
            }),
          delete: (e) =>
            Promise.resolve().then(() => {
              const r = o();
              delete r[JSON.stringify(e)], n().setItem(t, JSON.stringify(r));
            }),
          clear: () =>
            Promise.resolve().then(() => {
              n().removeItem(t);
            }),
        };
      }
      function Nt(e) {
        const t = [...e.caches],
          r = t.shift();
        return void 0 === r
          ? {
              get: (e, t, r = { miss: () => Promise.resolve() }) =>
                t()
                  .then((e) => Promise.all([e, r.miss(e)]))
                  .then(([e]) => e),
              set: (e, t) => Promise.resolve(t),
              delete: (e) => Promise.resolve(),
              clear: () => Promise.resolve(),
            }
          : {
              get: (e, n, o = { miss: () => Promise.resolve() }) =>
                r.get(e, n, o).catch(() => Nt({ caches: t }).get(e, n, o)),
              set: (e, n) =>
                r.set(e, n).catch(() => Nt({ caches: t }).set(e, n)),
              delete: (e) =>
                r.delete(e).catch(() => Nt({ caches: t }).delete(e)),
              clear: () => r.clear().catch(() => Nt({ caches: t }).clear()),
            };
      }
      function Rt(e = { serializable: !0 }) {
        let t = {};
        return {
          get(r, n, o = { miss: () => Promise.resolve() }) {
            const a = JSON.stringify(r);
            if (a in t)
              return Promise.resolve(e.serializable ? JSON.parse(t[a]) : t[a]);
            const c = n(),
              i = (o && o.miss) || (() => Promise.resolve());
            return c.then((e) => i(e)).then(() => c);
          },
          set: (r, n) => (
            (t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n),
            Promise.resolve(n)
          ),
          delete: (e) => (delete t[JSON.stringify(e)], Promise.resolve()),
          clear: () => ((t = {}), Promise.resolve()),
        };
      }
      function _t(e) {
        let t = e.length - 1;
        for (; t > 0; t--) {
          const r = Math.floor(Math.random() * (t + 1)),
            n = e[t];
          (e[t] = e[r]), (e[r] = n);
        }
        return e;
      }
      function qt(e, t) {
        return t
          ? (Object.keys(t).forEach((r) => {
              e[r] = t[r](e);
            }),
            e)
          : e;
      }
      function Tt(e, ...t) {
        let r = 0;
        return e.replace(/%s/g, () => encodeURIComponent(t[r++]));
      }
      const Lt = "4.14.3",
        Mt = { WithinQueryParameters: 0, WithinHeaders: 1 };
      function Ht(e, t) {
        const r = e || {},
          n = r.data || {};
        return (
          Object.keys(r).forEach((e) => {
            -1 ===
              [
                "timeout",
                "headers",
                "queryParameters",
                "data",
                "cacheable",
              ].indexOf(e) && (n[e] = r[e]);
          }),
          {
            data: Object.entries(n).length > 0 ? n : void 0,
            timeout: r.timeout || t,
            headers: r.headers || {},
            queryParameters: r.queryParameters || {},
            cacheable: r.cacheable,
          }
        );
      }
      const Ft = { Read: 1, Write: 2, Any: 3 },
        Ut = 1,
        Bt = 2,
        Vt = 3,
        Kt = 12e4;
      function $t(e, t = Ut) {
        return { ...e, status: t, lastUpdate: Date.now() };
      }
      function Jt(e) {
        return "string" == typeof e
          ? { protocol: "https", url: e, accept: Ft.Any }
          : {
              protocol: e.protocol || "https",
              url: e.url,
              accept: e.accept || Ft.Any,
            };
      }
      const zt = "GET",
        Wt = "POST";
      function Qt(e, t) {
        return Promise.all(
          t.map((t) => e.get(t, () => Promise.resolve($t(t)))),
        ).then((e) => {
          const r = e.filter((e) =>
              (function (e) {
                return e.status === Ut || Date.now() - e.lastUpdate > Kt;
              })(e),
            ),
            n = e.filter((e) =>
              (function (e) {
                return e.status === Vt && Date.now() - e.lastUpdate <= Kt;
              })(e),
            ),
            o = [...r, ...n];
          return {
            getTimeout: (e, t) =>
              (0 === n.length && 0 === e ? 1 : n.length + 3 + e) * t,
            statelessHosts: o.length > 0 ? o.map((e) => Jt(e)) : t,
          };
        });
      }
      function Zt(e, t, r, n) {
        const o = [],
          a = (function (e, t) {
            if (e.method === zt || (void 0 === e.data && void 0 === t.data))
              return;
            const r = Array.isArray(e.data) ? e.data : { ...e.data, ...t.data };
            return JSON.stringify(r);
          })(r, n),
          c = (function (e, t) {
            const r = { ...e.headers, ...t.headers },
              n = {};
            return (
              Object.keys(r).forEach((e) => {
                const t = r[e];
                n[e.toLowerCase()] = t;
              }),
              n
            );
          })(e, n),
          i = r.method,
          l = r.method !== zt ? {} : { ...r.data, ...n.data },
          s = {
            "x-algolia-agent": e.userAgent.value,
            ...e.queryParameters,
            ...l,
            ...n.queryParameters,
          };
        let u = 0;
        const f = (t, l) => {
          const m = t.pop();
          if (void 0 === m)
            throw {
              name: "RetryError",
              message:
                "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
              transporterStackTrace: er(o),
            };
          const p = {
              data: a,
              headers: c,
              method: i,
              url: Gt(m, r.path, s),
              connectTimeout: l(u, e.timeouts.connect),
              responseTimeout: l(u, n.timeout),
            },
            d = (e) => {
              const r = {
                request: p,
                response: e,
                host: m,
                triesLeft: t.length,
              };
              return o.push(r), r;
            },
            h = {
              onSuccess: (e) =>
                (function (e) {
                  try {
                    return JSON.parse(e.content);
                  } catch (t) {
                    throw (function (e, t) {
                      return {
                        name: "DeserializationError",
                        message: e,
                        response: t,
                      };
                    })(t.message, e);
                  }
                })(e),
              onRetry(r) {
                const n = d(r);
                return (
                  r.isTimedOut && u++,
                  Promise.all([
                    e.logger.info("Retryable failure", tr(n)),
                    e.hostsCache.set(m, $t(m, r.isTimedOut ? Vt : Bt)),
                  ]).then(() => f(t, l))
                );
              },
              onFail(e) {
                throw (
                  (d(e),
                  (function ({ content: e, status: t }, r) {
                    let n = e;
                    try {
                      n = JSON.parse(e).message;
                    } catch (o) {}
                    return (function (e, t, r) {
                      return {
                        name: "ApiError",
                        message: e,
                        status: t,
                        transporterStackTrace: r,
                      };
                    })(n, t, r);
                  })(e, er(o)))
                );
              },
            };
          return e.requester.send(p).then((e) =>
            ((e, t) =>
              ((e) => {
                const t = e.status;
                return (
                  e.isTimedOut ||
                  (({ isTimedOut: e, status: t }) => !e && 0 == ~~t)(e) ||
                  (2 != ~~(t / 100) && 4 != ~~(t / 100))
                );
              })(e)
                ? t.onRetry(e)
                : (({ status: e }) => 2 == ~~(e / 100))(e)
                ? t.onSuccess(e)
                : t.onFail(e))(e, h),
          );
        };
        return Qt(e.hostsCache, t).then((e) =>
          f([...e.statelessHosts].reverse(), e.getTimeout),
        );
      }
      function Yt(e) {
        const t = {
          value: `Algolia for JavaScript (${e})`,
          add(e) {
            const r = `; ${e.segment}${
              void 0 !== e.version ? ` (${e.version})` : ""
            }`;
            return -1 === t.value.indexOf(r) && (t.value = `${t.value}${r}`), t;
          },
        };
        return t;
      }
      function Gt(e, t, r) {
        const n = Xt(r);
        let o = `${e.protocol}://${e.url}/${
          "/" === t.charAt(0) ? t.substr(1) : t
        }`;
        return n.length && (o += `?${n}`), o;
      }
      function Xt(e) {
        return Object.keys(e)
          .map((t) => {
            return Tt(
              "%s=%s",
              t,
              ((r = e[t]),
              "[object Object]" === Object.prototype.toString.call(r) ||
              "[object Array]" === Object.prototype.toString.call(r)
                ? JSON.stringify(e[t])
                : e[t]),
            );
            var r;
          })
          .join("&");
      }
      function er(e) {
        return e.map((e) => tr(e));
      }
      function tr(e) {
        const t = e.request.headers["x-algolia-api-key"]
          ? { "x-algolia-api-key": "*****" }
          : {};
        return {
          ...e,
          request: { ...e.request, headers: { ...e.request.headers, ...t } },
        };
      }
      const rr = (e) => {
          const t = e.appId,
            r = (function (e, t, r) {
              const n = {
                "x-algolia-api-key": r,
                "x-algolia-application-id": t,
              };
              return {
                headers: () => (e === Mt.WithinHeaders ? n : {}),
                queryParameters: () =>
                  e === Mt.WithinQueryParameters ? n : {},
              };
            })(
              void 0 !== e.authMode ? e.authMode : Mt.WithinHeaders,
              t,
              e.apiKey,
            ),
            n = (function (e) {
              const {
                  hostsCache: t,
                  logger: r,
                  requester: n,
                  requestsCache: o,
                  responsesCache: a,
                  timeouts: c,
                  userAgent: i,
                  hosts: l,
                  queryParameters: s,
                  headers: u,
                } = e,
                f = {
                  hostsCache: t,
                  logger: r,
                  requester: n,
                  requestsCache: o,
                  responsesCache: a,
                  timeouts: c,
                  userAgent: i,
                  headers: u,
                  queryParameters: s,
                  hosts: l.map((e) => Jt(e)),
                  read(e, t) {
                    const r = Ht(t, f.timeouts.read),
                      n = () =>
                        Zt(
                          f,
                          f.hosts.filter((e) => 0 != (e.accept & Ft.Read)),
                          e,
                          r,
                        );
                    if (
                      !0 !==
                      (void 0 !== r.cacheable ? r.cacheable : e.cacheable)
                    )
                      return n();
                    const o = {
                      request: e,
                      mappedRequestOptions: r,
                      transporter: {
                        queryParameters: f.queryParameters,
                        headers: f.headers,
                      },
                    };
                    return f.responsesCache.get(
                      o,
                      () =>
                        f.requestsCache.get(o, () =>
                          f.requestsCache
                            .set(o, n())
                            .then(
                              (e) =>
                                Promise.all([f.requestsCache.delete(o), e]),
                              (e) =>
                                Promise.all([
                                  f.requestsCache.delete(o),
                                  Promise.reject(e),
                                ]),
                            )
                            .then(([e, t]) => t),
                        ),
                      { miss: (e) => f.responsesCache.set(o, e) },
                    );
                  },
                  write: (e, t) =>
                    Zt(
                      f,
                      f.hosts.filter((e) => 0 != (e.accept & Ft.Write)),
                      e,
                      Ht(t, f.timeouts.write),
                    ),
                };
              return f;
            })({
              hosts: [
                { url: `${t}-dsn.algolia.net`, accept: Ft.Read },
                { url: `${t}.algolia.net`, accept: Ft.Write },
              ].concat(
                _t([
                  { url: `${t}-1.algolianet.com` },
                  { url: `${t}-2.algolianet.com` },
                  { url: `${t}-3.algolianet.com` },
                ]),
              ),
              ...e,
              headers: {
                ...r.headers(),
                "content-type": "application/x-www-form-urlencoded",
                ...e.headers,
              },
              queryParameters: { ...r.queryParameters(), ...e.queryParameters },
            }),
            o = {
              transporter: n,
              appId: t,
              addAlgoliaAgent(e, t) {
                n.userAgent.add({ segment: e, version: t });
              },
              clearCache: () =>
                Promise.all([
                  n.requestsCache.clear(),
                  n.responsesCache.clear(),
                ]).then(() => {}),
            };
          return qt(o, e.methods);
        },
        nr = (e) => (t, r) =>
          t.method === zt
            ? e.transporter.read(t, r)
            : e.transporter.write(t, r),
        or =
          (e) =>
          (t, r = {}) =>
            qt(
              { transporter: e.transporter, appId: e.appId, indexName: t },
              r.methods,
            ),
        ar = (e) => (t, r) => {
          const n = t.map((e) => ({ ...e, params: Xt(e.params || {}) }));
          return e.transporter.read(
            {
              method: Wt,
              path: "1/indexes/*/queries",
              data: { requests: n },
              cacheable: !0,
            },
            r,
          );
        },
        cr = (e) => (t, r) =>
          Promise.all(
            t.map((t) => {
              const { facetName: n, facetQuery: o, ...a } = t.params;
              return or(e)(t.indexName, {
                methods: { searchForFacetValues: sr },
              }).searchForFacetValues(n, o, { ...r, ...a });
            }),
          ),
        ir = (e) => (t, r, n) =>
          e.transporter.read(
            {
              method: Wt,
              path: Tt("1/answers/%s/prediction", e.indexName),
              data: { query: t, queryLanguages: r },
              cacheable: !0,
            },
            n,
          ),
        lr = (e) => (t, r) =>
          e.transporter.read(
            {
              method: Wt,
              path: Tt("1/indexes/%s/query", e.indexName),
              data: { query: t },
              cacheable: !0,
            },
            r,
          ),
        sr = (e) => (t, r, n) =>
          e.transporter.read(
            {
              method: Wt,
              path: Tt("1/indexes/%s/facets/%s/query", e.indexName, t),
              data: { facetQuery: r },
              cacheable: !0,
            },
            n,
          ),
        ur = 1,
        fr = 2,
        mr = 3;
      function pr(e, t, r) {
        const n = {
          appId: e,
          apiKey: t,
          timeouts: { connect: 1, read: 2, write: 30 },
          requester: {
            send: (e) =>
              new Promise((t) => {
                const r = new XMLHttpRequest();
                r.open(e.method, e.url, !0),
                  Object.keys(e.headers).forEach((t) =>
                    r.setRequestHeader(t, e.headers[t]),
                  );
                const n = (e, n) =>
                    setTimeout(() => {
                      r.abort(), t({ status: 0, content: n, isTimedOut: !0 });
                    }, 1e3 * e),
                  o = n(e.connectTimeout, "Connection timeout");
                let a;
                (r.onreadystatechange = () => {
                  r.readyState > r.OPENED &&
                    void 0 === a &&
                    (clearTimeout(o),
                    (a = n(e.responseTimeout, "Socket timeout")));
                }),
                  (r.onerror = () => {
                    0 === r.status &&
                      (clearTimeout(o),
                      clearTimeout(a),
                      t({
                        content: r.responseText || "Network request failed",
                        status: r.status,
                        isTimedOut: !1,
                      }));
                  }),
                  (r.onload = () => {
                    clearTimeout(o),
                      clearTimeout(a),
                      t({
                        content: r.responseText,
                        status: r.status,
                        isTimedOut: !1,
                      });
                  }),
                  r.send(e.data);
              }),
          },
          logger:
            ((o = mr),
            {
              debug: (e, t) => (
                ur >= o && console.debug(e, t), Promise.resolve()
              ),
              info: (e, t) => (
                fr >= o && console.info(e, t), Promise.resolve()
              ),
              error: (e, t) => (console.error(e, t), Promise.resolve()),
            }),
          responsesCache: Rt(),
          requestsCache: Rt({ serializable: !1 }),
          hostsCache: Nt({ caches: [xt({ key: `${Lt}-${e}` }), Rt()] }),
          userAgent: Yt(Lt).add({ segment: "Browser", version: "lite" }),
          authMode: Mt.WithinQueryParameters,
        };
        var o;
        return rr({
          ...n,
          ...r,
          methods: {
            search: ar,
            searchForFacetValues: cr,
            multipleQueries: ar,
            multipleSearchForFacetValues: cr,
            customRequest: nr,
            initIndex: (e) => (t) =>
              or(e)(t, {
                methods: {
                  search: lr,
                  searchForFacetValues: sr,
                  findAnswers: ir,
                },
              }),
          },
        });
      }
      pr.version = Lt;
      const dr = pr;
      var hr = "3.3.2";
      function vr() {}
      function yr(e) {
        return e;
      }
      function gr(e, t) {
        return e.reduce(function (e, r) {
          var n = t(r);
          return (
            e.hasOwnProperty(n) || (e[n] = []),
            e[n].length < 5 && e[n].push(r),
            e
          );
        }, {});
      }
      var br = ["footer", "searchBox"];
      function Or() {
        return (
          (Or =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          Or.apply(this, arguments)
        );
      }
      function Sr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Er(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Sr(Object(r), !0).forEach(function (t) {
                jr(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Sr(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t),
                );
              });
        }
        return e;
      }
      function jr(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function wr(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == r) return;
            var n,
              o,
              a = [],
              c = !0,
              i = !1;
            try {
              for (
                r = r.call(e);
                !(c = (n = r.next()).done) &&
                (a.push(n.value), !t || a.length !== t);
                c = !0
              );
            } catch (l) {
              (i = !0), (o = l);
            } finally {
              try {
                c || null == r.return || r.return();
              } finally {
                if (i) throw o;
              }
            }
            return a;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Pr(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return Pr(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function Pr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function Ir(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function Dr(e) {
        var t = e.appId,
          r = e.apiKey,
          n = e.indexName,
          o = e.placeholder,
          a = void 0 === o ? "Search docs" : o,
          c = e.searchParameters,
          i = e.onClose,
          l = void 0 === i ? vr : i,
          s = e.transformItems,
          u = void 0 === s ? yr : s,
          f = e.hitComponent,
          m = void 0 === f ? Re : f,
          p = e.resultsFooterComponent,
          d =
            void 0 === p
              ? function () {
                  return null;
                }
              : p,
          h = e.navigator,
          v = e.initialScrollY,
          y = void 0 === v ? 0 : v,
          g = e.transformSearchClient,
          b = void 0 === g ? yr : g,
          O = e.disableUserPersonalization,
          S = void 0 !== O && O,
          E = e.initialQuery,
          j = void 0 === E ? "" : E,
          w = e.translations,
          P = void 0 === w ? {} : w,
          I = e.getMissingResultsUrl,
          D = P.footer,
          C = P.searchBox,
          k = Ir(P, br),
          A = wr(
            ke.useState({
              query: "",
              collections: [],
              completion: null,
              context: {},
              isOpen: !1,
              activeItemId: null,
              status: "idle",
            }),
            2,
          ),
          x = A[0],
          N = A[1],
          R = ke.useRef(null),
          _ = ke.useRef(null),
          q = ke.useRef(null),
          T = ke.useRef(null),
          L = ke.useRef(null),
          M = ke.useRef(10),
          H = ke.useRef(
            "undefined" != typeof window
              ? window.getSelection().toString().slice(0, 64)
              : "",
          ).current,
          F = ke.useRef(j || H).current,
          U = (function (e, t, r) {
            return ke.useMemo(
              function () {
                var n = dr(e, t);
                return (
                  n.addAlgoliaAgent("docsearch", hr),
                  !1 ===
                    /docsearch.js \(.*\)/.test(n.transporter.userAgent.value) &&
                    n.addAlgoliaAgent("docsearch-react", hr),
                  r(n)
                );
              },
              [e, t, r],
            );
          })(t, r, b),
          B = ke.useRef(
            At({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(n), limit: 10 }),
          ).current,
          V = ke.useRef(
            At({
              key: "__DOCSEARCH_RECENT_SEARCHES__".concat(n),
              limit: 0 === B.getAll().length ? 7 : 4,
            }),
          ).current,
          K = ke.useCallback(
            function (e) {
              if (!S) {
                var t = "content" === e.type ? e.__docsearch_parent : e;
                t &&
                  -1 ===
                    B.getAll().findIndex(function (e) {
                      return e.objectID === t.objectID;
                    }) &&
                  V.add(t);
              }
            },
            [B, V, S],
          ),
          $ = ke.useMemo(
            function () {
              return Ce({
                id: "docsearch",
                defaultActiveItemId: 0,
                placeholder: a,
                openOnFocus: !0,
                initialState: { query: F, context: { searchSuggestions: [] } },
                navigator: h,
                onStateChange: function (e) {
                  N(e.state);
                },
                getSources: function (e) {
                  var t = e.query,
                    r = e.state,
                    o = e.setContext,
                    a = e.setStatus;
                  return t
                    ? U.search([
                        {
                          query: t,
                          indexName: n,
                          params: Er(
                            {
                              attributesToRetrieve: [
                                "hierarchy.lvl0",
                                "hierarchy.lvl1",
                                "hierarchy.lvl2",
                                "hierarchy.lvl3",
                                "hierarchy.lvl4",
                                "hierarchy.lvl5",
                                "hierarchy.lvl6",
                                "content",
                                "type",
                                "url",
                              ],
                              attributesToSnippet: [
                                "hierarchy.lvl1:".concat(M.current),
                                "hierarchy.lvl2:".concat(M.current),
                                "hierarchy.lvl3:".concat(M.current),
                                "hierarchy.lvl4:".concat(M.current),
                                "hierarchy.lvl5:".concat(M.current),
                                "hierarchy.lvl6:".concat(M.current),
                                "content:".concat(M.current),
                              ],
                              snippetEllipsisText: "\u2026",
                              highlightPreTag: "<mark>",
                              highlightPostTag: "</mark>",
                              hitsPerPage: 20,
                            },
                            c,
                          ),
                        },
                      ])
                        .catch(function (e) {
                          throw ("RetryError" === e.name && a("error"), e);
                        })
                        .then(function (e) {
                          var t = e.results[0],
                            n = t.hits,
                            a = t.nbHits,
                            c = gr(n, function (e) {
                              return it(e);
                            });
                          return (
                            r.context.searchSuggestions.length <
                              Object.keys(c).length &&
                              o({ searchSuggestions: Object.keys(c) }),
                            o({ nbHits: a }),
                            Object.values(c).map(function (e, t) {
                              return {
                                sourceId: "hits".concat(t),
                                onSelect: function (e) {
                                  var t = e.item,
                                    r = e.event;
                                  K(t),
                                    r.shiftKey || r.ctrlKey || r.metaKey || l();
                                },
                                getItemUrl: function (e) {
                                  return e.item.url;
                                },
                                getItems: function () {
                                  return Object.values(
                                    gr(e, function (e) {
                                      return e.hierarchy.lvl1;
                                    }),
                                  )
                                    .map(u)
                                    .map(function (e) {
                                      return e.map(function (t) {
                                        return Er(
                                          Er({}, t),
                                          {},
                                          {
                                            __docsearch_parent:
                                              "lvl1" !== t.type &&
                                              e.find(function (e) {
                                                return (
                                                  "lvl1" === e.type &&
                                                  e.hierarchy.lvl1 ===
                                                    t.hierarchy.lvl1
                                                );
                                              }),
                                          },
                                        );
                                      });
                                    })
                                    .flat();
                                },
                              };
                            })
                          );
                        })
                    : S
                    ? []
                    : [
                        {
                          sourceId: "recentSearches",
                          onSelect: function (e) {
                            var t = e.item,
                              r = e.event;
                            K(t), r.shiftKey || r.ctrlKey || r.metaKey || l();
                          },
                          getItemUrl: function (e) {
                            return e.item.url;
                          },
                          getItems: function () {
                            return V.getAll();
                          },
                        },
                        {
                          sourceId: "favoriteSearches",
                          onSelect: function (e) {
                            var t = e.item,
                              r = e.event;
                            K(t), r.shiftKey || r.ctrlKey || r.metaKey || l();
                          },
                          getItemUrl: function (e) {
                            return e.item.url;
                          },
                          getItems: function () {
                            return B.getAll();
                          },
                        },
                      ];
                },
              });
            },
            [n, c, U, l, V, B, K, F, a, h, u, S],
          ),
          J = $.getEnvironmentProps,
          z = $.getRootProps,
          W = $.refresh;
        return (
          (function (e) {
            var t = e.getEnvironmentProps,
              r = e.panelElement,
              n = e.formElement,
              o = e.inputElement;
            ke.useEffect(
              function () {
                if (r && n && o) {
                  var e = t({
                      panelElement: r,
                      formElement: n,
                      inputElement: o,
                    }),
                    a = e.onTouchStart,
                    c = e.onTouchMove;
                  return (
                    window.addEventListener("touchstart", a),
                    window.addEventListener("touchmove", c),
                    function () {
                      window.removeEventListener("touchstart", a),
                        window.removeEventListener("touchmove", c);
                    }
                  );
                }
              },
              [t, r, n, o],
            );
          })({
            getEnvironmentProps: J,
            panelElement: T.current,
            formElement: q.current,
            inputElement: L.current,
          }),
          (function (e) {
            var t = e.container;
            ke.useEffect(
              function () {
                if (t) {
                  var e = t.querySelectorAll(
                      "a[href]:not([disabled]), button:not([disabled]), input:not([disabled])",
                    ),
                    r = e[0],
                    n = e[e.length - 1];
                  return (
                    t.addEventListener("keydown", o),
                    function () {
                      t.removeEventListener("keydown", o);
                    }
                  );
                }
                function o(e) {
                  "Tab" === e.key &&
                    (e.shiftKey
                      ? document.activeElement === r &&
                        (e.preventDefault(), n.focus())
                      : document.activeElement === n &&
                        (e.preventDefault(), r.focus()));
                }
              },
              [t],
            );
          })({ container: R.current }),
          ke.useEffect(function () {
            return (
              document.body.classList.add("DocSearch--active"),
              function () {
                var e, t;
                document.body.classList.remove("DocSearch--active"),
                  null === (e = (t = window).scrollTo) ||
                    void 0 === e ||
                    e.call(t, 0, y);
              }
            );
          }, []),
          ke.useEffect(function () {
            window.matchMedia("(max-width: 768px)").matches && (M.current = 5);
          }, []),
          ke.useEffect(
            function () {
              T.current && (T.current.scrollTop = 0);
            },
            [x.query],
          ),
          ke.useEffect(
            function () {
              F.length > 0 && (W(), L.current && L.current.focus());
            },
            [F, W],
          ),
          ke.useEffect(function () {
            function e() {
              if (_.current) {
                var e = 0.01 * window.innerHeight;
                _.current.style.setProperty(
                  "--docsearch-vh",
                  "".concat(e, "px"),
                );
              }
            }
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          ke.createElement(
            "div",
            Or({ ref: R }, z({ "aria-expanded": !0 }), {
              className: [
                "DocSearch",
                "DocSearch-Container",
                "stalled" === x.status && "DocSearch-Container--Stalled",
                "error" === x.status && "DocSearch-Container--Errored",
              ]
                .filter(Boolean)
                .join(" "),
              role: "button",
              tabIndex: 0,
              onMouseDown: function (e) {
                e.target === e.currentTarget && l();
              },
            }),
            ke.createElement(
              "div",
              { className: "DocSearch-Modal", ref: _ },
              ke.createElement(
                "header",
                { className: "DocSearch-SearchBar", ref: q },
                ke.createElement(
                  It,
                  Or({}, $, {
                    state: x,
                    autoFocus: 0 === F.length,
                    inputRef: L,
                    isFromSelection: Boolean(F) && F === H,
                    translations: C,
                    onClose: l,
                  }),
                ),
              ),
              ke.createElement(
                "div",
                { className: "DocSearch-Dropdown", ref: T },
                ke.createElement(
                  Ot,
                  Or({}, $, {
                    indexName: n,
                    state: x,
                    hitComponent: m,
                    resultsFooterComponent: d,
                    disableUserPersonalization: S,
                    recentSearches: V,
                    favoriteSearches: B,
                    inputRef: L,
                    translations: k,
                    getMissingResultsUrl: I,
                    onItemClick: function (e) {
                      K(e), l();
                    },
                  }),
                ),
              ),
              ke.createElement(
                "footer",
                { className: "DocSearch-Footer" },
                ke.createElement(Ne, { translations: D }),
              ),
            ),
          )
        );
      }
    },
  },
]);
