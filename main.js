function checkLibSec() {
    const section = document.getElementById('lib-sec').value.trim().toUpperCase();
    let result = "";

    switch (section) {
      case "F":
        result = "Fiction";
        break;
      case "N":
        result = "Non-Fiction";
        break;
      case "R":
        result = "Reference";
        break;
      default:
        result = "Invalid section, please try again.";
    }

    document.getElementById('result-libsec').innerHTML = result;
  }

 function checkClassSec() {
  let input = document.getElementById('class-sec').value.trim().toLowerCase();

  let result = "";

  // Normalize the input
  switch (input) {
    case "1":
    case "emerald":
    case "1 - emerald":
      result = "9 - Emerald, (Fiction)";
      break;

    case "2":
    case "ruby":
    case "2 - ruby":
      result = "9 - Ruby, (Non-Fiction)";
      break;

    case "3":
    case "sapphire":
    case "3 - sapphire":
      result = "9 - Sapphire, (Reference)";
      break;

    case "4":
    case "topaz":
    case "4 - topaz":
      result = "9 - Topaz, (Reference)";
      break;

    default:
      result = "Invalid section, please try again.";
  }

  document.getElementById('result-classsec').innerHTML = result;
}

  function reloadPage() {
    const confirmRefresh = confirm("Are you sure you want to refresh?");
    if (confirmRefresh) {
      document.getElementById('lib-sec').value = "";
      document.getElementById('result-libsec').innerHTML = "";
      document.getElementById('class-sec').value = "";
      document.getElementById('result-classsec').innerHTML = "";
    }
  }