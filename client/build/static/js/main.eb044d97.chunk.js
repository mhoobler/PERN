(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    21: function (t, e, n) {},
    22: function (t, e, n) {},
    43: function (t, e, n) {
      "use strict";
      n.r(e);
      var c = n(2),
        r = n.n(c),
        o = n(15),
        i = n.n(o),
        s = (n(21), n(16)),
        a = (n(22), n(0)),
        u = function (t) {
          var e = t.todo;
          return Object(a.jsxs)("div", {
            children: [
              Object(a.jsx)("div", { children: e.todo_id }),
              Object(a.jsx)("div", { children: e.name }),
              Object(a.jsx)("div", { children: e.description }),
            ],
          });
        },
        d = function () {
          return Object(a.jsx)("div", {
            children: Object(a.jsxs)("form", {
              children: [
                Object(a.jsx)("label", {
                  htmlFor: "todo-name-input",
                  children: "Name:",
                }),
                Object(a.jsx)("input", { type: "text", id: "todo-name-input" }),
                Object(a.jsx)("label", {
                  htmlFor: "todo-description-input",
                  children: "Description:",
                }),
                Object(a.jsx)("input", {
                  type: "text",
                  id: "todo-description-input",
                }),
                Object(a.jsx)("label", {
                  htmlFor: "todo-tags-input",
                  children: "Tags:",
                }),
                Object(a.jsx)("input", { type: "text", id: "todo-tags-input" }),
              ],
            }),
          });
        },
        j = n(3),
        l = n.n(j),
        p = n(5),
        b = n(6),
        h = n.n(b),
        x = {
          test: (function () {
            var t = Object(p.a)(
              l.a.mark(function t() {
                return l.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), h.a.get("/_");
                      case 2:
                        return t.abrupt("return", t.sent);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })(),
          getAllTodos: (function () {
            var t = Object(p.a)(
              l.a.mark(function t() {
                return l.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), h.a.get("/_todos");
                      case 2:
                        return t.abrupt("return", t.sent);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })(),
        },
        f = function () {
          var t = Object(c.useState)([]),
            e = Object(s.a)(t, 2),
            n = e[0],
            r = e[1];
          return (
            x
              .getAllTodos()
              .then(function (t) {
                console.log(t);
                var e = t.data.rows;
                r(e);
              })
              .catch(function (t) {
                return console.log(t);
              }),
            Object(a.jsxs)("div", {
              className: "App",
              children: [
                Object(a.jsx)(d, {}),
                Object(a.jsx)("div", {
                  className: "todo-container",
                  children: n.map(function (t) {
                    return Object(a.jsx)(u, { todo: t }, t.todo_id);
                  }),
                }),
              ],
            })
          );
        },
        O = function (t) {
          t &&
            t instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 44))
              .then(function (e) {
                var n = e.getCLS,
                  c = e.getFID,
                  r = e.getFCP,
                  o = e.getLCP,
                  i = e.getTTFB;
                n(t), c(t), r(t), o(t), i(t);
              });
        };
      i.a.render(
        Object(a.jsx)(r.a.StrictMode, { children: Object(a.jsx)(f, {}) }),
        document.getElementById("root")
      ),
        O();
    },
  },
  [[43, 1, 2]],
]);
//# sourceMappingURL=main.eb044d97.chunk.js.map
