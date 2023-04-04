var rankedUsers = [];
const table = $('.table')

$.ajax({
    type: "POST",
    url: "http://localhost:7777/f1/api/v1/users/leaderboard",
    dataType: "JSON",
    complete: function (res) {
        console.log(res);
        rankedUsers = res.responseJSON;

        console.log(rankedUsers);

        rankedUsers.forEach(element => {
            table.append(`<tr>
                    <th scope="row">` + element.rank + `</th>
                    <td>` + element.name + `</td>
                    <td>` + element.points + `</td>
                </tr>`)
        });
    }
});

