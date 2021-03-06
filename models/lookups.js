module.exports = function Lookups(){
    this.badgeCategories = [
        {
            code:'Visitor',
            desc:'Visitor',
            
        },
        {
            code:'Delegate',
            desc:'Delegate',
        
        },
        {
            code:'Participant',
            desc:'Participant',

        },
        {
            code:'Media',
            desc:'Media',

        },
        {
            code:'Press',
            desc:'Press',

        },
        {
            code:'Vip',
            desc:'Vip',

        },
        {
            code:'Vvip',
            desc:'Vvip',
        },
        {
            code:'Exhibitor',
            desc:'Exhibitor',
        },
        {
            code:'Sponsor',
            desc:'Sponsor',

        },
        {
            code:'Buyer',
            desc:'Buyer',

        },
        {
            code:'Host',
            desc:'Host',

        },
        {
            code:'Organizer',
            desc:'Organizer',

        },

        {
            code:'Speaker',
            desc:'Speaker',

        },
        {
            code:'Student',
            desc:'Student',
        },
        {
            code:'Member',
            desc:'Member',
        },
        {
            code:'Track A',
            desc:'Track A',
        },
        {
            code:'Track B',
            desc:'Track B',
        },        
        {
            code:'Pfizer',
            desc:'Pfizer',
        },        
        {
            code:'Staff',
            desc:'Staff',
        },        
        {
            code:'Faculty',
            desc:'Faculty',
        },        
    ];

    this.titles=['Mr.','Ms.','Mrs.','Dr.','Col.','Eng.','Professor','HE','HH'];

    this.countries =[ 
        {desc: 'Afghanistan', code: 'AF'}, 
        {desc: 'Åland Islands', code: 'AX'}, 
        {desc: 'Albania', code: 'AL'}, 
        {desc: 'Algeria', code: 'DZ'}, 
        {desc: 'American Samoa', code: 'AS'}, 
        {desc: 'AndorrA', code: 'AD'}, 
        {desc: 'Angola', code: 'AO'}, 
        {desc: 'Anguilla', code: 'AI'}, 
        {desc: 'Antarctica', code: 'AQ'}, 
        {desc: 'Antigua and Barbuda', code: 'AG'}, 
        {desc: 'Argentina', code: 'AR'}, 
        {desc: 'Armenia', code: 'AM'}, 
        {desc: 'Aruba', code: 'AW'}, 
        {desc: 'Australia', code: 'AU'}, 
        {desc: 'Austria', code: 'AT'}, 
        {desc: 'Azerbaijan', code: 'AZ'}, 
        {desc: 'Bahamas', code: 'BS'}, 
        {desc: 'Bahrain', code: 'BH'}, 
        {desc: 'Bangladesh', code: 'BD'}, 
        {desc: 'Barbados', code: 'BB'}, 
        {desc: 'Belarus', code: 'BY'}, 
        {desc: 'Belgium', code: 'BE'}, 
        {desc: 'Belize', code: 'BZ'}, 
        {desc: 'Benin', code: 'BJ'}, 
        {desc: 'Bermuda', code: 'BM'}, 
        {desc: 'Bhutan', code: 'BT'}, 
        {desc: 'Bolivia', code: 'BO'}, 
        {desc: 'Bosnia and Herzegovina', code: 'BA'}, 
        {desc: 'Botswana', code: 'BW'}, 
        {desc: 'Bouvet Island', code: 'BV'}, 
        {desc: 'Brazil', code: 'BR'}, 
        {desc: 'British Indian Ocean Territory', code: 'IO'}, 
        {desc: 'Brunei Darussalam', code: 'BN'}, 
        {desc: 'Bulgaria', code: 'BG'}, 
        {desc: 'Burkina Faso', code: 'BF'}, 
        {desc: 'Burundi', code: 'BI'}, 
        {desc: 'Cambodia', code: 'KH'}, 
        {desc: 'Cameroon', code: 'CM'}, 
        {desc: 'Canada', code: 'CA'}, 
        {desc: 'Cape Verde', code: 'CV'}, 
        {desc: 'Cayman Islands', code: 'KY'}, 
        {desc: 'Central African Republic', code: 'CF'}, 
        {desc: 'Chad', code: 'TD'}, 
        {desc: 'Chile', code: 'CL'}, 
        {desc: 'China', code: 'CN'}, 
        {desc: 'Christmas Island', code: 'CX'}, 
        {desc: 'Cocos (Keeling) Islands', code: 'CC'}, 
        {desc: 'Colombia', code: 'CO'}, 
        {desc: 'Comoros', code: 'KM'}, 
        {desc: 'Congo', code: 'CG'}, 
        {desc: 'Congo, The Democratic Republic of the', code: 'CD'}, 
        {desc: 'Cook Islands', code: 'CK'}, 
        {desc: 'Costa Rica', code: 'CR'}, 
        {desc: 'Cote D\'Ivoire', code: 'CI'}, 
        {desc: 'Croatia', code: 'HR'}, 
        {desc: 'Cuba', code: 'CU'}, 
        {desc: 'Cyprus', code: 'CY'}, 
        {desc: 'Czech Republic', code: 'CZ'}, 
        {desc: 'Denmark', code: 'DK'}, 
        {desc: 'Djibouti', code: 'DJ'}, 
        {desc: 'Dominica', code: 'DM'}, 
        {desc: 'Dominican Republic', code: 'DO'}, 
        {desc: 'Ecuador', code: 'EC'}, 
        {desc: 'Egypt', code: 'EG'}, 
        {desc: 'El Salvador', code: 'SV'}, 
        {desc: 'Equatorial Guinea', code: 'GQ'}, 
        {desc: 'Eritrea', code: 'ER'}, 
        {desc: 'Estonia', code: 'EE'}, 
        {desc: 'Ethiopia', code: 'ET'}, 
        {desc: 'Falkland Islands (Malvinas)', code: 'FK'}, 
        {desc: 'Faroe Islands', code: 'FO'}, 
        {desc: 'Fiji', code: 'FJ'}, 
        {desc: 'Finland', code: 'FI'}, 
        {desc: 'France', code: 'FR'}, 
        {desc: 'French Guiana', code: 'GF'}, 
        {desc: 'French Polynesia', code: 'PF'}, 
        {desc: 'French Southern Territories', code: 'TF'}, 
        {desc: 'Gabon', code: 'GA'}, 
        {desc: 'Gambia', code: 'GM'}, 
        {desc: 'Georgia', code: 'GE'}, 
        {desc: 'Germany', code: 'DE'}, 
        {desc: 'Ghana', code: 'GH'}, 
        {desc: 'Gibraltar', code: 'GI'}, 
        {desc: 'Greece', code: 'GR'}, 
        {desc: 'Greenland', code: 'GL'}, 
        {desc: 'Grenada', code: 'GD'}, 
        {desc: 'Guadeloupe', code: 'GP'}, 
        {desc: 'Guam', code: 'GU'}, 
        {desc: 'Guatemala', code: 'GT'}, 
        {desc: 'Guernsey', code: 'GG'}, 
        {desc: 'Guinea', code: 'GN'}, 
        {desc: 'Guinea-Bissau', code: 'GW'}, 
        {desc: 'Guyana', code: 'GY'}, 
        {desc: 'Haiti', code: 'HT'}, 
        {desc: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
        {desc: 'Holy See (Vatican City State)', code: 'VA'}, 
        {desc: 'Honduras', code: 'HN'}, 
        {desc: 'Hong Kong', code: 'HK'}, 
        {desc: 'Hungary', code: 'HU'}, 
        {desc: 'Iceland', code: 'IS'}, 
        {desc: 'India', code: 'IN'}, 
        {desc: 'Indonesia', code: 'ID'}, 
        {desc: 'Iran, Islamic Republic Of', code: 'IR'}, 
        {desc: 'Iraq', code: 'IQ'}, 
        {desc: 'Ireland', code: 'IE'}, 
        {desc: 'Isle of Man', code: 'IM'}, 
        {desc: 'Israel', code: 'IL'}, 
        {desc: 'Italy', code: 'IT'}, 
        {desc: 'Jamaica', code: 'JM'}, 
        {desc: 'Japan', code: 'JP'}, 
        {desc: 'Jersey', code: 'JE'}, 
        {desc: 'Jordan', code: 'JO'}, 
        {desc: 'Kazakhstan', code: 'KZ'}, 
        {desc: 'Kenya', code: 'KE'}, 
        {desc: 'Kiribati', code: 'KI'}, 
        {desc: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
        {desc: 'Korea, Republic of', code: 'KR'}, 
        {desc: 'Kuwait', code: 'KW'}, 
        {desc: 'Kyrgyzstan', code: 'KG'}, 
        {desc: 'Lao People\'S Democratic Republic', code: 'LA'}, 
        {desc: 'Latvia', code: 'LV'}, 
        {desc: 'Lebanon', code: 'LB'}, 
        {desc: 'Lesotho', code: 'LS'}, 
        {desc: 'Liberia', code: 'LR'}, 
        {desc: 'Libyan Arab Jamahiriya', code: 'LY'}, 
        {desc: 'Liechtenstein', code: 'LI'}, 
        {desc: 'Lithuania', code: 'LT'}, 
        {desc: 'Luxembourg', code: 'LU'}, 
        {desc: 'Macao', code: 'MO'}, 
        {desc: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
        {desc: 'Madagascar', code: 'MG'}, 
        {desc: 'Malawi', code: 'MW'}, 
        {desc: 'Malaysia', code: 'MY'}, 
        {desc: 'Maldives', code: 'MV'}, 
        {desc: 'Mali', code: 'ML'}, 
        {desc: 'Malta', code: 'MT'}, 
        {desc: 'Marshall Islands', code: 'MH'}, 
        {desc: 'Martinique', code: 'MQ'}, 
        {desc: 'Mauritania', code: 'MR'}, 
        {desc: 'Mauritius', code: 'MU'}, 
        {desc: 'Mayotte', code: 'YT'}, 
        {desc: 'Mexico', code: 'MX'}, 
        {desc: 'Micronesia, Federated States of', code: 'FM'}, 
        {desc: 'Moldova, Republic of', code: 'MD'}, 
        {desc: 'Monaco', code: 'MC'}, 
        {desc: 'Mongolia', code: 'MN'}, 
        {desc: 'Montserrat', code: 'MS'}, 
        {desc: 'Morocco', code: 'MA'}, 
        {desc: 'Mozambique', code: 'MZ'}, 
        {desc: 'Myanmar', code: 'MM'}, 
        {desc: 'Namibia', code: 'NA'}, 
        {desc: 'Nauru', code: 'NR'}, 
        {desc: 'Nepal', code: 'NP'}, 
        {desc: 'Netherlands', code: 'NL'}, 
        {desc: 'Netherlands Antilles', code: 'AN'}, 
        {desc: 'New Caledonia', code: 'NC'}, 
        {desc: 'New Zealand', code: 'NZ'}, 
        {desc: 'Nicaragua', code: 'NI'}, 
        {desc: 'Niger', code: 'NE'}, 
        {desc: 'Nigeria', code: 'NG'}, 
        {desc: 'Niue', code: 'NU'}, 
        {desc: 'Norfolk Island', code: 'NF'}, 
        {desc: 'Northern Mariana Islands', code: 'MP'}, 
        {desc: 'Norway', code: 'NO'}, 
        {desc: 'Oman', code: 'OM'}, 
        {desc: 'Pakistan', code: 'PK'}, 
        {desc: 'Palau', code: 'PW'}, 
        {desc: 'Palestinian Territory, Occupied', code: 'PS'}, 
        {desc: 'Panama', code: 'PA'}, 
        {desc: 'Papua New Guinea', code: 'PG'}, 
        {desc: 'Paraguay', code: 'PY'}, 
        {desc: 'Peru', code: 'PE'}, 
        {desc: 'Philippines', code: 'PH'}, 
        {desc: 'Pitcairn', code: 'PN'}, 
        {desc: 'Poland', code: 'PL'}, 
        {desc: 'Portugal', code: 'PT'}, 
        {desc: 'Puerto Rico', code: 'PR'}, 
        {desc: 'Qatar', code: 'QA'}, 
        {desc: 'Reunion', code: 'RE'}, 
        {desc: 'Romania', code: 'RO'}, 
        {desc: 'Russian Federation', code: 'RU'}, 
        {desc: 'RWANDA', code: 'RW'}, 
        {desc: 'Saint Helena', code: 'SH'}, 
        {desc: 'Saint Kitts and Nevis', code: 'KN'}, 
        {desc: 'Saint Lucia', code: 'LC'}, 
        {desc: 'Saint Pierre and Miquelon', code: 'PM'}, 
        {desc: 'Saint Vincent and the Grenadines', code: 'VC'}, 
        {desc: 'Samoa', code: 'WS'}, 
        {desc: 'San Marino', code: 'SM'}, 
        {desc: 'Sao Tome and Principe', code: 'ST'}, 
        {desc: 'Saudi Arabia', code: 'SA'}, 
        {desc: 'Senegal', code: 'SN'}, 
        {desc: 'Serbia and Montenegro', code: 'CS'}, 
        {desc: 'Seychelles', code: 'SC'}, 
        {desc: 'Sierra Leone', code: 'SL'}, 
        {desc: 'Singapore', code: 'SG'}, 
        {desc: 'Slovakia', code: 'SK'}, 
        {desc: 'Slovenia', code: 'SI'}, 
        {desc: 'Solomon Islands', code: 'SB'}, 
        {desc: 'Somalia', code: 'SO'}, 
        {desc: 'South Africa', code: 'ZA'}, 
        {desc: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
        {desc: 'Spain', code: 'ES'}, 
        {desc: 'Sri Lanka', code: 'LK'}, 
        {desc: 'Sudan', code: 'SD'}, 
        {desc: 'Suridesc', code: 'SR'}, 
        {desc: 'Svalbard and Jan Mayen', code: 'SJ'}, 
        {desc: 'Swaziland', code: 'SZ'}, 
        {desc: 'Sweden', code: 'SE'}, 
        {desc: 'Switzerland', code: 'CH'}, 
        {desc: 'Syrian Arab Republic', code: 'SY'}, 
        {desc: 'Taiwan, Province of China', code: 'TW'}, 
        {desc: 'Tajikistan', code: 'TJ'}, 
        {desc: 'Tanzania, United Republic of', code: 'TZ'}, 
        {desc: 'Thailand', code: 'TH'}, 
        {desc: 'Timor-Leste', code: 'TL'}, 
        {desc: 'Togo', code: 'TG'}, 
        {desc: 'Tokelau', code: 'TK'}, 
        {desc: 'Tonga', code: 'TO'}, 
        {desc: 'Trinidad and Tobago', code: 'TT'}, 
        {desc: 'Tunisia', code: 'TN'}, 
        {desc: 'Turkey', code: 'TR'}, 
        {desc: 'Turkmenistan', code: 'TM'}, 
        {desc: 'Turks and Caicos Islands', code: 'TC'}, 
        {desc: 'Tuvalu', code: 'TV'}, 
        {desc: 'Uganda', code: 'UG'}, 
        {desc: 'Ukraine', code: 'UA'}, 
        {desc: 'United Arab Emirates', code: 'AE'}, 
        {desc: 'United Kingdom', code: 'GB'}, 
        {desc: 'United States', code: 'US'}, 
        {desc: 'United States Minor Outlying Islands', code: 'UM'}, 
        {desc: 'Uruguay', code: 'UY'}, 
        {desc: 'Uzbekistan', code: 'UZ'}, 
        {desc: 'Vanuatu', code: 'VU'}, 
        {desc: 'Venezuela', code: 'VE'}, 
        {desc: 'Viet Nam', code: 'VN'}, 
        {desc: 'Virgin Islands, British', code: 'VG'}, 
        {desc: 'Virgin Islands, U.S.', code: 'VI'}, 
        {desc: 'Wallis and Futuna', code: 'WF'}, 
        {desc: 'Western Sahara', code: 'EH'}, 
        {desc: 'Yemen', code: 'YE'}, 
        {desc: 'Zambia', code: 'ZM'}, 
        {desc: 'Zimbabwe', code: 'ZW'} 
      ];

}