function gerarQrcode() {
    
    let inpuTUsuario = document.querySelector('textarea').value;
    let ApiGoogle = 'https://chart.googleapis.com/chart?cht=qr&chs=400x400&chld=H&chl=';
    let conteudoQrcode = ApiGoogle + inpuTUsuario;
    document.querySelector('#Qrcodeimage').src = conteudoQrcode;
}