const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const descriptionElement = document.getElementById('description')
const descriptionLivello = document.getElementById('livello')

let shuffledQuestions, currentQuestionIndex, level
descriptionElement.innerText = 'La Divina CommedIA\nTroverai nella prossima schermata due testi: uno sarà un estratto della Commedia di Dante, l\'altro sarà invece un testo generato da un\'Intelligenza Artificiale alla quale ho insegnato a scrivere come il Sommo Poeta.\nIl tuo compito sarà quello di riconoscere il testo originale.\nBuona fortuna!\n'

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  descriptionElement.classList.add('hide')
  descriptionLivello.classList.remove('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  level = 1
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  descriptionLivello.innerText = level + " di 5"
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (currentQuestionIndex < 4) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Prova di nuovo'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'Così facieno i padri di coloro\nche, sempre che la vostra chiesa vaca,\nsi fanno grassi stando a consistoro.\nL oltracotata schiatta che si indraca\ndietro a chi fugge, e a chi mostra il dente\no ver la borsa, come agnel si placa,\ngià venìa sù, ma di picciola gente;', correct: true },
      { text: 'L’e corpo si fece in lui: <<Se tu vedrai\nche di corpe in terra schiara stanti,\ne l altro che tutto a la sua concessa,\ncon l altro che tu con la cira stanti>>.\nCosì mi fece si punisce l carro,\ne con le man fiera che presso al mono,\nche di conte a la virtù di quella schera.', correct: false }
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'a che ritorna equale.\nque\’ glorïosi che passaro al piè de altro.\npoco così, sì che non predutuò altro:\nha novi avante che \'l tempo è la riva,\nma tal mutare a te maraviglia\nche poglia per clello in su e troppo tardo.\nben redutl è beatricia, quando sanza refori;\ni dar l\'igomo le di questi che guece».\nquel seme ricolta tanto che per vole,', correct: false },
      { text: 'quindi fu\' io; ma li profondi fóri\nond\’ uscì \'l sangue in sul quale io sedea,\nfatti mi fuoro in grembo a li antenori,\nlà dov\' io più sicuro esser credea:\nquel da esti il fé far, che m\'avea in ira\nassai più là che dritto non volea.\nma s\'io fosse fuggito inver\' la mira,\nquando fu\' sovragiunto ad orïaco,\nancor sarei di là dove si spira.', correct: true },
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'ne\' quali \'l doloroso foco casca,\nnon ne conobbi alcun; ma io m\'accorsi\nche dal collo a ciascun pendea una tasca\nch\’avea certo colore e certo segno,\ne quindi par che \'l loro occhio si pasca.', correct: true },
      { text: 'el mi parea da sé stesso rimorso:\no dignito e altro suo genti ponte;\ngoira che per la regna di sopra bene;\ne serpenza, sì che tu dentro ascesta,\ntanto vidi già veggi che \'l grazza\ndi larron disser: «che sanz\' altro si ragu\' me\nquella la virtù dinanzi al cielo».', correct: false },
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'ed elli a me: «la mia scrittura è piana;\ne la speranza di costor non falla,\nse ben si guarda con la mente sana;\nché cima di giudicio non s\'avvalla\nperché foco d\'amor compia in un punto\nciò che de\' sodisfar chi qui s\'astalla;\ne là dov\' io fermai cotesto punto,\nnon s\'ammendava, per pregar, difetto,\nperché \'l priego da dio era disgiunto.', correct: true },
      { text: 'così l\'occhio mia sentiva giunto,\nche \'l pozzo suo poccetà da le fiamme accellesta.\nio estai, a la morta natura cosa\nvid\’ io parlando, vien comi chi sedere.\ntorna ch\'i\' scioggiò che dio solle\nch\’io vidi quanto argominai con volga è scuotte,\ntal che s\'i\' fei muta mi si vali e fi.', correct: false }
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'pria lei misere in destra scardenza\nmen si seder benenza volta incomina.\nsenatterreno ad esser colui dimandare intende,\ncrede la novilla calarima e mecchia\ncalar con la dolce vidi che l\'occhia,\ncolui che dice, perché archia, che creda:\nse sì come son per cosa tutta \'l mondo,\ncome ciascun, da le vita del fondo:', correct: false },
      { text: 'oro e argento fine, cocco e biacca,\nindaco, legno lucido e sereno,\nfresco smeraldo in l\'ora che si fiacca,\nda l\'erba e da li fior, dentr\' a quel seno\nposti, ciascun saria di color vinto,\ncome dal suo maggiore è vinto il meno.', correct: true },
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'era già l\'ora che volge il disio\nai navicanti e \'ntenerisce il core\nlo dì c\'han detto ai dolci amici addio;\ne che lo novo peregrin d\'amore\npunge, se ode squilla di lontano', correct: false },
      { text: 'andaro, vien come a le sue belle\nde la famisa, che poi sodretto il collo\nche si purga la marte speranza,\ndiramone il maestro e dicer porti\nche sovra la mia donna ora che si feo', correct: true },
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'così facieno i padri di coloro\na vica, e discendendo, di nona rota;\ne di rinesser la mia donna rivolse\nper mai di metto di color condotto\nrisposto in più a meggio in faltro scori.', correct: false },
      { text: 'noi repetiam pigmalïon allotta,\ncui traditore e ladro e paricida fece la voglia sua de l\'oro ghiotta;\ne la miseria de l\'avaro mida,\nche seguì a la sua dimanda gorda,\nper la qual sempre convien che si rida.', correct: true }
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'del folle acàn ciascun poi si ricorda,\ncome furò le spoglie, sì che l\'ira di iosüè qui par ch\'ancor lo morda.\nindi accusiam col marito saffira;', correct: true },
      { text: 'più lunto che l\'altra provede\ndi quella ch\'è di ragio fello, per lo sol contra.\ndui non so segue in su la mia dovr\'ol beni,\ne sempre si raguata non presti.', correct: false }
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'così l\'altre cornicato d\'un veso\ne dal primo a lui che fa la prima fiamma;\ne fra canto di quel che cose brama,\npredi sùbito a coi tutte quanto.', correct: false },
      { text: 'or sappi ch\'avarizia fu partita\ntroppo da me, e questa dismisura\nmigliaia di lunari hanno punita.\ne se non fosse ch\'io drizzai mia cura,\nquand\’ io intesi là dove tu chiame,', correct: true }
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'poscia che s\'approdo che \'l mondo il collo\nsuoi non che si chiare di rine schiedi.\nnon però che sempre posto il collo\ncol mio montando e \'l solen de la frenda.', correct: false },
      { text: 'crucciato quasi a l\'umana natura:\n\’per che non reggi tu, o sacra fame\nde l\'oro, l\'appetito de\' mortali?\',\nvoltando sentirei le giostre grame.', correct: true }
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'tu se\' omai del maggior punto certo;\nma perché santa chiesa in ciò dispensa,\nche par contra lo ver ch\'i\' t\'ho scoverto,\nconvienti ancor sedere un poco a mensa,', correct: true },
      { text: 'che si fredda or di color che più s\'approna,\nsì com\' io che mi puosestri suoi\ndi quella chi era la mente mia vistra;', correct: false }
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'la mia donna onde bista sovra \'l gile,\nche l\'unate che tu muoi non so mi scemi;\ne se tu sotti questi non si segue\nlo colui che muoverre e di noi ti stimo,\ne di pocchi a me, sì che \'l capren serente.', correct: false },
      { text: 'ma non trasmuti carco a la sua spalla\nper suo arbitrio alcun, sanza la volta\ne de la chiave bianca e de la gialla;\ne ogne permutanza credi stolta,\nse la cosa dimessa in la sorpresa\ncome \'l quattro nel sei non è raccolta.', correct: true }
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: '«io veggio ben sì come tu t\'annidi\nnel proprio lume, e che de li occhi il traggi,\nperch\’ e\' corusca sì come tu ridi;\nma non so chi tu se\', né perché aggi,\nanima degna, il grado de la spera\nche si vela a\' mortai con altrui raggi».', correct: true },
      { text: 'li suoi dove regno al gio mio presi\nonde così felica in su la cosa,\nsì come specchia ma sanza tresta\ncon come al paprardore, che tu se\' questi', correct: false }
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'tu dietro, disse: «se quel che tu de\' rivolsi\nper la cosa da lei venubi la canna\ndi quella ch\'a quella vitale misera indi spira.\nomai come a la mia dovr\'ol ben convesti,\nche la maggiare in su la cosa».', correct: false },
      { text: 'onde l\'umana specie inferma giacque\ngiù per secoli molti in grande errore,\nfin ch\'al verbo di dio discender piacque\nu\’ la natura, che dal suo fattore\ns\’era allungata, unì a sé in persona\ncon l\'atto sol del suo etterno amore.', correct: true }
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'tu vuo\' saper chi è in questa lumera\nche qui appresso me così scintilla\ncome raggio di sole in acqua mera.\nor sappi che là entro si tranquilla', correct: true },
      { text: 'questo le cigliei: «perché vai si specchi».\nma vid\' io color che si corne fece\ngiotache i fuori e la bocca tacer lonni,', correct: false }
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'eddo tempo, a schiera larga e piena,\ncosì quel che fu più ti perché predi\nla mente che sempre l\'alta spera,\nposcia che non so che sempre parve feri.', correct: false },
      { text: 'mia mente unita in più cose divise.\nio vidi più folgór vivi e vincenti\nfar di noi centro e di sé far corona,\npiù dolci in voce che in vista lucenti:', correct: true }
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'né fu per fantasia già mai compreso;\nch\’io vidi e anche udi\' parlar lo rostro,\ne sonar ne la voce e «io» e «mio»,\nquand\’ era nel concetto e \'noi\' e \'nostro\'.', correct: true },
      { text: 'or sovra la mia mersura fortuna\ndi verdeti va lì per lo stratto in più also,\nper che, se tu ripocio, che per le cime\nde l\'inferno, e poi si tessi non s\'apravi.', correct: false }
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'poscia che non potea tutte questi\nche si stesta melo, sotto il color discende,\nse l\'umandolscia di color che si specchi\nardar più tosto di sua merata foni;', correct: false },
      { text: 'quelle tre donne li fur per battesmo\nche tu vedesti da la destra rota,\ndinanzi al battezzar più d\'un millesmo.\no predestinazion, quanto remota', correct: true }
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'vedrai come a costui convien che vada\nda l\'un, quando a colui da l\'altro fianco,\nse lo \'ntelletto tuo ben chiaro bada».\n«certo, maestro mio», diss\' io, «unquanco\nnon vid\' io chiaro sì com\' io discerno', correct: true },
      { text: 'ed elli a me: «io sentittero ando:\nperò non fu\' il seguardone di quella\nnovi in su la cosa novo suo passo:\nlo becco per lo ove la via farchia\nper mai di color, che più si segue\nlo che dio fanno i ripasser concette».', correct: false }
    ]
  },
  {
    question: 'Qual è il testo originale??',
    answers: [
      { text: 'porgevan de la pace e de l\'ardore\nch\’elli acquistavan ventilando il fianco.\nné l\'interporsi tra \'l disopra e \'l fiore\ndi tanta moltitudine volante\nimpediva la vista e lo splendore:\nché la luce divina è penetrante', correct: true },
      { text: 'per l\'universo secondo ch\'è degno,\nsì che nulla le puote essere ostante.\nquesto sicuro e gaudïoso regno,\nfrequente in gente antica e in novella,\nviso e amore avea tutto ad un segno.\noh trina luce che \'n unica stella', correct: true } //true-false
    ]
  }
]
