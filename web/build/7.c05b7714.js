;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    895: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n(0),
        o = n.n(a),
        r = n(2),
        u = function (e) {
          var t = e.title,
            n = void 0 === t ? '404' : t,
            a = e.subtitle,
            u = void 0 === a ? 'Oops... You just found an error page...' : a,
            i = e.details,
            s =
              void 0 === i
                ? 'We are sorry but the page you have requested can not be found...'
                : i,
            l = e.action
          return o.a.createElement(r.DefaultErrorPage, {
            title: n,
            subtitle: u,
            details: s,
            action: l
          })
        }
      t.default = function () {
        return o.a.createElement(u, null)
      }
    }
  }
])
