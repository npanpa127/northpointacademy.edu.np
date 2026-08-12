const staffData = [
    {
        name: "Hari Prasad Belbase",
        role: "Principal",
        phone: "+977 9847193297",
        gender: "male",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/dVz39oG0w2cEoarkncidz6gYjzYeY4dQ26efLB7T.png",
        dob: "2044-08-22"

    },
    {
        name: "Md. Afjal Khan",
        role: "Vice-Principal",
        phone: "+977 9815377521",
        gender: "male",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/leVy0q17teFxmxScfQASxcm0G3fER5Ct8I0NpyFW.png",
        dob: "2052-08-26"
    },
    {
        name: "Bijay Subba",
        role: "Administrator",
        phone: "+977 9767007216",
        gender: "male",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/1t8WNa28nfwsGLiUatSwyjvX0kQZdhrCw9vAmNiH.png",
        dob: "2039-03-04"
    },
    {
        name: "Bhima Shries",
        role: "Accountant",
        phone: "+977 9867476691",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/4o7WfDLVkudTTCD9wESiIyGaeTWIZH9jRk4ScvV0.png",
        dob: "2041-03-01"
    },
    {
        name: "Kamal Thapa",
        role: "Teacher",
        phone: "+977 9840237375",
        gender: "male",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/0JrX9uvMOPfhYKUGwZ9iyCDC52tWUqCymwDUSlWa.png",
        dob: "2043-07-23"
    },
    {
        name: "Sita Gyanwali",
        role: "Teacher",
        assignedClass: "10-A",
        phone: "+977 9869356754",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/GohQyWcDGiSuwvyWxYsPOLA72TGQDFZ14i4AQOxX.png",
        dob: "2046-11-01"

    },
      {
        name: "Kehar Sing Gahatraj",
        role: "Teacher",
        assignedClass: "9-A",
        phone: "+977 9849218698",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/GohQyWcDGiSuwvyWxYsPOLA72TGQDFZ14i4AQOxX.png",
        dob: "2046-11-01"

    },
    {
        name: "Resham Oli",
        role: "Teacher",
        assignedClass: "8-A",
        phone: "+977 9867711577",
        gender: "male",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/DXKD8rbD7e32t17F6AYM3KrjV0N7AzkS5O1oIgd1.png",
        dob: "2053-03-09"
    },
    {
        name: "Ranjeet Kumar Agrahari",
        role: "Teacher",
          assignedClass: "7-A",
        phone: "+977 9744302991",
        gender: "male",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/nDXEvKGplyDkTHCvK5a6wp1k5WovVE7r1i4ANiYh.png",
        dob: "2054-06-15"
    },
    {
        name: "Amrish Kumar Agrahari",
        role: "Teacher",
          assignedClass: "6-A",
        phone: "+977 9804470569",
        gender: "male",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/rBUP4k1lpPjgN7oIeAPVOQjpC6R6bF17Krv0ywd7.png",
        dob: "2041-12-16"
    },
    {
        name: "Sunil GC",
        role: "Teacher",
          assignedClass: "5-Kanchanjunga",
        phone: "+977 9847283888",
        gender: "male",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/MgrezYoxNOQppJDG28iewMxXwyhELPJ2tWn5GLX2.png",
        dob: "2046-11-27"
    },
    {
        name: "Sita Subedi",
        role: "Teacher",
          assignedClass: "5-Sagarmatha",
        phone: "+977 9867774747",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/Yg9U3DYV3BR3pMTfoTxjMqluA68ZWb3ifft3FtW5.png",
        dob: "2051-03-18"
    },
    {
        name: "Yubraj Bhusal",
        role: "Teacher",
          assignedClass: "4-Peacock",
        phone: "+977 9867470809",
        gender: "male",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/SV6tSnVM8FjyU7Ee0s2BqN83JIxGMORvoPujDVfD.png",
        dob: "2060-11-10"
    },
    {
        name: "Anil Poudel",
          assignedClass: "4-Lophophorous",
        role: "Teacher",
        phone: "+977 9848029144",
        gender: "male",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/0BtqALZMl7leoxyqVFfdfbblejlh3ubQN1g3m4Ef.png",
        dob: "2059-05-06"
    },
    {
        name: "Ganga Bhattarai",
        role: "Teacher",
          assignedClass: "3-Jupiter",
        phone: "+977 9807279424",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/duutRjhwyMHSzYZHvY3Co1sUJ9U5YjfCXRbojmpW.png",
        dob: "2033-04-01"
    },
    {
        name: "Sopiya BK",
        role: "Teacher",
          assignedClass: "3-Mars",
        phone: "+977 9867782996",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/I5JwRMRs3W4VQGSVktj1MyCCYx08WZwgEhAazpW6.png",
        dob: "2055-06-18"
    },
    {
        name: "Tara Pandey",
        role: "Teacher",
          assignedClass: "2-Rara",
        phone: "+977 9867902968",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/zcpK2DKJeDWLVbjENP7P9uACOfuwdMsrzciTj42G.png",
        dob: "2046-12-30"
    },
    {
        name: "Rachana Gurung",
        role: "Teacher",
          assignedClass: "2-Begnas",
        phone: "+977 9867902858",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/NAGSKKtNuTaf8Zy8lFsTys8bNTL9je9xhGfBRSvN.png",
        dob: "2059-02-09"
    },
    {
        name: "Bijay Khanal",
        role: "Teacher",
        assignedClass: "1-Rose",
        phone: "+977 9848028673",
        gender: "male",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/ZBSwaK0AWln5EGStRWtDTupqyV4apTKHK3xxgjDx.png",
        dob: "2060-04-27"
    },
    {
        name: "Prativa Khadka",
        role: "Teacher",
        assignedClass: "1-Lotus",
        phone: "+977 9762244664",
             gender: "female",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/rg7NNVkiRRWFiUHiewPY6H83PgRjTiRAmyP4er2K.png",
        dob: "2062-01-02"
    },
      {
        name: "Bimala Shrestha",
        role: "Teacher",
        assignedClass: "1-Marigold",
        phone: "+977 9847575756",
        gender: "female",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/25zAgV7aa2KAmw7ZZ5fRLb7zF2DVCpmw3uWXp0QO.png",
        dob: "2049-01-26"
    },
    {
        name: "Bhagwati Gaire",
        role: "Teacher",
            assignedClass: "UKG-Dhaulagiri",
        phone: "+977 9867106631",
             gender: "female",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/vYILlGkLRh1x1E7WRPhgAU1wsXtFUIMXXslsgoGx.png",
        dob: "2045-06-12"
    },
    {
        name: "Sita Basnet",
        role: "Teacher",
              assignedClass: "UKG-Ratnagiri",
        phone: "+977 9847320967",
             gender: "female",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/70L5jSzZHx6dOX6fvnPDWco2Ez9BLtbTCxYwfNgb.png",
        dob: "2048-03-06"
    },
    {
        name: "Laxmi Gaire",
        role: "Teacher",
        phone: "+977 9748803162",
             gender: "female",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/E2ZCsRXo6254xVqiBYoXfMbGkcYNSlduRzYEogPY.png",
        dob: "2051-12-14"
    },
    {
        name: "Mina Sunar",
        role: "Teacher",
        assignedClass: "LKG-Mayur",
        phone: "+977 9847558114",
             gender: "female",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/BMudRDiKmAVLjZwtzKIAc4iBmVTHGu2gHmQkEVV1.png",
        dob: "2059-09-05"
    },
    {
        name: "Basanti Bhat",
        role: "Teacher",
          assignedClass: "LKG-Munal",
        phone: "+977 9842909802",
             gender: "female",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/a0xzCaPtq1TKxNKQTaTcclUBUCnlYHUfUmMMLoXo.png",
        dob: "2060-01-25"
    },
    {
        name: "Saraswati Bhusal",
        role: "Teacher",
          assignedClass: "Nursery-Sun",
        phone: "+977 9807472970",
             gender: "female",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/0jlwZ9x9gYorTuYyMQY2oJ9vD9u8mpJfOLBYB6xb.png",
        dob: "2038-02-14"
    },
  
    {
        name: "Padma Karki",
        role: "Teacher",
          assignedClass: "Nursery-Moon",
        phone: "+977 9867455079",
             gender: "female",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/JUFpILuv8HjbkfR6T3v8woiCKrFA4u4kCEwmAioc.png",
        dob: "2054-07-21"
    },
    {
        name: "Sakuntala Banjade",
        role: "Teacher",
        assignedClass: "Childplay-Kopila",
        phone: "+977 9867201612",
             gender: "female",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/i0ltKd8WpFlxMAAia5cCuupyMaPZVSfp7YzRS3Qp.png",
        dob: "2045-06-03"
    },
    {
        name: "Beduram Ghimire",
        role: "Guard",
        phone: "+977 9860556637",
        gender: "male",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/2ztAqhvpZv28LSZs6EZAVkwsRdwUAJt0rNyfeJi4.png",
        dob: "2024-10-25"
    },
    {
        name: "Lila Rana Magar",
        role: "Office Assistant",
        phone: "+977 9768823437",
        gender: "female",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/zA7H0JrTu1SCfrdmWBGmWcMjXg8Zp4Ks9lasY5Mw.png",
        dob: "2044-06-09"
    },
    {
        name: "Maya Sunar",
        role: "Office Assistant",
        phone: "+977 9812972881",
     gender: "female",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/vriZddNhW5AT21nEq9TEMxLut2buIFB85yfwZqQC.png",
        dob: "2054-01-15"
    },
    {
        name: "Khem Bahadur Budha",
        role: "Bus Driver",
        phone: "+977 9815498049",
        gender: "male",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/erLNUmYiZGgMZEizcB0NIO6zR5hNAauRJ8l0jIAx.png",
        dob: "2022-01-10"
    },
    {
        name: "Maan Bahadur Pun",
        role: "Bus Driver",
        phone: "+977 9867476662",
        gender: "male",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/ZbP5WnZAWMytIqk8rxkMluVyP90SmxJgHyFOAMdA.png",
        dob: "2019-01-10"
    },
    {
        name: "Bhakti Prasad Bhusal",
        role: "Bus Helper",
        phone: "+977 9842843888",
        gender: "male",
        image: "https://eacademy.sgp1.digitaloceanspaces.com/eacademy/14/KjTPXSHlTwMWMAMyVrEONPnQKHiCpc6lJvJKHMXU.png",
        dob: "2031-05-15"
    },
    {
        name: "Pramod Kunwar",
        role: "Bus Helper",
        phone: "+977 9805748006",
        gender: "male",
        image: "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-1/359718986_743460577787900_3586087658622910100_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=bwXY9B-P0pUQ7kNvwG4OVex&_nc_oc=Ado2JcMpEW3J-ctZGEwebdiBZwXDAgnl5d9VXq_P63PDrbVmKNq8bvg3TeSXFS6CLPA&_nc_zt=24&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=KaBv6z1pWTlBmdEpyu-WHQ&oh=00_Af2Qcaj-_8mqmNb4quWAEx9ha27Qzwb1LRkyT0Bn3tlFOQ&oe=69F23B67",
        dob: "N/A"
    }
];