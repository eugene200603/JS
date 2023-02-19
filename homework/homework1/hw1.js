document.write('<table>');
for (let i = 1; i < 10; i++) {
    document.write('<tr>');
    for (let j = 2; j < 10; j++) {
        document.write(`<td>${j}*${i}=${i * j}</td>`)
    }
    document.write('</tr>');
}
document.write('</table>');