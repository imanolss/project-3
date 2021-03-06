/*
const mongoose = require('mongoose')
const Medicine = require('../models/Medicine')

const medicines = [
  {
    "term": "Oxygen",
    "count": 682
  },
  {
    "term": "Ibuprofen",
    "count": 558
  },
  {
    "term": "Gabapentin",
    "count": 285
  },
  {
    "term": "Amoxicillin",
    "count": 244
  },
  {
    "term": "Hand Sanitizer",
    "count": 189
  },
  {
    "term": "OXYGEN",
    "count": 184
  },
  {
    "term": "Hydrochlorothiazide",
    "count": 171
  },
  {
    "term": "Salicylic Acid",
    "count": 167
  },
  {
    "term": "Omeprazole",
    "count": 166
  },
  {
    "term": "Metformin Hydrochloride",
    "count": 162
  },
  {
    "term": "Metoprolol Tartrate",
    "count": 162
  },
  {
    "term": "Prednisone",
    "count": 161
  },
  {
    "term": "Cyclobenzaprine Hydrochloride",
    "count": 160
  },
  {
    "term": "Lorazepam",
    "count": 158
  },
  {
    "term": "Losartan Potassium",
    "count": 155
  },
  {
    "term": "Allergy Relief",
    "count": 151
  },
  {
    "term": "Cephalexin",
    "count": 151
  },
  {
    "term": "Doxycycline Hyclate",
    "count": 151
  },
  {
    "term": "Lisinopril",
    "count": 151
  },
  {
    "term": "Naproxen Sodium",
    "count": 151
  },
  {
    "term": "Naproxen",
    "count": 150
  },
  {
    "term": "Fluoxetine",
    "count": 149
  },
  {
    "term": "Levofloxacin",
    "count": 149
  },
  {
    "term": "Atenolol",
    "count": 148
  },
  {
    "term": "Levetiracetam",
    "count": 148
  },
  {
    "term": "Metronidazole",
    "count": 147
  },
  {
    "term": "Ranitidine",
    "count": 146
  },
  {
    "term": "Methocarbamol",
    "count": 144
  },
  {
    "term": "Furosemide",
    "count": 141
  },
  {
    "term": "Ciprofloxacin",
    "count": 140
  },
  {
    "term": "Acyclovir",
    "count": 138
  },
  {
    "term": "Amoxicillin and Clavulanate Potassium",
    "count": 138
  },
  {
    "term": "Ondansetron",
    "count": 135
  },
  {
    "term": "Glipizide",
    "count": 133
  },
  {
    "term": "Potassium Chloride",
    "count": 133
  },
  {
    "term": "Alprazolam",
    "count": 132
  },
  {
    "term": "Diclofenac Sodium",
    "count": 132
  },
  {
    "term": "Levothyroxine Sodium",
    "count": 131
  },
  {
    "term": "Sulfamethoxazole and Trimethoprim",
    "count": 129
  },
  {
    "term": "Bupropion Hydrochloride",
    "count": 124
  },
  {
    "term": "Famotidine",
    "count": 124
  },
  {
    "term": "Nitrogen",
    "count": 124
  },
  {
    "term": "Azithromycin",
    "count": 123
  },
  {
    "term": "Acetaminophen",
    "count": 122
  },
  {
    "term": "ATORVASTATIN CALCIUM",
    "count": 120
  },
  {
    "term": "Hydrocodone Bitartrate and Acetaminophen",
    "count": 118
  },
  {
    "term": "Stool Softener",
    "count": 118
  },
  {
    "term": "Aspirin",
    "count": 117
  },
  {
    "term": "Carvedilol",
    "count": 115
  },
  {
    "term": "Hydrocortisone",
    "count": 114
  },
  {
    "term": "Pantoprazole Sodium",
    "count": 114
  },
  {
    "term": "Phentermine Hydrochloride",
    "count": 114
  },
  {
    "term": "Promethazine Hydrochloride",
    "count": 111
  },
  {
    "term": "Cetirizine Hydrochloride",
    "count": 109
  },
  {
    "term": "Diazepam",
    "count": 109
  },
  {
    "term": "Lidocaine",
    "count": 107
  },
  {
    "term": "Olanzapine",
    "count": 105
  },
  {
    "term": "Atorvastatin Calcium",
    "count": 104
  },
  {
    "term": "Mirtazapine",
    "count": 104
  },
  {
    "term": "Amlodipine Besylate",
    "count": 103
  },
  {
    "term": "Sertraline Hydrochloride",
    "count": 102
  },
  {
    "term": "Trazodone Hydrochloride",
    "count": 102
  },
  {
    "term": "Propranolol Hydrochloride",
    "count": 100
  },
  {
    "term": "Clonazepam",
    "count": 99
  },
  {
    "term": "Topiramate",
    "count": 99
  },
  {
    "term": "Paroxetine",
    "count": 96
  },
  {
    "term": "Fenofibrate",
    "count": 95
  },
  {
    "term": "Indomethacin",
    "count": 94
  },
  {
    "term": "Ketorolac Tromethamine",
    "count": 93
  },
  {
    "term": "LISINOPRIL",
    "count": 92
  },
  {
    "term": "Hydroxyzine Hydrochloride",
    "count": 91
  },
  {
    "term": "Allopurinol",
    "count": 90
  },
  {
    "term": "Divalproex Sodium",
    "count": 90
  },
  {
    "term": "Penicillin V Potassium",
    "count": 90
  },
  {
    "term": "Spironolactone",
    "count": 90
  },
  {
    "term": "Nifedipine",
    "count": 89
  },
  {
    "term": "Triamcinolone Acetonide",
    "count": 88
  },
  {
    "term": "Loratadine",
    "count": 86
  },
  {
    "term": "Lovastatin",
    "count": 86
  },
  {
    "term": "Buspirone Hydrochloride",
    "count": 84
  },
  {
    "term": "GABAPENTIN",
    "count": 84
  },
  {
    "term": "Lamotrigine",
    "count": 84
  },
  {
    "term": "Cefdinir",
    "count": 83
  },
  {
    "term": "Escitalopram",
    "count": 83
  },
  {
    "term": "Fluconazole",
    "count": 83
  },
  {
    "term": "Dicyclomine Hydrochloride",
    "count": 82
  },
  {
    "term": "Etodolac",
    "count": 82
  },
  {
    "term": "Citalopram",
    "count": 80
  },
  {
    "term": "Glimepiride",
    "count": 80
  },
  {
    "term": "Diltiazem Hydrochloride",
    "count": 79
  },
  {
    "term": "Nystatin",
    "count": 78
  },
  {
    "term": "Sildenafil",
    "count": 78
  },
  {
    "term": "Warfarin Sodium",
    "count": 78
  },
  {
    "term": "Diphenhydramine Hydrochloride",
    "count": 76
  },
  {
    "term": "Fluticasone Propionate",
    "count": 76
  },
  {
    "term": "Montelukast Sodium",
    "count": 76
  },
  {
    "term": "Miconazole Nitrate",
    "count": 75
  },
  {
    "term": "Amitriptyline Hydrochloride",
    "count": 74
  },
  {
    "term": "Doxycycline",
    "count": 74
  },
  {
    "term": "Clobetasol Propionate",
    "count": 73
  },
  {
    "term": "Aripiprazole",
    "count": 72
  },
  {
    "term": "Hydrogen Peroxide",
    "count": 72
  },
  {
    "term": "Lidocaine Hydrochloride",
    "count": 72
  },
  {
    "term": "Losartan Potassium and Hydrochlorothiazide",
    "count": 71
  },
  {
    "term": "Nabumetone",
    "count": 71
  },
  {
    "term": "Isopropyl Alcohol",
    "count": 70
  },
  {
    "term": "benzonatate",
    "count": 70
  },
  {
    "term": "Lithium Carbonate",
    "count": 69
  },
  {
    "term": "Oxybutynin Chloride",
    "count": 69
  },
  {
    "term": "Venlafaxine Hydrochloride",
    "count": 69
  },
  {
    "term": "Baclofen",
    "count": 68
  },
  {
    "term": "Gas Relief Extra Strength",
    "count": 68
  },
  {
    "term": "Hydralazine Hydrochloride",
    "count": 68
  },
  {
    "term": "Nicotine",
    "count": 68
  },
  {
    "term": "Tramadol Hydrochloride",
    "count": 68
  },
  {
    "term": "Finasteride",
    "count": 67
  },
  {
    "term": "Fluocinonide",
    "count": 67
  },
  {
    "term": "Tolnaftate",
    "count": 67
  },
  {
    "term": "Triamterene and Hydrochlorothiazide",
    "count": 67
  },
  {
    "term": "Benazepril Hydrochloride",
    "count": 66
  },
  {
    "term": "Clonidine Hydrochloride",
    "count": 66
  },
  {
    "term": "METFORMIN HYDROCHLORIDE",
    "count": 66
  },
  {
    "term": "Simvastatin",
    "count": 66
  },
  {
    "term": "Antiseptic",
    "count": 65
  },
  {
    "term": "Celecoxib",
    "count": 65
  },
  {
    "term": "Oxycodone Hydrochloride",
    "count": 65
  },
  {
    "term": "Lisinopril and Hydrochlorothiazide",
    "count": 64
  },
  {
    "term": "Metaxalone",
    "count": 63
  },
  {
    "term": "Oxycodone and Acetaminophen",
    "count": 63
  },
  {
    "term": "Sodium Chloride",
    "count": 63
  },
  {
    "term": "Lansoprazole",
    "count": 62
  },
  {
    "term": "Risperidone",
    "count": 62
  },
  {
    "term": "citroma",
    "count": 62
  },
  {
    "term": "ibuprofen",
    "count": 62
  },
  {
    "term": "Clindamycin Hydrochloride",
    "count": 61
  },
  {
    "term": "Gemfibrozil",
    "count": 61
  },
  {
    "term": "Headache Relief Extra Strength",
    "count": 61
  },
  {
    "term": "Phenazopyridine Hydrochloride",
    "count": 61
  },
  {
    "term": "Dandruff",
    "count": 60
  },
  {
    "term": "Haloperidol",
    "count": 60
  },
  {
    "term": "Instant Hand Sanitizer",
    "count": 60
  },
  {
    "term": "Tamsulosin Hydrochloride",
    "count": 60
  },
  {
    "term": "Tizanidine",
    "count": 60
  },
  {
    "term": "Zolpidem Tartrate",
    "count": 60
  },
  {
    "term": "Benzonatate",
    "count": 59
  },
  {
    "term": "Citalopram Hydrobromide",
    "count": 59
  },
  {
    "term": "Duloxetine",
    "count": 59
  },
  {
    "term": "Glyburide",
    "count": 59
  },
  {
    "term": "Loperamide Hydrochloride",
    "count": 59
  },
  {
    "term": "Doxazosin",
    "count": 58
  },
  {
    "term": "Minocycline Hydrochloride",
    "count": 58
  },
  {
    "term": "Rosuvastatin Calcium",
    "count": 58
  },
  {
    "term": "Triple Antibiotic",
    "count": 58
  },
  {
    "term": "Esomeprazole Magnesium",
    "count": 57
  },
  {
    "term": "Nortriptyline Hydrochloride",
    "count": 57
  },
  {
    "term": "PRAVASTATIN SODIUM",
    "count": 57
  },
  {
    "term": "Quetiapine Fumarate",
    "count": 57
  },
  {
    "term": "AMITRIPTYLINE HYDROCHLORIDE",
    "count": 56
  },
  {
    "term": "Clopidogrel",
    "count": 56
  },
  {
    "term": "Ondansetron Hydrochloride",
    "count": 56
  },
  {
    "term": "Sleep Aid",
    "count": 56
  },
  {
    "term": "Valsartan and Hydrochlorothiazide",
    "count": 56
  },
  {
    "term": "Verapamil Hydrochloride",
    "count": 56
  },
  {
    "term": "Clotrimazole",
    "count": 55
  },
  {
    "term": "Heparin Sodium",
    "count": 55
  },
  {
    "term": "Carisoprodol",
    "count": 54
  },
  {
    "term": "Morphine Sulfate",
    "count": 54
  },
  {
    "term": "Metoclopramide",
    "count": 53
  },
  {
    "term": "Anticavity",
    "count": 52
  },
  {
    "term": "Antispetic",
    "count": 52
  },
  {
    "term": "Clarithromycin",
    "count": 52
  },
  {
    "term": "Estradiol",
    "count": 52
  },
  {
    "term": "Epsom Salt",
    "count": 51
  },
  {
    "term": "Glycopyrrolate",
    "count": 51
  },
  {
    "term": "Metoprolol Succinate",
    "count": 51
  },
  {
    "term": "simvastatin",
    "count": 51
  },
  {
    "term": "Air",
    "count": 50
  },
  {
    "term": "Metformin hydrochloride",
    "count": 50
  },
  {
    "term": "Metoprolol succinate",
    "count": 50
  },
  {
    "term": "NITROGEN",
    "count": 50
  },
  {
    "term": "Ramipril",
    "count": 50
  },
  {
    "term": "Tobramycin",
    "count": 50
  },
  {
    "term": "Witch Hazel",
    "count": 50
  },
  {
    "term": "ciprofloxacin",
    "count": 50
  },
  {
    "term": "Meclizine Hydrochloride",
    "count": 48
  },
  {
    "term": "acyclovir",
    "count": 48
  },
  {
    "term": "Acetaminophen and Codeine Phosphate",
    "count": 47
  },
  {
    "term": "Betamethasone Dipropionate",
    "count": 47
  },
  {
    "term": "Hydroxyzine Pamoate",
    "count": 47
  },
  {
    "term": "clonidine hydrochloride",
    "count": 47
  },
  {
    "term": "Docusate Sodium",
    "count": 46
  },
  {
    "term": "Folic Acid",
    "count": 46
  },
  {
    "term": "IBUPROFEN",
    "count": 46
  },
  {
    "term": "ZOLPIDEM TARTRATE",
    "count": 46
  },
  {
    "term": "Magnesium Citrate",
    "count": 45
  },
  {
    "term": "Nitrous Oxide",
    "count": 45
  },
  {
    "term": "TRAMADOL HYDROCHLORIDE",
    "count": 45
  },
  {
    "term": "Anti-Diarrheal",
    "count": 44
  },
  {
    "term": "Donepezil Hydrochloride",
    "count": 44
  },
  {
    "term": "Hand Wash",
    "count": 44
  },
  {
    "term": "meloxicam",
    "count": 44
  },
  {
    "term": "HYDROCODONE BITARTRATE AND ACETAMINOPHEN",
    "count": 43
  },
  {
    "term": "Ketoconazole",
    "count": 43
  },
  {
    "term": "Nighttime Sleep Aid",
    "count": 43
  },
  {
    "term": "Pravastatin Sodium",
    "count": 43
  },
  {
    "term": "Tadalafil",
    "count": 43
  },
  {
    "term": "Antibacterial",
    "count": 42
  },
  {
    "term": "Cefadroxil",
    "count": 42
  },
  {
    "term": "Doxepin Hydrochloride",
    "count": 42
  },
  {
    "term": "Meloxicam",
    "count": 42
  },
  {
    "term": "Ofloxacin",
    "count": 42
  },
  {
    "term": "Quetiapine fumarate",
    "count": 42
  },
  {
    "term": "Valacyclovir Hydrochloride",
    "count": 42
  },
  {
    "term": "Advanced Hand Sanitizer",
    "count": 41
  },
  {
    "term": "Alcohol Prep Pad",
    "count": 41
  },
  {
    "term": "Banana Boat",
    "count": 41
  },
  {
    "term": "Benztropine Mesylate",
    "count": 41
  },
  {
    "term": "Digoxin",
    "count": 41
  },
  {
    "term": "IBU",
    "count": 41
  },
  {
    "term": "Irbesartan",
    "count": 41
  },
  {
    "term": "Modafinil",
    "count": 41
  },
  {
    "term": "Pain Relief Extra Strength",
    "count": 41
  },
  {
    "term": "Temazepam",
    "count": 41
  },
  {
    "term": "AMLODIPINE BESYLATE",
    "count": 40
  },
  {
    "term": "Calcium Acetate",
    "count": 40
  },
  {
    "term": "Dexamethasone Sodium Phosphate",
    "count": 40
  },
  {
    "term": "Diphenoxylate Hydrochloride and Atropine Sulfate",
    "count": 40
  },
  {
    "term": "Erythromycin",
    "count": 40
  },
  {
    "term": "Eszopiclone",
    "count": 40
  },
  {
    "term": "Isoniazid",
    "count": 40
  },
  {
    "term": "Sunscreen",
    "count": 40
  },
  {
    "term": "Albuterol Sulfate",
    "count": 39
  },
  {
    "term": "Ampicillin",
    "count": 39
  },
  {
    "term": "Dexamethasone",
    "count": 39
  },
  {
    "term": "Levothyroxine sodium",
    "count": 39
  },
  {
    "term": "Valsartan",
    "count": 39
  },
  {
    "term": "nicotine",
    "count": 39
  },
  {
    "term": "Antiseptic Mouth Rinse",
    "count": 38
  },
  {
    "term": "ENALAPRIL MALEATE",
    "count": 38
  },
  {
    "term": "Honey Lemon Cough Drops",
    "count": 38
  },
  {
    "term": "Memantine Hydrochloride",
    "count": 38
  },
  {
    "term": "Petroleum",
    "count": 38
  },
  {
    "term": "Phenobarbital",
    "count": 38
  },
  {
    "term": "Acid Reducer",
    "count": 37
  },
  {
    "term": "Amlodipine and Benazepril Hydrochloride",
    "count": 37
  },
  {
    "term": "Dove",
    "count": 37
  },
  {
    "term": "Enalapril Maleate",
    "count": 37
  },
  {
    "term": "PROMETHAZINE HYDROCHLORIDE",
    "count": 37
  },
  {
    "term": "Allergy",
    "count": 36
  },
  {
    "term": "Bach Original Flower Remedies",
    "count": 36
  },
  {
    "term": "Clindamycin hydrochloride",
    "count": 36
  },
  {
    "term": "Labetalol Hydrochloride",
    "count": 36
  },
  {
    "term": "Mometasone Furoate",
    "count": 36
  },
  {
    "term": "anti bacterial hand sanitizer",
    "count": 36
  },
  {
    "term": "Axe",
    "count": 35
  },
  {
    "term": "Bacitracin",
    "count": 35
  },
  {
    "term": "Carbon Dioxide",
    "count": 35
  },
  {
    "term": "Cefazolin",
    "count": 35
  },
  {
    "term": "Hydrocodone Bitartrate And Acetaminophen",
    "count": 35
  },
  {
    "term": "Methylphenidate Hydrochloride",
    "count": 35
  },
  {
    "term": "PredniSONE",
    "count": 35
  },
  {
    "term": "cephalexin",
    "count": 35
  },
  {
    "term": "ADSOL Red Cell Preservation Solution System in Plastic Container (PL 146 Plastic)",
    "count": 34
  },
  {
    "term": "Mineral Oil",
    "count": 34
  },
  {
    "term": "ONDANSETRON",
    "count": 34
  },
  {
    "term": "Pain Reliever Extra Strength",
    "count": 34
  },
  {
    "term": "Prazosin Hydrochloride",
    "count": 34
  },
  {
    "term": "Aspirin Low Dose",
    "count": 33
  },
  {
    "term": "Carbamazepine",
    "count": 33
  },
  {
    "term": "Hawaiian Tropic",
    "count": 33
  },
  {
    "term": "Hydroxychloroquine Sulfate",
    "count": 33
  },
  {
    "term": "Quetiapine",
    "count": 33
  },
  {
    "term": "SERTRALINE HYDROCHLORIDE",
    "count": 33
  },
  {
    "term": "Sertraline",
    "count": 33
  },
  {
    "term": "Terbinafine Hydrochloride",
    "count": 33
  },
  {
    "term": "Vancomycin Hydrochloride",
    "count": 33
  },
  {
    "term": "topiramate",
    "count": 33
  },
  {
    "term": "Anticavity Fluoride Rinse",
    "count": 32
  },
  {
    "term": "Desoximetasone",
    "count": 32
  },
  {
    "term": "Ergocalciferol",
    "count": 32
  },
  {
    "term": "Fexofenadine Hydrochloride",
    "count": 32
  },
  {
    "term": "Gentamicin Sulfate",
    "count": 32
  },
  {
    "term": "Pain Relief PM Extra Strength",
    "count": 32
  },
  {
    "term": "Perphenazine",
    "count": 32
  },
  {
    "term": "RISPERIDONE",
    "count": 32
  },
  {
    "term": "Rosuvastatin calcium",
    "count": 32
  },
  {
    "term": "Sucralfate",
    "count": 32
  },
  {
    "term": "Childrens Allergy Relief",
    "count": 31
  },
  {
    "term": "Dextrose",
    "count": 31
  },
  {
    "term": "ESZOPICLONE",
    "count": 31
  },
  {
    "term": "Lamivudine",
    "count": 31
  },
  {
    "term": "Lyrica",
    "count": 31
  },
  {
    "term": "Milk of Magnesia",
    "count": 31
  },
  {
    "term": "Piperacillin and Tazobactam",
    "count": 31
  },
  {
    "term": "Tramadol Hydrochloride and Acetaminophen",
    "count": 31
  },
  {
    "term": "All Day Pain Relief",
    "count": 30
  },
  {
    "term": "CARISOPRODOL",
    "count": 30
  },
  {
    "term": "Childrens Allergy",
    "count": 30
  },
  {
    "term": "Chlorthalidone",
    "count": 30
  },
  {
    "term": "Hyoscyamine Sulfate",
    "count": 30
  },
  {
    "term": "Medroxyprogesterone Acetate",
    "count": 30
  },
  {
    "term": "Methotrexate",
    "count": 30
  },
  {
    "term": "Mupirocin",
    "count": 30
  },
  {
    "term": "Neomycin and Polymyxin B Sulfates and Hydrocortisone",
    "count": 30
  },
  {
    "term": "Orphenadrine Citrate",
    "count": 30
  },
  {
    "term": "Rizatriptan Benzoate",
    "count": 30
  },
  {
    "term": "Tartar control plus",
    "count": 30
  },
  {
    "term": "Ursodiol",
    "count": 30
  },
  {
    "term": "Dutasteride",
    "count": 29
  },
  {
    "term": "Oxcarbazepine",
    "count": 29
  },
  {
    "term": "Phendimetrazine Tartrate",
    "count": 29
  },
  {
    "term": "Venlafaxine",
    "count": 29
  },
  {
    "term": "Amiodarone Hydrochloride",
    "count": 28
  },
  {
    "term": "CYCLOBENZAPRINE HYDROCHLORIDE",
    "count": 28
  },
  {
    "term": "Ceftriaxone Sodium",
    "count": 28
  },
  {
    "term": "Childrens Ibuprofen",
    "count": 28
  },
  {
    "term": "Isosorbide Dinitrate",
    "count": 28
  },
  {
    "term": "Mucus Relief DM",
    "count": 28
  },
  {
    "term": "Pain Relief",
    "count": 28
  },
  {
    "term": "Sodium Bicarbonate",
    "count": 28
  },
  {
    "term": "Stool Softener Laxative",
    "count": 28
  },
  {
    "term": "Stool Softener Plus Stimulant Laxative",
    "count": 28
  },
  {
    "term": "TOPIRAMATE",
    "count": 28
  },
  {
    "term": "lisinopril",
    "count": 28
  },
  {
    "term": "Acetaminophen Extra Strength",
    "count": 27
  },
  {
    "term": "Alcohol",
    "count": 27
  },
  {
    "term": "Anastrozole",
    "count": 27
  },
  {
    "term": "Budesonide",
    "count": 27
  },
  {
    "term": "Bumetanide",
    "count": 27
  },
  {
    "term": "Ezetimibe",
    "count": 27
  },
  {
    "term": "Fexofenadine hydrochloride",
    "count": 27
  },
  {
    "term": "Motion Sickness Relief",
    "count": 27
  },
  {
    "term": "OXYCODONE HYDROCHLORIDE",
    "count": 27
  },
  {
    "term": "Prochlorperazine Maleate",
    "count": 27
  },
  {
    "term": "hydroxyzine pamoate",
    "count": 27
  },
  {
    "term": "instant hand sanitizer",
    "count": 27
  },
  {
    "term": "isosorbide mononitrate",
    "count": 27
  },
  {
    "term": "temazepam",
    "count": 27
  },
  {
    "term": "Antibacterial Hand Sanitizer",
    "count": 26
  },
  {
    "term": "Calamine",
    "count": 26
  },
  {
    "term": "Chlordiazepoxide Hydrochloride",
    "count": 26
  },
  {
    "term": "Isosorbide Mononitrate",
    "count": 26
  },
  {
    "term": "Levocetirizine Dihydrochloride",
    "count": 26
  },
  {
    "term": "Methylprednisolone",
    "count": 26
  },
  {
    "term": "NAPROXEN",
    "count": 26
  },
  {
    "term": "Pramipexole Dihydrochloride",
    "count": 26
  },
  {
    "term": "Rabeprazole Sodium",
    "count": 26
  },
  {
    "term": "SUNSCREEN",
    "count": 26
  },
  {
    "term": "Sterile Water",
    "count": 26
  },
  {
    "term": "Stomach Relief",
    "count": 26
  },
  {
    "term": "Sumatriptan",
    "count": 26
  },
  {
    "term": "Tacrolimus",
    "count": 26
  },
  {
    "term": "Testosterone",
    "count": 26
  },
  {
    "term": "Tranexamic Acid",
    "count": 26
  },
  {
    "term": "escitalopram oxalate",
    "count": 26
  },
  {
    "term": "Athletes Foot",
    "count": 25
  },
  {
    "term": "BANANA BOAT",
    "count": 25
  },
  {
    "term": "Betamethasone Valerate",
    "count": 25
  },
  {
    "term": "Butalbital, Acetaminophen, and Caffeine",
    "count": 25
  },
  {
    "term": "Cherry Cough Drops",
    "count": 25
  },
  {
    "term": "Chlorhexidine Gluconate",
    "count": 25
  },
  {
    "term": "Epinephrine",
    "count": 25
  },
  {
    "term": "Fluocinolone Acetonide",
    "count": 25
  },
  {
    "term": "Glyburide and Metformin Hydrochloride",
    "count": 25
  },
  {
    "term": "LAMOTRIGINE",
    "count": 25
  },
  {
    "term": "Methadone Hydrochloride",
    "count": 25
  },
  {
    "term": "Mucus Relief",
    "count": 25
  },
  {
    "term": "Naloxone Hydrochloride",
    "count": 25
  },
  {
    "term": "PAROXETINE",
    "count": 25
  },
  {
    "term": "Pain Reliever PM Extra Strength",
    "count": 25
  },
  {
    "term": "Piroxicam",
    "count": 25
  },
  {
    "term": "Silicea",
    "count": 25
  },
  {
    "term": "Sleep Aid Maximum Strength",
    "count": 25
  },
  {
    "term": "ACETAMINOPHEN AND CODEINE PHOSPHATE",
    "count": 24
  },
  {
    "term": "Amantadine Hydrochloride",
    "count": 24
  },
  {
    "term": "Body",
    "count": 24
  },
  {
    "term": "Bupropion Hydrochloride SR",
    "count": 24
  },
  {
    "term": "CPDA-1",
    "count": 24
  },
  {
    "term": "Carbidopa and Levodopa",
    "count": 24
  },
  {
    "term": "Childrens Pain and Fever",
    "count": 24
  },
  {
    "term": "Clotrimazole and Betamethasone Dipropionate",
    "count": 24
  },
  {
    "term": "Cover Cream. Sun protection",
    "count": 24
  },
  {
    "term": "Desmopressin Acetate",
    "count": 24
  },
  {
    "term": "Gas Relief",
    "count": 24
  },
  {
    "term": "HAND SANITIZER",
    "count": 24
  },
  {
    "term": "Hydroxyzine hydrochloride",
    "count": 24
  },
  {
    "term": "Irbesartan and Hydrochlorothiazide",
    "count": 24
  },
  {
    "term": "MECLIZINE HYDROCHLORIDE",
    "count": 24
  },
  {
    "term": "Megestrol Acetate",
    "count": 24
  },
  {
    "term": "Nadolol",
    "count": 24
  },
  {
    "term": "PREDNISONE",
    "count": 24
  },
  {
    "term": "Phenytoin Sodium",
    "count": 24
  },
  {
    "term": "Primidone",
    "count": 24
  },
  {
    "term": "Rifampin",
    "count": 24
  },
  {
    "term": "Triamcinolone acetonide",
    "count": 24
  },
  {
    "term": "Zoledronic Acid",
    "count": 24
  },
  {
    "term": "Zonisamide",
    "count": 24
  },
  {
    "term": "honey lemon cough drops",
    "count": 24
  },
  {
    "term": "Antacid",
    "count": 23
  },
  {
    "term": "Bacitracin Zinc",
    "count": 23
  },
  {
    "term": "Buspirone hydrochloride",
    "count": 23
  },
  {
    "term": "Captopril",
    "count": 23
  },
  {
    "term": "ChloraPrep One-Step",
    "count": 23
  },
  {
    "term": "Degree",
    "count": 23
  },
  {
    "term": "Diclofenac Sodium Delayed Release",
    "count": 23
  },
  {
    "term": "Diclofenac sodium",
    "count": 23
  },
  {
    "term": "Ecolab",
    "count": 23
  },
  {
    "term": "Glycerin",
    "count": 23
  },
  {
    "term": "HYDROXYZINE PAMOATE",
    "count": 23
  },
  {
    "term": "Hydromorphone Hydrochloride",
    "count": 23
  },
  {
    "term": "Ipratropium Bromide",
    "count": 23
  },
  {
    "term": "Laxative Pills Maximum Strength",
    "count": 23
  },
  {
    "term": "Nafcillin",
    "count": 23
  },
  {
    "term": "Nitrofurantoin (monohydrate/macrocrystals)",
    "count": 23
  },
  {
    "term": "Pioglitazone",
    "count": 23
  },
  {
    "term": "Sotalol Hydrochloride",
    "count": 23
  },
  {
    "term": "Stay Awake",
    "count": 23
  },
  {
    "term": "Sumatriptan Succinate",
    "count": 23
  },
  {
    "term": "allergy relief",
    "count": 23
  },
  {
    "term": "cherry cough drops",
    "count": 23
  },
  {
    "term": "tizanidine",
    "count": 23
  },
  {
    "term": "ACYCLOVIR",
    "count": 22
  },
  {
    "term": "Alcohol Prep",
    "count": 22
  },
  {
    "term": "Assured Instant",
    "count": 22
  },
  {
    "term": "CARBAMAZEPINE",
    "count": 22
  },
  {
    "term": "Ceftriaxone",
    "count": 22
  },
  {
    "term": "Ciclopirox",
    "count": 22
  },
  {
    "term": "Diaper Rash",
    "count": 22
  },
  {
    "term": "Honey Lemon Cough Drop",
    "count": 22
  },
  {
    "term": "Hydrogen Peroxide 3 Percent",
    "count": 22
  },
  {
    "term": "Imipramine Hydrochloride",
    "count": 22
  },
  {
    "term": "Linezolid",
    "count": 22
  },
  {
    "term": "Menthol Cough Drops",
    "count": 22
  },
  {
    "term": "Neomycin and Polymyxin B Sulfates and Dexamethasone",
    "count": 22
  },
  {
    "term": "Nitrofurantoin Monohydrate/ Macrocrystalline",
    "count": 22
  },
  {
    "term": "Nystatin and Triamcinolone Acetonide",
    "count": 22
  },
  {
    "term": "Olmesartan Medoxomil",
    "count": 22
  },
  {
    "term": "Oxaliplatin",
    "count": 22
  },
  {
    "term": "Pioglitazone Hydrochloride",
    "count": 22
  },
  {
    "term": "Progesterone",
    "count": 22
  },
  {
    "term": "Salicylic acid",
    "count": 22
  },
  {
    "term": "Senna S",
    "count": 22
  },
  {
    "term": "Sleep Aid Nighttime",
    "count": 22
  },
  {
    "term": "Tretinoin",
    "count": 22
  },
  {
    "term": "risperidone",
    "count": 22
  },
  {
    "term": "ziprasidone hydrochloride",
    "count": 22
  },
  {
    "term": "AMOXICILLIN AND CLAVULANATE POTASSIUM",
    "count": 21
  },
  {
    "term": "Adenosine",
    "count": 21
  },
  {
    "term": "Amlodipine Besylate and Benazepril Hydrochloride",
    "count": 21
  },
  {
    "term": "Antiseptic Skin Cleanser",
    "count": 21
  },
  {
    "term": "Belladonna",
    "count": 21
  },
  {
    "term": "Butalbital, Acetaminophen and Caffeine",
    "count": 21
  },
  {
    "term": "CLONIDINE HYDROCHLORIDE",
    "count": 21
  },
  {
    "term": "Childrens Pain Relief",
    "count": 21
  },
  {
    "term": "Diclofenac Potassium",
    "count": 21
  },
  {
    "term": "Fluorouracil",
    "count": 21
  },
  {
    "term": "Fluoxetine Hydrochloride",
    "count": 21
  },
  {
    "term": "Helium",
    "count": 21
  },
  {
    "term": "Hemorrhoidal",
    "count": 21
  },
  {
    "term": "Ibuprofen PM",
    "count": 21
  },
  {
    "term": "Methimazole",
    "count": 21
  },
  {
    "term": "Midazolam",
    "count": 21
  },
  {
    "term": "Mycophenolate Mofetil",
    "count": 21
  },
  {
    "term": "NITROUS OXIDE",
    "count": 21
  },
  {
    "term": "Oseltamivir Phosphate",
    "count": 21
  },
  {
    "term": "STOOL SOFTENER",
    "count": 21
  },
  {
    "term": "Silver Sulfadiazine",
    "count": 21
  },
  {
    "term": "Sore Throat",
    "count": 21
  },
  {
    "term": "Stomach Relief Regular Strength",
    "count": 21
  },
  {
    "term": "VERAPAMIL HYDROCHLORIDE",
    "count": 21
  },
  {
    "term": "Valacyclovir",
    "count": 21
  },
  {
    "term": "Valacyclovir hydrochloride",
    "count": 21
  },
  {
    "term": "antacid",
    "count": 21
  },
  {
    "term": "aspirin",
    "count": 21
  },
  {
    "term": "lansoprazole",
    "count": 21
  },
  {
    "term": "venlafaxine hydrochloride",
    "count": 21
  },
  {
    "term": "70%",
    "count": 20
  },
  {
    "term": "Acetazolamide",
    "count": 20
  },
  {
    "term": "Calcitriol",
    "count": 20
  },
  {
    "term": "Childrens Acetaminophen",
    "count": 20
  },
  {
    "term": "Cold Spot Point Relief",
    "count": 20
  },
  {
    "term": "Cough and Cold HBP",
    "count": 20
  },
  {
    "term": "Entacapone",
    "count": 20
  },
  {
    "term": "FENOFIBRATE",
    "count": 20
  },
  {
    "term": "Glipizide ER",
    "count": 20
  },
  {
    "term": "Magnesium Sulfate",
    "count": 20
  },
  {
    "term": "Miconazole 7",
    "count": 20
  },
  {
    "term": "Nasal Decongestant",
    "count": 20
  },
  {
    "term": "Prednisolone Sodium Phosphate",
    "count": 20
  },
  {
    "term": "Pulsatilla",
    "count": 20
  },
  {
    "term": "Quinapril",
    "count": 20
  },
  {
    "term": "SudoGest",
    "count": 20
  },
  {
    "term": "Trihexyphenidyl Hydrochloride",
    "count": 20
  },
  {
    "term": "Undecylenic Acid",
    "count": 20
  },
  {
    "term": "Zolmitriptan",
    "count": 20
  },
  {
    "term": "azithromycin",
    "count": 20
  },
  {
    "term": "azithromycin monohydrate",
    "count": 20
  },
  {
    "term": "donepezil hydrochloride",
    "count": 20
  },
  {
    "term": "venlafaxine",
    "count": 20
  },
  {
    "term": "verapamil hydrochloride",
    "count": 20
  },
  {
    "term": "ANTIBACTERIAL FOAMING",
    "count": 19
  },
  {
    "term": "Acetaminophen PM Extra Strength",
    "count": 19
  },
  {
    "term": "Alendronate Sodium",
    "count": 19
  },
  {
    "term": "Ammonia N 13",
    "count": 19
  },
  {
    "term": "Atropine Sulfate",
    "count": 19
  },
  {
    "term": "BENZTROPINE MESYLATE",
    "count": 19
  },
  {
    "term": "CELECOXIB",
    "count": 19
  },
  {
    "term": "Clindamycin Phosphate",
    "count": 19
  },
  {
    "term": "Cyproheptadine Hydrochloride",
    "count": 19
  },
  {
    "term": "DICLOFENAC SODIUM",
    "count": 19
  },
  {
    "term": "Docetaxel",
    "count": 19
  },
  {
    "term": "Everyday Clean Dandruff",
    "count": 19
  },
  {
    "term": "Extra Strength Pain Relief",
    "count": 19
  },
  {
    "term": "FLUOXETINE",
    "count": 19
  },
  {
    "term": "Gas Relief Ultra Strength",
    "count": 19
  },
  {
    "term": "Headache",
    "count": 19
  },
  {
    "term": "Laxative",
    "count": 19
  },
  {
    "term": "Loratadine Allergy Relief",
    "count": 19
  },
  {
    "term": "Metoclopramide Hydrochloride",
    "count": 19
  },
  {
    "term": "Moisturizing Antibacterial",
    "count": 19
  },
  {
    "term": "Motion Sickness",
    "count": 19
  },
  {
    "term": "Omeprazole Magnesium",
    "count": 19
  },
  {
    "term": "PROCHLORPERAZINE MALEATE",
    "count": 19
  },
  {
    "term": "Phosphorus",
    "count": 19
  },
  {
    "term": "Polyethylene Glycol 3350",
    "count": 19
  },
  {
    "term": "Simethicone",
    "count": 19
  },
  {
    "term": "Torsemide",
    "count": 19
  },
  {
    "term": "Ziprasidone Hydrochloride",
    "count": 19
  },
  {
    "term": "aripiprazole",
    "count": 19
  },
  {
    "term": "levocetirizine dihydrochloride",
    "count": 19
  },
  {
    "term": "metformin hydrochloride",
    "count": 19
  },
  {
    "term": "tramadol hydrochloride",
    "count": 19
  },
  {
    "term": "ANTI BACTERIAL HAND SANITIZER",
    "count": 18
  },
  {
    "term": "All Day Allergy",
    "count": 18
  },
  {
    "term": "Ampicillin and Sulbactam",
    "count": 18
  },
  {
    "term": "Arnica montana",
    "count": 18
  },
  {
    "term": "CRESTOR",
    "count": 18
  },
  {
    "term": "Chest Rub",
    "count": 18
  },
  {
    "term": "Childrens Loratadine Sugar Free",
    "count": 18
  },
  {
    "term": "Cough DM",
    "count": 18
  },
  {
    "term": "Desvenlafaxine",
    "count": 18
  },
  {
    "term": "Dicloxacillin Sodium",
    "count": 18
  },
  {
    "term": "HYDROCORTISONE",
    "count": 18
  },
  {
    "term": "Hand wash",
    "count": 18
  },
  {
    "term": "INDOMETHACIN",
    "count": 18
  },
  {
    "term": "Loratadine ODT",
    "count": 18
  },
  {
    "term": "Loratadine and Pseudoephedrine Sulfate",
    "count": 18
  },
  {
    "term": "Midazolam Hydrochloride",
    "count": 18
  },
  {
    "term": "Olmesartan Medoxomil and Hydrochlorothiazide",
    "count": 18
  },
  {
    "term": "Petroleum Skin Protectant",
    "count": 18
  },
  {
    "term": "SENNA",
    "count": 18
  },
  {
    "term": "Sepia",
    "count": 18
  },
  {
    "term": "Sodium Fluoride F 18",
    "count": 18
  },
  {
    "term": "Terazosin",
    "count": 18
  },
  {
    "term": "Tolterodine Tartrate",
    "count": 18
  },
  {
    "term": "hydrochlorothiazide",
    "count": 18
  },
  {
    "term": "omeprazole",
    "count": 18
  },
  {
    "term": "pravastatin sodium",
    "count": 18
  },
  {
    "term": "ACETAMINOPHEN",
    "count": 17
  },
  {
    "term": "AMOXICILLIN",
    "count": 17
  },
  {
    "term": "AZITHROMYCIN",
    "count": 17
  },
  {
    "term": "Anti-Bacterial Hand Gel",
    "count": 17
  },
  {
    "term": "Australian Gold Broad Spectrum SPF 30",
    "count": 17
  },
  {
    "term": "Azelastine Hydrochloride",
    "count": 17
  },
  {
    "term": "BENZONATATE",
    "count": 17
  },
  {
    "term": "Bupropion Hydrochloride (XL)",
    "count": 17
  },
  {
    "term": "CELEBREX",
    "count": 17
  },
  {
    "term": "Chamomilla",
    "count": 17
  },
  {
    "term": "Chlorpromazine Hydrochloride",
    "count": 17
  },
  {
    "term": "Ciprofloxacin Hydrochloride",
    "count": 17
  },
  {
    "term": "Clopidogrel bisulfate",
    "count": 17
  },
  {
    "term": "DIPHENHYDRAMINE HYDROCHLORIDE",
    "count": 17
  },
  {
    "term": "Desipramine Hydrochloride",
    "count": 17
  },
  {
    "term": "Diphenhydramine HCL",
    "count": 17
  },
  {
    "term": "Escitalopram Oxalate",
    "count": 17
  },
  {
    "term": "FOLIC ACID",
    "count": 17
  },
  {
    "term": "Felodipine",
    "count": 17
  },
  {
    "term": "First Aid Antiseptic",
    "count": 17
  },
  {
    "term": "Fludeoxyglucose F 18",
    "count": 17
  },
  {
    "term": "Flumazenil",
    "count": 17
  },
  {
    "term": "Gentle Laxative",
    "count": 17
  },
  {
    "term": "Hand Sanitizer with Aloe",
    "count": 17
  },
  {
    "term": "Ibuprofen and Pseudoephedrine Hydrochloride",
    "count": 17
  },
  {
    "term": "Lamivudine and Zidovudine",
    "count": 17
  },
  {
    "term": "Liothyronine Sodium",
    "count": 17
  },
  {
    "term": "Loxapine",
    "count": 17
  },
  {
    "term": "Mucus Relief Severe Congestion and Cough Maximum Strength",
    "count": 17
  },
  {
    "term": "Nitroglycerin",
    "count": 17
  },
  {
    "term": "Nux vomica",
    "count": 17
  },
  {
    "term": "Olopatadine Hydrochloride",
    "count": 17
  },
  {
    "term": "Oxacillin",
    "count": 17
  },
  {
    "term": "Oxaprozin",
    "count": 17
  },
  {
    "term": "Pain Relief PM",
    "count": 17
  },
  {
    "term": "Pseudoephedrine Hydrochloride",
    "count": 17
  },
  {
    "term": "RANITIDINE",
    "count": 17
  },
  {
    "term": "Ranitidine Hydrochloride",
    "count": 17
  },
  {
    "term": "Regular Strength Pain Relief",
    "count": 17
  },
  {
    "term": "Senna",
    "count": 17
  },
  {
    "term": "Sevelamer Carbonate",
    "count": 17
  },
  {
    "term": "Stomach Relief Maximum Strength",
    "count": 17
  },
  {
    "term": "Tamoxifen Citrate",
    "count": 17
  },
  {
    "term": "Testosterone Cypionate",
    "count": 17
  },
  {
    "term": "Valproic Acid",
    "count": 17
  },
  {
    "term": "Waterless Anti-Bacterial Hand Cleanser",
    "count": 17
  },
  {
    "term": "celecoxib",
    "count": 17
  },
  {
    "term": "fenofibrate",
    "count": 17
  },
  {
    "term": "fexofenadine hydrochloride",
    "count": 17
  },
  {
    "term": "oxygen",
    "count": 17
  },
  {
    "term": "Acetaminophen and Codeine",
    "count": 16
  },
  {
    "term": "Antibacterial Wet Wipes",
    "count": 16
  },
  {
    "term": "Aspirin Low Dose Safety Coated",
    "count": 16
  },
  {
    "term": "Benzethonium chloride Plus Dyclonine hydrochloride",
    "count": 16
  },
  {
    "term": "Bisacodyl",
    "count": 16
  },
  {
    "term": "Blueberry Scented Hand Sanitizer",
    "count": 16
  },
  {
    "term": "Capecitabine",
    "count": 16
  },
  {
    "term": "Cetirizine",
    "count": 16
  },
  {
    "term": "Chlorzoxazone",
    "count": 16
  },
  {
    "term": "Cimetidine",
    "count": 16
  },
  {
    "term": "Clobazam",
    "count": 16
  },
  {
    "term": "Clopidogrel Bisulfate",
    "count": 16
  },
  {
    "term": "Cromolyn Sodium",
    "count": 16
  },
  {
    "term": "DIAZEPAM",
    "count": 16
  },
  {
    "term": "Daily Moisturizing",
    "count": 16
  },
  {
    "term": "Diltiazem Hydrochloride Extended-Release",
    "count": 16
  },
  {
    "term": "Divalproex sodium",
    "count": 16
  },
  {
    "term": "Eye Wash",
    "count": 16
  },
  {
    "term": "Fexofenadine HCl",
    "count": 16
  },
  {
    "term": "Flecainide Acetate",
    "count": 16
  },
  {
    "term": "Fosinopril Sodium",
    "count": 16
  },
  {
    "term": "Isopropyl alcohol 70 percent",
    "count": 16
  },
  {
    "term": "Ketoprofen",
    "count": 16
  },
  {
    "term": "LEVETIRACETAM",
    "count": 16
  },
  {
    "term": "Lactulose",
    "count": 16
  },
  {
    "term": "Lidocaine and Prilocaine",
    "count": 16
  },
  {
    "term": "MELOXICAM",
    "count": 16
  },
  {
    "term": "MILK OF MAGNESIA",
    "count": 16
  },
  {
    "term": "Mesalamine",
    "count": 16
  },
  {
    "term": "Mucinex",
    "count": 16
  },
  {
    "term": "Nicotine Polacrilex",
    "count": 16
  },
  {
    "term": "Oil Free Acne Wash",
    "count": 16
  },
  {
    "term": "PANTOPRAZOLE SODIUM",
    "count": 16
  },
  {
    "term": "Paricalcitol",
    "count": 16
  },
  {
    "term": "Phenytoin",
    "count": 16
  },
  {
    "term": "Raloxifene Hydrochloride",
    "count": 16
  },
  {
    "term": "SILICEA",
    "count": 16
  },
  {
    "term": "Senna laxative",
    "count": 16
  },
  {
    "term": "Sulindac",
    "count": 16
  },
  {
    "term": "Terbutaline Sulfate",
    "count": 16
  },
  {
    "term": "Xylocaine",
    "count": 16
  },
  {
    "term": "levofloxacin",
    "count": 16
  },
  {
    "term": "ondansetron",
    "count": 16
  },
  {
    "term": "triamcinolone acetonide",
    "count": 16
  },
  {
    "term": "Bupropion Hydrochloride XL",
    "count": 15
  },
  {
    "term": "CEFTRIAXONE",
    "count": 15
  },
  {
    "term": "CIPROFLOXACIN",
    "count": 15
  },
  {
    "term": "CYPROHEPTADINE HYDROCHLORIDE",
    "count": 15
  },
  {
    "term": "Calcarea fluorica",
    "count": 15
  },
  {
    "term": "Calcarea phosphorica",
    "count": 15
  },
  {
    "term": "Cefprozil",
    "count": 15
  },
  {
    "term": "Cefuroxime Axetil",
    "count": 15
  },
  {
    "term": "Cherry Cough Drop",
    "count": 15
  },
  {
    "term": "Childrens Loratadine",
    "count": 15
  },
  {
    "term": "Cilostazol",
    "count": 15
  },
  {
    "term": "Clindamycin",
    "count": 15
  },
  {
    "term": "Cold and Flu Nighttime",
    "count": 15
  },
  {
    "term": "DOCUSATE SODIUM",
    "count": 15
  },
  {
    "term": "DOXYCYCLINE",
    "count": 15
  },
  {
    "term": "Dapsone",
    "count": 15
  },
  {
    "term": "Doxorubicin Hydrochloride",
    "count": 15
  },
  {
    "term": "Duloxetine Hydrochloride",
    "count": 15
  },
  {
    "term": "Felbamate",
    "count": 15
  },
  {
    "term": "Ferrum phosphoricum",
    "count": 15
  },
  {
    "term": "Hypericum perforatum",
    "count": 15
  },
  {
    "term": "Ipratropium Bromide and Albuterol Sulfate",
    "count": 15
  },
  {
    "term": "Irinotecan Hydrochloride",
    "count": 15
  },
  {
    "term": "Isopropyl Rubbing Alcohol",
    "count": 15
  },
  {
    "term": "Ketotifen Fumarate",
    "count": 15
  },
  {
    "term": "Lachesis mutus",
    "count": 15
  },
  {
    "term": "Laxative Maximum Strength",
    "count": 15
  },
  {
    "term": "Losortan Potassium",
    "count": 15
  },
  {
    "term": "Medicated Apricot Scrub",
    "count": 15
  },
  {
    "term": "Menstrual Relief Maximum Strength",
    "count": 15
  },
  {
    "term": "Misoprostol",
    "count": 15
  },
  {
    "term": "Moxifloxacin",
    "count": 15
  },
  {
    "term": "NAPROXEN SODIUM",
    "count": 15
  },
  {
    "term": "Nasal",
    "count": 15
  },
  {
    "term": "Natrum muriaticum",
    "count": 15
  },
  {
    "term": "Nizatidine",
    "count": 15
  },
  {
    "term": "Oxytocin",
    "count": 15
  },
  {
    "term": "Pepto-Bismol",
    "count": 15
  },
  {
    "term": "Permethrin",
    "count": 15
  },
  {
    "term": "Povidone Iodine",
    "count": 15
  },
  {
    "term": "Pregabalin",
    "count": 15
  },
  {
    "term": "Promethazine with Codeine",
    "count": 15
  },
  {
    "term": "Sore Throat Cherry",
    "count": 15
  },
  {
    "term": "Sulphur",
    "count": 15
  },
  {
    "term": "Telmisartan",
    "count": 15
  },
  {
    "term": "Terconazole",
    "count": 15
  },
  {
    "term": "Tetracycline Hydrochloride",
    "count": 15
  },
  {
    "term": "Thuja occidentalis",
    "count": 15
  },
  {
    "term": "URTICA URENS",
    "count": 15
  },
  {
    "term": "VENTOLIN HFA",
    "count": 15
  },
  {
    "term": "Voriconazole",
    "count": 15
  },
  {
    "term": "Zidovudine",
    "count": 15
  },
  {
    "term": "anti-bacterial hand gel",
    "count": 15
  },
  {
    "term": "basic care nicotine",
    "count": 15
  },
  {
    "term": "menthol cough drops",
    "count": 15
  },
  {
    "term": "voriconazole",
    "count": 15
  },
  {
    "term": "APIS MELLIFICA",
    "count": 14
  },
  {
    "term": "ARNICA MONTANA",
    "count": 14
  },
  {
    "term": "ASPIRIN",
    "count": 14
  },
  {
    "term": "Aconitum napellus",
    "count": 14
  },
  {
    "term": "All Day Allergy Relief",
    "count": 14
  },
  {
    "term": "Allergy Multi-Symptom",
    "count": 14
  },
  {
    "term": "Apis mellifica",
    "count": 14
  },
  {
    "term": "Arsenicum album",
    "count": 14
  },
  {
    "term": "Azathioprine",
    "count": 14
  },
  {
    "term": "Bethanechol Chloride",
    "count": 14
  },
  {
    "term": "Bryonia",
    "count": 14
  },
  {
    "term": "Burkhart",
    "count": 14
  },
  {
    "term": "Buspirone HCl",
    "count": 14
  },
  {
    "term": "Causticum",
    "count": 14
  },
  {
    "term": "Cuprum metallicum",
    "count": 14
  },
  {
    "term": "DOK",
    "count": 14
  },
  {
    "term": "Daytime Nighttime Cold Flu Relief",
    "count": 14
  },
  {
    "term": "Depo-Medrol",
    "count": 14
  },
  {
    "term": "Desonide",
    "count": 14
  },
  {
    "term": "Donnatal",
    "count": 14
  },
  {
    "term": "Dry Scalp Care",
    "count": 14
  },
  {
    "term": "Extended Phenytoin Sodium",
    "count": 14
  },
  {
    "term": "Fludeoxyglucose F18",
    "count": 14
  },
  {
    "term": "INSTANT HAND SANITIZER",
    "count": 14
  },
  {
    "term": "Indapamide",
    "count": 14
  },
  {
    "term": "Itch Relief",
    "count": 14
  },
  {
    "term": "Kali bichromicum",
    "count": 14
  },
  {
    "term": "Kali muriaticum",
    "count": 14
  },
  {
    "term": "Kids Relief",
    "count": 14
  },
  {
    "term": "LIDOCAINE",
    "count": 14
  },
  {
    "term": "LORATADINE",
    "count": 14
  },
  {
    "term": "Loratadine antihistamine",
    "count": 14
  },
  {
    "term": "Lycopodium clavatum",
    "count": 14
  },
  {
    "term": "Magnesia phosphorica",
    "count": 14
  },
  {
    "term": "Metformin HCl",
    "count": 14
  },
  {
    "term": "Midodrine Hydrochloride",
    "count": 14
  },
  {
    "term": "Moxifloxacin Hydrochloride",
    "count": 14
  },
  {
    "term": "Natrum sulphuricum",
    "count": 14
  },
  {
    "term": "Nicardipine Hydrochloride",
    "count": 14
  },
  {
    "term": "Night Time Cold and Flu Relief Multi Symptom",
    "count": 14
  },
  {
    "term": "Nitrofurantoin",
    "count": 14
  },
  {
    "term": "Nitrofurantoin Macrocrystals",
    "count": 14
  },
  {
    "term": "PHENYTOIN SODIUM",
    "count": 14
  },
  {
    "term": "PREGABALIN",
    "count": 14
  },
  {
    "term": "Polymyxin B Sulfate and Trimethoprim",
    "count": 14
  },
  {
    "term": "Propafenone Hydrochloride",
    "count": 14
  },
  {
    "term": "QUETIAPINE FUMARATE",
    "count": 14
  },
  {
    "term": "SODIUM CHLORIDE",
    "count": 14
  },
  {
    "term": "SULPHUR",
    "count": 14
  },
  {
    "term": "Senna Plus",
    "count": 14
  },
  {
    "term": "Sodium Polystyrene Sulfonate",
    "count": 14
  },
  {
    "term": "Staphysagria",
    "count": 14
  },
  {
    "term": "Sterile Alcohol Prep Pads",
    "count": 14
  },
  {
    "term": "Sulfacetamide Sodium",
    "count": 14
  },
  {
    "term": "Therapeutic",
    "count": 14
  },
  {
    "term": "Timolol Maleate",
    "count": 14
  },
  {
    "term": "Tolnafate",
    "count": 14
  },
  {
    "term": "VERATRUM ALBUM",
    "count": 14
  },
  {
    "term": "Vitamin A D",
    "count": 14
  },
  {
    "term": "bupropion",
    "count": 14
  },
  {
    "term": "cetirizine hydrochloride",
    "count": 14
  },
  {
    "term": "nasal",
    "count": 14
  },
  {
    "term": "olmesartan medoxomil",
    "count": 14
  },
  {
    "term": "Alcohol-Free Anticavity",
    "count": 13
  },
  {
    "term": "Argatroban",
    "count": 13
  },
  {
    "term": "Arnica Plus",
    "count": 13
  },
  {
    "term": "Artificial Tears",
    "count": 13
  },
  {
    "term": "Atenolol and Chlorthalidone",
    "count": 13
  },
  {
    "term": "Azacitidine",
    "count": 13
  },
  {
    "term": "Banophen",
    "count": 13
  },
  {
    "term": "Berberis vulgaris",
    "count": 13
  },
  {
    "term": "Borax",
    "count": 13
  },
  {
    "term": "Buprenorphine",
    "count": 13
  },
  {
    "term": "CETIRIZINE HYDROCHLORIDE",
    "count": 13
  },
  {
    "term": "Calcarea carbonica",
    "count": 13
  },
  {
    "term": "Candida albicans",
    "count": 13
  },
  {
    "term": "Cantharis",
    "count": 13
  },
  {
    "term": "Carbo vegetabilis",
    "count": 13
  },
  {
    "term": "Cefoxitin",
    "count": 13
  },
  {
    "term": "Cinchona officinalis",
    "count": 13
  },
  {
    "term": "Clozapine",
    "count": 13
  },
  {
    "term": "Cocculus indicus",
    "count": 13
  },
  {
    "term": "Cymbalta",
    "count": 13
  },
  {
    "term": "Daptomycin",
    "count": 13
  },
  {
    "term": "Dial Antibacterial Bar",
    "count": 13
  },
  {
    "term": "Entecavir",
    "count": 13
  },
  {
    "term": "Ethambutol Hydrochloride",
    "count": 13
  },
  {
    "term": "FUROSEMIDE",
    "count": 13
  },
  {
    "term": "Famciclovir",
    "count": 13
  },
  {
    "term": "Fluphenazine Hydrochloride",
    "count": 13
  },
  {
    "term": "Galantamine",
    "count": 13
  },
  {
    "term": "Gelsemium sempervirens",
    "count": 13
  },
  {
    "term": "Glipizide and Metformin Hydrochloride",
    "count": 13
  },
  {
    "term": "Graphites",
    "count": 13
  },
  {
    "term": "Guanfacine",
    "count": 13
  },
  {
    "term": "Halobetasol Propionate",
    "count": 13
  },
  {
    "term": "Hydrocortisone Maximum Strength",
    "count": 13
  },
  {
    "term": "Ibuprofen Childrens",
    "count": 13
  },
  {
    "term": "Ignatia amara",
    "count": 13
  },
  {
    "term": "LEVOTHYROXINE SODIUM",
    "count": 13
  },
  {
    "term": "Ledum palustre",
    "count": 13
  },
  {
    "term": "Leucovorin Calcium",
    "count": 13
  },
  {
    "term": "Losartan potassium",
    "count": 13
  },
  {
    "term": "MECLIZINE",
    "count": 13
  },
  {
    "term": "METRONIDAZOLE",
    "count": 13
  },
  {
    "term": "Meclizine HCl",
    "count": 13
  },
  {
    "term": "Nitricum acidum",
    "count": 13
  },
  {
    "term": "Nitrofurantion Macrocrystals",
    "count": 13
  },
  {
    "term": "No7 Protect and Perfect Intense Advanced Day Cream SPF 30",
    "count": 13
  },
  {
    "term": "No7 Stay Perfect Foundation Sunscreen Broad Spectrum SPF 15 Deeply Beige",
    "count": 13
  },
  {
    "term": "OXYBUTYNIN CHLORIDE",
    "count": 13
  },
  {
    "term": "PENTOXIFYLLINE",
    "count": 13
  },
  {
    "term": "Pain and Fever Childrens",
    "count": 13
  },
  {
    "term": "Rivastigmine Tartrate",
    "count": 13
  },
  {
    "term": "SIMVASTATIN",
    "count": 13
  },
  {
    "term": "Saline Laxative",
    "count": 13
  },
  {
    "term": "Salsalate",
    "count": 13
  },
  {
    "term": "Sildenafil Citrate",
    "count": 13
  },
  {
    "term": "Sulfasalazine",
    "count": 13
  },
  {
    "term": "Supersmile",
    "count": 13
  },
  {
    "term": "Terbinafine",
    "count": 13
  },
  {
    "term": "Theophylline",
    "count": 13
  },
  {
    "term": "Viagra",
    "count": 13
  },
  {
    "term": "Wet Wipes",
    "count": 13
  },
  {
    "term": "fluconazole",
    "count": 13
  },
  {
    "term": "medroxyprogesterone acetate",
    "count": 13
  },
  {
    "term": "milk of magnesia",
    "count": 13
  },
  {
    "term": "pain relief",
    "count": 13
  },
  {
    "term": "2 in 1 Dandruff",
    "count": 12
  },
  {
    "term": "Acetaminophen And Codeine",
    "count": 12
  },
  {
    "term": "Adapalene",
    "count": 12
  },
  {
    "term": "Allergy Relief Antihistamine",
    "count": 12
  },
  {
    "term": "Alumina",
    "count": 12
  },
  {
    "term": "Amlodipine and Valsartan",
    "count": 12
  },
  {
    "term": "Antibacterial Hand",
    "count": 12
  },
  {
    "term": "Anticavity Rinse",
    "count": 12
  },
  {
    "term": "Antifungal",
    "count": 12
  },
  {
    "term": "Antimonium crudum",
    "count": 12
  },
  {
    "term": "Antimonium tartaricum",
    "count": 12
  },
  {
    "term": "Argentum nitricum",
    "count": 12
  },
  {
    "term": "Armodafinil",
    "count": 12
  },
  {
    "term": "Aurum metallicum",
    "count": 12
  },
  {
    "term": "Australian Gold Broad Spectrum SPF 15",
    "count": 12
  },
  {
    "term": "Azithromycin Dihydrate",
    "count": 12
  },
  {
    "term": "BUPROPION HYDROCHLORIDE",
    "count": 12
  },
  {
    "term": "Bicalutamide",
    "count": 12
  },
  {
    "term": "Calcium Chloride",
    "count": 12
  },
  {
    "term": "Cefuroxime axetil",
    "count": 12
  },
  {
    "term": "Citroma",
    "count": 12
  },
  {
    "term": "Coffea cruda",
    "count": 12
  },
  {
    "term": "Conium maculatum",
    "count": 12
  },
  {
    "term": "DIGOXIN",
    "count": 12
  },
  {
    "term": "DULOXETINE DELAYED-RELEASE",
    "count": 12
  },
  {
    "term": "Demeclocycline Hydrochloride",
    "count": 12
  },
  {
    "term": "Diarrhea",
    "count": 12
  },
  {
    "term": "Dulcamara",
    "count": 12
  },
  {
    "term": "Ezetimibe and Simvastatin",
    "count": 12
  },
  {
    "term": "FENTANYL",
    "count": 12
  },
  {
    "term": "FERROUS SULFATE",
    "count": 12
  },
  {
    "term": "Fentanyl",
    "count": 12
  },
  {
    "term": "Gelato APF",
    "count": 12
  },
  {
    "term": "Granisetron Hydrochloride",
    "count": 12
  },
  {
    "term": "Guaifenesin",
    "count": 12
  },
  {
    "term": "Hepar sulphuris calcareum",
    "count": 12
  },
  {
    "term": "Hydrocortisone Acetate",
    "count": 12
  },
  {
    "term": "Ipecacuanha",
    "count": 12
  },
  {
    "term": "Isopropyl alcohol 91 percent",
    "count": 12
  },
  {
    "term": "Kali phosphoricum",
    "count": 12
  },
  {
    "term": "LANSOPRAZOLE",
    "count": 12
  },
  {
    "term": "Letrozole",
    "count": 12
  },
  {
    "term": "Low Dose Aspirin",
    "count": 12
  },
  {
    "term": "Metoprolol tartrate",
    "count": 12
  },
  {
    "term": "Minocycline hydrochloride",
    "count": 12
  },
  {
    "term": "Minoxidil",
    "count": 12
  },
  {
    "term": "Muscle Ice",
    "count": 12
  },
  {
    "term": "Naltrexone Hydrochloride",
    "count": 12
  },
  {
    "term": "Nevirapine",
    "count": 12
  },
  {
    "term": "Oxybutynin Chloride Extended Release",
    "count": 12
  },
  {
    "term": "Pravastatin sodium",
    "count": 12
  },
  {
    "term": "Prednisolone",
    "count": 12
  },
  {
    "term": "Proparacaine Hydrochloride",
    "count": 12
  },
  {
    "term": "Pyrimethamine Leucovorin",
    "count": 12
  },
  {
    "term": "Regular Strength Aspirin EC",
    "count": 12
  },
  {
    "term": "Ribavirin",
    "count": 12
  },
  {
    "term": "Risedronate Sodium",
    "count": 12
  },
  {
    "term": "Ropinirole",
    "count": 12
  },
  {
    "term": "Ropinirole Hydrochloride",
    "count": 12
  },
  {
    "term": "Rosuvastatin",
    "count": 12
  },
  {
    "term": "Ruta graveolens",
    "count": 12
  },
  {
    "term": "SALICYLIC ACID",
    "count": 12
  },
  {
    "term": "Sleep Aid NightTime",
    "count": 12
  },
  {
    "term": "Spongia tosta",
    "count": 12
  },
  {
    "term": "Sugar Free Honey Lemon Cough Drops",
    "count": 12
  },
  {
    "term": "Sugar Free Menthol Cough Drops",
    "count": 12
  },
  {
    "term": "TOPROL XL",
    "count": 12
  },
  {
    "term": "Tartar Control Plus",
    "count": 12
  },
  {
    "term": "Up and Up Nicotine",
    "count": 12
  },
  {
    "term": "VENLAFAXINE HYDROCHLORIDE",
    "count": 12
  },
  {
    "term": "ZINCUM METALLICUM",
    "count": 12
  },
  {
    "term": "anti diarrheal",
    "count": 12
  },
  {
    "term": "anti-bacterial hand sanitizer",
    "count": 12
  },
  {
    "term": "hydrocortisone",
    "count": 12
  },
  {
    "term": "indomethacin",
    "count": 12
  },
  {
    "term": "naproxen sodium",
    "count": 12
  },
  {
    "term": "potassium chloride",
    "count": 12
  },
  {
    "term": "ropinirole hydrochloride",
    "count": 12
  },
  {
    "term": "sumatriptan succinate",
    "count": 12
  },
  {
    "term": "zaleplon",
    "count": 12
  },
  {
    "term": "ABILIFY",
    "count": 11
  },
  {
    "term": "ANTIBACTERIAL",
    "count": 11
  },
  {
    "term": "Acetylcysteine",
    "count": 11
  },
  {
    "term": "Acne",
    "count": 11
  },
  {
    "term": "Allium cepa",
    "count": 11
  },
  {
    "term": "Amiodarone hydrochloride",
    "count": 11
  },
  {
    "term": "Anti-Itch",
    "count": 11
  },
  {
    "term": "Antibacterial Hand Wash",
    "count": 11
  },
  {
    "term": "Aspirin Regular Strength",
    "count": 11
  },
  {
    "term": "Baryta carbonica",
    "count": 11
  },
  {
    "term": "BreathRx with Zytex",
    "count": 11
  },
  {
    "term": "Bupivacaine Hydrochloride",
    "count": 11
  },
  {
    "term": "Bupropion hydrochloride",
    "count": 11
  },
  {
    "term": "CHANTIX",
    "count": 11
  },
  {
    "term": "Calcarea sulphurica",
    "count": 11
  },
  {
    "term": "Carboplatin",
    "count": 11
  },
  {
    "term": "Chelidonium majus",
    "count": 11
  },
  {
    "term": "Clindamycin Phosphate and Benzoyl Peroxide",
    "count": 11
  },
  {
    "term": "Colocynthis",
    "count": 11
  },
  {
    "term": "Cotton Candy Scented Hand Sanitizer",
    "count": 11
  },
  {
    "term": "Cough Relief",
    "count": 11
  },
  {
    "term": "Decitabine",
    "count": 11
  },
  {
    "term": "Dexmethylphenidate Hydrochloride",
    "count": 11
  },
  {
    "term": "Dextroamphetamine Saccharate, Amphetamine Aspartate, Dextroamphetamine Sulfate and Amphetamine Sulfate",
    "count": 11
  },
  {
    "term": "Econazole Nitrate",
    "count": 11
  },
  {
    "term": "Esmolol Hydrochloride",
    "count": 11
  },
  {
    "term": "Ethyl Rubbing Alcohol",
    "count": 11
  },
  {
    "term": "Family Wellness",
    "count": 11
  },
  {
    "term": "Gelato Topical Anesthetic",
    "count": 11
  },
  {
    "term": "General Protection",
    "count": 11
  },
  {
    "term": "Good Sense Nicotine",
    "count": 11
  },
  {
    "term": "HYDROCHLOROTHIAZIDE",
    "count": 11
  },
  {
    "term": "Hydrocodone Bitartrate and Homatropine Methylbromide",
    "count": 11
  },
  {
    "term": "Hydrocodone Bitartrate and Ibuprofen",
    "count": 11
  },
  {
    "term": "Hyoscyamus niger",
    "count": 11
  },
  {
    "term": "ISOSORBIDE MONONITRATE",
    "count": 11
  },
  {
    "term": "Imatinib Mesylate",
    "count": 11
  },
  {
    "term": "Infants Ibuprofen",
    "count": 11
  },
  {
    "term": "Infants Pain and Fever",
    "count": 11
  },
  {
    "term": "Iodium",
    "count": 11
  },
  {
    "term": "Itraconazole",
    "count": 11
  },
  {
    "term": "Kali carbonicum",
    "count": 11
  },
  {
    "term": "Kali iodatum",
    "count": 11
  },
  {
    "term": "LISINOPRIL AND HYDROCHLOROTHIAZIDE",
    "count": 11
  },
  {
    "term": "Lisinopril with Hydrochlorothiazide",
    "count": 11
  },
  {
    "term": "Loratadine and Pseudoephedrine",
    "count": 11
  },
  {
    "term": "METOPROLOL SUCCINATE",
    "count": 11
  },
  {
    "term": "Mapap",
    "count": 11
  },
  {
    "term": "Meropenem",
    "count": 11
  },
  {
    "term": "Midazolam HCl",
    "count": 11
  },
  {
    "term": "Modesa",
    "count": 11
  },
  {
    "term": "Montelukast",
    "count": 11
  },
  {
    "term": "Mucus Relief Cold Flu and Sore Throat Maximum Strength",
    "count": 11
  },
  {
    "term": "Mucus Relief Maximum Strength",
    "count": 11
  },
  {
    "term": "NATRUM MURIATICUM",
    "count": 11
  },
  {
    "term": "Nateglinide",
    "count": 11
  },
  {
    "term": "Natrum carbonicum",
    "count": 11
  },
  {
    "term": "Neomycin Polymyxin B Sulfates and Dexamethasone",
    "count": 11
  },
  {
    "term": "OXYCODONE AND ACETAMINOPHEN",
    "count": 11
  },
  {
    "term": "POTASSIUM CHLORIDE",
    "count": 11
  },
  {
    "term": "Paclitaxel",
    "count": 11
  },
  {
    "term": "Pain Relief Regular Strength",
    "count": 11
  },
  {
    "term": "Phosphoricum acidum",
    "count": 11
  },
  {
    "term": "Phytolacca decandra",
    "count": 11
  },
  {
    "term": "Podophyllum peltatum",
    "count": 11
  },
  {
    "term": "Ranitidine Immediate release",
    "count": 11
  },
  {
    "term": "Rhus tox",
    "count": 11
  },
  {
    "term": "SEROQUEL",
    "count": 11
  },
  {
    "term": "SOLU-MEDROL",
    "count": 11
  },
  {
    "term": "STERILE ALCOHOL PREP PADS",
    "count": 11
  },
  {
    "term": "Sabadilla",
    "count": 11
  },
  {
    "term": "Solifenacin Succinate",
    "count": 11
  },
  {
    "term": "Stramonium",
    "count": 11
  },
  {
    "term": "Symphytum officinale",
    "count": 11
  },
  {
    "term": "Terazosin Hydrochloride",
    "count": 11
  },
  {
    "term": "Triamterene hydrochlorothiazide",
    "count": 11
  },
  {
    "term": "Trifluoperazine Hydrochloride",
    "count": 11
  },
  {
    "term": "Ultra Strength Gas Relief",
    "count": 11
  },
  {
    "term": "VITAMIN D",
    "count": 11
  },
  {
    "term": "Valganciclovir",
    "count": 11
  },
  {
    "term": "Vaporizing Chest Rub",
    "count": 11
  },
  {
    "term": "ZONISAMIDE",
    "count": 11
  },
  {
    "term": "allergy",
    "count": 11
  },
  {
    "term": "butalbital, acetaminophen and caffeine",
    "count": 11
  }
]

mongoose
  .connect('mongodb://localhost/backend-proyecto3', {useNewUrlParser: true})
  .then(async () => {
    const medicine = await Medicine.create(medicines)
    console.log(`${medicine.length} medicines db created`)
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
  })