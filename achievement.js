var firebaseConfig = {
    apiKey: "AIzaSyBdGyFFu2dW22HUyNr1khfvgwFEDMBTUd4",
    authDomain: "virendra-sehwag.firebaseapp.com",
    databaseURL: "https://virendra-sehwag-default-rtdb.firebaseio.com",
    projectId: "virendra-sehwag",
    storageBucket: "virendra-sehwag.appspot.com",
    messagingSenderId: "94876524791",
    appId: "1:94876524791:web:438f2ff643c9760a5c33f2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  document.getElementById('datavalue').addEventListener('submit',submitForm);
  function submitForm(e){
      e.preventDefault();
      var year =getInputVal('year');
      readState(year);
  }
      function getInputVal(id){
      return document.getElementById(id).value;
  }
  
      
  
      
    
  function readState(year){
    var centers;
    var ref = firebase.database().ref(year);
    ref.on('value', (data) => {
     centers = data.val();
     document.getElementById("result1").value = centers.toUpperCase();
      for(i=0; i<100; i++) {
    // Random rotation
    var randomRotation = Math.floor(Math.random() * 360);
      // Random Scale
    var randomScale = Math.random() * 1;
    // Random width & height between 0 and viewport
    var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
    var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));
    
    // Random animation-delay
    var randomAnimationDelay = Math.floor(Math.random() * 15);
    console.log(randomAnimationDelay);
  
    // Random colors
    var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Create confetti piece
    var confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.top=randomHeight + 'px';
    confetti.style.right=randomWidth + 'px';
    confetti.style.backgroundColor=randomColor;
    // confetti.style.transform='scale(' + randomScale + ')';
    confetti.style.obacity=randomScale;
    confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
    confetti.style.animationDelay=randomAnimationDelay + 's';
    document.getElementById("confetti-wrapper").appendChild(confetti);
  }
    })
}
