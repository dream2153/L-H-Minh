function giaiPhuongTrinh() {
  
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    if (a === 0) {
      
      if (b === 0) {
        document.getElementById("ketqua").innerHTML = "Phương trình vô số nghiệm";
      } else {
        document.getElementById("ketqua").innerHTML = "Phương trình vô nghiệm";
      }
      return;
    }
    const nghiem = -b / a;
    document.getElementById("ketqua").innerHTML = `Nghiệm của phương trình ${a}x + ${b} = 0 là: ${nghiem}`;
  }