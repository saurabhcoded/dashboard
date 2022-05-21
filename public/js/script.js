const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i => {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#sidebar .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})


const links = document.querySelectorAll("#sidebar ul a");


// ----search---
function mySearch() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("table");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

// date sort 
function convertDate(d) {
	var p = d.split("/");
	return +(p[2]+p[1]+p[0]);
  }
  
  function sortByDate() {
	var tbody = document.querySelector("#table tbody");
	// get trs as array for ease of use
	var rows = [].slice.call(tbody.querySelectorAll("tr"));
	
	rows.sort(function(a,b) {
	  return convertDate(a.cells[4].innerHTML) - convertDate(b.cells[4].innerHTML);
	});
	rows.forEach(function(v) {
	  tbody.appendChild(v); // note that .appendChild() *moves* elements
	});
  }

  document.querySelector("#sort").addEventListener("click", sortByDate);

  
  