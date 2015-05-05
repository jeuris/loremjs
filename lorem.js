var Lorem;
(function() {

    //Create a class named Lorem and constructor
    Lorem = function() {
        //Default values.
        this.type = null;
        this.query = null;
        this.data = null;
    };
    //Static variables
    Lorem.IMAGE = 1;
    Lorem.TEXT = 2;
    Lorem.TYPE = {
        PARAGRAPH: 1,
        SENTENCE: 2,
        WORD: 3
    };
    //Words to create lorem ipsum text.
    Lorem.WORDS = [
        "lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "ut", "aliquam,", "purus", "sit", "amet", "luctus", "venenatis,", "lectus", "magna", "fringilla", "urna,", "porttitor", "rhoncus", "dolor", "purus", "non", "enim", "praesent", "elementum", "facilisis", "leo,", "vel", "fringilla", "est", "ullamcorper", "eget", "nulla", "facilisi", "etiam", "dignissim", "diam", "quis", "enim", "lobortis", "scelerisque", "fermentum", "dui", "faucibus", "in", "ornare", "quam", "viverra", "orci", "sagittis", "eu", "volutpat", "odio", "facilisis", "mauris", "sit", "amet", "massa", "vitae", "tortor", "condimentum", "lacinia", "quis", "vel", "eros", "donec", "ac", "odio", "tempor", "orci", "dapibus", "ultrices", "in", "iaculis", "nunc", "sed", "augue", "lacus,", "viverra", "vitae", "congue", "eu,", "consequat", "ac", "felis", "donec", "et", "odio", "pellentesque", "diam", "volutpat", "commodo", "sed", "egestas", "egestas", "fringilla", "phasellus", "faucibus", "scelerisque", "eleifend", "donec", "pretium", "vulputate", "sapien", "nec", "sagittis", "aliquam", "malesuada", "bibendum", "arcu", "vitae", "elementum",
        "dat", "wel", "maar", "wat", "ik", "bedoel", "is", "waar", "moet", "ik", "nou", "naar", "luisteren", "naar", "m'n", "verstand", "of", "m'n", "gevoelens", "want", "één",
        "ding", "weet", "ik", "wel", "di's", "foute", "boel", "dus", "de", "man", "Extince", "is", "echt", "niet", "altijd", "even", "zwoel", "zus", "hallo", "hallo", "en",
        "sowieso", "is", "hier", "het", "mannetje", "van", "de", "radio", "weer", "terug", "op", "de", "kabel", "ik", "maak", "m'n", "fabel", "acceptabel", "nog", "net", "capabel",
        "voor", "een", "smoesje", "op", "de", "vraag", "x", "waarom", "moest", "je", "ons", "zo", "lang", "laten", "wachten", "zei", "ik:", "kriebelhoestje?", "30", "dagen", "d'r",
        "bovenop", "nog", "dit", "kost", "m'n", "kop", "nog", "kom", "op", "top", "nooit", "stopte", "de", "optocht", "dus", "heel", "professioneel", "hij", "zei", "hij's", "ziek",
        "wat", "mentaal", "of", "fysiek", "dat", "weet", "ik", "niet", "zo", "klonk", "het", "antwoord", "het", "meest", "commercieel", "verantwoord", "en", "ondertussen", "ah",
        "ik", "smeet", "m'n", "eigen", "ramen", "in", "en", "keek", "raar", "op", "m'n", "neus", "omstandigheden", "haalden", "me", "helemaal", "uit", "m'n", "ritme",
        "maarnietheus", "op", "de", "dansvloer", "kregen", "wij", "de", "smaak", "te", "pakken", "ik", "was", "op", "m'n", "gympen", "zij", "was", "op", "d'r", "naaldhakken",
        "deel", "van", "haar", "leven", "zijn", "is", "niet", "wat", "ik", "verdien", "maar", "hoe", "zou", "het", "gaan", "met", "haar", "ik", "heb", "'r", "al", "een", "poosje",
        "niet", "gezien", "die", "emotionele", "stuiterbal", "die", "stuiterde", "wel", "mooi", "de", "foute", "kant", "op", "mijn", "kant", "en", "da's", "foute", "boel",
        "figuurlijk", "op", "m'n", "smoel", "kedeng", "daar", "lag", "ik", "en", "zag", "ik", "het", "goed", "zo'n", "twaalf", "getuigen", "die", "m'n", "coupe", "niet",
        "slechten", "want", "m'n", "coupe", "was", "niet", "zo", "zoet", "jaja", "ik", "zal", "het", "maar", "meteen", "toegeven", "dit", "probleem", "los", "ik", "niet", "op",
        "door", "mezelf", "te", "schamen", "ja", "ik", "ben", "fout", "maar", "'k", "wordt", "niet", "rood", "van", "al", "die", "trauma's", "die", "me", "achtervolgen", "zeker",
        "bovendien", "calvanc", "is", "dood", "en", "da's", "hoe", "ik", "erover", "denk", "en", "daarmee", "uit", "ik", "spuit", "gewoon", "zoals", "spuit", "11", "spuit", "want",
        "dit", "is", "echt", "en", "niet", "verzonnen", "en", "als", "dit", "nou", "het", "einde", "van", "m'n", "carrií¨re", "zou", "betekenen", "zeg", "ik", "hoezo", "die's",
        "nog", "niet", "eens", "begonnen", "op", "de", "dansvloer", "kregen", "wij", "de", "smaak", "te", "pakken", "ik", "was", "op", "m'n", "gympen", "zij", "was", "op", "d'r",
        "naaldhakken", "deel", "van", "haar", "leven", "zijn", "is", "niet", "wat", "ik", "verdien", "maar", "hoe", "zou", "het", "gaan", "met", "haar", "ik", "heb", "'r", "al",
        "een", "poosje", "niet", "gezien", "op", "de", "dansvloer", "kregen", "wij", "de", "smaak", "te", "pakken", "ik", "was", "op", "m'n", "gympen", "zij", "was", "op", "d'r",
        "hoge", "hakken", "deel", "van", "haar", "leven", "zijn", "is", "niet", "wat", "ik", "verdien", "maar", "hoe", "zou", "het", "met", "'r", "gaan", "ik", "heb", "'r", "al",
        "een", "tijdje", "niet", "gezien", "zoals", "je", "dus", "misschien", "begrijpt", "het", "beste", "paard", "was", "gestruikeld", "als", "gevolg", "van", "een", "afgrond",
        "vol", "met", "stress", "en", "haat", "waar", "ik", "in", "was", "geduikeld", "lang", "geleden", "maar", "toch", "tot", "op", "heden", "bleek", "m'n", "zieltje",
        "ontevreden", "dus", "vandaar", "die", "paar", "bokkesprongen", "maar", "ik", "ben", "geen", "slechte", "jongen", "rookte", "weleens", "om", "stoer", "te", "doen", "maar",
        "nooit", "over", "m'n", "longen", "maar", "toen", "ineens", "liet", "mijn", "zelfcontrole", "mij", "in", "de", "steek", "en", "belde", "af", "paf", "schatteboutje", "was",
        "dat", "m'n", "straf", "ik", "bleek", "op", "love", "de", "weg", "kwijt", "van", "onzekerheid", "maar", "sorry", "van", "al", "dat", "gewelddadige", "gedrag", "ik", "heb",
        "natuurlijk", "spijt", "alleen", "zo'n", "typisch", "kenmerk", "van", "spijt", "is", "dat", "het", "steeds", "weer", "te", "laat", "komt", "en", "nooit", "op", "tijd",
        "en", "op", "de", "dansvloer", "kregen", "wij", "de", "smaak", "te", "pakken", "ik", "was", "op", "m'n", "gympen", "zij", "was", "op", "d'r", "naaldhakken", "deel", "van",
        "haar", "leven", "zijn", "is", "niet", "wat", "ik", "verdien", "maar", "hoe", "zou", "het", "gaan", "met", "haar", "ik", "heb", "er", "al", "een", "poosje", "niet",
        "gezien", "een", "poosje", "niet", "gezien", "een", "poosje", "niet", "gezien", "hoe", "zou", "het", "gaan", "met", "haar", "ik", "heb", "er", "al", "een", "poosje",
        "niet", "gezien", "een", "tijdje", "niet", "gezien", "een", "tijdje", "niet", "gezien", "hoe", "zou", "het", "met", "er", "gaan", "ik", "heb", "er...", "wel", "nu", "ik",
        "keer", "mezelf", "binnenstebuiten", "van", "top", "tot", "teen", "ah", "wat", "nou", "m'n", "achternaam", "kops", "of", "steen?", "en", "waarom", "mooi", "weer", "spelen",
        "met", "tegenwind", "yo", "een", "volwassen", "man", "gedeeld", "door", "twee", "is", "kind", "en", "in", "het", "leven", "kun", "je", "kiezen", "tussen", "vergif", "of",
        "vergiffenis", "de", "keuze", "lijkt", "zo", "simpel", "maar", "toch", "m'n", "voorhoofd", "fronst", "tot", "een", "rimpel", "want", "m'n", "abc's", "waren", "gemengd",
        "met", "roet", "en", "tegen", "hen", "die", "zogenaamd", "weten", "hoe", "het", "moet", "trek", "me", "nooit", "langs", "die", "feministische", "meetlat", "een",
        "zoogdier", "die", "weet", "wat", "z'n", "taak", "is", "maar", "vrouw", "als", "jouw", "privé", "niet", "meer", "mijn", "zaak", "is", "zou", "je", "dan", "het",
        "noodzakelijk", "kwaad", "willen", "excuseren", "niet", "traumatiseren", "maar", "compenseren", "met", "jouw", "liefde", "zoals", "ik", "dat", "vanaf", "het", "jaar", "00",
        "al", "beliefde", "maar", "wat", "tot", "op", "vandaag", "de", "dag", "alleen", "maar", "bliefde", "meisje", "m'n", "excuses", "aan", "jou", "en", "die", "kleine", "je",
        "familie", "de", "kennedyschool", "en", "al", "m'n", "fans", "want", "eerlijk", "waar", "ik", "ben", "soms", "net", "een", "mens", "en", "dan", "maak", "ik", "fouten",
        "binnen", "deze", "beschaving", "zo", "ongewenst", "maar", "nu", "zie", "ik", "jou", "als", "een", "zuster", "die", "m'n", "wond", "heelt", "je", "ontdekte", "m'n",
        "zwakke", "plek", "en", "je", "bedekte", "het", "met", "eelt", "en", "op", "de", "dansvloer", "kregen", "wij", "de", "smaak", "te", "pakken", "ik", "was", "op", "m'n",
        "gympen", "zij", "was", "op", "d'r", "naaldhakken", "deel", "van", "haar", "leven", "zijn", "is", "niet", "wat", "ik", "verdien", "maar", "hoe", "zou", "het", "gaan",
        "met", "haar", "ik", "heb", "er", "al", "een", "poosje", "niet", "gezien", "op", "de", "dansvloer", "kregen", "wij", "de", "smaak", "te", "pakken", "ik", "was", "op",
        "m'n", "gympen", "jij", "was", "op", "je", "hoge", "hakken", "meissie", "deel", "van", "jouw", "leven", "zijn", "is", "niet", "wat", "ik", "verdien", "maar", "hoe", "is",
        "het", "nou", "met", "jou", "ik", "heb", "jou", "al", "een", "poosje", "niet", "gezien", "samen", "sterk", "net", "zoals", "die", "oude", "berk", "pioniers", "van", "een",
        "nieuw", "tijdperk", "Extince", "ross", "orfeo", "en", "de", "iba", "en", "we", "komen", "niet", "met", "al", "dat", "geblabla", "maar", "laat", "me", "je", "wat",
        "verklappen", "eventjes", "zonder", "grappen", "je", "ziet", "het", "aas", "en", "je", "wil", "meteen", "happen", "sukkel!!!", "doe", "jezelf", "niet", "tekort", "sluit",
        "je", "aan", "bij", "ons", "we", "eten", "van", "hetzelfde", "bord", "samen", "sterk", "zoals", "je", "ziet", "een", "en", "dat", "is", "ons", "kenmerk", "bloed", "zweet",
        "en", "tranen", "jaren", "van", "hard", "werk", "we", "hebben", "nu", "volop", "connecties", "in", "het", "hele", "netwerk", "en", "je", "ziet", "samen", "staan", "we",
        "sterk", "iedereen", "wilt", "vooruit", "dus", "je", "denkt", "progressief", "maar", "ze", "noemen", "jou", "een", "dief", "en", "praten", "negatief", "en", "je", "weet",
        "het", "dit", "’s", "je", "enige", "alternatief", "blijf", "positief", "net", "als", "dit", "creatief", "collectief", "wij", "staan", "er", "voor", "elkaar", "in",
        "tijden", "van", "nood", "we", "zitten", "allemaal", "in", "dezelfde", "boot", "en", "we", "eten", "nooit", "de", "kaas", "van", "elkaars", "brood", "dan", "moet", "je",
        "met", "je", "billen", "bloot", "dan", "sta", "jij", "er", "helemaal", "alleen", "voor", "en", "je", "denkt", "hoe", "hoe", "moet", "ik", "nou", "door", "het", "leven",
        "is", "niet", "altijd", "voor", "iedereen", "pret", "zonder", "dak", "boven", "je", "hoofd", "is", "laat", "staan", "een", "wet", "nu", "kun", "je", "eindelijk", "iets",
        "verdienen", "maar", "dan", "breek", "je", "de", "wet", "denk", "jou", "nou", "wat", "je", "doet", "want", "jij", "bent", "aanzet", "aanzet", "wat", "zeker", "weten",
        "samen", "sterk", "net", "zoals", "die", "stichting", "maar", "dan", "een", "nieuwe", "lichting", "artiesten", "vanuit", "een", "andere", "richting", "met", "je", "beide",
        "benen", "op", "de", "grond", "als", "verplichting", "oh", "en", "deze", "vuist", "op", "deze", "vuist", "(who)", "en", "deze", "vuist", "op", "deze", "vuist", "en",
        "deze", "vuist", "op", "deze", "vuist", "ross", "and", "iba", "deze", "vuist", "op", "deze", "vuist", "we", "brengen:", "deze", "vuist", "op", "deze", "vuist", "(juist)",
        "deze", "vuist", "op", "deze", "vuist", "(oh)", "deze", "vuist", "op", "deze", "vuist", "en", "deze", "vuist", "deze", "vuist", "op", "deze", "vuist", "he", "yo",
        "Extince", "wat", "gebeurd", "er", "iba", "hoe", "denk", "jij", "over", "deze", "combinatie", "een", "soort", "tractatie", "voor", "de", "hele", "natie", "he", "maar",
        "nu", "even", "terug", "naar", "de", "situatie", "ok", "laat", "me", "je", "wat", "vertellen", "wat", "ik", "bijna", "vergat", "want", "de", "weg", "is", "lang", "en",
        "van", "tijd", "tot", "tijd", "glad", "maar", "er", "is", "geen", "nood", "want", "wij", "zijn", "namelijk", "tamelijk", "gezamenlijk", "compact", "samen", "staan", "wij",
        "ste-e-erk", "ik", "zeg", "samen", "staan", "wij", "ste-erk", "samen", "staan", "wij", "zo", "sterk", "samen", "staan", "we", "sterk", "vele", "handen", "maken", "licht",
        "werk", "vele", "handen", "maken", "licht", "werk", "vele", "handen", "maken", "licht", "werk", "we", "zijn", "samen", "sterk", "samen", "sterk", "het", "ouwe", "liedje",
        "ik", "kom", "thuis", "en", "de", "boot", "is", "aan", "ik", "kijk", "omhoog", "en", "zie", "skotoe", "staan", "en", "voor", "me", "deur", "vanwege", "de", "dagelijkse",
        "sleur", "hondsdolheid", "in", "combinatie", "met", "een", "slecht", "humeur", "hardhandig", "met", "een", "vrouw", "ja", "wat?", "schijt", "aan", "iedereen", "ik", "ben",
        "voor", "eeuwig", "in", "de", "rouw", "het", "is", "eigenlijk", "nooit", "anders", "geweest", "vanaf", "de", "paplepel", "je", "hebt", "de", "klok", "horen", "luiden",
        "hier", "hoor", "je", "de", "klepel", "labiel", "van", "gevangenschap", "tussen", "een", "paar", "tegenpolen", "bij", "elkaar", "triest", "maar", "waar", "m'n",
        "persoonlijkheid", "splijt", "van", "het", "kwaad", "eén", "generatie", "verder", "nu", "ben", "ik", "een", "psychopaat", "je", "kent", "me", "niet", "onderschat", "en",
        "ondervindt", "het", "ben", "doorgewinterd", "m'n", "hart", "is", "versplinterd", "doe", "tof", "en", "ik", "ontplof", "nu", "belt", "er", "één", "voor", "hulp",
        "opdonderen", "met", "die", "arm", "of", "[verse 2:moni'se]", "hij", "komt", "er", "nooit", "meer", "in", "die", "klootzak", "slaat", "me", "bont", "en",
        "blauw", "shit", "dit", "is", "niet", "gezond", "meer", "nou", "ik", "heb", "z'n", "koffers", "naar", "buiten", "gegooid", "dwars", "door", "de", "ruit", "gegooid", "van",
        "bovenaf", "waar", "zie", "ik", "zo", "vanaf", "met", "een", "populaire", "bn'er", "het", "is", "een", "regelrechte", "nachtmerrie", "eyo", "we", "hebben", "dag", "en",
        "nacht", "herrie", "m'n", "dochter", "kan", "niet", "slapen", "want", "ik", "blaf", "dus", "beter", "bel", "ik", "de", "politie", "want", "mijn", "familie", "maakt", "'m",
        "af", "zonder", "fanta", "'t", "is", "geen", "doen", "als", "geen", "poen", "ik", "moet", "op", "mijn", "tenen", "lopen", "en", "al", "de", "slicke", "sins", "doen", "en",
        "hij", "wordt", "om", "het", "allerminste", "boos", "teveel", "verwend", "door", "die", "snolletjes", "in", "z'n", "videos", "hij", "hangt", "de", "prins", "maar", "weet",
        "zich", "van", "de", "prins", "geen", "kwaad", "en", "dat", "is", "hoe", "'t", "al", "negen", "jaar", "gaat", "al", "die", "maatschappelijke", "werkers", "zijn",
        "zeikerds", "en", "eyo", "ik", "heb", "schijt", "aan", "pottenkijkers", "ik", "draai", "door", "als", "een", "dj", "visualiseer", "het", "als", "een", "vj", "breng", "me",
        "nou", "niet", "op", "een", "goed", "idee", "gewend", "aan", "wanklank", "en", "niks", "zuivere", "tonen", "ik", "vecht", "met", "demonen", "je", "wil", "echt", "niet",
        "met", "me", "samenwonen", "*haalt", "adem*", "'k", "heb", "frisse", "lucht", "nodig", "als", "een", "mafkees", "ik", "heb", "het", "zo", "benauwd", "dat", "je", "het",
        "aan", "me", "afleest", "groot", "gebracht", "klein", "gehouden", "bloeide", "laat", "van", "verwekt", "naar", "bijna", "verwelkt", "daarna", "werd", "ik", "kwaad", "van",
        "kwaad", "tot", "erger", "iets", "te", "veel", "gemist", "iets", "te", "vaak", "op", "m'n", "ziel", "geraakt", "dat", "je", "het", "niet", "wist", "'t", "is", "geen",
        "verwijt", "als", "'t", "mij", "bevrijdt", "openheid", "staat", "bij", "mij", "in", "het", "krijt", "voor", "altijd", "nu", "raak", "ik", "haar", "ook", "nog", "kwijt",
        "en", "ik", "ben", "een", "slechte", "verliezer", "na", "al", "die", "jaren", "haal", "ik", "m'n", "emoties", "uit", "de", "diepvriezer", "en", "al", "gaat", "het", "door",
        "merg", "en", "been", "gevoelens", "moeten", "ergens", "heen", "hey", "yo", "meneer", "van", "dalen", "wacht", "op", "antwoord:", "en", "de", "vraag", "was", "wat", "doet",
        "nou", "de", "das", "om", "bij", "wie", "en", "wie", "is", "er", "zwaar", "in", "zijn", "sas", "ik", "constateer", "lef", "maar", "waar", "komt", "dat", "in", "hemelsnaam",
        "vandaan", "hey", "ik", "praat", "tegen", "je", "dus", "kijk", "me", "aan", "en", "ookal", "zit", "m'n", "mond", "vol", "met", "chips", "ik", "blijf", "gewoon", "kletsen",
        "net", "als", "platte", "handen", "op", "die", "blote", "bips", "je", "kwam", "een", "heel", "eind", "maar", "ja", "nu", "is", "dat", "eind", "zoek", "je", "staat", "al",
        "in", "de", "hoek", "nu", "vraag", "je", "ook", "nog", "billenkoek", "rappers", "zijn", "in", "rap", "en", "roer", "van", "noord", "tot", "zuid", "zoeken", "haasje",
        "repje", "naar", "'n", "contravloeistof", "en", "halen", "uit", "en", "ik", "ken", "dat", "verhaal", "wel", "van", "die", "andere", "wang", "maar", "aan", "de", "andre",
        "kant", "voel", "ik", "die", "overlevingsdrang", "kaal", "of", "kammen", "weet", "je", "wel", "dat", "maakt", "niet", "uit", "iedereen", "petje", "af", "kaal", "of",
        "kaal", "of", "kaal", "of", "kammen", "mannen", "je", "wil", "nix", "drinken", "van", "me", "dus", "wat", "wil", "je", "dan", "van", "me", "ey", "yo", "wat", "moet", "je",
        "van", "me", "kaal", "of", "kammen", "weet", "je", "wel", "dat", "maakt", "niet", "uit", "iedereen", "petje", "af", "hoe", "wil", "je", "het", "hebben", "kaal", "of",
        "kammen", "je", "wil", "nix", "drinken", "van", "me", "dus", "wat", "wil", "je", "dan", "van", "me", "yo", "Ex", "potje", "dammen", "dit", "is", "die", "baas-boven-baas",
        "situatie", "waar", "ik", "in", "verkeer", "dat", "zondermeer", "maar", "ee", "wat", "hoor", "ik", "nou", "geen", "pionier", "ik", "spring", "van", "daar", "naar", "hier",
        "want", "ik", "kan", "alles", "en", "niemand", "hoeft", "iemand", "uit", "te", "komen", "leggen", "wie", "er", "aan", "de", "bal", "is", "ik", "speel", "dit", "spel",
        "al", "jaren", "lang", "en", "blijf", "de", "regels", "trouw", "daar", "laat", "ik", "geen", "verandering", "in", "brengen", "zeker", "niet", "door", "jou", "ik", "ken",
        "de", "goot", "maar", "nu", "verdien", "ik", "brood", "dus", "schrijf", "gerust", "je", "rijms", "maar", "ik", "verbeter", "ze", "met", "rood", "en", "beklim", "die",
        "overtreffende", "trap", "voor", "de", "grap", "veeg", "het", "begrip", "vrijspel", "voor", "jou", "in", "een", "klap", "van", "de", "map", "dus", "aan", "de", "kant",
        "want", "hier", "komt", "de X", "aan", "m'n", "rapnaam", "dat", "is", "m'n", "roepnaam", "daar", "doe", "je", "nix", "aan", "kaal", "of", "kammen", "weet", "je", "wel",
        "dat", "maakt", "niet", "uit", "iedereen", "petje", "af", "kaal", "of", "kaal", "of", "kaal", "of", "kammen", "mannen", "je", "wil", "nix", "drinken", "van", "me", "dus",
        "wat", "wil", "je", "dan", "van", "me", "ey", "yo", "wat", "moet", "je", "van", "me", "kaal", "of", "kammen", "weet", "je", "wel", "dat", "maakt", "niet", "uit",
        "iedereen", "petje", "af", "hoe", "wil", "je", "het", "hebben", "kaal", "of", "kammen", "je", "wil", "nix", "drinken", "van", "me", "dus", "wat", "wil", "je", "dan", "van",
        "me", "sommige", "beats", "zijn", "nep", "begrijp", "je", "wel", "dat", "danst", "lastig", "maar", "deze", "beats", "zijn", "vet", "je", "vindt", "ze", "fatsig", "en",
        "daarbij", "tel", "je", "op", "al", "die", "alfabetische", "hoogstandjes", "en", "de", "uitkomst", "is", "daar", "sta", "je", "dan", "met", "al", "je", "demo", "bandjes",
        "en", "net", "wanneer", "je", "denkt", "ik", "heb", "het", "in", "de", "hand", "pak", "ik", "je", "op", "en", "zet", "je", "aan", "de", "kant", "als", "een", "figurant",
        "en", "speel", "de", "hoofdrol", "in", "jouw", "vriendin", "d'r", "allerstoutste", "dromen", "je", "houdt", "je", "hart", "vast", "voor", "wat", "er", "nog", "gaat",
        "komen", "want", "je", "wil", "die", "taart", "niet", "delen", "dus", "ik", "eet", "er", "alle", "kwark", "af", "ik", "bedoel", "voor", "straf", "pak", "ik", "je", "markt",
        "af", "en", "van", "mijn", "engelstalig", "werk", "was", "jij", "ook", "al", "jaren", "fan", "maar", "in", "mijn", "eigen", "taal", "versta", "je", "pas", "hoe", "goed",
        "ik", "wel", "niet", "ben", "kaal", "of", "kammen", "weet", "je", "wel", "dat", "maakt", "niet", "uit", "iedereen", "petje", "af", "kaal", "of", "kaal", "of", "kaal", "of",
        "kammen", "mannen", "je", "wil", "nix", "drinken", "van", "me", "dus", "wat", "wil", "je", "dan", "van", "me", "ey", "yo", "wat", "moet", "je", "van", "me", "kaal", "of",
        "kammen", "weet", "je", "wel", "dat", "maakt", "niet", "uit", "iedereen", "petje", "af", "hoe", "wil", "je", "het", "hebben", "kaal", "of", "kammen", "je", "wil", "nix",
        "drinken", "van", "me", "dus", "wat", "wil", "je", "dan", "van", "me", "je", "wil", "nix", "drinken", "van", "me", "je", "wil", "nix", "drinken", "van", "me", "en", "ook",
        "al", "heb", "je", "nog", "zo'n", "dorst", "je", "wil", "nix", "drinken", "van", "me", "je", "wil", "nix", "drinken", "van", "me", "je", "wil", "nix", "drinken", "van",
        "me", "en", "ook", "al", "stik", "je", "van", "de", "dorst", "je", "wil", "nix", "drinken", "van", "me", "kaal", "of", "kammen", "yo", "he", "kaal", "of", "kammen",
        "(oo-oo)", "'t", "vuur", "laait", "op", "er", "valt", "nix", "meer", "te", "blussen", "jij", "brak", "me", "de", "bek", "open", "en", "nu", "kom", "jij", "er", "met",
        "geen", "spelt", "meer", "tussen", "hoe", "of", "wat", "is", "nou", "jou", "vraag", "je", "loopt", "te", "ijsberen", "met", "de", "man", "van", "het", "moment", "in", "je",
        "maag", "en", "zie", "hoe", "ik", "die", "nederhop", "laat", "groeien", "je", "wou", "dat", "jij", "dat", "ook", "kon", "probeer", "'t", "anders", "met", "een", "potje",
        "pokon", "ik", "hoor", "alleen", "jou", "woorden", "kul", "waar", "zijn", "je", "daden", "waar", "zijn", "je", "wilde", "haren", "nu", "dat", "willen", "ze", "lezen", "in",
        "de", "roddelbladen", "en", "waarom", "kruipt", "de E", "voor", "lang", "gaf", "ik", "je", "voorang", "want", "ik", "dacht", "je", "weet", "de", "weg", "maar", "nee",
        "hoor", "verkeerde", "afslag", "verkeerde", "keelgat", "'t", "klinkt", "gewoon", "verkeerd", "net", "als", "een", "papagaai", "die", "net", "een", "woordje", "heeft",
        "geleerd", "en", "zoals", "bok-bok", "het", "geluid", "is", "van", "een", "kogel", "zo", "kijk", "ik", "op", "jou", "neer", "als", "een", "roofvogel", "strijk", "neer",
        "sleur", "je", "mee", "gratis", "vliegreis", "hoge", "nood", "en", "nu", "nog", "één", "foute", "opmerking", "en", "ik", "zwijg", "je", "dood", "en", "zand", "erover",
        "sna'k", "bedoel", "kaal", "of", "kammen", "weet", "je", "wel", "dat", "maakt", "niet", "uit", "iedereen", "petje", "af", "kaal", "of", "kaal", "of", "kaal", "of",
        "kammen", "mannen", "je", "wil", "nix", "drinken", "van", "me", "dus", "wat", "wil", "je", "dan", "van", "me", "ey", "yo", "wat", "moet", "je", "van", "me", "kaal", "of",
        "kammen", "weet", "je", "wel", "dat", "maakt", "niet", "uit", "iedereen", "petje", "af", "hoe", "wil", "je", "het", "hebben", "kaal", "of", "kammen", "je", "wil", "nix",
        "drinken", "van", "me", "dus", "wat", "wil", "je", "dan", "van", "me", "hi", "ha", "aha", "da's", "da", "ding", "da's", "da", "ding", "da's", "da", "ding", "da'", "s",
        "da", "ding", "da's", "da", "ding", "sowieso", "sowieso", "eh", "eh", "eh", "ik", "kijk", "bij", "jou", "naar", "binnen", "dwars", "door", "je", "ruit", "ik", "zie", "er",
        "is", "een", "feestje", "en", "nodig", "mezelf", "uit", "lekker", "op", "de", "bozotoer", "o", "zo", "stoer", "opeens", "sta", "ik", "voor", "je", "midden", "op", "de",
        "vloer", "uit", "je", "dak", "tot", "in", "je", "naad", "je", "bent", "zo", "lenig", "als", "spaghetti", "want", "je", "kan", "spagaat", "en", "ook", "nog", "op", "de",
        "maat", "je", "bent", "ertoe", "instaat", "'k", "hoef", "je", "zeker", "niet", "te", "vragen", "hoe", "het", "met", "je", "gaat", "maar", "goed", "de", "laatste",
        "roddels", "doen", "de", "ronde", "als", "een", "rotonde", "is", "het", "nou", "die", "brunette", "of", "die", "blonde?", "allebei", "natuurlijk", "want", "anders",
        "vindt", "'ie", "het", "zonde", "ja", "ik", "zie", "het", "als", "een", "pluspunt", "als", "je", "me", "je", "zus", "gunt", "je", "kent", "me", "toch", "gulziger", "dan",
        "jimmy", "gulzar", "meer", "bij", "de", "tijd", "dan", "pulsar", "zou", "ik", "m'n", "huiswerk", "klaar", "hebben?", "jongen", "de", "hele", "wereld", "heeft", "zoiets",
        "van", "kijk", "es", "wie", "we", "daar", "hebben", "prins", "Extince", "grootheidswaan", "ik", "lijd", "eraan", "zolang", "er", "geen", "medicijnen", "voor", "zijn",
        "moet", "je", "me", "laten", "gaan", "to", "the", "beat", "with", "it", "(aha)", "hiphop", "don't", "stop", "ik", "gooi", "het", "er", "lekker", "uit", "want", "anders",
        "krop", "ik", "het", "op", "grootheidswaan", "ik", "lijd", "eraan", "ook", "al", "waren", "er", "medicijnen", "voor", "dan", "liet", "ik", "ze", "staan", "uit", "het",
        "raam", "met", "dat", "voor", "straf", "verhoog", "ik", "de", "lat", "ik", "weet", "niet", "wat", "het", "is", "maar", "het", "is", "me", "wat", "yo", "ben", "ik", "hard",
        "op", "weg", "om", "een", "gevierde", "artiest", "te", "gaan", "worden", "of", "is", "het", "maar", "gein", "yo", "blijf", "aan", "de", "lijn", "fijn", "dan", "kom", "ik",
        "nu", "met", "al", "die", "hits", "die", "ik", "beloofd", "heb", "waarom?", "omdat", "je", "toch", "niks", "beters", "aan", "je", "hoofd", "hebt", "nou", "roep", "rap",
        "en", "zing", "zang", "a", "la", "yin", "yang", "ik", "verdien", "keiveel", "weet", "jij", "veel", "sukkels", "lullen", "nog", "slapper", "dan", "eigeel", "en", "als",
        "er", "nog", "langer", "gestresst", "wordt", "stuur", "ik", "'n", "escort", "die", "wil", "je", "als", "een", "tang", "grijpen", "je", "voelt", "je", "zo", "lekker",
        "je", "wil", "jezelf", "in", "je", "wang", "knijpen", "schatjes", "zoenen", "me", "en", "boenen", "m'n", "pook", "eyo", "ik", "vraag", "ze", "om", "te", "strippen", "en",
        "ze", "doen", "het", "nog", "ook", "ik", "heb", "versiertrucs", "ouwer", "dan", "je", "opoe", "nou", "neem", "m'n", "haantjesgedrag", "maar", "op", "de", "koop", "toe",
        "y'all", "sowieso", "zakelijker", "dan", "een", "Marskramer", "ik", "loop", "een", "condomerie", "binnen", "en", "vraag", "waar", "is", "de", "paskamer",
        "grootheidswaan", "ik", "lijd", "eraan", "zolang", "er", "geen", "medicijnen", "voor", "zijn", "moet", "je", "me", "laten", "gaan", "to", "the", "beat", "with", "it",
        "hiphop", "don't", "stop", "ik", "gooi", "het", "er", "lekker", "uit", "want", "anders", "krop", "ik", "het", "op", "grootheidswaan", "ik", "lijd", "eraan", "ook", "al",
        "waren", "er", "medicijnen", "voor", "dan", "liet", "ik", "ze", "staan", "uit", "het", "raam", "met", "dat", "voor", "straf", "verhoog", "ik", "de", "lat", "ik", "weet",
        "niet", "wat", "het", "is", "maar", "het", "is", "me", "wat", "yo", "laat", "het", "lekker", "los", "ben", "jij", "die", "stijve", "hark", "ben", "je", "nu", "de",
        "klos", "we", "hebben", "de", "poppetjes", "aan", "het", "dansen", "twee", "stappen", "naar", "voor", "en", "eentje", "terug", "en", "lekker", "sjansen", "yo", "laat",
        "het", "lekker", "los", "ben", "jij", "die", "houten", "klaas", "ben", "je", "nu", "de", "klos", "we", "hebben", "de", "poppetjes", "aan", "het", "dansen", "twee",
        "stappen", "naar", "voor", "en", "een", "terug", "sowieso", "sowieso", "sowieso", "sowieso", "eyo", "die", "stoeipoes", "wordt", "lauw", "wanneer", "ze", "dit",
        "hoort", "ik", "zeg", "ze", "neemt", "me", "vaker", "in", "de", "mond", "dan", "een", "lidwoord", "maar", "ik", "ben", "niet", "gladjes", "eerder", "harig", "weet", "waar",
        "ik", "het", "over", "heb", "want", "ik", "ben", "meerderjarig", "dus", "over", "op","en", "neer", "gaan", "kan", "ik", "je", "uitleggen", "maar", "als", "je", "m'n",
        "hart", "wil", "stelen", "noem", "ik", "jou", "een", "dievegge",
        "snap", "je", "nou", "zo", "gaat", "het", "tegenwoordig", "ik", "wil", "wel", "met", "je", "omgaan", "maar", "dan", "wel", "een", "beetje", "slordig", "je", "ziet", "me",
        "bij", "je", "in", "de", "buurt", "ik", "heb", "er", "vast", "wat", "te", "zoeken", "maar", "ik", "doe", "het", "niet", "uit", "de", "doeken", "ey", "kom", "op", "vertel",
        "wat", "denk", "je", "wel", "eyo", "ik denk:", "zachte G", "korte ei", "dikke L", "en", "ook", "al", "eet", "je", "hem", "op", "dan", "groeit", "'ie", "weer", "aan", "ik",
        "kan", "niet", "normaal", "meer", "over", "straat", "maar", "wat", "doe", "je", "eraan", "aangenaam", "rafaelito", "harde G", "en", "een", "rollende", "incognito",
        "sowieso", "grootheidswaan", "ik", "lijd", "eraan", "zolang", "er", "geen", "medicijnen", "voor", "zijn", "moet", "je", "me", "laten", "gaan", "to", "the", "beat", "with",
        "it", "hiphop", "don't", "stop", "ik", "gooi", "het", "er", "lekker", "uit", "want", "anders", "krop", "ik", "het", "op", "grootheidswaan", "ik", "lijd", "eraan", "ook",
        "al", "waren", "er", "medicijnen", "voor", "dan", "liet", "ik", "ze", "staan", "uit", "het", "raam", "met", "dat", "voor", "straf", "verhoog", "ik", "de", "lat", "ik",
        "weet", "niet", "wat", "het", "is", "maar", "het", "is", "me", "wat", "nou", "weet", "je", "wat?", "omdat", "ie", "het", "zo", "vriendelijk", "vraagt", "weet", "ik", "het",
        "goed", "gemaakt", "ik", "bob", "wel", "dan!", "hahahhahaha", "maar", "wel", "op", "deze", "beat", "je", "snapt", "toch?", "yo", "vandaag", "wil", "ik", "graag", "mijn",
        "spreekbeurt", "houden", "over", "neppe", "rappers", "die", "neppe", "rappers", "gasten", "met", "rijms", "die", "net", "zo", "belangrijk", "zijn", "voor", "mij", "zeg",
        "het", "als", "die", "reclame", "volgens", "mijn", "brievenbus", "jikkediejikkediejap.... Sukkel", "je", "weet", "toch", "dat", "ik", "flexibel", "op", "tracks", "wiebel",
        "en", "je", "aanstaande", "ex", "kriebel", "shit", "doe", "maar", "met", "me", "stoppelbaard", "eigenhaard", "mooie", "bal", "ik", "hoor", "haar", "al", "extra", "ze",
        "rijdt", "de", "extro", "net", "zoals", "dextro", "bedoel", "je", "mij", "nou", "wel", "of", "niet?", "weet", "je", "wel", "weet", "je", "niet", "onderhuids", "gedoe",
        "van", "jou", "begrijp", "ik", "niet", "misschien", "ligt", "het", "aan", "me", "zachte G", "maar", "mijn", "kruit", "verschieten", "ja", "daar", "wacht", "ik", "mee",
        "want", "als", "ik", "jou", "nou", "een", "flauwe", "mop", "vertel", "dan", "lach", "je", "mee", "als", "een", "slettebak", "want", "zo", "ben", "je", "oke", "en",
        "probeer", "me", "geest", "nou", "niet", "te", "lullen", "want", "ik", "ken", "je", "nog", "langer", "dan", "vandaag", "ook", "jij", "hoort", "bij", "die", "rattenplaag",
        "en", "waar", "ik", "gifkorrels", "heb", "gestrooid", "is", "een", "goede", "vraag", "punt", "of", "trouwens", "liever", "gezegd", "uitroepteken", "ik", "zal", "niet",
        "al", "te", "hard", "schreeuwen", "voordat", "die", "ruiten", "breken", "van", "die", "mercedes", "in", "je", "dromen", "mede", "is", "vernomen", "dat", "het", "heden",
        "is", "gekomen", "dus", "wordt", "nou", "niet", "boos", "stakker", "maak", "liever", "die", "koos", "wakker", "hij", "heeft", "hetzelfde", "syndroom", "ik", "volg", "al",
        "vanaf", "me", "11e", "mijn", "droom", "snap", "wel", "dat", "je", "me", "naam", "niet", "kon", "noemen", "maar", "het", "schiet", "niet", "op", "om", "die", "frustraties",
        "te", "benoemen", "ik", "wou", "met", "je", "praten", "maar", "dat", "mocht", "niet", "baten", "dat", "zie", "ik", "net", "als", "dubbele", "pret", "en", "alles", "loopt",
        "gesmeerd", "want", "deze", "p", "r", "e", "t", "l", "e", "t", "t", "e", "r", "s", "druppelen", "vet", "van", "hier", "naar", "afrika", "en", "terug", "je", "wilt", "die",
        "pizza", "met", "me", "delen", "graag", "die", "fietsen", "met", "me", "stelen", "geef", "die", "paprika", "eens", "terug", "doorgaan", "gewoon", "doorgaan", "je", "hebt",
        "best", "talent", "alleen", "het", "druipt", "er", "wel", "vanaf", "dat", "jij", "dat", "echt", "nog", "lang", "niet", "bent", "oke?", "en", "nou", "kssssst", "wegwezen",
        "ik", "heb", "nog", "meer", "te", "doen", "stelletje", "mafkezen", "doorgaan", "gewoon", "doorgaan", "net", "als", "een", "onintressant", "balspel", "het", "zal", "wel",
        "yo", "ik", "ken", "dat", "gebral", "wel", "en", "nou", "wegwezen", "en", "neem", "meteen", "die", "maatjes", "van", "je", "mee", "die", "muffe", "mafkezen", "ik", "heb",
        "het", "ook", "gezien", "jawel", "de", "vice", "voorzitter", "van", "de", "breakdance", "vereniging", "het", "is", "niet", "om", "aan", "te", "zien", "maak", "nou", "niet",
        "zogenaamde", "grappen", "jij", "behaalde", "maar", "ik", "betaalde", "de", "grote", "prijs", "van", "nederlands", "snap", "je?", "met", "hits", "in", "het", "nederlands",
        "en", "hits", "in", "het", "engels", "en", "daarom", "ben", "ik", "tweetalig", "jij", "bent", "eenmalig", "en", "kom", "nou", "geen", "toeren", "bouwen", "je", "bent",
        "niet", "uniek", "die", "praatjes", "verkoop", "je", "maar", "aan", "het", "blije", "festival-publiek", "ja", "doe-maar!", "snel", "voor", "de", "man", "dadelijk", "weer",
        "terugkomt", "en", "er", "niets", "te", "klauwen", "valt", "omdat", "hij", "keihard", "terug", "komt", "ik", "deed", "mn", "ogen", "dicht", "en", "zag", "wat", "als",
        "niet", "als", "ik", "het", "niet", "gedacht", "had", "zo", "corrupt", "als", "ach", "wat", "fuck", "it", "ik", "meteen", "terug", "floot", "die", "zogenaamde",
        "mastermind", "ze", "brain", "terug", "ten", "einde", "raad", "belde", "hij", "kane", "vlug", "dat", "mensen", "honger", "hebben", "hoef", "je", "mij", "niet", "uitleggen",
        "ik", "wilde", "die", "man", "ophooken", "t", "was", "al", "gebeurt", "voordat", "ik", "maar", "iets", "kon", "zeggen", "maar", "ik", "voel", "die", "regelrechte", "shit",
        "net", "zoals", "die", "van", "gangsta-lea", "ik", "wou", "hetzelfde", "vragen", "waar", "is", "die", "echte", "shit?", "mijn", "succes", "is", "bij", "jou", "naar", "je",
        "hoofd", "gestegen", "maat", "je", "bent", "hartstikke", "cool", "dat", "komt", "omdat", "je", "in", "me", "schaduw", "staat", "dus", "houd", "die", "bril", "nou", "op",
        "dan", "zie", "je", "die", "nee-nee", "sticker", "www.werkloos.nl", "nu", "ben", "je", "een", "ww-wigger", "en", "nu", "sta", "je", "naast", "die", "moederneuker", "in",
        "de", "rij", "ey", "yo", "wie", "flopt", "er", "nou", "eerder", "die", "kakelende", "kip", "of", "dat", "ei???", "doorgaan", "gewoon", "doorgaan", "je", "hebt", "best",
        "talent", "alleen", "het", "druipt", "er", "wel", "vanaf", "dat", "jij", "dat", "echt", "nog", "lang", "niet", "bent", "oke?", "en", "nou", "kssssst", "wegwezen", "ik",
        "heb", "nog", "meer", "te", "doen", "stelletje", "mafkezen", "doorgaan", "gewoon", "doorgaan", "net", "als", "een", "onintressant", "balspel", "het", "zal", "wel", "yo",
        "ik", "ken", "dat", "gebral", "wel", "en", "nou", "wegwezen", "en", "neem", "meteen", "die", "maatjes", "van", "je", "mee", "wat", "die", "zijn", "afgewezen", "kom", "nou",
        "die", "is", "gek", "ik", "bedoel", "succes", "hebben", "is", "een", "maar", "arrogant", "worden", "is", "iets", "heeeeeeel", "anders", "je", "weet", "toch?", "en", "als",
        "je", "dan", "ook", "nog", "begint", "te", "lijken", "op", "die", "dronken", "zwerver", "die", "zomaar", "ineens", "het", "verkeer", "begint", "te", "regelen", "midden",
        "op", "een", "druk", "kruispunt", "dan", "zeg", "ik", "kijk", "dan", "ook", "niet", "raar", "op", "als", "je", "voor", "je", "sokken", "wordt", "gereden", "ik", "bedoel",
        "je", "bent", "just", "kiddin", "like", "Hiddink", "maar", "toch", "uhhhhh", "latertje", "da's", "die", "binnenlandse", "funk", "binnenlandse", "funk", "da's", "gewoon",
        "die", "style", "die", "funk", "van", "het", "binnenland", "je", "weet", "je", "weet", "het", "toch?", "da's", "die", "binnenlandse", "funk", "yo", "Extince", "yo",
        "Extince", "yo", "yo", "yo", "Extince", "(4x)", "jawel", "'k", "zweef", "in", "de", "90", "vriend", "de", "regels", "komen", "naar", "je", "toe", "quasi", "nonchalant",
        "en", "zeggen", "wat-waar-hoe?", "maar", "ik", "kijk", "in", "de", "spiegel", "en", "zeg:", "broeder", "hou", "het", "echt?", "maar", "de", "spiegel", "breekt", "en",
        "antwoordt:", "moet", "je", "kijken", "wie", "het", "zegt?", "lichten", "dimmen", "'k", "zie", "je", "velgen", "glimmen", "op", "straat", "krioelt", "het", "van", "de",
        "doe-het-zelvers", "die", "willen", "klimmen", "hongerigen", "komen", "voor", "hun", "buit", "en", "als", "je", "'t", "niet", "begrijpt", "geen", "nood", "logica", "legt",
        "het", "je", "uit", "'t", "is", "de", "binnenlandse", "funk", "mensen", "wat", "gaan", "we", "doen", "hé", "jawel", "wat", "gaan", "we", "doen", "yo", "wat", "gaan", "we",
        "doen", "yo", "wat", "wou", "je", "doen", "yo", "wat", "zou", "je", "doen", "yo", "dit", "is", "die", "binnenlandse", "funk", "schatje", "je", "blijft", "dansen", "hé",
        "jawel", "je", "blijft", "dansen", "yo", "je", "blijft", "dansen", "yo", "weet", "je", "wel", "je", "blijft", "dansen", "grijp", "je", "kansen", "yo", "'k", "ben", "dus",
        "beweeg", "en", "net", "hyper-alerte", "herten", "ja", "wat", "ik", "hoor", "die", "swingende", "thuisproducties", "al", "vanuit", "de", "verte", "de", "p", "zegt", "het",
        "de", "rest", "vecht", "het", "uit", "in", "die", "vrije", "style", "van", "ze", "net", "zolang", "totdat", "je", "baalt", "van", "ze", "de", "klachtenlijn", "is", "voor",
        "mensen", "die", "klagen", "ik", "kijk", "omhoog", "en", "vouw", "m'n", "handen", "voor", "een", "antwoord", "op", "m'n", "vragen", "(zoals)", "zoals", "hoe", "zou", "het",
        "nou", "met", "emni", "zijn?", "of", "yo", "hoe", "kunnen", "bomaanslagen", "nou", "zo", "trendy", "zijn?", "maar", "'t", "is", "de", "binnenlandse", "funk", "broeders",
        "we", "moeten", "verder", "hé", "jawel", "we", "moeten", "verder", "yo", "we", "moeten", "verder", "yo", "hip-hop", "aan", "jou", "blijf", "ik", "zo", "trouw", "als",
        "een", "herder", "yo", "dit", "is", "die", "binnenlandse", "funk", "baby", "gebroken", "wit", "ah", "hé", "jawel", "gebroken", "wit", "yo", "ik", "zeg", "gebroken", "wit",
        "yo", "beschouw", "het", "als", "1-0", "voor", "jezelf", "en", "of", "die", "zit", "yo", "ziezo", "nu", "zeg", "ik", "zwaai", "zwaai", "'k", "ben", "hier", "voor",
        "high-buys", "ik", "heb", "het", "goed", "te", "pakken", "die", "hip-hop", "laat", "me", "niet", "los", "die", "beats", "blijven", "maar", "plakken", "maar", "heel",
        "veel", "mensen", "zien", "alleen", "cijfers", "en", "nummers", "en", "nie'", "zozeer", "de", "06-ers", "of", "de", "yak-yummers", "en", "de", "uitgummers", "schieten",
        "niet", "met", "losse", "flodders", "dus", "ik", "knijp", "'em", "d'r", "tussenuit", "en", "geef", "m'n", "orders", "aan", "een", "snodder", "stap", "uit", "op",
        "centraal", "zoek", "een", "muntje", "bel", "een", "chick", "op", "want", "wat", "ik", "nodig", "heb", "is", "puntje", "puntje", "puntje", "terug", "in", "oosterhout",
        "en", "breedje-da", "memme", "kameraden", "ben", "ik", "super-lauw", "kun", "je", "wel", "raden", "ja", "toch", "samen", "demmen", "die", "trechter", "en", "da'", "maak",
        "nie'", "uit", "hoe", "zwaar", "die", "is", "paffen", "zoveel", "planten", "lijken", "bijna", "vegetariërs", "en", "of", "het", "waar", "is", "ik", "neem", "die",
        "lauwheid", "met", "me", "mee", "in", "de", "studio", "maar", "ik", "wordt", "dinsdag", "zwaar", "gestraft", "door", "hugo", "in", "de", "do", "yo", "en", "zo", "doe",
        "ik", "m'n", "dansshow", "en", "zo", "leer", "ik", "yo", "hip-hoppers", "rotterdammers", "en", "gabbers", "zeg", "nou", "eerlijk", "di's", "de", "binnenlandse", "funk",
        "ah", "ik", "sta", "open", "hé", "jawel", "ik", "sta", "open", "yo", "ik", "sta", "open", "yo", "en", "als", "m'n", "fiets", "gestolen", "is", "dan", "ga", "ik", "lekker",
        "lopen", "yo", "dit", "is", "die", "binnenlandse", "funk", "kindje", "rechtdoor", "ah", "jawel", "we", "gaan", "ervoor", "yo", "en", "komt", "daarbij", "y'all", "een",
        "gutendag", "y'all", "hé", "yo", "wat", "uppes", "yo", "(fawaka's)", "wa's", "nou", "het", "verschil", "tussen", "een", "grote", "stad", "en", "het", "boeren", "gat",
        "net", "wat", "je", "zegt", "je", "hangt", "rond", "je", "praat", "plat", "en", "als", "je", "nie'", "wil", "integreren", "kan", "mij", "nie'", "schelen", "want", "van",
        "het", "hele", "land", "zie", "ik", "alleen", "de", "multiculturele", "kant", "de h + de o dubbel l a n d", "te", "dicht", "bevolkt", "dus",
        "je", "nam", "je", "tweepersoonstent", "mee", "mentree", "zo", "open", "als", "de", "grenzen", "en", "zo", "gesloten", "als", "de", "mensen", "en", "ik", "ken", "ze",
        "hen", "dit", "hier", "dat", "is", "de", "binnenlandse", "funk", "ah", "en", "ik", "heb", "nog", "nooit", "gestemd", "hé", "yo", "wat", "uppes", "yo", "hé", "yo", "hoe",
        "gaat", "'ie", "dan", "ah", "binnenlandse", "funk", "ah", "hé", "yo", "hoe", "gaat", "het", "yo", "wat", "zou", "Extince", "nou", "bedoelen", "wanneer", "die", "zegt",
        "je", "wil", "de", "bramen", "plukken", "maar", "de", "dorens", "zul", "je", "voelen", "da's", "de", "binnenlandse", "funk", "hé", "binnenlandse", "funk", "ah",
        "binnenlandse", "funk", "ah", "binnenlandse", "funk", "voor", "je", "oren", "moet", "je", "horen", "binnenlandse", "funk", "yoyo", "lastige", "vliegen", "zoeken", "de",
        "dichstbijzijnde", "stronthoop", "en", "maak", "een", "noodlanding", "met", "je", "mond", "open", "eyo", "doe", "nou", "niet", "net", "of", "dat", "het", "raar", "smaakt",
        "doe", "nou", "niet", "net", "alsof", "dat", "je", "weet", "hoe", "kaviaar", "smaakt", "je", "komt", "te", "dichtbij", "waarom", "ik", "ben", "een", "rapper", "moet", "ik",
        "nou", "echt", "rond", "gaan", "lopen", "met", "een", "vliegenmepper", "wees", "een", "man", "wees", "verantwoordelijk", "voor", "je", "eigen", "fantasieën", "peter",
        "kops", "gaat", "nooit", "op", "z'n", "knieën", "zie", "je", "last", "van", "fobieën", "ik", "kom", "niet", "met", "z'n", "drieën", "jouw", "uiterlijk", "halen", "doe",
        "ik", "alleen", "misschien", "wel", "zometeen", "maar", "nu", "hang", "ik", "rond", "met", "broeders", "die", "stressbestending", "zijn", "en", "vooral", "behendig",
        "zijn", "in", "het", "lamlendig", "zijn", "zeg", "het", "maar", "scuz", "ik", "hoor", "wat", "je", "zegt", "val", "ik", "van", "de", "atlas", "af", "ik", "tel", "tot",
        "tien", "en", "wie", "niet", "weg", "is", "is", "hier", "zeker", "gezien"
    ];
    //random integer method.
    Lorem.prototype.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    //text creator method with parameters: how many, what
    Lorem.prototype.createText = function(count, type) {
        switch (type) {
            //paragraphs are loads of sentences.
            case Lorem.TYPE.PARAGRAPH:
                var paragraphs = [];
                for (var i = 0; i < count; i++) {
                    var paragraphLength = this.randomInt(10, 20);
                    var paragraph = this.createText(paragraphLength, Lorem.TYPE.SENTENCE);
                    paragraphs.push('<p>'+paragraph+'</p>');
                }
                return paragraphs.join('\n');
                break;
            //sentences are loads of words.
            case Lorem.TYPE.SENTENCE:
                var sentences = [];
                for (var i = 0; i < count; i++) {
                    var sentenceLength = this.randomInt(5, 10);
                    var words = this.createText(sentenceLength, Lorem.TYPE.WORD).split(' ');
                    words[0] = words[0].substr(0, 1).toUpperCase() + words[0].substr(1);
                    var sentence = words.join(' ');

                    sentences.push(sentence);
                }
                return (sentences.join('. ') + '.').replace(/(\.\,|\,\.)/g, '.');
                break;
            //words are words
            case Lorem.TYPE.WORD:
                var wordIndex = this.randomInt(0, Lorem.WORDS.length - count - 1);

                return Lorem.WORDS.slice(wordIndex, wordIndex + count).join(' ').replace(/\.|\,/g, '');
                break;
        }
    };
    Lorem.prototype.createLorem = function(element) {

        var lorem = [];
        var count, type;
        
        if (/\d+-\d+[psw]/.test(this.query)){
            var range = this.query.replace(/[a-z]/,'').split("-");
            count = Math.floor(Math.random() * parseInt(range[1])) + parseInt(range[0]);
        }else{
            count = parseInt(this.query); 
        }
        
        if (/\d+p/.test(this.query)) {
            type = Lorem.TYPE.PARAGRAPH;
        }
        else if (/\d+s/.test(this.query)) {
            type = Lorem.TYPE.SENTENCE;
        }
        else if (/\d+w/.test(this.query)) {
            type = Lorem.TYPE.WORD;
        }

        lorem.push(this.createText(count, type));
        lorem = lorem.join(' ');

        if (element) {
            if (this.type == Lorem.TEXT)
                element.innerHTML += lorem;
            else if (this.type == Lorem.IMAGE) {
                //TODO: for now, using lorempixum.
                var path = '';
                var options = this.query.split(' ');
                if (options[0] == 'gray') {
                    path += '/g';
                    options[0] = '';
                }
                if (element.getAttribute('width'))
                    path += '/' + element.getAttribute('width');

                if (element.getAttribute('height'))
                    path += '/' + element.getAttribute('height');

                path += '/' + options.join(' ').replace(/(^\s+|\s+$)/, '');
                element.src = 'http://lorempixum.com'+path.replace(/\/\//, '/');
            }
        }

        if (element == null)
            return lorem;
    };

    //Register as jQuery
    if (typeof jQuery !== 'undefined') {
        (function($) {
            $.fn.lorem = function() {
                $(this).each(function() {
                    var lorem = new Lorem;
                    lorem.type = $(this).is('img') ? Lorem.IMAGE : Lorem.TEXT;
                    //data-lorem can be taken with data function (thanks to http://forrst.com/people/webking)
                    lorem.query = $(this).data('lorem');
                    lorem.createLorem(this);
                });
            };
        })(jQuery);
    }

})();