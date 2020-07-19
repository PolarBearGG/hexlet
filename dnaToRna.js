// BEGIN (write your solution here)
const dnaToRna = (dna) => {
  const length = dna.length;
  let rna = '';
  for (let i = 0; i <= length - 1; i += 1) {
    if (dna[i] === 'G') {
      rna += 'C';
    }
    if (dna[i] === 'C') {
      rna += 'G';
    }
    if (dna[i] === 'T') {
      rna += 'A';
    }
    if (dna[i] === 'A') {
      rna += 'U';
    }
    if (dna === '') {
      return '';
    }
    if (dna[i] !== 'A' && dna[i] !== 'C' && dna[i] !== 'G' && dna[i] !== 'T') {
      return null;
    }
  }
  return rna;
};
export default dnaToRna;
// END
