
1) Add HTML embeb before submit code of "forms.html"
https://github.com/The-Branx/forms/blob/main/forms.html

2) Replace retURL input value with the succesfull route that will be added to the domain where the user submits the form from. E.G
[PLEASE ENTER ROUTE OR PARAMETER HERE] -> /startup/success OR /startup?success=true

2) Call forms.js, add this code to before </body> tag
<script src="https://cdn.jsdelivr.net/gh/The-Branx/forms@main/forms.min.js"></script>