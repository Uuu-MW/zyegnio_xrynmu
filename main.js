var printing_order = [
	["a", ["", "r", "i", "u", "ru", "y"]],
	["e", ["", "r", "i", "ri", "u", "ru", "y", "ry"]],
	["∅", ["i", "ri", "y", "ry"]],
	["o", ["", "r", "i", "y"]],
	["u", ["u", "y"]],
	["ə", ["", "i", "u", "ry"]]
];

function getRow(isBase, end) {
	var str = "<tr>" + "<td>-" + end + "</td>";

	for (var i = 0; i < printing_order.length; i++) {
		str += foo(
			isBase,
			printing_order[i][0],
			printing_order[i][1],
			end,
			get_section
		);
	}

	return str + "</tr>";
}

var first_row = {
	a: '<td colspan="6"><span class="main">a</span></td>',
	e: '<td colspan="8"><span class="main">e</span></td>',
	"∅":
		'<td colspan="4"><span class="kaihom">介i</span>+<span class="main">主∅</span></td>',
	o: '<td colspan="4"><span class="main">o</span></td>',
	u:
		'<td colspan="2"><span class="kaihom">介u</span>+<span class="main">主u</span></td>',
	ə: '<td colspan="4"><span class="main">ə</span></td>'
};

function generate(id, isBase) {
	var str = '<table id="' + id + '" border="1"><tr><td></td>';
	for (var i = 0; i < printing_order.length; i++) {
		str += first_row[printing_order[i][0]];
	}

	str += "</tr><tr><td></td>";

	for (var i = 0; i < printing_order.length; i++) {
		str += getKaihomRow(printing_order[i][1]);
	}

	str += "</tr>";

	var ends = ["", "i", "n", "t", "u", "m", "p", "ŋ", "k"];

	for (var i = 0; i < ends.length; i++) {
		str += getRow(isBase, ends[i]);
	}

	str += "</table>";
	document.write(str);
}
