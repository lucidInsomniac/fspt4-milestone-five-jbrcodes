(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    function(e, t, n) {
      e.exports = n(12);
    },
    ,
    ,
    ,
    ,
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        c = n.n(a),
        s = n(3),
        u = n.n(s),
        r = (n(9), n(1));
      n(10), n(11);
      function o(e) {
        var t = Object(a.useState)(""),
          n = Object(r.a)(t, 2),
          s = n[0],
          u = n[1],
          o = Object(a.useState)(""),
          l = Object(r.a)(o, 2),
          m = l[0],
          i = l[1];
        function f(e) {
          switch (e.target.name) {
            case "firstname":
              u(e.target.value);
              break;
            case "lastname":
              i(e.target.value);
          }
        }
        return c.a.createElement(
          "div",
          { className: "studentsForm" },
          c.a.createElement("h1", null, "_CodeOp's Facebook"),
          c.a.createElement(
            "form",
            {
              onSubmit: function(t) {
                t.preventDefault();
                var n = { firstname: s, lastname: m };
                e.onSubmit(n), u(""), i("");
              }
            },
            c.a.createElement(
              "label",
              { htmlFor: "firstname" },
              "First Name",
              c.a.createElement("input", {
                id: "firstname",
                type: "text",
                name: "firstname",
                className: "firstname",
                value: s,
                onChange: f
              })
            ),
            c.a.createElement(
              "label",
              { htmlFor: "lastname" },
              "Last Name",
              c.a.createElement("input", {
                id: "lastname",
                type: "text",
                name: "lastname",
                className: "lastname",
                value: m,
                onChange: f
              })
            ),
            c.a.createElement(
              "button",
              { id: "submit", type: "submit" },
              "Submit"
            )
          )
        );
      }
      function l(e) {
        return c.a.createElement(
          "div",
          { className: "studentsList" },
          c.a.createElement("h2", null, "Current CodeOp Students"),
          c.a.createElement(
            "div",
            null,
            e.students &&
              e.students.map(function(e) {
                return c.a.createElement("p", { key: e.student }, e.student);
              })
          )
        );
      }
      u.a.render(
        c.a.createElement(function() {
          var e = Object(a.useState)([]),
            t = Object(r.a)(e, 2),
            n = t[0],
            s = t[1];
          function u() {
            fetch("/students");
            var e = {
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(n)
            };
            fetch("/students", e)
              .then(function(e) {
                return e.json();
              })
              .then(function(e) {
                s(e);
              })
              .catch(function(e) {
                console.log(e);
              });
          }
          return (
            Object(a.useEffect)(function() {
              fetch("/students")
                .then(function(e) {
                  return e.json();
                })
                .then(function(e) {
                  console.log("parent", e), s(e);
                })
                .catch(function(e) {
                  console.log("ERROR", e.message);
                });
            }, []),
            c.a.createElement(
              "div",
              { className: "App" },
              c.a.createElement(o, {
                onSubmit: function(e) {
                  return u();
                }
              }),
              c.a.createElement(l, null)
            )
          );
        }, null),
        document.getElementById("root")
      );
    }
  ],
  [[4, 1, 2]]
]);
//# sourceMappingURL=main.7677ba7f.chunk.js.map
