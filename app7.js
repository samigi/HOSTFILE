(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[47], {
    92817: function(e, t, n) {
        "use strict";
        n.d(t, {
            C7: function() {
                return a
            },
            FR: function() {
                return d
            },
            Vr: function() {
                return l
            },
            Yt: function() {
                return r
            },
            jU: function() {
                return u
            },
            ks: function() {
                return c
            },
            zU: function() {
                return o
            }
        });
        var i = n(9669)
          , s = n.n(i)
          , a = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
            return s().get("/get/folder_courses", {
                baseURL: e,
                params: {
                    start: n,
                    parent_id: t
                }
            }).then((function(e) {
                return e.data
            }
            ))
        }
          , l = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1
              , n = arguments.length > 2 ? arguments[2] : void 0;
            return s().get("/get/parent_folder_courses", {
                baseURL: n,
                params: {
                    start: t,
                    current_folder_id: e
                }
            }).then((function(e) {
                return e.data
            }
            ))
        }
          , r = function(e, t) {
            return s().get("/get/coursenew_by_idv2", {
                baseURL: e,
                params: {
                    id: t
                }
            }).then((function(e) {
                return e.data.data
            }
            ))
        }
          , c = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1
              , i = arguments.length > 3 ? arguments[3] : void 0
              , a = arguments.length > 4 ? arguments[4] : void 0
              , l = arguments.length > 5 ? arguments[5] : void 0
              , r = {
                course_id: t,
                parent_id: n,
                windowsapp: l
            };
            return i && (r.lc_app_api_url = new URL(a).host,
            r.linked_course_id = i),
            s().get("/get/folder_contentsv2", {
                baseURL: e,
                params: r
            }).then((function(e) {
                return e.data.data
            }
            ))
        }
          , o = function(e, t, n) {
            return s().get("/get/parent_folder_contents", {
                baseURL: e,
                params: {
                    course_id: t,
                    current_folder_id: n
                }
            }).then((function(e) {
                return e.data.data
            }
            ))
        }
          , d = function(e) {
            return s().get("/get/featuredcourselistnewv2", {
                baseURL: e
            }).then((function(e) {
                return e.data.data
            }
            ))
        }
          , u = function(e, t, n, i) {
            var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "1,2"
              , l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1
              , r = {
                course_id: t,
                start: l,
                live_status: a
            };
            return n && (r.lc_app_api_url = new URL(i).host,
            r.linked_course_id = n),
            s().get("/get/course_contents_by_live_status", {
                baseURL: e,
                params: r
            }).then((function(e) {
                return e.data.data
            }
            ))
        }
    },
    25051: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return c
            }
        });
        var i = n(85893)
          , s = n(55678)
          , a = n(22176)
          , l = n(67294)
          , r = n(58907);
        function c(e) {
            var t = (0,
            l.useState)(0)
              , n = t[0]
              , c = t[1]
              , o = e.id
              , d = void 0 === o ? "fileInput" : o
              , u = e.fileName
              , m = e.setFileName
              , p = e.accept
              , h = e.invalid
              , f = e.uploadPath;
            e.maxFileSize;
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsxs)(a.BZ, {
                    className: "form-control mb-1",
                    children: [(0,
                    i.jsx)(a.II, {
                        type: "file",
                        id: d,
                        accept: p,
                        className: "d-none",
                        onChange: function(t) {
                            var n, i = t.target.files[0];
                            if (i)
                                if (null === (n = e.accept) || void 0 === n ? void 0 : n.replace(" ", "").split(",").includes(i.type)) {
                                    var a = Date.now() + i.name;
                                    (0,
                                    r.c)(a, i, f, (function(e, t) {
                                        c(0),
                                        e ? s.Am.error("Something went wrong in uploading file") : (s.Am.success("File uploaded successfully."),
                                        m(t.Location))
                                    }
                                    )).on("httpUploadProgress", (function(e) {
                                        return c(Math.round(e.loaded / e.total * 100))
                                    }
                                    ))
                                } else
                                    s.Am.error("File type not supported")
                        },
                        invalid: h
                    }), (0,
                    i.jsx)(a.__, {
                        className: "mb-0 w-100",
                        htmlFor: d,
                        children: "choose file.."
                    }), (0,
                    i.jsx)("span", {
                        className: "position-absolute text-truncate",
                        style: {
                            left: "150px",
                            width: "60%"
                        },
                        children: null === u || void 0 === u ? void 0 : u.split("/").pop()
                    })]
                }), n ? (0,
                i.jsx)(a.Ex, {
                    striped: !0,
                    color: "success",
                    value: n,
                    children: "".concat(n, "%")
                }) : null]
            })
        }
    },
    64481: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return m
            }
        });
        var i = n(26042)
          , s = n(85893)
          , a = n(51436)
          , l = n(67814)
          , r = n(96486)
          , c = n(67294)
          , o = n(22176)
          , d = n(7861)
          , u = n(33452);
        function m(e) {
            var t = e.course
              , n = e.screenType
              , m = void 0 === n ? "view" : n
              , p = (0,
            c.useState)("overview")
              , h = p[0]
              , f = p[1]
              , x = (0,
            c.useState)(!1)
              , v = x[0]
              , g = x[1]
              , _ = (0,
            c.useState)(!1)
              , j = _[0]
              , y = _[1]
              , w = function(e) {
                return f(e)
            };
            return (0,
            s.jsxs)("div", {
                children: [j && (0,
                s.jsxs)(o.JL, {
                    className: "mb-4",
                    tabs: !0,
                    children: [(0,
                    s.jsx)(o.LY, {
                        children: (0,
                        s.jsx)(o.OL, {
                            className: "overview" == h.toLowerCase() ? "active ps-1" : " ps-1",
                            onClick: function() {
                                w("overview")
                            },
                            children: "Overview"
                        })
                    }, "overview"), (0,
                    s.jsx)(o.LY, {
                        children: (0,
                        s.jsx)(o.OL, {
                            className: "content" == h.toLowerCase() ? "active" : "",
                            onClick: function() {
                                w("content")
                            },
                            children: "Content"
                        })
                    }, "content")]
                }), (0,
                s.jsxs)(o.I5, {
                    activeTab: h,
                    children: [(0,
                    s.jsxs)(o.Jm, {
                        tabId: "overview",
                        children: [100 != t.validity && (0,
                        s.jsxs)("h6", {
                            children: ["Validity : ", t.validity > 24 ? "Till Exam" : "".concat(t.validity, " months")]
                        }), !(0,
                        r.isEmpty)(t.course_demo_video) && (0,
                        s.jsx)("div", {
                            className: "my-4 rounded",
                            children: (0,
                            s.jsx)("video", {
                                width: "100%",
                                controls: !0,
                                src: t.course_demo_video,
                                controlsList: "nodownload"
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: "mt-4",
                            children: [(0,
                            s.jsx)("h6", {
                                children: "Description"
                            }), (0,
                            s.jsx)("div", {
                                className: "overflow-hidden",
                                dangerouslySetInnerHTML: {
                                    __html: t.course_description
                                }
                            })]
                        })]
                    }, "overview"), (0,
                    s.jsxs)(o.Jm, {
                        tabId: "content",
                        children: [(0,
                        s.jsx)(u.Z, {
                            screenType: m,
                            setHasContent: y,
                            itemId: t.id,
                            showLocked: g
                        }), v && (0,
                        s.jsx)(o.u_, {
                            isOpen: v,
                            toggle: function() {
                                return g(!1)
                            },
                            centered: !0,
                            children: (0,
                            s.jsxs)(o.fe, {
                                className: "text-center justify-content-center p-4",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "d-flex justify-content-center",
                                    children: (0,
                                    s.jsx)("span", {
                                        className: "lock-icon mt-3 mb-2 text-primary",
                                        children: (0,
                                        s.jsx)(l.G, {
                                            icon: a.byT,
                                            size: "2x"
                                        })
                                    })
                                }), (0,
                                s.jsx)("h3", {
                                    className: "my-",
                                    children: "Content Locked"
                                }), (0,
                                s.jsx)("div", {
                                    className: "d-flex justify-content-center",
                                    children: (0,
                                    s.jsx)("div", {
                                        className: "w-5 mb-4",
                                        children: "You must purchase the course to view this content."
                                    })
                                }), (0,
                                s.jsx)(d.Z, {
                                    product: (0,
                                    i.Z)({
                                        id: t.id,
                                        title: t.title,
                                        price: t.price,
                                        image: t.image,
                                        itemId: t.id,
                                        itemType: 10
                                    }, t)
                                })]
                            })
                        })]
                    }, "content")]
                })]
            })
        }
    },
    33452: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return F
            }
        });
        var i = n(26042)
          , s = n(69396)
          , a = n(29815)
          , l = n(85893)
          , r = n(22176)
          , c = n(67814)
          , o = n(51436)
          , d = n(67294)
          , u = n(30381)
          , m = n.n(u)
          , p = n(55678);
        n(58907);
        function h(e) {
            e.courseId;
            var t, n = e.item, i = e.entryIndex, s = e.updateEntries, a = e.removeEntry, u = e.errors, m = (0,
            d.useState)(0), h = m[0], f = (m[1],
            (0,
            d.useState)(0)), x = f[0];
            f[1];
            (0,
            d.useEffect)((function() {
                n.media && _(n.media),
                s(i, "status", "PAID")
            }
            ), []);
            var v = function(e) {
                var t = e.target
                  , n = t.name
                  , a = t.value;
                s(i, n, a)
            }
              , g = {
                FOLDER: {
                    title: "Add New Folder",
                    detail: ""
                },
                VIDEO: {
                    title: "Add Video(s)",
                    accepts: "video/mp4",
                    detail: "Select multiple videos from your local storage * Max. upto 5Gb per video"
                },
                PDF: {
                    title: "Add PDF(s)",
                    accepts: "application/pdf",
                    detail: "Select multiple PDFs from your local storage * Max. upto 100MB per file"
                }
            }
              , _ = function(e) {
                if (e)
                    if (e.type === g[n.type].accepts)
                        if ("video/mp4" === e.type && e.size / 1024 / 1024 / 1024 > 5)
                            p.Am.error("Max allowed file size is 5GB.");
                        else if ("application/pdf" === e.type && e.size / 1024 / 1024 > 100)
                            p.Am.error("Max allowed file size is 100MB.");
                        else {
                            "".concat(Date.now(), "-").concat(e.name);
                            v({
                                target: {
                                    name: "title",
                                    value: e.name
                                }
                            })
                        }
                    else
                        p.Am.error("only ".concat(g[n.type].accepts, " files are allowed."))
            };
            return (0,
            l.jsx)(l.Fragment, {
                children: (0,
                l.jsxs)(r.X2, {
                    className: "mb-5",
                    children: [(0,
                    l.jsx)(r.JX, {
                        md: "2",
                        className: "text-center",
                        children: "VIDEO" === n.type ? (0,
                        l.jsx)(c.G, {
                            icon: o.hvm,
                            color: "#6549f6",
                            size: "5x"
                        }) : (0,
                        l.jsx)("img", {
                            width: "80px",
                            src: n.image || {
                                FOLDER: "/icons/folder.svg",
                                PDF: "/icons/pdf.svg",
                                VIDEO: "/empty-image-web.svg"
                            }[n.type]
                        })
                    }), (0,
                    l.jsxs)(r.JX, {
                        md: "10",
                        children: [(0,
                        l.jsxs)(r.cw, {
                            className: "row d-flex align-items-center",
                            children: [(0,
                            l.jsx)(r.JX, {
                                md: "2",
                                children: (0,
                                l.jsx)(r.__, {
                                    children: "Title"
                                })
                            }), (0,
                            l.jsxs)(r.JX, {
                                md: "10",
                                children: [(0,
                                l.jsx)(r.II, {
                                    type: "text",
                                    name: "title",
                                    placeholder: "title",
                                    value: n.title,
                                    onChange: v
                                }), u["[".concat(i, "].title")] && (0,
                                l.jsx)("small", {
                                    className: "text-danger",
                                    children: u["[".concat(i, "].title")]
                                })]
                            })]
                        }), (0,
                        l.jsxs)(r.cw, {
                            className: "row d-flex align-items-center",
                            children: [(0,
                            l.jsx)(r.JX, {
                                md: "2",
                                children: (0,
                                l.jsx)(r.__, {
                                    children: "Thumbnail"
                                })
                            }), (0,
                            l.jsxs)(r.JX, {
                                md: "10",
                                children: [(0,
                                l.jsxs)(r.BZ, {
                                    className: "form-control mb-1",
                                    children: [(0,
                                    l.jsx)(r.II, {
                                        accept: "image/jpeg, image/jpg, image/png",
                                        type: "file",
                                        id: "image-".concat(i),
                                        name: "image",
                                        className: "d-none",
                                        onChange: function(e, t) {
                                            var n = e.target.files[0];
                                            if (n)
                                                if (["image/jpeg", "image/jpg", "image/png"].includes(n.type))
                                                    if (n.size / 1024 / 1024 > 5)
                                                        p.Am.error("Max allowed file size is 5MB.");
                                                    else
                                                        "".concat(Date.now(), "-").concat(n.name);
                                                else
                                                    p.Am.error("only png, jpg files are allowed.")
                                        }
                                    }), (0,
                                    l.jsx)(r.__, {
                                        className: "fileLabel",
                                        htmlFor: "image-".concat(i),
                                        children: "choose file.."
                                    }), (0,
                                    l.jsx)("span", {
                                        className: "position-absolute text-truncate",
                                        style: {
                                            left: "32%",
                                            width: "60%"
                                        },
                                        children: null === (t = n.image) || void 0 === t ? void 0 : t.split("/").pop()
                                    })]
                                }), h ? (0,
                                l.jsx)(r.Ex, {
                                    color: "success",
                                    value: h
                                }) : null]
                            })]
                        }), (0,
                        l.jsxs)(r.cw, {
                            className: "row d-flex align-items-center",
                            children: [(0,
                            l.jsx)(r.JX, {
                                md: "2",
                                children: (0,
                                l.jsx)(r.__, {
                                    children: "Status"
                                })
                            }), (0,
                            l.jsxs)(r.JX, {
                                md: "10",
                                children: [(0,
                                l.jsxs)(r.X2, {
                                    className: "ml-2",
                                    children: [(0,
                                    l.jsxs)(r.JX, {
                                        xs: "3",
                                        children: [(0,
                                        l.jsx)(r.II, {
                                            name: "status[".concat(i, "]"),
                                            type: "radio",
                                            id: "locked-".concat(i),
                                            value: "PAID",
                                            onChange: v,
                                            checked: "PAID" === n.status
                                        }), (0,
                                        l.jsx)(r.__, {
                                            htmlFor: "locked-".concat(i),
                                            className: "font-regular",
                                            children: "Paid"
                                        })]
                                    }), (0,
                                    l.jsxs)(r.JX, {
                                        xs: "3",
                                        children: [(0,
                                        l.jsx)(r.II, {
                                            name: "status[".concat(i, "]"),
                                            value: "FREE",
                                            type: "radio",
                                            id: "unlocked-".concat(i),
                                            onChange: v,
                                            checked: "FREE" === n.status
                                        }), (0,
                                        l.jsx)(r.__, {
                                            htmlFor: "unlocked-".concat(i),
                                            className: "font-regular",
                                            children: "Free"
                                        })]
                                    })]
                                }), u["[".concat(i, "].status")] && (0,
                                l.jsx)("small", {
                                    className: "text-danger",
                                    children: u["[".concat(i, "].status")]
                                })]
                            })]
                        }), (0,
                        l.jsx)(r.X2, {
                            children: (0,
                            l.jsx)(r.JX, {
                                children: (0,
                                l.jsx)(r.Ex, {
                                    color: 100 !== x ? "info" : "success",
                                    value: x,
                                    style: {
                                        height: "0.25rem"
                                    }
                                })
                            })
                        }), (0,
                        l.jsxs)(r.X2, {
                            className: "mt-3 justify-content-end",
                            children: [(0,
                            l.jsx)(r.JX, {
                                xs: "2",
                                className: "text-right",
                                style: {
                                    color: "#d00"
                                },
                                children: (0,
                                l.jsxs)("span", {
                                    onClick: function() {
                                        return a(i)
                                    },
                                    children: [(0,
                                    l.jsx)(c.G, {
                                        icon: o.$aW,
                                        className: "mr-2"
                                    }), "Delete"]
                                })
                            }), 100 === x ? (0,
                            l.jsxs)(r.JX, {
                                style: {
                                    color: "green"
                                },
                                xs: "3",
                                className: "text-center",
                                children: [(0,
                                l.jsx)(c.G, {
                                    icon: o.LEp,
                                    className: "mr-2"
                                }), "Complete"]
                            }) : (0,
                            l.jsxs)(r.JX, {
                                xs: "3",
                                className: "text-center",
                                children: ["Uploading ", x, "%"]
                            })]
                        })]
                    })]
                })
            })
        }
        var f = n(25051)
          , x = n(89885);
        function v(e) {
            var t = e.entry
              , n = e.setEntry
              , i = e.errors
              , s = (0,
            d.useContext)(x.Z).currentUser
              , a = function(e) {
                var t = e.target
                  , i = t.name
                  , s = t.value;
                n({
                    name: i,
                    value: s
                })
            };
            return (0,
            l.jsxs)("div", {
                children: [(0,
                l.jsxs)(r.cw, {
                    children: [(0,
                    l.jsx)(r.__, {
                        className: "required",
                        children: "Title"
                    }), (0,
                    l.jsx)(r.II, {
                        value: t.title,
                        type: "text",
                        placeholder: "Title",
                        name: "title",
                        maxLength: "120",
                        onChange: a,
                        invalid: i && null != i["[0].title"]
                    }), i && null != i["[0].title"] && (0,
                    l.jsx)("small", {
                        className: "text-danger",
                        children: i["[0].title"]
                    })]
                }), (0,
                l.jsxs)(r.cw, {
                    children: [(0,
                    l.jsx)(r.__, {
                        children: "Description"
                    }), (0,
                    l.jsx)(r.II, {
                        placeholder: "Enter description",
                        type: "textarea",
                        value: t.description,
                        name: "description",
                        onChange: a,
                        invalid: null != i["[0].description"]
                    }), i && null != i["[0].description"] && (0,
                    l.jsx)("small", {
                        className: "text-danger",
                        children: i["[0].description"]
                    })]
                }), (0,
                l.jsxs)(r.cw, {
                    children: [(0,
                    l.jsx)(r.__, {
                        className: "required",
                        children: "Thumbnail"
                    }), (0,
                    l.jsx)(f.Z, {
                        fileName: t.image,
                        name: "image",
                        accept: "image/jpeg,image/jpg,image/png",
                        uploadPath: "".concat(s.username, "/COURSE/").concat(t.courseId, "-").concat(t.parentId, "/media/"),
                        setFileName: function(e) {
                            return a({
                                target: {
                                    name: "image",
                                    value: e
                                }
                            })
                        },
                        invalid: i && null != i["[0].image"]
                    }), i && null != i["[0].image"] && (0,
                    l.jsx)("small", {
                        className: "text-danger",
                        children: i["[0].image"]
                    })]
                }), (0,
                l.jsx)(r.cw, {
                    children: i && null != i["[0].eventDate"] && (0,
                    l.jsx)("small", {
                        className: "text-danger",
                        children: i["[0].eventDate"]
                    })
                }), (0,
                l.jsxs)(r.cw, {
                    children: [(0,
                    l.jsx)(r.__, {
                        children: "Status"
                    }), (0,
                    l.jsxs)(r.II, {
                        type: "select",
                        name: "status",
                        onChange: a,
                        value: t.status,
                        invalid: i && null != i["[0].status"],
                        children: [(0,
                        l.jsx)("option", {
                            value: "PAID",
                            children: "Paid"
                        }), (0,
                        l.jsx)("option", {
                            value: "FREE",
                            children: "Free"
                        })]
                    }), i && null != i["[0].status"] && (0,
                    l.jsx)("small", {
                        className: "text-danger",
                        children: i["[0].status"]
                    })]
                })]
            })
        }
        function g(e) {
            var t, n, u = e.edit, m = e.type, p = e.isOpen, f = e.toggle, x = e.selectedEntry, g = (e.reloadEntry,
            e.editEntry,
            e.itemId), _ = e.editItem;
            console.log(g, "selectedEntry");
            var j = (0,
            d.useState)([])
              , y = j[0]
              , w = j[1]
              , N = (0,
            d.useState)([])
              , b = N[0]
              , E = (N[1],
            {
                FOLDER: {
                    title: u ? "Edit Folder Title" : "Add New Folder",
                    detail: ""
                },
                VIDEO: {
                    title: u ? "Edit Video Title" : "Add Video(s)",
                    accepts: "video/mp4",
                    detail: "Select multiple videos from your local storage * Max. upto 5Gb per video"
                },
                PDF: {
                    title: u ? "Edit PDF Title" : "Add PDF(s)",
                    accepts: "application/pdf",
                    detail: "Select multiple PDFs from your local storage * Max. upto 100MB per file"
                },
                AUDIO: {
                    title: u ? "Edit Title" : "Add File(s)",
                    accepts: "audio/*",
                    detail: "Select multiple Files from your local storage * Max. upto 100MB per file"
                },
                LIVE_STREAM: {
                    title: u ? "Edit Live Stream" : "Create Live Stream",
                    detail: ""
                }
            });
            (0,
            d.useEffect)((function() {
                u && w([(0,
                i.Z)({}, _)])
            }
            ), [u]),
            (0,
            d.useEffect)((function() {
                u || "LIVE_STREAM" != m || w([{
                    courseId: null === x || void 0 === x ? void 0 : x.courseId,
                    parentId: null === x || void 0 === x ? void 0 : x.id,
                    type: m,
                    status: "PAID",
                    streamStatus: "UPCOMING"
                }])
            }
            ), []);
            var I = function() {}
              , k = function(e) {
                e.persist(),
                e.target && w((function(t) {
                    return (0,
                    a.Z)(t).concat([{
                        parentId: null === x || void 0 === x ? void 0 : x.id,
                        type: m,
                        media: e.target.files[0]
                    }])
                }
                ))
            }
              , D = function(e, t, n) {
                var i = (0,
                a.Z)(y);
                "link" === t && delete i[e].media,
                t.includes("status") ? i[e].status = n : i[e][t] = n,
                w(i)
            }
              , C = function(e) {
                var t = (0,
                a.Z)(y);
                t.splice(e, 1),
                w(t)
            }
              , F = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return (0,
                l.jsxs)(l.Fragment, {
                    children: [(0,
                    l.jsx)(r.X2, {
                        children: (0,
                        l.jsx)(r.JX, {
                            className: "d-flex align-items-center justify-content-center",
                            children: (0,
                            l.jsxs)(r.__, {
                                className: "file-chooser",
                                htmlFor: "select-file",
                                children: [(0,
                                l.jsx)(r.II, {
                                    type: "file",
                                    accept: E[m].accepts,
                                    className: "d-none",
                                    id: "select-file",
                                    onChange: k
                                }), (0,
                                l.jsx)(c.G, {
                                    className: "mr-3",
                                    icon: o.r6c
                                }), "Upload from your PC"]
                            })
                        })
                    }), (0,
                    l.jsx)(r.X2, {
                        children: (0,
                        l.jsx)(r.JX, {
                            className: "mt-3 d-flex align-items-center justify-content-center col ".concat(!e && "px-md-5 mx-md-5"),
                            children: (0,
                            l.jsx)("div", {
                                className: "sub-text text-center ".concat(!e && "width-50"),
                                children: E[m].detail
                            })
                        })
                    })]
                })
            };
            return (0,
            l.jsxs)(r.u_, {
                isOpen: p,
                toggle: f,
                centered: !0,
                scrollable: !0,
                style: "FOLDER" === m || u ? {} : {
                    minWidth: "65%"
                },
                children: [(0,
                l.jsxs)(r.xB, {
                    toggle: f,
                    children: [null === (t = E[m]) || void 0 === t ? void 0 : t.title, "FOLDER" === m && (0,
                    l.jsx)("div", {
                        className: "sub-text font-regular",
                        children: "Organize your course"
                    })]
                }), (0,
                l.jsxs)(r.fe, {
                    children: [("FOLDER" === m || "LIVE_STREAM" != m && u) && (0,
                    l.jsx)("div", {
                        children: (0,
                        l.jsxs)(r.cw, {
                            className: "mb-0",
                            children: [(0,
                            l.jsx)(r.__, {
                                children: "Name"
                            }), (0,
                            l.jsx)(r.II, {
                                type: "text",
                                className: "form-control",
                                placeholder: "Title",
                                name: "title",
                                value: null === (n = y[0]) || void 0 === n ? void 0 : n.title,
                                onChange: function(e) {
                                    w(u ? [(0,
                                    s.Z)((0,
                                    i.Z)({}, _), {
                                        title: e.target.value
                                    })] : [{
                                        title: e.target.value,
                                        status: "PAID",
                                        type: m,
                                        parentId: null === x || void 0 === x ? void 0 : x.id
                                    }])
                                }
                            })]
                        })
                    }), "LIVE_STREAM" == m && (0,
                    l.jsx)(v, {
                        entry: y[0],
                        setEntry: function(e) {
                            return D(0, e.name, e.value)
                        },
                        errors: b
                    }), ["VIDEO", "PDF", "AUDIO"].includes(m) && !u && (y.length ? (0,
                    l.jsxs)(l.Fragment, {
                        children: [y.map((function(e, t) {
                            return (0,
                            l.jsx)(h, {
                                item: e,
                                errors: b,
                                entryIndex: t,
                                courseId: null === x || void 0 === x ? void 0 : x.courseId,
                                updateEntries: D,
                                removeEntry: C
                            }, "entry-item-".concat(t))
                        }
                        )), (0,
                        l.jsx)(r.X2, {
                            className: "justify-content-center",
                            children: (0,
                            l.jsx)(r.JX, {
                                children: F(!0)
                            })
                        }), (0,
                        l.jsx)(r.X2, {
                            className: "justify-content-center mt-3",
                            children: (0,
                            l.jsx)(r.JX, {
                                xs: "6",
                                className: "text-right",
                                children: (0,
                                l.jsx)(r.zx, {
                                    block: !0,
                                    onClick: I,
                                    children: "save"
                                })
                            })
                        })]
                    }) : F())]
                }), ["FOLDER", "LIVE_STREAM"].includes(m) || u ? (0,
                l.jsx)(r.mz, {
                    className: "justify-content-center",
                    children: (0,
                    l.jsx)(r.zx, {
                        color: "primary",
                        onClick: I,
                        children: u ? "Update" : "Create"
                    })
                }) : null]
            })
        }
        n(66764);
        var _ = n(11163)
          , j = n(92817)
          , y = n(32198)
          , w = n(65356)
          , N = n(96486)
          , b = n(45508)
          , E = n(7386)
          , I = n(47041)
          , k = n(96076)
          , D = n(41664)
          , C = n.n(D);
        function F(e) {
            var t = e.setHasContent
              , n = e.screenType
              , a = e.itemId
              , u = e.showLocked
              , h = void 0 === u ? function() {}
            : u
              , f = (0,
            d.useState)(!1)
              , v = (f[0],
            f[1],
            (0,
            d.useState)(!1))
              , D = v[0]
              , F = v[1]
              , A = (0,
            d.useState)(!1)
              , S = A[0]
              , L = (A[1],
            (0,
            d.useState)([!1, !1, !1]))
              , T = (L[0],
            L[1],
            (0,
            d.useState)(null))
              , R = T[0]
              , O = T[1]
              , M = (0,
            d.useState)([])
              , P = M[0]
              , V = M[1]
              , X = (0,
            d.useState)(null)
              , Z = X[0]
              , U = X[1]
              , z = (0,
            d.useState)(null)
              , J = z[0]
              , B = z[1]
              , G = (0,
            d.useState)({})
              , Y = G[0]
              , q = G[1]
              , H = (0,
            d.useState)(!1)
              , K = H[0]
              , W = (H[1],
            (0,
            d.useState)())
              , Q = (W[0],
            W[1],
            (0,
            _.useRouter)())
              , $ = (0,
            d.useState)()
              , ee = $[0]
              , te = $[1]
              , ne = (0,
            d.useState)()
              , ie = ne[0]
              , se = ne[1]
              , ae = function() {
                return te(!ee)
            }
              , le = (0,
            d.useContext)(x.Z)
              , re = le.hasSession
              , ce = le.setIsLogin
              , oe = le.toggleAuthModal
              , de = le.currentUser
              , ue = le.appConfig
              , me = (0,
            d.useRef)(re)
              , pe = Q.query
              , he = pe.api
              , fe = pe.lcId;
            he = (0,
            b.N)(he);
            (0,
            d.useEffect)((function() {
                if (a) {
                    var e, t = (0,
                    I.getCookie)(k.z1), n = !!(null === (e = ue.web_windowsdomains) || void 0 === e ? void 0 : e.includes(ue.host)) || null;
                    (0,
                    j.ks)(he, a, "-1", fe, t, n).then((function(e) {
                        return O(e[0])
                    }
                    )).catch((function() {
                        return p.Am.error("No entry found.")
                    }
                    ))
                }
            }
            ), [a]),
            (0,
            d.useEffect)((function() {
                Z && de && 0 == me.current && ge(Z)
            }
            ), [de, me]),
            (0,
            d.useEffect)((function() {
                R && (xe(),
                (0,
                j.zU)(he, R.course_id, R.id).then((function(e) {
                    q(e[0])
                }
                )))
            }
            ), [R]);
            var xe = function() {
                var e, n = (0,
                I.getCookie)(k.z1), i = !!(null === (e = ue.web_windowsdomains) || void 0 === e ? void 0 : e.includes(ue.host)) || null;
                (0,
                j.ks)(he, R.course_id, R.id, fe, n, i).then((function(e) {
                    V(e),
                    (0,
                    N.isEmpty)(Y) && e.length > 0 && t && t(!0)
                }
                )).catch((function(e) {
                    console.error(e),
                    p.Am.error("Something went wrong!")
                }
                ))
            }
              , ve = {
                FOLDER: "/icons/folder.svg",
                PDF: "/icons/pdf.svg",
                VIDEO: "/empty-image-web.svg",
                TEST: "/ic_test_record.png",
                QUIZ: "/icons/online-test.svg",
                LINK: " /icons/link.svg",
                CODING_TEST: " /icons/coding.svg"
            }
              , ge = function(e) {
                if ("1" == e.free_flag || "view" !== n || "FOLDER" == e.material_type) {
                    if (!re && "FOLDER" != e.material_type)
                        return ce(!0),
                        oe(),
                        void U(e);
                    if (!m()().isBefore(m().unix(e.strtotime))) {
                        var t = (0,
                        i.Z)({}, e)
                          , a = (0,
                        I.getCookie)(k.JR);
                        if (t.file_link = (0,
                        b.N)(t.file_link),
                        t.download_link = (0,
                        b.N)(t.download_link),
                        t.download_link2 = (0,
                        b.N)(t.download_link2),
                        t.embed_url = (0,
                        b.N)(t.embed_url),
                        t.media_id = (0,
                        b.N)(t.media_id),
                        t.pdf_link = (0,
                        b.N)(t.pdf_link),
                        t.pdf_link2 = (0,
                        b.N)(t.pdf_link2),
                        t.recording_schedule = (0,
                        b.N)(t.recording_schedule),
                        t.pdf_encryption_key = (0,
                        b.N)(t.pdf_encryption_key),
                        t.pdf2_encryption_key = (0,
                        b.N)(t.pdf2_encryption_key),
                        (0,
                        N.isEmpty)(t.download_links) || (t.download_links = t.download_links.map((function(e) {
                            return (0,
                            s.Z)((0,
                            i.Z)({}, e), {
                                path: (0,
                                b.N)(e.path)
                            })
                        }
                        ))),
                        (0,
                        N.isEmpty)(t.livestream_links) || (t.livestream_links = t.livestream_links.map((function(e) {
                            return (0,
                            s.Z)((0,
                            i.Z)({}, e), {
                                path: (0,
                                b.N)(e.path)
                            })
                        }
                        ))),
                        (0,
                        N.isEmpty)(t.webdrm_links) || (t.webdrm_links = t.webdrm_links.map((function(e) {
                            return (0,
                            s.Z)((0,
                            i.Z)({}, e), {
                                path: (0,
                                b.N)(e.path)
                            })
                        }
                        ))),
                        t.video_id = (0,
                        b.N)(t.video_id),
                        "FOLDER" != e.material_type)
                            if ("IMAGE" !== e.material_type)
                                if ("PDF" === e.material_type)
                                    U(t),
                                    ae();
                                else {
                                    if ("CODING_TEST" == e.material_type)
                                        return void Q.push("/new-courses/".concat(e.course_id, "/coding-test/").concat(e.quiz_title_id));
                                    if ("VIDEO" === e.material_type || "LIVE_STREAM" === e.material_type)
                                        if (2 == e.live_type && "1" == e.live_status)
                                            window.open("/browserstream/".concat(t.id, "/").concat(t.recording_schedule), "_blank");
                                        else {
                                            if (!t.file_link.includes("zoom") || "1" != e.live_status)
                                                return void ("1" == ue.web_enablefullpagevideo ? Q.push("/video/".concat(t.id, "?courseId=").concat(t.course_id, "&ytFlag=").concat(t.ytFlagWeb, "&isFolderCourse=1")) : B(t));
                                            var l = (0,
                                            b.N)(e.meeting_id)
                                              , r = (0,
                                            b.N)(e.meeting_password);
                                            window.open("/zoom?meetingNumber=".concat(l, "&password=").concat(r), "_blank")
                                        }
                                    else
                                        "TEST" == e.material_type ? (0,
                                        E.OB)(he, e.quiz_title_id, a).then((function(e) {
                                            e.is_test_attempted ? se(e) : Q.push({
                                                pathname: "/test-series/".concat(e.test_series_id, "/tests/").concat(e.id, "/terms"),
                                                query: fe ? {
                                                    lcId: fe,
                                                    baseUrl: he
                                                } : {}
                                            })
                                        }
                                        )) : "QUIZ" == e.material_type ? Q.push({
                                            pathname: "/quiz/".concat(e.quiz_title_id, "/attempt"),
                                            query: fe ? {
                                                lcId: fe,
                                                baseUrl: he
                                            } : {}
                                        }) : "LINK" == e.material_type && window.open(t.file_link, "_blank")
                                }
                            else
                                U(t);
                        else
                            O(t)
                    }
                } else
                    h(!0)
            };
            return (0,
            l.jsxs)(l.Fragment, {
                children: [Y && (0,
                l.jsx)(r.X2, {
                    className: "mb-2 mx-md-1 d-flex align-items-center border-bottom",
                    children: (0,
                    l.jsxs)(r.JX, {
                        className: "pb-3",
                        children: [(0,
                        l.jsx)("a", {
                            className: "me-3 cursor-pointer text-decoration-none",
                            style: {
                                color: "#000"
                            },
                            onClick: function() {
                                return O(Y)
                            },
                            children: (0,
                            l.jsx)("b", {
                                children: Y ? null === Y || void 0 === Y ? void 0 : Y.title : "Content"
                            })
                        }), (null === R || void 0 === R ? void 0 : R.parent_id) && (0,
                        l.jsxs)(l.Fragment, {
                            children: [(0,
                            l.jsx)(c.G, {
                                icon: o._tD
                            }), "\u2003", R.Title, "\u2003"]
                        })]
                    })
                }), 0 == (null === P || void 0 === P ? void 0 : P.length) && (0,
                l.jsx)(r.bZ, {
                    color: "primary",
                    className: "mt-4",
                    children: "No files found"
                }), null === P || void 0 === P ? void 0 : P.map((function(e, t) {
                    return (0,
                    l.jsxs)(r.X2, {
                        className: "cursor-pointer",
                        children: [(0,
                        l.jsx)(r.JX, {
                            xs: "3",
                            md: "1",
                            className: "d-flex justify-content-center align-items-center",
                            onClick: function() {
                              console.log("on click")
                              console.log(e)
                                ge(e)
                            },
                            children: e.thumbnail ? (0,
                            l.jsx)("img", {
                                width: "50px",
                                className: "rounded img-cover",
                                style: {
                                    height: "50px"
                                },
                                src: e.thumbnail || ve[e.material_type]
                            }) : "VIDEO" === e.material_type ? (0,
                            l.jsx)(c.G, {
                                icon: o.hvm,
                                color: "#6549f6",
                                size: "3x"
                            }) : (0,
                            l.jsx)("img", {
                                width: "40px",
                                src: ve[e.material_type]
                            })
                        }), (0,
                        l.jsx)(r.JX, {
                            className: "content-detail border-bottom",
                            children: (0,
                            l.jsxs)(r.X2, {
                                className: "no-gutters d-flex justify-content-between align-items-center",
                                children: [(0,
                                l.jsx)(r.JX, {
                                    onClick: function() {
                                        ge(e)
                                    },
                                    className: "flex-grow-1 py-4",
                                    children: (0,
                                    l.jsxs)("a", {
                                        className: "text-decoration-none",
                                        style: {
                                            color: "#000"
                                        },
                                        children: [e.Title, "LIVE_STREAM" == e.material_type && (0,
                                        l.jsx)("div", {
                                            className: "sub-text",
                                            children: (a = e,
                                            {
                                                2: "Event starts on ".concat(m()(a.eventDate).format("hh:mmA, Do MMMM YYYY")),
                                                1: "Event is live",
                                                0: "A recording of this session will be available soon",
                                                3: "This event has ended, click to view recording."
                                            }[a.live_status])
                                        }), m()().isBefore(m().unix(e.strtotime)) && (0,
                                        l.jsxs)("div", {
                                            className: "sub-text",
                                            children: ["Live at: ", m().unix(e.strtotime).format("D MMM yyyy, hh:mm A")]
                                        })]
                                    })
                                }), (0,
                                l.jsx)(r.JX, {
                                    md: "2",
                                    className: "text-center",
                                    children: "purchased" == n && "VIDEO" == e.material_type && !(0,
                                    N.isEmpty)(e.pdf_link) && (0,
                                    l.jsx)(r.zx, {
                                        color: "primary",
                                        size: "sm",
                                        onClick: function(t) {
                                            ge((0,
                                            s.Z)((0,
                                            i.Z)({}, e), {
                                                material_type: "PDF"
                                            }))
                                        },
                                        children: "View Pdf"
                                    })
                                }), "1" != e.free_flag && "purchased" !== n && "FOLDER" != e.material_type && (0,
                                l.jsx)(r.JX, {
                                    xs: "1",
                                    children: (0,
                                    l.jsx)("div", {
                                        className: "d-flex align-items-center justify-content-end",
                                        children: (0,
                                        l.jsx)(c.G, {
                                            color: "#A7A7A7",
                                            icon: o.byT
                                        })
                                    })
                                })]
                            })
                        })]
                    }, "entry-items-".concat(t));
                    var a
                }
                )), D && (0,
                l.jsx)(g, {
                    isOpen: D,
                    type: S,
                    toggle: function() {
                        return F(!D)
                    },
                    edit: K,
                    editItem: Z,
                    itemId: a,
                    selectedEntry: R,
                    reloadEntry: xe
                }), ie && (0,
                l.jsxs)(r.u_, {
                    size: !0,
                    isOpen: ie,
                    toggle: function() {
                        return se(null)
                    },
                    centered: !0,
                    children: [(0,
                    l.jsx)(r.xB, {
                        tag: "h6",
                        toggle: function() {
                            return se(null)
                        },
                        children: ie.title
                    }), (0,
                    l.jsxs)(r.fe, {
                        className: "p-4",
                        children: [(!m()(ie.enddatetime).isAfter(m()(ie.date_time)) || m()().isBetween(m()(ie.date_time), m()(ie.enddatetime))) && (0,
                        l.jsx)(C(), {
                            href: "/test-series/".concat(ie.test_series_id, "/tests/").concat(ie.id, "/terms").concat(he ? "?baseUrl=".concat(he, "&lcId=").concat(fe) : ""),
                            children: (0,
                            l.jsx)(r.zx, {
                                block: !0,
                                color: "primary",
                                children: ie.is_test_attempted ? "Re-attempt" : "Attempt"
                            })
                        }), ie.is_test_attempted && "1" == ie.show_result && (0,
                        l.jsx)(C(), {
                            passHref: !0,
                            href: "/test-series/".concat(ie.test_series_id, "/tests/").concat(ie.id, "/results").concat(he ? "?baseUrl=".concat(he, "&lcId=").concat(fe) : ""),
                            children: (0,
                            l.jsx)(r.zx, {
                                className: "mt-3",
                                block: !0,
                                color: "primary",
                                children: "Results"
                            })
                        })]
                    })]
                }), Boolean(J) && (0,
                l.jsx)(y.Z, {
                    folderCourse: "1",
                    isOpen: Boolean(J),
                    toggle: function() {
                        return B(!1)
                    },
                    currentVideoRecord: J
                }), Z && (0,
                l.jsx)(w.Z, {
                    isOpen: ee,
                    toggle: ae,
                    link: Z.pdf_link,
                    allowDownload: null === Z || void 0 === Z ? void 0 : Z.save_flag,
                    encryption_key: Z.pdf_encryption_key,
                    is_encrypted: Z.is_pdf_encrypted
                }), (0,
                l.jsxs)(r.u_, {
                    size: "lg",
                    centered: !0,
                    contentClassName: "rounded-0 bg-dark",
                    isOpen: Z && "IMAGE" == (null === Z || void 0 === Z ? void 0 : Z.material_type),
                    toggle: function() {
                        return U(null)
                    },
                    children: [(0,
                    l.jsx)(r.xB, {
                        className: "p-0 border-0",
                        toggle: function() {
                            return U(null)
                        },
                        close: (0,
                        l.jsx)(c.G, {
                            onClick: function() {
                                return U(null)
                            },
                            icon: o.g82,
                            size: "2x",
                            className: "cursor-pointer position-absolute end-0",
                            style: {
                                top: "-35px"
                            },
                            color: "whitesmoke"
                        })
                    }), (0,
                    l.jsx)("img", {
                        src: null === Z || void 0 === Z ? void 0 : Z.thumbnail,
                        style: {
                            objectFit: "contain",
                            maxHeight: "90vh"
                        }
                    })]
                })]
            })
        }
    },
    66764: function(e, t, n) {
        "use strict";
        var i = n(51438)
          , s = n(52951)
          , a = n(14924)
          , l = function() {
            function e(t) {
                (0,
                i.Z)(this, e),
                (0,
                a.Z)(this, "clientId", void 0),
                this.clientId = window.location.host.startsWith("localhost") ? "5604070f76d2454eb28a122c79a1cf5c" : t,
                this.readyPromise = new Promise((function(e) {
                    window.AdobeDC ? e() : document.addEventListener("adobe_dc_view_sdk.ready", (function() {
                        e()
                    }
                    ))
                }
                )),
                this.adobeDCView = void 0
            }
            return (0,
            s.Z)(e, [{
                key: "ready",
                value: function() {
                    return this.readyPromise
                }
            }, {
                key: "previewFile",
                value: function(e, t, n) {
                    n.dockPageControls = !0;
                    var i = {
                        clientId: this.clientId
                    };
                    return e && (i.divId = e),
                    this.adobeDCView = new window.AdobeDC.View(i),
                    this.adobeDCView.previewFile({
                        content: {
                            location: {
                                url: t
                            }
                        },
                        metaData: {
                            fileName: t.split("/").pop()
                        }
                    }, n)
                }
            }, {
                key: "previewFileUsingFilePromise",
                value: function(e, t, n) {
                    this.adobeDCView = new window.AdobeDC.View({
                        clientId: "9348a9a690024c15b97de21839dd5175",
                        divId: e
                    }),
                    this.adobeDCView.previewFile({
                        content: {
                            promise: t
                        },
                        metaData: {
                            fileName: n
                        }
                    }, {})
                }
            }, {
                key: "registerSaveApiHandler",
                value: function() {
                    this.adobeDCView.registerCallback(window.AdobeDC.View.Enum.CallbackType.SAVE_API, (function(e, t, n) {
                        return new Promise((function(t) {
                            setTimeout((function() {
                                var n = {
                                    code: window.AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
                                    data: {
                                        metaData: Object.assign(e, {
                                            updatedAt: (new Date).getTime()
                                        })
                                    }
                                };
                                t(n)
                            }
                            ), 2e3)
                        }
                        ))
                    }
                    ), {})
                }
            }, {
                key: "registerEventsHandler",
                value: function() {
                    this.adobeDCView.registerCallback(window.AdobeDC.View.Enum.CallbackType.EVENT_LISTENER, (function(e) {
                        console.log(e)
                    }
                    ), {
                        enablePDFAnalytics: !0
                    })
                }
            }]),
            e
        }();
        t.Z = l
    },
    58907: function(e, t, n) {
        "use strict";
        n.d(t, {
            c: function() {
                return a
            }
        });
        var i = n(98690)
          , s = n.n(i)
          , a = function(e, t, n, i) {
            var a = new (s().S3)({
                correctClockSkew: !0,
                endpoint: "https://s3.us-west-1.wasabisys.com",
                accessKeyId: "6ANU45WMNPP81RU0MX6L",
                secretAccessKey: "huAY0nP7vDzIf1JeyLJYepTl2MA8NwSevLaJcBkw",
                region: "us-west-1"
            })
              , l = new (s().S3.ManagedUpload)({
                params: {
                    Bucket: "appx/" + n,
                    Key: e,
                    Body: t,
                    ContentType: t.type
                },
                service: a
            });
            return l.send(i),
            l
        }
    },
    28022: function() {}
}]);
