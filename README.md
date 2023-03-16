
1) Add HTML embeb before submit code of "forms.html"
https://github.com/The-Branx/forms/blob/main/forms.html

2) Replace retURL input value with the succesfull route that will be added to the current url
// <input type="hidden" name="retURL" value="[PLEASE ENTER ROUTE OR PARAMETER HERE]">
TO
// <input type="hidden" name="retURL" value="/success">
OR
// <input type="hidden" name="retURL" value="?success=true">


2) Call forms.js, add this code to before </body> tag
<script src="https://cdn.jsdelivr.net/gh/The-Branx/forms/forms.min.js"></script>

