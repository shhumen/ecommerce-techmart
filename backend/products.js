let lastId = 0;

const uniqueId = (prefix = 'id') => {
    lastId++;
    return `${prefix}${lastId}`;
}

const generateUniqueID = () => {
    return ((Math.random() * (100000 - 101) + 101) | 0);
}

const products = [
    {
        id: uniqueId(),
        qty: 20,
        category: {slug: "phone", name: "phone"},
        name: "Iphone 13",
        new: false,
        featured: true,
        brand: "Iphone",
        desc: "lorem ipsum sum",
        permalink: "r8GizK8",
        color: "blue",
        price: {formatted: 699, formatted_with_symbol: "$699.00", formatted_with_code: "699.00 USD"},
        image: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673166810/online-shop/blue-13-iphone_s8swh7.jpg",
        color_variants: [
            {

                id: generateUniqueID(),
                hex: "",
                sku: "iphn13_str",
                color: "starlight",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673166907/online-shop/starlight-13-ihone-1_nshxsm.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673166912/online-shop/iphonmuzv3-12-starlight_evvkn0.png"},
                    {url: 'https://res.cloudinary.com/dgnkjztis/image/upload/v1673166909/online-shop/starlight-13-ihone-2_hdsnth.jpg'},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673166913/online-shop/starlight-13-iphone-3_ytrwsa.jpg"}
                ],
            },
            {

                hex: "", id: generateUniqueID(),
                sku: "iphn13_red",
                color: "red",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673167013/online-shop/iphone-13-red_dhzrbw.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673167016/online-shop/iphonmuzv3-13-red_ffh5no.png"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673167020/online-shop/iphone-13-red-2_ppv2o5.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673167019/online-shop/iphone-13-red-3_yt708q.jpg"}
                ],
            },
            {

                hex: "", id: generateUniqueID(),
                sku: "iphn13_green",
                color: "green",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673167059/online-shop/13-green-1_hljvxl.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673167065/online-shop/13-green5-4_zshl2m.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673167062/online-shop/13-green4-2_rohoco.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673167063/online-shop/13-green2-3_cc8wmp.jpg"}
                ],
            },
            {

                hex: "", id: generateUniqueID(),
                sku: "iphn13_pink",
                color: "pink",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673167144/online-shop/13iphone-pink-1_qmwale.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673167148/online-shop/iphonmuzv3-14-3_ajrsls.png"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673167145/online-shop/pink-13-iphone-2_mj303y.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673167149/online-shop/iphone-13-pink-4_qpse4c.jpg"}
                ],
            },
            {

                hex: "", id: generateUniqueID(),
                sku: "iphn13_blue",
                color: "blue",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673166810/online-shop/blue-13-iphone_s8swh7.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673168514/online-shop/iphonmuzv3-11_izbli9.png"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673166812/online-shop/blueiphone13-2_r9dyxz.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673166813/online-shop/blue-iphone13-3_qrulpz.jpg"}
                ],
            },
        ],
        storage_variants: [
            {
                id: generateUniqueID(),
                sku: "128gb",
                storage: "128GB",
                added_price: 0,
            }, {
                id: generateUniqueID(),
                sku: "256gb",
                storage: "256GB",
                added_price: 200,
            }, {
                id: generateUniqueID(),
                sku: "512gb",
                storage: "512GB",
                added_price: 300,
            },
        ]
    },
    {
        id: uniqueId(),
        qty: 30,
        category: {slug: "phone", name: "phone"},
        brand: "Iphone",
        name: "Iphone 14",
        new: true,
        featured: false,
        desc: "lorem ipsum sum",
        permalink: "rtY57Fj",
        color: "blue",
        price: {formatted: 799, formatted_with_symbol: "$799.00", formatted_with_code: "799 USD"},
        image: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673166315/online-shop/14-blue_gf0bmd.jpg",
        color_variants: [
            {

                hex: "", id: generateUniqueID(),
                sku: "iphone-14-blue",
                color: "blue",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673166315/online-shop/14-blue_gf0bmd.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673166314/online-shop/14-blue3_iukk99.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673166438/online-shop/14-blue2_fsgbar.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673166312/online-shop/14-blue4_zj7lsp.jpg"}
                ],
            },
            {

                hex: "", id: generateUniqueID(),
                sku: "iphone-14-purple",
                color: "purple",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673166423/online-shop/14-purple_etqxhi.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673166420/online-shop/14-purple3_b5zhj4.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673166422/online-shop/14-purple2_sfffg0.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673166418/online-shop/14-purple4_aevyf6.jpg"}
                ],
            },
            {

                hex: "", id: generateUniqueID(),
                sku: "iphone14-red",
                color: "red",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673167953/online-shop/14-redp_trrdp7.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673167955/online-shop/14-redp3_le5mew.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673167958/online-shop/14-redp2_aebpwl.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673167957/online-shop/14-redp4_kkw4ds.jpg"}
                ]
            }
        ],
        storage_variants: [
            {
                id: generateUniqueID(),
                sku: "128gb",
                storage: "128GB",
                added_price: 0,
            }, {
                id: generateUniqueID(),
                sku: "256gb",
                storage: "256GB",
                added_price: 200,
            }, {
                id: generateUniqueID(),
                sku: "512gb",
                storage: "512GB",
                added_price: 300,
            },
        ]
    },
    {
        id: uniqueId(),
        qty: 10,
        category: {slug: "phone", name: "phone"},
        brand: "Xiaomi",
        name: "Xiaomi Redmi Note 11",
        desc: "lorem ipsum sum",
        permalink: "CXi3m6A",
        new: false,
        featured: true,
        color: "star-blue",
        price: {formatted: 275, formatted_with_symbol: "$275.00", formatted_with_code: "275 USD"},
        image: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673169926/online-shop/note11-starblue-1_oezuv3.jpg",
        color_variants: [
            {

                hex: "", id: generateUniqueID(),
                sku: "xiaomi-starblue",
                color: "star-blue",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673169926/online-shop/note11-starblue-1_oezuv3.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673169927/online-shop/note11-starblue2-1_abpvwr.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673169929/online-shop/note11-starblue3-1_uuw8hx.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673169932/online-shop/note11-starblue4-1_rmptbp.jpg"}
                ]
            },
            {

                hex: "", id: generateUniqueID(),
                sku: "xiaomi-twilight-blue",
                color: "twilight-blue",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673169931/online-shop/note11-blue-0_zshr0w.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673169934/online-shop/note11-blue2-0_ltammj.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673169991/online-shop/note11-blue3_lfcoad.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673169993/online-shop/note11-blue4_ekwnj8.jpg"}
                ]
            },
            {

                hex: "", id: generateUniqueID(),
                sku: "xiaomi-grey",
                color: "grey",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673170031/online-shop/note11-grey-0_uf0ccw.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673170033/online-shop/note11-grey2-1_kv64he.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673170035/online-shop/note11-grey3-1_ijeqto.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673170037/online-shop/note11-grey4-1_tegkxz.jpg"}
                ]
            }
        ],
        storage_variants: [
            {
                id: generateUniqueID(),
                sku: "64gb",
                storage: "64GB",
                added_price: 0,
            }, {
                id: generateUniqueID(),
                sku: "128gb",
                storage: "128GB",
                added_price: 50,
            },
        ]

    },
    {
        id: uniqueId(),
        qty: 20,
        category: {slug: "phone", name: "phone"},
        brand: "Xiaomi",
        name: "Xiaomi Poco F4 GT",
        desc: "lorem ipsum sum",
        permalink: "xIm6AF0",
        new: true,
        featured: false,
        color: "silver",
        price: {formatted: 940, formatted_with_code: "940 USD", formatted_with_symbol: "$940.00"},
        image: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673171243/online-shop/pocof4gt-silver_kpnge4.jpg",
        color_variants: [
            {

                hex: "", id: generateUniqueID(),
                sku: "xiaomi-poco-silver",
                color: "silver",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673171243/online-shop/pocof4gt-silver_kpnge4.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673171244/online-shop/pocof4gt-silver2_mbgptu.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673171247/online-shop/pocof4gt-silver3_j4tjxt.jpg"},
                ]
            },
            {

                hex: "", id: generateUniqueID(),
                sku: "xiaomi-poco-yellow",
                color: "yellow",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673171247/online-shop/pocof4gt-yellow_wbch7n.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673171249/online-shop/pocof4gt-yellow2_mj2ozb.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673171251/online-shop/pocof4gt-yellow3_cn3g4f.jpg"}
                ]
            },
            {

                hex: "", id: generateUniqueID(),
                sku: "xiaomi-poco-black",
                color: "black",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673171277/online-shop/pocof4gt-black_weyntb.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673171278/online-shop/pocof4gt-black2_ro7vhs.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673171280/online-shop/pocof4gt-black3_cd0l07.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673171281/online-shop/pocof4gt-black4_kaiist.jpg"}
                ]
            }
        ],
        storage_variants: [
            {
                id: generateUniqueID(),
                sku: "128gb",
                storage: "128GB",
                added_price: 0,
            },
            {
                id: generateUniqueID(),
                sku: "256gb",
                storage: "256GB",
                added_price: 100,
            },
        ]
    },
    {
        id: uniqueId(),
        qty: 15,
        category: {slug: "phone", name: "phone"},
        brand: "Samsung",
        name: "Samsung Galaxy Z Flip4",
        desc: "lorem ipsum sum",
        permalink: "Sm34NgF",
        color: "graphite",
        new: true,
        featured: true,
        price: {formatted: 680, formatted_with_symbol: "$680.00", formatted_with_code: "680 USD"},
        image: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673186971/online-shop/flip4-graphite_mppvog.jpg",
        color_variants: [
            {

                hex: "", id: generateUniqueID(),
                sku: "samsung-zflip-graph",
                color: "graphite",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673186971/online-shop/flip4-graphite_mppvog.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673186972/online-shop/flip4-graphite2_jx3nsn.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673186973/online-shop/flip4-graphite3_ojn6k2.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673186976/online-shop/flip4-graphite4_nombpd.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673187085/online-shop/flip4-graphite5_autf3z.jpg"}
                ]
            },
            {

                hex: "", id: generateUniqueID(),
                sku: "samsung-zflip-pnkgold",
                color: "pink-gold",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673187150/online-shop/flip4-pinkgold_zjx9bk.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673187151/online-shop/flip4-pinkgold2_zbk8xg.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673187152/online-shop/flip4-pinkgold3_f77zmv.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673187153/online-shop/flip4-pinkgold4_qjqhpa.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673187155/online-shop/flip4-pinkgold5_lgq8kf.jpg"}
                ]
            },
            {

                hex: "", id: generateUniqueID(),
                sku: "samsung-zflip-lavender",
                color: "lavender",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673187357/online-shop/flip4-lavander_s7a3ke.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673187359/online-shop/flip4-lavander2_kbw66c.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673187360/online-shop/flip4-lavander3_z3uygi.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673187371/online-shop/flip4-lavander4_rktryg.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673187374/online-shop/flip4-lavander5_jtdmne.jpg"}
                ]
            }
        ],
        storage_variants: [
            {
                id: generateUniqueID(),
                sku: "128gb",
                storage: "128GB",
                added_price: 0,
            },
            {
                id: generateUniqueID(),
                sku: "256gb",
                storage: "256GB",
                added_price: 60,
            }, {
                id: generateUniqueID(),
                sku: "512gb",
                storage: "512GB",
                added_price: 180,
            },
        ]
    },
    {
        id: uniqueId(),
        qty: 30,
        category: {slug: "phone", name: "phone"},
        brand: "Samsung",
        name: "Samsung Galaxy A13",
        desc: "lorem ipsum sum",
        permalink: "sQ2FmA1",
        color: "black",
        new: true,
        featured: false,
        price: {formatted: 252, formatted_with_code: "252 USD", formatted_with_symbol: "$252.00"},
        image: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673189645/online-shop/a135-black_dcjy2n.jpg",
        color_variants: [
            {

                hex: "", id: generateUniqueID(),
                sku: "smasng-a13-black",
                color: "black",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673189645/online-shop/a135-black_dcjy2n.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673189646/online-shop/a135-black2_ctkfwy.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673189648/online-shop/a135-black4_sgxxwp.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673189649/online-shop/a135-black5_uzazns.jpg"}
                ]
            }, {

                hex: "", id: generateUniqueID(),
                sku: "smasng-a13-blue",
                color: "light-blue",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673189943/online-shop/a135-blue_bqyiab.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673189945/online-shop/a135-blue2_gmdjps.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673189946/online-shop/a135-blue4_erhlc7.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673189948/online-shop/a135-blue5_aos20q.jpg"}
                ]
            },
        ],
        storage_variants: [
            {
                id: generateUniqueID(),
                sku: "64gb",
                storage: "64GB",
                added_price: 0,
            },
            {
                id: generateUniqueID(),
                sku: "128gb",
                storage: "128GB",
                added_price: 30,
            },
        ]
    },
    {
        id: uniqueId(),
        qty: 5,
        category: {slug: "phone", name: "phone"},
        brand: "realme",
        name: "Realme 9i",
        desc: "lorem ipsum sum",
        permalink: "rAl4Mvf",
        color: "blue",
        new: false,
        featured: true,
        price: {formatted: 295, formatted_with_symbol: "$295.00", formatted_with_code: "295 USD"},
        image: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673194961/online-shop/9i-blue_cawygc.jpg",
        color_variants: [
            {

                hex: "", id: generateUniqueID(),
                sku: "realme-9i-blue",
                color: "blue",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673194961/online-shop/9i-blue_cawygc.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673194962/online-shop/9i-blue2_dqyp3v.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673194964/online-shop/9i-blue3_prdrdy.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673194965/online-shop/9i-blue4_n7hzy9.jpg"}
                ]
            },
            {

                hex: "", id: generateUniqueID(),
                sku: "realme-9i-black",
                color: "black",
                assets: [
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673194993/online-shop/9i-black_zwopls.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673194996/online-shop/9i-black2_njalxl.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673194997/online-shop/9i-black3_rrvj3m.jpg"},
                    {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673194999/online-shop/9i-black4_buuq8m.jpg"},
                ]
            }
        ],
        storage_variants: [
            {
                id: generateUniqueID(),
                sku: "128gb",
                storage: "128GB",
                added_price: 0,
            },
        ]
    },
    {
        id: uniqueId(),
        qty: 10,
        category: {slug: "notebook", name: "notebook"},
        brand: "ASUS",
        name: "ASUS Vivobook S 14 Flip 14” WUXGA 16:10 touch, AMD Ryzen 5 5600H CPU, 8GB RAM, 512GB SSD, NumberPad, FingerPrint, Windows 11 Home, Quiet Blue, TN3402QA-AS54T",
        desc: {
            internal_storage: "512 GB SSD",
            screen_size: "14 inches",
            cpu_model: " Ryzen 5",
            ram: "8 GB"
        },
        color: "blue",
        permalink: "CmOP4tr",
        new: false,
        hex: "",
        featured: true,
        price: {formatted: 666, formatted_with_code: "666 USD", formatted_with_symbol: "$666.00"},
        image: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673265603/online-shop/asus-vivobook-s14-flip-tn3402qa-lz147w-90nb0wt1-m00800-1_xok7oy.jpg",
        assets: [
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673265603/online-shop/asus-vivobook-s14-flip-tn3402qa-lz147w-90nb0wt1-m00800-1_xok7oy.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673265604/online-shop/asus-vivobook-s14-flip-tn3402qa-lz147w-90nb0wt1-m00800-2_n2z1ii.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673265606/online-shop/asus-vivobook-s14-flip-tn3402qa-lz147w-90nb0wt1-m00800-3_cm7ufv.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673265608/online-shop/asus-vivobook-s14-flip-tn3402qa-lz147w-90nb0wt1-m00800-4_pybxce.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673265609/online-shop/asus-vivobook-s14-flip-tn3402qa-lz147w-90nb0wt1-m00800-5_atolmu.jpg"}
        ]

    },
    {
        id: uniqueId(),
        qty: 5,
        category: {slug: "notebook", name: "notebook"},
        brand: "Lenovo",
        name: "Lenovo Legion 5 17IMH05H (81Y80093RK)",
        desc: {
            internal_storage: "1TB PCIe SSD",
            screen_size: "17.3 inches",
            cpu_model: "Ryzen 7 5800H",
            ram: "16 GB",
        },
        color: "black",
        permalink: "Len3n0V",
        new: true,
        featured: false,
        price: {formatted: 1200, formatted_with_symbol: "$1200.00", formatted_with_code: "1200 USD"},
        image: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673269688/online-shop/9bcfa2f835a483c3fa304b46949c0b8e_mmzip5.jpg",
        assets: [
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673269688/online-shop/9bcfa2f835a483c3fa304b46949c0b8e_mmzip5.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673269689/online-shop/df4851709e92e29559c8deb6a763e4df_tlikrv.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673269690/online-shop/e3c0c3aa97f70b739f596054e8571fee_zijgma.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673269692/online-shop/e7ab69d133e36d18faaac272afa7e1a3_bdgcah.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673269695/online-shop/27447c95d09320210b0620467b243ce6_szttar.jpg"}
        ]


    },
    {
        id: uniqueId(),
        qty: 10,
        category: {slug: "notebook", name: "notebook"},
        brand: "Apple",
        name: "Apple MacBook Air M2",
        price: {formatted: 1500, formatted_with_symbol: "$1500.00", formatted_with_code: "1500 USD"},
        desc: {
            screen_size: "13.6 Inches",
            cpu_model: "M2",
            ram: "8 GB",
            internal_storage: "512 GB"
        },
        color: "silver",
        permalink: "M0Cbk32",
        new: true,
        featured: true,
        image: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673270888/online-shop/apple-macbook-air-mlxx3rua_teshad.jpg",
        assets: [
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673270888/online-shop/apple-macbook-air-mlxx3rua_teshad.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673270889/online-shop/apple-macbook-air-mlxx3ruass_kostgk.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673270890/online-shop/aapple-macbook-air-mlxx3ru_ucokqg.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673270891/online-shop/apple-macbook-air-mlxx3ru_trgloy.jpg"}
        ]
    },
    {
        id: uniqueId(),
        qty: 10,
        category: {slug: "notebook", name: "notebook"},
        brand: "HP",
        name: "HP ProBook 450 G8",
        desc: {
            internal_storage: "256 GB",
            ram: "8 GB",
            screen_size: "15.6 inches",
            cpu_model: "Intel Core i5-1135G7"
        },
        color: "silver",
        permalink: "Sm0n43G",
        new: false,
        featured: false,
        image: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673272863/online-shop/hj_tt4ubj.jpg",
        price: {formatted: 780, formatted_with_code: "780 USD", formatted_with_symbol: "$780.00"},
        assets: [
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673272863/online-shop/hj_tt4ubj.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673272864/online-shop/hj2_esabou.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673272865/online-shop/hj1_njtg3f.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673272876/online-shop/hj3_zdvqro.jpg"},
        ]

    },
    {
        id: uniqueId(),
        qty: 5,
        category: {slug: "game-consoles", name: "game consoles"},
        brand: "Nintendo",
        name: "Nintendo Switch Oled",
        desc: {
            internal_storage: "64 GB",
            ram: "10 GB",
            bluetooth: true,
        },
        color: "black",
        permalink: "nI4T0nd",
        new: true,
        featured: false,
        image: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673273963/online-shop/nintendo-switch-oled_jrhzcy.jpg",
        price: {formatted: 645, formatted_with_symbol: "$645.00", formatted_with_code: "645 USD"},
    },
    {
        id: uniqueId(),
        qty: 5,
        category: {slug: "game-consoles", name: "game consoles"},
        brand: "Xbox",
        name: "Xbox Series S",
        desc: {
            internal_storage: "512 GB",
            ram: "10 GB",
            bluetooth: true,
        },
        color: "white",
        permalink: "xOb0X34",
        new: true,
        featured: false,
        image: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673274306/online-shop/xbox-series-s_xsqqyx.jpg",
        price: {formatted: 710, formatted_with_symbol: "$710.00", formatted_with_code: "710 USD"},
        assets: [
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673274306/online-shop/xbox-series-s_xsqqyx.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673274307/online-shop/xbox-series-s-1_byqdwk.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673274310/online-shop/xbox-series-s-2_nesa3s.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673274313/online-shop/xbox-series-s-3_crqlec.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673274318/online-shop/xbox-series-s-6_dsie7n.jpg"},
        ]
    },
    {
        id: uniqueId(),
        qty: 5,
        category: {slug: "game-consoles", name: "game consoles"},
        brand: "Sony",
        name: "Sony PlayStation Classic (PS 1)",
        color: "white",
        permalink: "s0Ny34F",
        new: false,
        featured: false,
        image: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673274851/online-shop/sony-playstation-classic-ps-1-1_kcmkiw.jpg",
        price: {formatted: 155, formatted_with_symbol: "$155.00", formatted_with_code: "155 USD"},
        assets: [
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673274851/online-shop/sony-playstation-classic-ps-1-1_kcmkiw.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673274852/online-shop/sony-playstation-classic-ps-1-2_xp4w5s.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673274854/online-shop/sony-playstation-classic-ps-1-3_uputxg.jpg"},
        ]
    },
    {
        id: uniqueId(),
        qty: 5,
        category: {slug: "game-consoles", name: "game consoles"},
        brand: "Xbox",
        name: "Xbox Series S",
        desc: {
            internal_storage: "512 GB",
            ram: "10 GB",
            bluetooth: true,
        },
        color: "white",
        permalink: "xOb0X34",
        new: true,
        featured: false,
        image: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673274306/online-shop/xbox-series-s_xsqqyx.jpg",
        price: {formatted: 710, formatted_with_symbol: "$710.00", formatted_with_code: "710 USD"},
        assets: [
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673274306/online-shop/xbox-series-s_xsqqyx.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673274307/online-shop/xbox-series-s-1_byqdwk.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673274310/online-shop/xbox-series-s-2_nesa3s.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673274313/online-shop/xbox-series-s-3_crqlec.jpg"},
            {url: "https://res.cloudinary.com/dgnkjztis/image/upload/v1673274318/online-shop/xbox-series-s-6_dsie7n.jpg"},
        ]
    },

]

module.exports = products