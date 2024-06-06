function longest(sentence) {
    // Pisahkan kalimat menjadi array kata-kata
    const words = sentence.split(' ');
  
    // Inisialisasi variabel untuk kata terpanjang
    let longestWord = '';
  
    // Iterasi melalui array kata-kata
    for (const word of words) {
      // Jika panjang kata saat ini lebih besar dari panjang kata terpanjang
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    // Kembalikan kata terpanjang beserta panjangnya
    return `${longestWord}: ${longestWord.length} characters`;
  }
  
  // Contoh penggunaan
  const sentence = "Saya sangat senang mengerjakan soal algoritma";
  console.log(longest(sentence)); // Output: "mengerjakan: 11 characters"
  