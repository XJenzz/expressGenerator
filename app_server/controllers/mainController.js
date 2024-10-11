const index = (req, res) => {
    const berita = [
        {
            judul:'Berita 1',
            isi:'isi berita 1'
        },
        {
            judul:'Berita 2',
            isi:'isi berita 2'
        },
    ];
    res.render('index',{title: 'Halaman Home',berita, layout: 'main'});
}

const about = (req, res) => {
    res.render("about", {title:"About Us", layout:'main'});
}

const contact = (req, res) => {
    res.render("contact", {title:"Contact Us", layout:'main'});
}
module.exports = {index, about, contact};