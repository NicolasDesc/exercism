//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const proteins_condons = [
  {
    protein: 'Methionine',
    codons: ['AUG']
  },
  {
    protein: 'Phenylalanine',
    codons: ['UUU', 'UUC']
  },
  {
    protein: 'Leucine',
    codons: ['UUA', 'UUG']
  },
  {
    protein: 'Serine',
    codons: ['UCU', 'UCC', 'UCA', 'UCG']
  },
  {
    protein: 'Tyrosine',
    codons: ['UAU', 'UAC']
  },
  {
    protein: 'Cysteine',
    codons: ['UGU', 'UGC']
  },
  {
    protein: 'Tryptophan',
    codons: ['UGG']
  }
];

const stop_codons = ['UAA', 'UAG', 'UGA'];

export default function translate(rna) {
  if (!rna) return []

  const codons_array = rna.match(/([A-Z]{3})/g);

  return getFilteredCodons(codons_array)
    .map(getProtein);

};

function getFilteredCodons(codons_array) {
  let stop_index = codons_array.findIndex(codon => stop_codons.includes(codon));

  // No terminated codons was found in the RNA.
  if (stop_index === -1) {
    stop_index = codons_array.length;
  }

  return codons_array.slice(0, stop_index);;
}

function getProtein(codon) {
  const protein_condons = proteins_condons.find(protein_condon => protein_condon.codons.includes(codon))

  // No protein_condons were found
  if (protein_condons === undefined) {
    throw new Error('Invalid codon')
  } else {
    return protein_condons.protein;
  }
}


// Alternative Solution
// const codons = {
// 	Methionine: ['AUG'],
// 	Phenylalanine: ['UUU', 'UUC'],
// 	Leucine: ['UUA', 'UUG'],
// 	Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
// 	Tyrosine: ['UAU', 'UAC'],
// 	Cysteine: ['UGU', 'UGC'],
// 	Tryptophan: ['UGG'],
// 	STOP: ['UAA', 'UAG', 'UGA']
// }

// function find(codon) {
// 	for(const name in codons) {
// 		if(codons[name].includes(codon)) {
// 			return name
// 		}
// 	}
// 	return false
// }

// export default function translate(RNA) {
// 	if(!RNA) return []

// 	const names = RNA.match(/.{3}/g).map(find),
// 			stop = names.findIndex(n => n === 'STOP')
// 	if(names.some(n => !n)) {
// 		throw new Error('Invalid codon')
// 	}
	
// 	return stop === -1? names: names.slice(0, stop)
// }