;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2, 10, 13, 14, 16, 17, 20, 28, 29, 31, 33, 34],
  {
    848: function (e, n, t) {
      var r = t(82),
        a = t(852)
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']])
      var o = { insert: 'head', singleton: !1 },
        i = (r(e.i, a, o), a.locals ? a.locals : {})
      e.exports = i
    },
    851: function (e, n, t) {
      var r = t(82),
        a = t(854)
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']])
      var o = { insert: 'head', singleton: !1 },
        i = (r(e.i, a, o), a.locals ? a.locals : {})
      e.exports = i
    },
    852: function (e, n, t) {
      ;(n = t(83)(!1)).push([
        e.i,
        '.image-cover {\n    width: 100%;\n    height: 300px;\n    background-color: burlywood;\n    border-radius: 3px;\n}\n \n.btn {\n    margin: 10px 0px;\n}\n\n.btn-create i {\n    margin-right: 5px;\n    color: #ffffff;\n    font-size: 16px;\n    vertical-align: 0px;\n}\n\n.btn-create {\n    font-size: 16px;\n    background-color: rgb(55, 155, 236);\n    color: #ffffff;\n}\n\n.btn-create:hover {\n    background-color: rgb(31, 144, 236);\n    color: #ffffff;\n}\nh2 {\n    margin-top: 10px;\n    color: black;\n}\n\n\n',
        ''
      ]),
        (e.exports = n)
    },
    854: function (e, n, t) {
      ;(n = t(83)(!1)).push([
        e.i,
        '.link-group {\n    border-radius: 3px;\n    width: 100%;\n    height: 70px;\n    margin-bottom: 10px;\n    flex-flow: row wrap;\n    padding: 5px;\n    display: flex;\n    overflow: hidden;\n}\n  \n.link-group:hover {\n    background-color: rgb(235, 233, 233);\n    text-decoration: none;\n    cursor: pointer;\n}\n  \n  \n.link-group h5 {\n    display: block;\n    align-self: center;\n    margin-left: 5px;\n    flex:1;\n}\n\n.card-text {\n    margin-top: 10px;\n}\n',
        ''
      ]),
        (e.exports = n)
    },
    857: function (e, n, t) {
      var r = t(82),
        a = t(858)
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']])
      var o = { insert: 'head', singleton: !1 },
        i = (r(e.i, a, o), a.locals ? a.locals : {})
      e.exports = i
    },
    858: function (e, n, t) {
      ;(n = t(83)(!1)).push([
        e.i,
        '.btn i {\n    margin-right: 5px;\n    color: rgb(10, 92, 199);\n    font-size: 1rem;\n    vertical-align: 0px;\n}\n\n.btn {\n    font-size: 1rem;\n    background-color: rgb(208, 227, 243);\n    color: rgb(10, 92, 199);\n}\n\n.btn:hover {\n    background-color: rgb(196, 225, 248);\n    color: rgb(10, 92, 199);\n}\n',
        ''
      ]),
        (e.exports = n)
    },
    859: function (e, n, t) {
      'use strict'
      t.r(n)
      var r = t(0),
        a = t.n(r)
      t(857)
      function o(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, n) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
              )
            )
              return
            var t = [],
              r = !0,
              a = !1,
              o = void 0
            try {
              for (
                var i, l = e[Symbol.iterator]();
                !(r = (i = l.next()).done) &&
                (t.push(i.value), !n || t.length !== n);
                r = !0
              );
            } catch (e) {
              ;(a = !0), (o = e)
            } finally {
              try {
                r || null == l.return || l.return()
              } finally {
                if (a) throw o
              }
            }
            return t
          })(e, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          })()
        )
      }
      n.default = function (e) {
        var n = o(Object(r.useState)(!0), 2),
          t = n[0],
          i = n[1]
        return a.a.createElement(
          'div',
          null,
          a.a.createElement(
            'form',
            null,
            a.a.createElement(
              'div',
              { className: 'input-group mb-3' },
              a.a.createElement(
                'div',
                { className: 'input-group-prepend' },
                a.a.createElement(
                  'span',
                  { className: 'input-group-text' },
                  a.a.createElement('i', { className: 'fa fa-search' })
                )
              ),
              a.a.createElement('input', {
                type: 'text',
                className: 'form-control',
                placeholder: 'Tìm kiếm nhóm'
              })
            )
          ),
          a.a.createElement(
            'button',
            {
              type: 'button',
              name: '',
              className: 'btn btn-block',
              onClick: function () {
                i(!t), e.onGetCreate(t)
              }
            },
            a.a.createElement('i', {
              className: t ? 'fas fa-plus' : 'fas fa-times'
            }),
            t ? 'Tạo nhóm mới' : 'Hủy tạo nhóm'
          )
        )
      }
    },
    860: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return i
        })
      var r = t(0),
        a = t.n(r),
        o = t(3)
      function i(e) {
        return a.a.createElement(
          'a',
          {
            className: 'link-group',
            onClick: function () {
              e.inGroupTrue(!0), e.inIDGroup(e.groups.id)
            }
          },
          a.a.createElement(l, null),
          a.a.createElement('h5', null, e.groups.nameGroup)
        )
      }
      var l = t
        .n(o)
        .a.div.withConfig({
          displayName: 'TaskManager__ImgPage',
          componentId: 'sc-1muoq4w-0'
        })(['width:60px;height:60px;background-color:#ccc;border-radius:5px;'])
    },
    861: function (e, n, t) {
      'use strict'
      t.r(n)
      var r = t(0),
        a = t.n(r)
      t(848)
      function o(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function i(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[n] = t),
          e
        )
      }
      function l(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, n) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
              )
            )
              return
            var t = [],
              r = !0,
              a = !1,
              o = void 0
            try {
              for (
                var i, l = e[Symbol.iterator]();
                !(r = (i = l.next()).done) &&
                (t.push(i.value), !n || t.length !== n);
                r = !0
              );
            } catch (e) {
              ;(a = !0), (o = e)
            } finally {
              try {
                r || null == l.return || l.return()
              } finally {
                if (a) throw o
              }
            }
            return t
          })(e, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          })()
        )
      }
      n.default = function (e) {
        var n = l(
            Object(r.useState)({
              id: '',
              nameGroup: '',
              description: '',
              isAdmin: !0
            }),
            2
          ),
          t = n[0],
          c = n[1]
        Object(r.useEffect)(
          function () {
            return function () {
              c({ id: '', nameGroup: '', description: '', isAdmin: !0 })
            }
          },
          [e.exitCreate]
        )
        var u = function (e) {
          var n = e.target,
            r = n.name,
            a = n.value
          c(
            (function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {}
                n % 2
                  ? o(Object(t), !0).forEach(function (n) {
                      i(e, n, t[n])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(t)
                    )
                  : o(Object(t)).forEach(function (n) {
                      Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(t, n)
                      )
                    })
              }
              return e
            })({}, t, i({}, r, a))
          )
        }
        return a.a.createElement(
          'div',
          null,
          a.a.createElement('div', { className: 'image-cover' }),
          a.a.createElement('h2', null, t.nameGroup),
          a.a.createElement(
            'button',
            { type: 'button', name: '', className: 'btn btn-block btn-create' },
            a.a.createElement('i', { className: 'far fa-images' }),
            'Thêm ảnh bìa'
          ),
          a.a.createElement(
            'div',
            { className: 'form-group' },
            a.a.createElement('label', null, 'Tên nhóm:'),
            a.a.createElement('input', {
              type: 'text',
              name: 'nameGroup',
              className: 'form-control',
              placeholder: 'Nhập tên nhóm',
              onChange: u
            })
          ),
          a.a.createElement(
            'div',
            { className: 'form-group' },
            a.a.createElement('label', null, 'Miêu tả nhóm:'),
            a.a.createElement('textarea', {
              className: 'form-control',
              name: 'description',
              rows: '3',
              onChange: u
            })
          ),
          a.a.createElement('input', {
            type: 'text',
            name: 'member',
            className: 'form-control',
            placeholder: 'Chọn thành viên'
          }),
          a.a.createElement(
            'button',
            {
              type: 'button',
              className: 'btn btn-block btn-create',
              onClick: function (n) {
                n.preventDefault(), e.inGroupTrue(!0), e.createGroup(t)
              }
            },
            'Tạo'
          )
        )
      }
    },
    863: function (e, n, t) {
      var r = t(82),
        a = t(864)
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']])
      var o = { insert: 'head', singleton: !1 },
        i = (r(e.i, a, o), a.locals ? a.locals : {})
      e.exports = i
    },
    864: function (e, n, t) {
      ;(n = t(83)(!1)).push([
        e.i,
        '.flex-setting {\n    display: flex;\n    flex-flow: column wrap;\n    position: relative;\n}\n.flex-setting .btn-admin {\n    width: 190px;\n    background-color: rgb(34, 111, 253);\n    color: #ffffff;\n    font-size: 1rem;\n    border-radius: 10px;\n}\n\n.flex-setting .btn-admin:hover {\n    background-color: rgb(15, 98, 252);\n    color: #ffffff;\n}\n\n.flex-setting .btn-admin i {\n    color: #ffffff;\n    margin-right: 5px;\n    vertical-align: 0px;\n}\n\n.list-admin {\n    display: flex;\n    flex-flow: row wrap;\n}\n\n.list-admin .admin {\n    width: 43px;\n    height: 43px;\n    background-color: #c9c9c9;\n    border-radius: 100%;\n    align-self: center;\n    position: relative;\n}\n\n.add-admin {\n    width: 100%;\n    height: 43px;\n    margin-bottom: 5px;\n}\n.kick-out {\n    display: none;\n}\n.list-admin .admin:hover {\n    cursor: pointer;\n}\n.list-admin .admin:hover .kick-out {\n    display: block;\n    color: rgb(68, 68, 68);\n    position: absolute;\n    top: 0;\n    right: 0;\n}\n.list-admin .admin:hover .kick-out:hover {\n    color: black;\n    cursor: pointer;\n}',
        ''
      ]),
        (e.exports = n)
    },
    865: function (e, n, t) {
      var r = t(82),
        a = t(866)
      'string' == typeof (a = a.__esModule ? a.default : a) &&
        (a = [[e.i, a, '']])
      var o = { insert: 'head', singleton: !1 },
        i = (r(e.i, a, o), a.locals ? a.locals : {})
      e.exports = i
    },
    866: function (e, n, t) {
      ;(n = t(83)(!1)).push([
        e.i,
        '.flex-container {\n    display: flex;\n    flex-flow: row wrap;\n    position: relative;\n}\n\n.card .amount {\n    margin-top: -15px;\n}\n\n.flex-container .btn-add {\n    width: 80px;\n    background-color: rgb(34, 111, 253);\n    color: #ffffff;\n    font-size: 1rem;\n    border-radius: 10px;\n}\n\n.flex-container .btn-add:hover {\n    background-color: rgb(15, 98, 252);\n    color: #ffffff;\n}\n\n.flex-container .btn-add i {\n    color: #ffffff;\n    margin-right: 5px;\n    vertical-align: 0px;\n}\n\n.number-member, .me {\n    width: 43px;\n    height: 43px;\n    background-color: #c9c9c9;\n    border-radius: 100%;\n    padding: 10px 0px 0px 7px;\n    border: 2px solid #ffffff;\n    align-self: center;\n}\n\n.me {\n    z-index: 2;\n}\n\n.number-member {\n    position: absolute;\n    margin-left: 115px;\n    z-index: 1;\n}\n.image-cover .btn-change {\n    width: 120px;\n    background-color: rgb(204, 204, 204);\n    color: rgb(37, 37, 37);\n    font-size: 1rem;\n    margin: 243px 15px 0px 0px;\n    float: right;\n}\n\n.image-cover .btn-change i {\n    color: rgb(37, 37, 37);\n    vertical-align: 0px;\n    margin-right: 5px;\n}\n\n.image-cover .btn-change:hover {\n    background-color: rgb(182, 182, 182);\n    color: rgb(37, 37, 37);\n}\n\n.add-mem {\n    width: 300px;\n    position: absolute;\n    z-index: 3;\n    height: 43px;\n    margin-left: 80px;\n    align-self: center;\n}\n\n',
        ''
      ]),
        (e.exports = n)
    },
    872: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return i
        })
      var r = t(0),
        a = t.n(r)
      t(851), t(863)
      function o(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, n) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
              )
            )
              return
            var t = [],
              r = !0,
              a = !1,
              o = void 0
            try {
              for (
                var i, l = e[Symbol.iterator]();
                !(r = (i = l.next()).done) &&
                (t.push(i.value), !n || t.length !== n);
                r = !0
              );
            } catch (e) {
              ;(a = !0), (o = e)
            } finally {
              try {
                r || null == l.return || l.return()
              } finally {
                if (a) throw o
              }
            }
            return t
          })(e, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          })()
        )
      }
      function i(e) {
        var n = o(Object(r.useState)(!1), 2),
          t = n[0],
          i = n[1],
          l = t
            ? a.a.createElement('input', {
                type: 'text',
                className: 'form-control add-admin',
                name: 'member',
                placeholder: 'Chọn thành viên'
              })
            : a.a.createElement('div', null)
        return a.a.createElement(
          'div',
          { className: 'card col-lg-4 col-sm-12 col-md-12' },
          a.a.createElement(
            'div',
            { className: 'card-body' },
            a.a.createElement(
              'div',
              { className: 'flex-setting' },
              a.a.createElement(
                'button',
                {
                  type: 'button',
                  name: '',
                  className: 'btn btn-block btn-admin',
                  disabled: !e.getIsAdmin,
                  onClick: function () {
                    i(!t)
                  }
                },
                a.a.createElement('i', { className: 'fa fa-plus' }),
                'Thêm quản trị viên'
              ),
              l,
              a.a.createElement('label', null, 'Quản trị viên:'),
              a.a.createElement(
                'div',
                { className: 'list-admin' },
                a.a.createElement(
                  'div',
                  { className: 'admin' },
                  a.a.createElement('i', { className: 'fa fa-times kick-out' })
                ),
                a.a.createElement(
                  'div',
                  { className: 'admin' },
                  a.a.createElement('i', { className: 'fa fa-times kick-out' })
                )
              ),
              a.a.createElement('label', null, 'Thành viên:'),
              a.a.createElement(
                'div',
                { className: 'list-admin' },
                a.a.createElement(
                  'div',
                  { className: 'admin' },
                  a.a.createElement('i', { className: 'fa fa-times kick-out' })
                ),
                a.a.createElement(
                  'div',
                  { className: 'admin' },
                  a.a.createElement('i', { className: 'fa fa-times kick-out' })
                ),
                a.a.createElement(
                  'div',
                  { className: 'admin' },
                  a.a.createElement('i', { className: 'fa fa-times kick-out' })
                ),
                a.a.createElement(
                  'div',
                  { className: 'admin' },
                  a.a.createElement('i', { className: 'fa fa-times kick-out' })
                ),
                a.a.createElement(
                  'div',
                  { className: 'admin' },
                  a.a.createElement('i', { className: 'fa fa-times kick-out' })
                ),
                a.a.createElement(
                  'div',
                  { className: 'admin' },
                  a.a.createElement('i', { className: 'fa fa-times kick-out' })
                ),
                a.a.createElement(
                  'div',
                  { className: 'admin' },
                  a.a.createElement('i', { className: 'fa fa-times kick-out' })
                ),
                a.a.createElement(
                  'div',
                  { className: 'admin' },
                  a.a.createElement('i', { className: 'fa fa-times kick-out' })
                ),
                a.a.createElement(
                  'div',
                  { className: 'admin' },
                  a.a.createElement('i', { className: 'fa fa-times kick-out' })
                )
              )
            )
          )
        )
      }
    },
    873: function (e, n, t) {
      'use strict'
      t.r(n)
      var r = t(0),
        a = t.n(r),
        o = (t(848), t(865), t(879))
      function i(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, n) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
              )
            )
              return
            var t = [],
              r = !0,
              a = !1,
              o = void 0
            try {
              for (
                var i, l = e[Symbol.iterator]();
                !(r = (i = l.next()).done) &&
                (t.push(i.value), !n || t.length !== n);
                r = !0
              );
            } catch (e) {
              ;(a = !0), (o = e)
            } finally {
              try {
                r || null == l.return || l.return()
              } finally {
                if (a) throw o
              }
            }
            return t
          })(e, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          })()
        )
      }
      n.default = function (e) {
        var n = i(Object(r.useState)(!1), 2),
          t = n[0],
          l = n[1],
          c = t
            ? a.a.createElement('input', {
                type: 'text',
                className: 'form-control add-mem',
                name: 'member',
                placeholder: 'Chọn thành viên'
              })
            : a.a.createElement('div', null)
        return a.a.createElement(
          'div',
          {
            className:
              'card card2 col-lg-7 col-sm-12 col-md-12 p-lg-5 p-sm-5 p-md-5 p-5'
          },
          a.a.createElement(
            'div',
            { className: 'image-cover' },
            a.a.createElement(
              'button',
              {
                type: 'button',
                name: '',
                className: 'btn btn-block btn-change',
                disabled: !e.getGroup.isAdmin
              },
              a.a.createElement('i', { className: 'fa fa-camera' }),
              'Chỉnh sửa'
            )
          ),
          a.a.createElement('h2', null, e.getGroup.nameGroup),
          a.a.createElement('small', { className: 'amount' }, '14k thành viên'),
          a.a.createElement(
            'div',
            { className: 'flex-container' },
            a.a.createElement(
              'button',
              {
                type: 'button',
                name: '',
                className: 'btn btn-block btn-add',
                disabled: !e.getGroup.isAdmin,
                onClick: function () {
                  l(!t)
                }
              },
              a.a.createElement('i', { className: 'fa fa-plus' }),
              'Mời'
            ),
            c,
            a.a.createElement('div', { className: 'me' }),
            a.a.createElement('div', { className: 'number-member' }, '+34')
          ),
          a.a.createElement(o.default, {
            setGroup: e.setGroup,
            getGroup: e.getGroup
          })
        )
      }
    },
    874: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return l
        })
      var r = t(0),
        a = t.n(r),
        o = t(859),
        i = (t(851), t(853), t(860))
      t(846)
      function l(e) {
        var n = e.groupAdmin.map(function (n) {
            return a.a.createElement(i.default, {
              key: n.id,
              inIDGroup: e.inIDGroup,
              groups: n,
              inGroupTrue: e.inGroupTrue
            })
          }),
          t = e.groupMember.map(function (n) {
            return a.a.createElement(i.default, {
              key: n.id,
              inIDGroup: e.inIDGroup,
              groups: n,
              inGroupTrue: e.inGroupTrue
            })
          })
        return a.a.createElement(
          'div',
          { className: 'card col-lg-4 col-sm-12 col-md-12' },
          a.a.createElement(
            'div',
            { className: 'card-body' },
            a.a.createElement(o.default, { onGetCreate: e.onGetCreate }),
            a.a.createElement(
              'p',
              { className: 'card-text' },
              'Nhóm bạn quản lý'
            ),
            n,
            a.a.createElement('p', { className: 'card-text' }, 'Nhóm của bạn'),
            t
          )
        )
      }
    },
    875: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return l
        })
      var r = t(0),
        a = t.n(r),
        o = t(849),
        i = t(861)
      t(850)
      function l(e) {
        var n = e.showCreate
          ? a.a.createElement(
              'div',
              null,
              a.a.createElement(i.default, {
                exitCreate: e.showCreate,
                inGroupTrue: e.inGroupTrue,
                createGroup: e.createGroup
              })
            )
          : a.a.createElement('div', null, a.a.createElement(o.Post, null))
        return a.a.createElement(
          'div',
          {
            className:
              'card col-lg-7 col-sm-12 col-md-12 p-lg-5 p-sm-5 p-md-5 p-5'
          },
          n
        )
      }
    },
    878: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'GroupContainer', function () {
          return s
        })
      var r = t(0),
        a = t.n(r),
        o = t(872),
        i = t(873),
        l = t(874),
        c = t(875)
      t(846)
      function u(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, n) {
            if (
              !(
                Symbol.iterator in Object(e) ||
                '[object Arguments]' === Object.prototype.toString.call(e)
              )
            )
              return
            var t = [],
              r = !0,
              a = !1,
              o = void 0
            try {
              for (
                var i, l = e[Symbol.iterator]();
                !(r = (i = l.next()).done) &&
                (t.push(i.value), !n || t.length !== n);
                r = !0
              );
            } catch (e) {
              ;(a = !0), (o = e)
            } finally {
              try {
                r || null == l.return || l.return()
              } finally {
                if (a) throw o
              }
            }
            return t
          })(e, n) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance'
            )
          })()
        )
      }
      var s = function () {
        var e = u(Object(r.useState)(!1), 2),
          n = e[0],
          t = e[1],
          s = u(Object(r.useState)(null), 2),
          m = (s[0], s[1], u(Object(r.useState)(!1), 2)),
          f = m[0],
          d = m[1],
          p = u(Object(r.useState)([]), 2),
          b = (p[0], p[1], u(Object(r.useState)([]), 2)),
          g =
            (b[0],
            b[1],
            u(
              Object(r.useState)([
                {
                  id: '1',
                  nameGroup: 'CLB Lập Trình PTIT',
                  description: 'Đây là group của CLB Lập Trình',
                  isAdmin: !0
                },
                {
                  id: '2',
                  nameGroup: 'Ban Sự Kiện Gen 6',
                  description: 'Đây là group của D18 Ban Sự Kiện',
                  isAdmin: !0
                },
                {
                  id: '3',
                  nameGroup: 'Thuật toán',
                  description: 'Đây là group của trao đổi về thuật toán',
                  isAdmin: !1
                },
                {
                  id: '4',
                  nameGroup: 'AI PROPTIT 2020',
                  description: 'Đây là group của Multi để dạy AI cho Pro',
                  isAdmin: !1
                }
              ]),
              2
            )),
          h = g[0],
          v =
            (g[1],
            function (e) {
              d(e)
            }),
          x = u(Object(r.useState)({}), 2),
          E = x[0],
          y = x[1],
          k = h.filter(function (e) {
            return !0 === e.isAdmin
          }),
          N = h.filter(function (e) {
            return !1 === e.isAdmin
          }),
          w = function (e) {
            var n = -1
            return (
              h.forEach(function (t, r) {
                t.id === e && (n = r)
              }),
              n
            )
          },
          G = function () {
            return Math.floor(65536 * (1 + Math.random()))
              .toString(16)
              .substring(1)
          },
          O = f
            ? a.a.createElement(
                'div',
                { className: 'row' },
                a.a.createElement(o.default, { getIsAdmin: E.isAdmin }),
                a.a.createElement(i.default, {
                  setGroup: function (e) {
                    ;(h[w(e.id)] = e), y(e)
                  },
                  getGroup: E
                })
              )
            : a.a.createElement(
                'div',
                { className: 'row' },
                a.a.createElement(l.default, {
                  onGetCreate: function (e) {
                    t(e)
                  },
                  groupAdmin: k,
                  groupMember: N,
                  inGroupTrue: v,
                  inIDGroup: function (e) {
                    y(h[w(e)])
                  }
                }),
                a.a.createElement(c.default, {
                  showCreate: n,
                  inGroupTrue: v,
                  createGroup: function (e) {
                    ;(e.id =
                      G() +
                      '-' +
                      G() +
                      '-' +
                      G() +
                      '-' +
                      G() +
                      '-' +
                      G() +
                      '-' +
                      G() +
                      '-' +
                      G() +
                      '-' +
                      G()),
                      h.push(e),
                      y(e)
                  }
                })
              )
        return a.a.createElement('div', null, O)
      }
    },
    889: function (e, n, t) {
      'use strict'
      t.r(n)
      var r = t(878)
      t.d(n, 'default', function () {
        return r.GroupContainer
      })
    }
  }
])
