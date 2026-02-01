export type City = {
  city: string;
  state: string;
  slug: string;
  tier: number;
  active: boolean;
};

export const cities: City[] = [
  { city: "New York", state: "NY", slug: "new-york", tier: 1, active: true },
  { city: "Los Angeles", state: "CA", slug: "los-angeles", tier: 1, active: true },
  { city: "Chicago", state: "IL", slug: "chicago", tier: 1, active: true },
  { city: "Houston", state: "TX", slug: "houston", tier: 1, active: true },
  { city: "Phoenix", state: "AZ", slug: "phoenix", tier: 1, active: true },
  { city: "Philadelphia", state: "PA", slug: "philadelphia", tier: 1, active: true },
  { city: "San Antonio", state: "TX", slug: "san-antonio", tier: 1, active: true },
  { city: "San Diego", state: "CA", slug: "san-diego", tier: 1, active: true },
  { city: "Dallas", state: "TX", slug: "dallas", tier: 1, active: true },
  { city: "San Jose", state: "CA", slug: "san-jose", tier: 1, active: true },
  { city: "Austin", state: "TX", slug: "austin", tier: 1, active: true },
  { city: "Seattle", state: "WA", slug: "seattle", tier: 1, active: true },
  { city: "Denver", state: "CO", slug: "denver", tier: 1, active: true },
  { city: "Boston", state: "MA", slug: "boston", tier: 1, active: true },
  { city: "Atlanta", state: "GA", slug: "atlanta", tier: 1, active: true },
  { city: "Miami", state: "FL", slug: "miami", tier: 1, active: true },
  { city: "Orlando", state: "FL", slug: "orlando", tier: 1, active: true },
  { city: "Tampa", state: "FL", slug: "tampa", tier: 1, active: true },
  { city: "Jacksonville", state: "FL", slug: "jacksonville", tier: 1, active: true },
  { city: "Fort Lauderdale", state: "FL", slug: "fort-lauderdale", tier: 1, active: true },

  { city: "Las Vegas", state: "NV", slug: "las-vegas", tier: 1, active: true },
  { city: "Riverside", state: "CA", slug: "riverside", tier: 1, active: true },
  { city: "San Bernardino", state: "CA", slug: "san-bernardino", tier: 1, active: true },
  { city: "Sacramento", state: "CA", slug: "sacramento", tier: 1, active: true },
  { city: "Fresno", state: "CA", slug: "fresno", tier: 1, active: true },
  { city: "Bakersfield", state: "CA", slug: "bakersfield", tier: 1, active: true },

  { city: "Portland", state: "OR", slug: "portland", tier: 1, active: true },
  { city: "San Francisco", state: "CA", slug: "san-francisco", tier: 1, active: true },
  { city: "Oakland", state: "CA", slug: "oakland", tier: 1, active: true },
  { city: "Berkeley", state: "CA", slug: "berkeley", tier: 1, active: true },

  { city: "Minneapolis", state: "MN", slug: "minneapolis", tier: 1, active: true },
  { city: "St Paul", state: "MN", slug: "st-paul", tier: 1, active: true },
  { city: "Milwaukee", state: "WI", slug: "milwaukee", tier: 1, active: true },
  { city: "Madison", state: "WI", slug: "madison", tier: 1, active: true },

  { city: "Detroit", state: "MI", slug: "detroit", tier: 1, active: true },
  { city: "Ann Arbor", state: "MI", slug: "ann-arbor", tier: 1, active: true },
  { city: "Grand Rapids", state: "MI", slug: "grand-rapids", tier: 1, active: true },

  { city: "Cleveland", state: "OH", slug: "cleveland", tier: 1, active: true },
  { city: "Columbus", state: "OH", slug: "columbus", tier: 1, active: true },
  { city: "Cincinnati", state: "OH", slug: "cincinnati", tier: 1, active: true },

  { city: "Indianapolis", state: "IN", slug: "indianapolis", tier: 1, active: true },
  { city: "Louisville", state: "KY", slug: "louisville", tier: 1,
  active: true },

  { city: "Nashville", state: "TN", slug: "nashville", tier: 1, active: true },
  { city: "Memphis", state: "TN", slug: "memphis", tier: 1, active: true },
  { city: "Knoxville", state: "TN", slug: "knoxville", tier: 1, active: true },

  { city: "Charlotte", state: "NC", slug: "charlotte", tier: 1, active: true },
  { city: "Raleigh", state: "NC", slug: "raleigh", tier: 1, active: true },
  { city: "Durham", state: "NC", slug: "durham", tier: 1, active: true },

  { city: "Charleston", state: "SC", slug: "charleston", tier: 1, active: true },
  { city: "Columbia", state: "SC", slug: "columbia-sc", tier: 1, active: true },

  { city: "New Orleans", state: "LA", slug: "new-orleans", tier: 1, active: true },
  { city: "Baton Rouge", state: "LA", slug: "baton-rouge", tier: 1, active: true },

  { city: "Kansas City", state: "MO", slug: "kansas-city", tier: 1, active: true },
  { city: "St Louis", state: "MO", slug: "st-louis", tier: 1, active: true },

  { city: "Oklahoma City", state: "OK", slug: "oklahoma-city", tier: 1, active: true },
  { city: "Tulsa", state: "OK", slug: "tulsa", tier: 1, active: true },

  { city: "Albuquerque", state: "NM", slug: "albuquerque", tier: 1, active: true },

  { city: "Salt Lake City", state: "UT", slug: "salt-lake-city", tier: 1, active: true },
  { city: "Provo", state: "UT", slug: "provo", tier: 1, active: true },

  { city: "Boise", state: "ID", slug: "boise", tier: 1, active: true },
  { city: "Spokane", state: "WA", slug: "spokane", tier: 1, active: true },

{ city: "Reno", state: "NV", slug: "reno", tier: 2, active: true },
{ city: "Santa Rosa", state: "CA", slug: "santa-rosa", tier: 2, active: true },
{ city: "Modesto", state: "CA", slug: "modesto", tier: 2, active: true },
{ city: "Stockton", state: "CA", slug: "stockton", tier: 2, active: true },
{ city: "Visalia", state: "CA", slug: "visalia", tier: 2, active: true },
{ city: "Chico", state: "CA", slug: "chico", tier: 2, active: true },
{ city: "Yuba City", state: "CA", slug: "yuba-city", tier: 2, active: true },

{ city: "Spokane Valley", state: "WA", slug: "spokane-valley", tier: 2, active: true },
{ city: "Yakima", state: "WA", slug: "yakima", tier: 2, active: true },
{ city: "Kennewick", state: "WA", slug: "kennewick", tier: 2, active: true },
{ city: "Pasco", state: "WA", slug: "pasco", tier: 2, active: true },
{ city: "Walla Walla", state: "WA", slug: "walla-walla", tier: 2, active: true },
{ city: "Bellingham", state: "WA", slug: "bellingham", tier: 2, active: true },

{ city: "Salem", state: "OR", slug: "salem-or", tier: 2, active: true },
{ city: "Eugene", state: "OR", slug: "eugene", tier: 2, active: true },
{ city: "Corvallis", state: "OR", slug: "corvallis", tier: 2, active: true },
{ city: "Medford", state: "OR", slug: "medford", tier: 2, active: true },
{ city: "Grants Pass", state: "OR", slug: "grants-pass", tier: 2, active: true },

{ city: "Bozeman", state: "MT", slug: "bozeman", tier: 2, active: true },
{ city: "Missoula", state: "MT", slug: "missoula", tier: 2, active: true },
{ city: "Billings", state: "MT", slug: "billings", tier: 2, active: true },

{ city: "Idaho Falls", state: "ID", slug: "idaho-falls", tier: 2, active: true },
{ city: "Twin Falls", state: "ID", slug: "twin-falls", tier: 2, active: true },
{ city: "Pocatello", state: "ID", slug: "pocatello", tier: 2, active: true },

{ city: "Fort Collins", state: "CO", slug: "fort-collins", tier: 2, active: true },
{ city: "Loveland", state: "CO", slug: "loveland", tier: 2, active: true },
{ city: "Greeley", state: "CO", slug: "greeley", tier: 2, active: true },
{ city: "Pueblo", state: "CO", slug: "pueblo", tier: 2, active: true },
{ city: "Grand Junction", state: "CO", slug: "grand-junction", tier: 2, active: true },

{ city: "Rapid City", state: "SD", slug: "rapid-city", tier: 2, active: true },
{ city: "Sioux Falls", state: "SD", slug: "sioux-falls", tier: 2, active: true },

{ city: "Fargo", state: "ND", slug: "fargo", tier: 2, active: true },
{ city: "Bismarck", state: "ND", slug: "bismarck", tier: 2, active: true },

{ city: "Des Moines", state: "IA", slug: "des-moines", tier: 2, active: true },
{ city: "Cedar Rapids", state: "IA", slug: "cedar-rapids", tier: 2, active: true },
{ city: "Dubuque", state: "IA", slug: "dubuque", tier: 2, active: true },

{ city: "Omaha", state: "NE", slug: "omaha", tier: 2, active: true },
{ city: "Lincoln", state: "NE", slug: "lincoln-ne", tier: 2, active: true },

{ city: "Green Bay", state: "WI", slug: "green-bay", tier: 2, active: true },
{ city: "Appleton", state: "WI", slug: "appleton", tier: 2, active: true },
{ city: "Eau Claire", state: "WI", slug: "eau-claire", tier: 2, active: true },
{ city: "La Crosse", state: "WI", slug: "la-crosse", tier: 2, active: true },

{ city: "Kalamazoo", state: "MI", slug: "kalamazoo", tier: 2, active: true },
{ city: "Battle Creek", state: "MI", slug: "battle-creek", tier: 2, active: true },
{ city: "Saginaw", state: "MI", slug: "saginaw", tier: 2, active: true },
{ city: "Bay City", state: "MI", slug: "bay-city", tier: 2, active: true },
{ city: "Traverse City", state: "MI", slug: "traverse-city", tier: 2, active: true },

{ city: "Akron", state: "OH", slug: "akron", tier: 2, active: true },
{ city: "Canton", state: "OH", slug: "canton", tier: 2, active: true },
{ city: "Youngstown", state: "OH", slug: "youngstown", tier: 2, active: true },

{ city: "Evansville", state: "IN", slug: "evansville", tier: 2, active: true },
{ city: "Terre Haute", state: "IN", slug: "terre-haute", tier: 2, active: true },

{ city: "Bowling Green", state: "KY", slug: "bowling-green", tier: 2, active: true },
{ city: "Owensboro", state: "KY", slug: "owensboro", tier: 2, active: true },

{ city: "Chattanooga", state: "TN", slug: "chattanooga", tier: 2, active: true },
{ city: "Johnson City", state: "TN", slug: "johnson-city", tier: 2, active: true },
{ city: "Kingsport", state: "TN", slug: "kingsport", tier: 2, active: true },

{ city: "Huntsville", state: "AL", slug: "huntsville", tier: 2, active: true },
{ city: "Decatur", state: "AL", slug: "decatur-al", tier: 2, active: true },
{ city: "Dothan", state: "AL", slug: "dothan", tier: 2, active: true },

{ city: "Gulfport", state: "MS", slug: "gulfport", tier: 2, active: true },
{ city: "Biloxi", state: "MS", slug: "biloxi", tier: 2, active: true },

{ city: "Lake Charles", state: "LA", slug: "lake-charles", tier: 2, active: true },
{ city: "Lafayette", state: "LA", slug: "lafayette-la", tier: 2, active: true },

{ city: "Beaumont", state: "TX", slug: "beaumont", tier: 2, active: true },
{ city: "Port Arthur", state: "TX", slug: "port-arthur", tier: 2, active: true },
{ city: "Victoria", state: "TX", slug: "victoria-tx", tier: 2, active: true },

{ city: "Fort Myers", state: "FL", slug: "fort-myers", tier: 2, active: true },
{ city: "Cape Coral", state: "FL", slug: "cape-coral", tier: 2, active: true },
{ city: "Naples", state: "FL", slug: "naples", tier: 2, active: true },
{ city: "Port St Lucie", state: "FL", slug: "port-st-lucie", tier: 2, active: true },
{ city: "Palm Bay", state: "FL", slug: "palm-bay", tier: 2, active: true },

{ city: "Peoria", state: "IL", slug: "peoria-il", tier: 2, active: true },
{ city: "Bloomington", state: "IL", slug: "bloomington-il", tier: 2, active: true },
{ city: "Champaign", state: "IL", slug: "champaign", tier: 2, active: true },
{ city: "Decatur", state: "IL", slug: "decatur-il", tier: 2, active: true },
{ city: "Rockford", state: "IL", slug: "rockford", tier: 2, active: true },

{ city: "Fort Wayne", state: "IN", slug: "fort-wayne", tier: 2, active: true },
{ city: "South Bend", state: "IN", slug: "south-bend", tier: 2, active: true },
{ city: "Elkhart", state: "IN", slug: "elkhart", tier: 2, active: true },
{ city: "Muncie", state: "IN", slug: "muncie", tier: 2, active: true },

{ city: "Toledo", state: "OH", slug: "toledo", tier: 2, active: true },
{ city: "Lima", state: "OH", slug: "lima-oh", tier: 2, active: true },
{ city: "Mansfield", state: "OH", slug: "mansfield-oh", tier: 2, active: true },
{ city: "Findlay", state: "OH", slug: "findlay", tier: 2, active: true },

{ city: "Wheeling", state: "WV", slug: "wheeling", tier: 2, active: true },
{ city: "Charleston", state: "WV", slug: "charleston-wv", tier: 2, active: true },
{ city: "Huntington", state: "WV", slug: "huntington-wv", tier: 2, active: true },

{ city: "Roanoke", state: "VA", slug: "roanoke", tier: 2, active: true },
{ city: "Lynchburg", state: "VA", slug: "lynchburg", tier: 2, active: true },
{ city: "Danville", state: "VA", slug: "danville-va", tier: 2, active: true },
{ city: "Winchester", state: "VA", slug: "winchester-va", tier: 2, active: true },

{ city: "Fredericksburg", state: "VA", slug: "fredericksburg-va", tier: 2, active: true },
{ city: "Staunton", state: "VA", slug: "staunton", tier: 2, active: true },

{ city: "Hagerstown", state: "MD", slug: "hagerstown", tier: 2, active: true },
{ city: "Cumberland", state: "MD", slug: "cumberland-md", tier: 2, active: true },

{ city: "Dover", state: "DE", slug: "dover-de", tier: 2, active: true },

{ city: "Poughkeepsie", state: "NY", slug: "poughkeepsie", tier: 2, active: true },
{ city: "Newburgh", state: "NY", slug: "newburgh", tier: 2, active: true },
{ city: "Utica", state: "NY", slug: "utica", tier: 2, active: true },
{ city: "Watertown", state: "NY", slug: "watertown-ny", tier: 2, active: true },

{ city: "New Bedford", state: "MA", slug: "new-bedford", tier: 2, active: true },
{ city: "Fall River", state: "MA", slug: "fall-river", tier: 2, active: true },
{ city: "Pittsfield", state: "MA", slug: "pittsfield", tier: 2, active: true },

{ city: "New London", state: "CT", slug: "new-london", tier: 2, active: true },
{ city: "Norwich", state: "CT", slug: "norwich-ct", tier: 2, active: true },

{ city: "Lewiston", state: "ME", slug: "lewiston-me", tier: 2, active: true },
{ city: "Presque Isle", state: "ME", slug: "presque-isle", tier: 2, active: true },

{ city: "Florence", state: "SC", slug: "florence-sc", tier: 2, active: true },
{ city: "Sumter", state: "SC", slug: "sumter", tier: 2, active: true },

{ city: "Valdosta", state: "GA", slug: "valdosta", tier: 2, active: true },
{ city: "Tifton", state: "GA", slug: "tifton", tier: 2, active: true },

{ city: "Gadsden", state: "AL", slug: "gadsden", tier: 2, active: true },
{ city: "Anniston", state: "AL", slug: "anniston", tier: 2, active: true },

{ city: "Texarkana", state: "TX", slug: "texarkana", tier: 2, active: true },
{ city: "Longview", state: "TX", slug: "longview-tx", tier: 2, active: true },
{ city: "Tyler", state: "TX", slug: "tyler", tier: 2, active: true },

{ city: "Hattiesburg", state: "MS", slug: "hattiesburg", tier: 2, active: true },
{ city: "Meridian", state: "MS", slug: "meridian-ms", tier: 2, active: true },
{ city: "Yakima", state: "WA", slug: "yakima-wa", tier: 3, active: true },
{ city: "Bellingham", state: "WA", slug: "bellingham-wa", tier: 3, active: true },
{ city: "Longview", state: "WA", slug: "longview-wa", tier: 3, active: true },
{ city: "Wenatchee", state: "WA", slug: "wenatchee-wa", tier: 3, active: true },
{ city: "Mount Vernon", state: "WA", slug: "mount-vernon-wa", tier: 3, active: true },

{ city: "Medford", state: "OR", slug: "medford-or", tier: 3, active: true },
{ city: "Grants Pass", state: "OR", slug: "grants-pass-or", tier: 3, active: true },
{ city: "Roseburg", state: "OR", slug: "roseburg-or", tier: 3, active: true },
{ city: "Pendleton", state: "OR", slug: "pendleton-or", tier: 3, active: true },

{ city: "Redding", state: "CA", slug: "redding-ca", tier: 3, active: true },
{ city: "Chico", state: "CA", slug: "chico-ca", tier: 3, active: true },
{ city: "Yuba City", state: "CA", slug: "yuba-city-ca", tier: 3, active: true },
{ city: "Visalia", state: "CA", slug: "visalia-ca", tier: 3, active: true },
{ city: "Hanford", state: "CA", slug: "hanford-ca", tier: 3, active: true },
{ city: "Madera", state: "CA", slug: "madera-ca", tier: 3, active: true },
{ city: "Merced", state: "CA", slug: "merced-ca", tier: 3, active: true },
{ city: "Salinas", state: "CA", slug: "salinas-ca", tier: 3, active: true },
{ city: "San Luis Obispo", state: "CA", slug: "san-luis-obispo-ca", tier: 3, active: true },
{ city: "Santa Maria", state: "CA", slug: "santa-maria-ca", tier: 3, active: true },

{ city: "Yuma", state: "AZ", slug: "yuma-az", tier: 3, active: true },
{ city: "Prescott", state: "AZ", slug: "prescott-az", tier: 3, active: true },
{ city: "Flagstaff", state: "AZ", slug: "flagstaff-az", tier: 3, active: true },
{ city: "Sierra Vista", state: "AZ", slug: "sierra-vista-az", tier: 3, active: true },

{ city: "St. George", state: "UT", slug: "st-george-ut", tier: 3, active: true },
{ city: "Logan", state: "UT", slug: "logan-ut", tier: 3, active: true },
{ city: "Price", state: "UT", slug: "price-ut", tier: 3, active: true },

{ city: "Grand Junction", state: "CO", slug: "grand-junction-co", tier: 3, active: true },
{ city: "Montrose", state: "CO", slug: "montrose-co", tier: 3, active: true },
{ city: "Pueblo", state: "CO", slug: "pueblo-co", tier: 3, active: true },
{ city: "Greeley", state: "CO", slug: "greeley-co", tier: 3, active: true },

{ city: "Cheyenne", state: "WY", slug: "cheyenne-wy", tier: 3, active: true },
{ city: "Casper", state: "WY", slug: "casper-wy", tier: 3, active: true },

{ city: "Farmington", state: "NM", slug: "farmington-nm", tier: 3, active: true },
{ city: "Roswell", state: "NM", slug: "roswell-nm", tier: 3, active: true },
{ city: "Clovis", state: "NM", slug: "clovis-nm", tier: 3, active: true },

{ city: "Amarillo", state: "TX", slug: "amarillo-tx", tier: 3, active: true },
{ city: "Abilene", state: "TX", slug: "abilene-tx", tier: 3, active: true },
{ city: "Victoria", state: "TX", slug: "victoria-tx", tier: 3, active: true },
{ city: "Texarkana", state: "TX", slug: "texarkana-tx", tier: 3, active: true },
{ city: "Sherman", state: "TX", slug: "sherman-tx", tier: 3, active: true },
{ city: "Denison", state: "TX", slug: "denison-tx", tier: 3, active: true },

{ city: "Lawton", state: "OK", slug: "lawton-ok", tier: 3, active: true },
{ city: "Stillwater", state: "OK", slug: "stillwater-ok", tier: 3, active: true },
{ city: "Muskogee", state: "OK", slug: "muskogee-ok", tier: 3, active: true },
{ city: "Bartlesville", state: "OK", slug: "bartlesville-ok", tier: 3, active: true },

{ city: "Garden City", state: "KS", slug: "garden-city-ks", tier: 3, active: true },
{ city: "Dodge City", state: "KS", slug: "dodge-city-ks", tier: 3, active: true },
{ city: "Hays", state: "KS", slug: "hays-ks", tier: 3, active: true },
{ city: "Grand Island", state: "NE", slug: "grand-island-ne", tier: 3, active: true },
{ city: "Kearney", state: "NE", slug: "kearney-ne", tier: 3, active: true },
{ city: "North Platte", state: "NE", slug: "north-platte-ne", tier: 3, active: true },

{ city: "Ames", state: "IA", slug: "ames-ia", tier: 3, active: true },
{ city: "Fort Dodge", state: "IA", slug: "fort-dodge-ia", tier: 3, active: true },
{ city: "Ottumwa", state: "IA", slug: "ottumwa-ia", tier: 3, active: true },
{ city: "Burlington", state: "IA", slug: "burlington-ia", tier: 3, active: true },

{ city: "La Crosse", state: "WI", slug: "la-crosse-wi", tier: 3, active: true },
{ city: "Eau Claire", state: "WI", slug: "eau-claire-wi", tier: 3, active: true },
{ city: "Stevens Point", state: "WI", slug: "stevens-point-wi", tier: 3, active: true },
{ city: "Wausau", state: "WI", slug: "wausau-wi", tier: 3, active: true },

{ city: "Iron Mountain", state: "MI", slug: "iron-mountain-mi", tier: 3, active: true },
{ city: "Marquette", state: "MI", slug: "marquette-mi", tier: 3, active: true },
{ city: "Escanaba", state: "MI", slug: "escanaba-mi", tier: 3, active: true },

{ city: "Sandusky", state: "OH", slug: "sandusky-oh", tier: 3, active: true },
{ city: "Lima", state: "OH", slug: "lima-oh", tier: 3, active: true },
{ city: "Findlay", state: "OH", slug: "findlay-oh", tier: 3, active: true },
{ city: "Marion", state: "OH", slug: "marion-oh", tier: 3, active: true },
{ city: "Portsmouth", state: "OH", slug: "portsmouth-oh", tier: 3, active: true },

{ city: "Mansfield", state: "PA", slug: "mansfield-pa", tier: 3, active: true },
{ city: "Bradford", state: "PA", slug: "bradford-pa", tier: 3, active: true },
{ city: "Oil City", state: "PA", slug: "oil-city-pa", tier: 3, active: true },
{ city: "Meadville", state: "PA", slug: "meadville-pa", tier: 3, active: true },

{ city: "Hagerstown", state: "MD", slug: "hagerstown-md", tier: 3, active: true },
{ city: "Cumberland", state: "MD", slug: "cumberland-md", tier: 3, active: true },

{ city: "Beckley", state: "WV", slug: "beckley-wv", tier: 3, active: true },
{ city: "Bluefield", state: "WV", slug: "bluefield-wv", tier: 3, active: true },
{ city: "Parkersburg", state: "WV", slug: "parkersburg-wv", tier: 3, active: true },

{ city: "Danville", state: "VA", slug: "danville-va", tier: 3, active: true },
{ city: "Martinsville", state: "VA", slug: "martinsville-va", tier: 3, active: true },
{ city: "Abingdon", state: "VA", slug: "abingdon-va", tier: 3, active: true },

{ city: "Goldsboro", state: "NC", slug: "goldsboro-nc", tier: 3, active: true },
{ city: "Rocky Mount", state: "NC", slug: "rocky-mount-nc", tier: 3, active: true },
{ city: "Elizabeth City", state: "NC", slug: "elizabeth-city-nc", tier: 3, active: true },

{ city: "Florence", state: "SC", slug: "florence-sc", tier: 3, active: true },
{ city: "Orangeburg", state: "SC", slug: "orangeburg-sc", tier: 3, active: true },

{ city: "Statesboro", state: "GA", slug: "statesboro-ga", tier: 3, active: true },
{ city: "Valdosta", state: "GA", slug: "valdosta-ga", tier: 3, active: true },
{ city: "Albany", state: "GA", slug: "albany-ga", tier: 3, active: true },

{ city: "Dothan", state: "AL", slug: "dothan-al", tier: 3, active: true },
{ city: "Enterprise", state: "AL", slug: "enterprise-al", tier: 3, active: true },
{ city: "Bangor", state: "ME", slug: "bangor-me", tier: 3, active: true },
{ city: "Presque Isle", state: "ME", slug: "presque-isle-me", tier: 3, active: true },

{ city: "Berlin", state: "NH", slug: "berlin-nh", tier: 3, active: true },
{ city: "Claremont", state: "NH", slug: "claremont-nh", tier: 3, active: true },

{ city: "Rutland", state: "VT", slug: "rutland-vt", tier: 3, active: true },
{ city: "Barre", state: "VT", slug: "barre-vt", tier: 3, active: true },

{ city: "Plattsburgh", state: "NY", slug: "plattsburgh-ny", tier: 3, active: true },
{ city: "Watertown", state: "NY", slug: "watertown-ny", tier: 3, active: true },
{ city: "Jamestown", state: "NY", slug: "jamestown-ny", tier: 3, active: true },
{ city: "Ogdensburg", state: "NY", slug: "ogdensburg-ny", tier: 3, active: true },

{ city: "Norwich", state: "CT", slug: "norwich-ct", tier: 3, active: true },

{ city: "Pittsfield", state: "MA", slug: "pittsfield-ma", tier: 3, active: true },
{ city: "Greenfield", state: "MA", slug: "greenfield-ma", tier: 3, active: true },

{ city: "Johnstown", state: "PA", slug: "johnstown-pa", tier: 3, active: true },
{ city: "DuBois", state: "PA", slug: "dubois-pa", tier: 3, active: true },
{ city: "Indiana", state: "PA", slug: "indiana-pa", tier: 3, active: true },

{ city: "Cambridge", state: "OH", slug: "cambridge-oh", tier: 3, active: true },
{ city: "Zanesville", state: "OH", slug: "zanesville-oh", tier: 3, active: true },
{ city: "Tiffin", state: "OH", slug: "tiffin-oh", tier: 3, active: true },
{ city: "Ashtabula", state: "OH", slug: "ashtabula-oh", tier: 3, active: true },

{ city: "Richmond", state: "IN", slug: "richmond-in", tier: 3, active: true },
{ city: "Kokomo", state: "IN", slug: "kokomo-in", tier: 3, active: true },
{ city: "Marion", state: "IN", slug: "marion-in", tier: 3, active: true },
{ city: "Peru", state: "IN", slug: "peru-in", tier: 3, active: true },

{ city: "Owensboro", state: "KY", slug: "owensboro-ky", tier: 3, active: true },
{ city: "Hopkinsville", state: "KY", slug: "hopkinsville-ky", tier: 3, active: true },
{ city: "Ashland", state: "KY", slug: "ashland-ky", tier: 3, active: true },

{ city: "Paris", state: "TN", slug: "paris-tn", tier: 3, active: true },
{ city: "McMinnville", state: "TN", slug: "mcminnville-tn", tier: 3, active: true },
{ city: "Cookeville", state: "TN", slug: "cookeville-tn", tier: 3, active: true },
{ city: "Martin", state: "TN", slug: "martin-tn", tier: 3, active: true },

{ city: "Corinth", state: "MS", slug: "corinth-ms", tier: 3, active: true },
{ city: "Greenville", state: "MS", slug: "greenville-ms", tier: 3, active: true },

{ city: "El Dorado", state: "AR", slug: "el-dorado-ar", tier: 3, active: true },
{ city: "Forrest City", state: "AR", slug: "forrest-city-ar", tier: 3, active: true },

{ city: "Coffeyville", state: "KS", slug: "coffeyville-ks", tier: 3, active: true },
{ city: "Independence", state: "KS", slug: "independence-ks", tier: 3, active: true },

{ city: "McCook", state: "NE", slug: "mccook-ne", tier: 3, active: true },
{ city: "Scottsbluff", state: "NE", slug: "scottsbluff-ne", tier: 3, active: true },

{ city: "Pierre", state: "SD", slug: "pierre-sd", tier: 3, active: true },
{ city: "Brookings", state: "SD", slug: "brookings-sd", tier: 3, active: true },

{ city: "Jamestown", state: "ND", slug: "jamestown-nd", tier: 3, active: true },
{ city: "Minot", state: "ND", slug: "minot-nd", tier: 3, active: true },

{ city: "Kalispell", state: "MT", slug: "kalispell-mt", tier: 3, active: true },
{ city: "Helena", state: "MT", slug: "helena-mt", tier: 3, active: true },

{ city: "Riverton", state: "WY", slug: "riverton-wy", tier: 3, active: true },
{ city: "Rock Springs", state: "WY", slug: "rock-springs-wy", tier: 3, active: true },

{ city: "Durango", state: "CO", slug: "durango-co", tier: 3, active: true },
{ city: "Alamosa", state: "CO", slug: "alamosa-co", tier: 3, active: true },

{ city: "Gallup", state: "NM", slug: "gallup-nm", tier: 3, active: true },
{ city: "Silver City", state: "NM", slug: "silver-city-nm", tier: 3, active: true },

{ city: "Kingman", state: "AZ", slug: "kingman-az", tier: 3, active: true },
{ city: "Douglas", state: "AZ", slug: "douglas-az", tier: 3, active: true },

{ city: "Astoria", state: "OR", slug: "astoria-or", tier: 3, active: true },
{ city: "Coos Bay", state: "OR", slug: "coos-bay-or", tier: 3, active: true },

{ city: "Port Angeles", state: "WA", slug: "port-angeles-wa", tier: 3, active: true },
{ city: "Pullman", state: "WA", slug: "pullman-wa", tier: 3, active: true },

{ city: "Eureka", state: "CA", slug: "eureka-ca", tier: 3, active: true },
{ city: "Ukiah", state: "CA", slug: "ukiah-ca", tier: 3, active: true },
{ city: "Susanville", state: "CA", slug: "susanville-ca", tier: 3, active: true },
{ city: "Caribou", state: "ME", slug: "caribou-me", tier: 3, active: true },
{ city: "Houlton", state: "ME", slug: "houlton-me", tier: 3, active: true },

{ city: "Lebanon", state: "NH", slug: "lebanon-nh", tier: 3, active: true },
{ city: "Keene", state: "NH", slug: "keene-nh", tier: 3, active: true },

{ city: "Bennington", state: "VT", slug: "bennington-vt", tier: 3, active: true },
{ city: "St. Johnsbury", state: "VT", slug: "st-johnsbury-vt", tier: 3, active: true },

{ city: "Glens Falls", state: "NY", slug: "glens-falls-ny", tier: 3, active: true },
{ city: "Oneonta", state: "NY", slug: "oneonta-ny", tier: 3, active: true },
{ city: "Cortland", state: "NY", slug: "cortland-ny", tier: 3, active: true },
{ city: "Lockport", state: "NY", slug: "lockport-ny", tier: 3, active: true },

{ city: "Torrington", state: "CT", slug: "torrington-ct", tier: 3, active: true },

{ city: "North Adams", state: "MA", slug: "north-adams-ma", tier: 3, active: true },
{ city: "Gardner", state: "MA", slug: "gardner-ma", tier: 3, active: true },

{ city: "Lebanon", state: "PA", slug: "lebanon-pa", tier: 3, active: true },
{ city: "Sunbury", state: "PA", slug: "sunbury-pa", tier: 3, active: true },
{ city: "Clarion", state: "PA", slug: "clarion-pa", tier: 3, active: true },

{ city: "Mount Vernon", state: "OH", slug: "mount-vernon-oh", tier: 3, active: true },
{ city: "Wooster", state: "OH", slug: "wooster-oh", tier: 3, active: true },
{ city: "Bellefontaine", state: "OH", slug: "bellefontaine-oh", tier: 3, active: true },

{ city: "Logansport", state: "IN", slug: "logansport-in", tier: 3, active: true },
{ city: "Connersville", state: "IN", slug: "connersville-in", tier: 3, active: true },
{ city: "Huntington", state: "IN", slug: "huntington-in", tier: 3, active: true },

{ city: "Mayfield", state: "KY", slug: "mayfield-ky", tier: 3, active: true },
{ city: "Murray", state: "KY", slug: "murray-ky", tier: 3, active: true },

{ city: "Paris", state: "KY", slug: "paris-ky", tier: 3, active: true },

{ city: "Union City", state: "TN", slug: "union-city-tn", tier: 3, active: true },
{ city: "Athens", state: "TN", slug: "athens-tn", tier: 3, active: true },

{ city: "Grenada", state: "MS", slug: "grenada-ms", tier: 3, active: true },
{ city: "Cleveland", state: "MS", slug: "cleveland-ms", tier: 3, active: true },

{ city: "Hope", state: "AR", slug: "hope-ar", tier: 3, active: true },
{ city: "Batesville", state: "AR", slug: "batesville-ar", tier: 3, active: true },

{ city: "Ottawa", state: "KS", slug: "ottawa-ks", tier: 3, active: true },
{ city: "Iola", state: "KS", slug: "iola-ks", tier: 3, active: true },

{ city: "Alliance", state: "NE", slug: "alliance-ne", tier: 3, active: true },
{ city: "Broken Bow", state: "NE", slug: "broken-bow-ne", tier: 3, active: true },

{ city: "Mitchell", state: "SD", slug: "mitchell-sd", tier: 3, active: true },
{ city: "Yankton", state: "SD", slug: "yankton-sd", tier: 3, active: true },

{ city: "Williston", state: "ND", slug: "williston-nd", tier: 3, active: true },
{ city: "Devils Lake", state: "ND", slug: "devils-lake-nd", tier: 3, active: true },

{ city: "Lewistown", state: "MT", slug: "lewistown-mt", tier: 3, active: true },
{ city: "Miles City", state: "MT", slug: "miles-city-mt", tier: 3, active: true },

{ city: "Rawlins", state: "WY", slug: "rawlins-wy", tier: 3, active: true },
{ city: "Lander", state: "WY", slug: "lander-wy", tier: 3, active: true },

{ city: "Raton", state: "NM", slug: "raton-nm", tier: 3, active: true },
{ city: "Artesia", state: "NM", slug: "artesia-nm", tier: 3, active: true },

{ city: "Winslow", state: "AZ", slug: "winslow-az", tier: 3, active: true },
{ city: "Page", state: "AZ", slug: "page-az", tier: 3, active: true },

{ city: "The Dalles", state: "OR", slug: "the-dalles-or", tier: 3, active: true },
{ city: "Klamath Falls", state: "OR", slug: "klamath-falls-or", tier: 3, active: true },

{ city: "Ellensburg", state: "WA", slug: "ellensburg-wa", tier: 3, active: true },
{ city: "Shelton", state: "WA", slug: "shelton-wa", tier: 3, active: true },

{ city: "Red Bluff", state: "CA", slug: "red-bluff-ca", tier: 3, active: true },
{ city: "Truckee", state: "CA", slug: "truckee-ca", tier: 3, active: true }
];

