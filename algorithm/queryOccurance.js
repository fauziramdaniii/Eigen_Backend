function countQueryOccurrences(input, query) {
    // Buat objek untuk menyimpan frekuensi kata dalam INPUT
    const frequencyMap = {};
  
    // Iterasi melalui INPUT dan hitung frekuensi setiap kata
    for (const word of input) {
      if (frequencyMap[word]) {
        frequencyMap[word]++;
      } else {
        frequencyMap[word] = 1;
      }
    }
  
    // Buat array untuk menyimpan hasil
    const result = [];
  
    // Iterasi melalui QUERY dan ambil jumlah kemunculan setiap kata dari frequencyMap
    for (const word of query) {
      result.push(frequencyMap[word] || 0);
    }
  
    // Kembalikan array hasil
    return result;
  }
  
  // Contoh penggunaan
  const INPUT = ['xc', 'dz', 'bbb', 'dz'];
  const QUERY = ['bbb', 'ac', 'dz'];
  
  console.log(countQueryOccurrences(INPUT, QUERY)); // Output: [1, 0, 2]
  