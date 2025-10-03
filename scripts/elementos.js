
const colorByGroup = {
    "Alkali Metal":     "#ac0533",
    "Alkaline Earth":   "#ef3125",
    "Transition Metal": "#fff000",
    "Basic Metal":      "#00863f",
    "Metalloid":        "#008c7f",
    "Non Metal":        "#0174bd",
    "Halogen":          "#7482bf",
    "Noble Gas":        "#a64298",
    "Lanthanide":       "#7ac141",
    "Actinide":         "#5b8726"
};






const elementsList = {
    // 1
    Hydrogen: {
        group: "Non Metal",
        symbol: "H",
        mass: 1.008,
    },
    Helium: {
        group: "Noble Gas",
        symbol: "He",
        mass: 4.003
    },
    // 2
    Lithium: {
        group: "Alkali Metal",
        symbol: "Li",
        mass: 6.941
    },
    Beryllium: {
        group: "Alkaline Earth",
        symbol: "Be",
        mass: 9.012
    },
    Boron: {
        group: "Metalloid",
        symbol: "B",
        mass: 10.811
    },
    Carbon: {
        group: "Non Metal",
        symbol: "C",
        mass: 10.811
    },
    Nitrogen: {
        group: "Non Metal",
        symbol: "N",
        mass: 14.007
    },
    Oxygen: {
        group: "Non Metal",
        symbol: "O",
        mass: 15.999
    },
    Flourine: {
        group: "Halogen",
        symbol: "F",
        mass: 18.998
    },
    Neon: {
        group: "Noble Gas",
        symbol: "Ne",
        mass: '20.180'
    },
    // 3
    Sodium: {
        group: "Alkali Metal",
        symbol: "Na",
        mass: '22.990'
    },
    Magnesium: {
        group: "Alkaline Earth",
        symbol: "Mg",
        mass: 24.305
    },
    Aluminium: {
        group: "Basic Metal",
        symbol: "Al",
        mass: 26.982
    },
    Silicon: {
        group: "Metalloid",
        symbol: "Si",
        mass: 28.086
    },
    Phosphorus: {
        group: "Non Metal",
        symbol: "P",
        mass: 30.974
    },
    Sulfur: {
        group: "Non Metal",
        symbol: "S",
        mass: 32.066
    },
    Chlorine: {
        group: "Halogen",
        symbol: "Cl",
        mass: 35.453
    },
    Argon: {
        group: "Noble Gas",
        symbol: "Ar",
        mass: 39.948
    },
    // 4
    Potassium: {
        group: "Alkali Metal",
        symbol: "K",
        mass: 39.098
    },
    Calcium: {
        group: "Alkaline Earth",
        symbol: "Ca",
        mass: 40.078
    },
    Scandium: {
        group: "Transition Metal",
        symbol: "Sc",
        mass: 44.956
    },
    Titanium: {
        group: "Transition Metal",
        symbol: "Ti",
        mass: 47.88
    },
    Vanadium: {
        group: "Transition Metal",
        symbol: "V",
        mass: 50.942
    },
    Chromium: {
        group: "Transition Metal",
        symbol: "Cr",
        mass: 51.996
    },
    Manganse: {
        group: "Transition Metal",
        symbol: "Mn",
        mass: 54.938
    },
    Iron: {
        group: "Transition Metal",
        symbol: "Fe",
        mass: 55.845
    },
    Cobalt: {
        group: "Transition Metal",
        symbol: "Co",
        mass: 58.933
    },
    Nickel: {
        group: "Transition Metal",
        symbol: "Ni",
        mass: 58.693
    },
    Copper: {
        group: "Transition Metal",
        symbol: "Cu",
        mass: 63.546
    },
    Zinc: {
        group: "Transition Metal",
        symbol: "Zn",
        mass: 65.38
    },
    Gallium: {
        group: "Basic Metal",
        symbol: "Ga",
        mass: 69.723
    },
    Germanium: {
        group: "Metalloid",
        symbol: "Ge",
        mass: 72.631
    },
    Arsenic: {
        group: "Metalloid",
        symbol: "As",
        mass: 74.922
    },
    Selenium: {
        group: "Non Metal",
        symbol: "Se",
        mass: 78.971
    },
    Bromine: {
        group: "Halogen",
        symbol: "Br",
        mass: 79.904
    },
    Krypton: {
        group: "Noble Gas",
        symbol: "Kr",
        mass: 84.798
    },
    Rubidium: {
        group: "Alkali Metal",
        symbol: "Rb",
        mass: 84.468
    },
    Strontium: {
        group: "Alkaline Earth",
        symbol: "Sr",
        mass: 87.62
    },
    Yttrium: {
        group: "Transition Metal",
        symbol: "Y",
        mass: 88.906
    },
    Zincornium: {
        group: "Transition Metal",
        symbol: "Zr",
        mass: 91.224
    },
    Niobium: {
        group: "Transition Metal",
        symbol: "Nb",
        mass: 92.906
    },
    Molybdenum: {
        group: "Transition Metal",
        symbol: "Mo",
        mass: 95.95
    },
    Technetium: {
        group: "Transition Metal",
        symbol: "Tc",
        mass: 98.907
    },
    Ruthenium: {
        group: "Transition Metal",
        symbol: "Ru",
        mass: 101.07
    },
    Rhodium: {
        group: "Transition Metal",
        symbol: "Rh",
        mass: 102.906
    },
    Palladium: {
        group: "Transition Metal",
        symbol: "Pd",
        mass: 106.42
    },
    Silver: {
        group: "Transition Metal",
        symbol: "Ag",
        mass: 107.868
    },
    Cadmium: {
        group: "Transition Metal",
        symbol: "Cd",
        mass: 112.414
    },
    Indium: {
        group: "Basic Metal",
        symbol: "In",
        mass: 114.818
    },
    Tin: {
        group: "Basic Metal",
        symbol: "Sn",
        mass: 118.711
    },
    Antimony: {
        group: "Metalloid",
        symbol: "Sb",
        mass: '121.760'
    },
    Tellurium: {
        group: "Metalloid",
        symbol: "Te",
        mass: 127.6
    },
    Iodine: {
        group: "Halogen",
        symbol: "I",
        mass: 126.906
    },
    Xenom: {
        group: "Noble Gas",
        symbol: "Xe",
        mass: 131.294
    },
    // 5
    Cesium: {
        group: "Alkali Metal",
        symbol: "Cs",
        mass: 132.905
    },
    Barium: {
        group: "Alkaline Earth",
        symbol: "Ba",
        mass: 137.328
    },
    // 5-2 (57 to 71) Lanthanide
    Lanthanum: {
        group: "Lanthanide",
        symbol: "La",
        mass: 138.905
    },
    Cerium: {
        group: "Lanthanide",
        symbol: "Ce",
        mass: 140.116
    },
    Praseodymium: {
        group: "Lanthanide",
        symbol: "Pr",
        mass: 140.908
    },
    Neodymium: {
        group: "Lanthanide",
        symbol: "Nd",
        mass: 114.243
    },
    Promethium: {
        group: "Lanthanide",
        symbol: "Pm",
        mass: 144.913
    },
    Samarium: {
        group: "Lanthanide",
        symbol: "Sm",
        mass: 150.36
    },
    Europium: {
        group: "Lanthanide",
        symbol: "Eu",
        mass: 151.964
    },
    Gadolinium: {
        group: "Lanthanide",
        symbol: "Gd",
        mass: 157.25
    },
    Terbium: {
        group: "Lanthanide",
        symbol: "Tb",
        mass: 158.925
    },
    Dysprosium: {
        group: "Lanthanide",
        symbol: "Dy",
        mass: '162.500'
    },
    Holmium: {
        group: "Lanthanide",
        symbol: "Ho",
        mass: '164.930'
    },
    Erbium: {
        group: "Lanthanide",
        symbol: "Er",
        mass: 167.259
    },
    Thulium: {
        group: "Lanthanide",
        symbol: "Tm",
        mass: 168.934
    },
    Ytterbium: {
        group: "Lanthanide",
        symbol: "Yb",
        mass: 173.055
    },
    Lutetium: {
        group: "Lanthanide",
        symbol: "Lu",
        mass: 174.967
    },
    // 5-3
    Hafnium: {
        group: "Transition Metal",
        symbol: "Hf",
        mass: 178.49
    },
    Tantalum: {
        group: "Transition Metal",
        symbol: "Ta",
        mass: 180.948
    },
    Tungsten: {
        group: "Transition Metal",
        symbol: "W",
        mass: 183.84
    },
    Rhenium: {
        group: "Transition Metal",
        symbol: "Re",
        mass: 186.207
    },
    Osmium: {
        group: "Transition Metal",
        symbol: "Os",
        mass: 190.23
    },
    Iridium: {
        group: "Transition Metal",
        symbol: "Ir",
        mass: 192.217
    },
    Platinum: {
        group: "Transition Metal",
        symbol: "Pt",
        mass: 195.085
    },
    Gold: {
        group: "Transition Metal",
        symbol: "Au",
        mass: 196.967
    },
    Mercury: {
        group: "Transition Metal",
        symbol: "Hg",
        mass: 200.592
    },
    Thallium: {
        group: "Basic Metal",
        symbol: "Tl",
        mass: 204.383
    },
    Lead: {
        group: "Basic Metal",
        symbol: "Pb",
        mass: 207.2
    },
    Bismuth: {
        group: "Basic Metal",
        symbol: "Bi",
        mass: '208.980'
    },
    Polonium: {
        group: "Metalloid",
        symbol: "Po",
        mass: '[208.982]'
    },
    Astatine: {
        group: "Halogen",
        symbol: "At",
        mass: 209.987
    },
    Radon: {
        group: "Noble Gas",
        symbol: "Rn",
        mass: 222.018
    },
    // 6
    Francium: {
        group: "Alkali Metal",
        symbol: "Fr",
        mass: '223.020'
    },
    Radium: {
        group: "Alkaline Earth",
        symbol: "Ra",
        mass: 226.025
    },
    // 6-2 (89 to 103) Actinide
    Actinium: {
        group: "Actinide",
        symbol: "Ac",
        mass: 227.028
    },
    Thorium: {
        group: "Actinide",
        symbol: "Th",
        mass: 232.038
    },
    Protactinium: {
        group: "Actinide",
        symbol: "Pa",
        mass: 231.036
    },
    Uranium: {
        group: "Actinide",
        symbol: "U",
        mass: 238.029
    },
    Neptunium: {
        group: "Actinide",
        symbol: "Np",
        mass: 237.048
    },
    Plutonium: {
        group: "Actinide",
        symbol: "Pu",
        mass: 244.064
    },
    Americium: {
        group: "Actinide",
        symbol: "Am",
        mass: 243.061
    },
    Cirium: {
        group: "Actinide",
        symbol: "Cm",
        mass: '247.070'
    },
    Berkelium: {
        group: "Actinide",
        symbol: "Bk",
        mass: '247.070'
    },
    Californium: {
        group: "Actinide",
        symbol: "Cf",
        mass: '251.080'
    },
    Einsteinium: {
        group: "Actinide",
        symbol: "Es",
        mass: '[254]'
    },
    Fermium: {
        group: "Actinide",
        symbol: "Fm",
        mass: 257.095
    },
    Mendelevium: {
        group: "Actinide",
        symbol: "Md",
        mass: 258.1
    },
    Nobelium: {
        group: "Actinide",
        symbol: "No",
        mass: 259.101
    },
    Lawrencium: {
        group: "Actinide",
        symbol: "Lr",
        mass: '[262]'
    },
    // 6-3
    Rutherfordium: {
        group: "Transition Metal",
        symbol: "Rf",
        mass: '[261]'
    },
    Dubnium: {
        group: "Transition Metal",
        symbol: "Db",
        mass: '[262]'
    },
    Seaborgium: {
        group: "Transition Metal",
        symbol: "Sg",
        mass: '[266]'
    },
    Bohrium: {
        group: "Transition Metal",
        symbol: "Bh",
        mass: '[264]'
    },
    Hassium: {
        group: "Transition Metal",
        symbol: "Hs",
        mass: '[269]'
    },
    Meitnerium: {
        group: "Transition Metal",
        symbol: "Mt",
        mass: '[278]'
    },
    Darmstadtium: {
        group: "Transition Metal",
        symbol: "Ds",
        mass: '[281]'
    },
    Roentgenium: {
        group: "Transition Metal",
        symbol: "Rg",
        mass: '[280]'
    },
    Copernicium: {
        group: "Transition Metal",
        symbol: "Cn",
        mass: '[285]'
    },
    Nihonium: {
        group: "Basic Metal",
        symbol: "Nh",
        mass: '[286]'
    },
    Flerovium: {
        group: "Basic Metal",
        symbol: "Fl",
        mass: '[289]'
    },
    Moscovium: {
        group: "Basic Metal",
        symbol: "Mc",
        mass: '[289]'
    },
    Livermorium: {
        group: "Basic Metal",
        symbol: "Lv",
        mass: '[293]'
    },
    Tennessine: {
        group: "Halogen",
        symbol: "Ts",
        mass: '[294]'
    },
    Oganesson: {
        group: "Noble Gas",
        symbol: "Og",
        mass: '[294]'
    }

};