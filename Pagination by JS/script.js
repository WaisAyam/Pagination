const ul = document.querySelector('ul');
let allPages = 15;

function elem(allPages, page){
    let li = '';

    let beforePages = page - 1;
    let afterPages = page + 1;
    let liActive;

    if(page > 1){
        li += `<li class="btn" onclick="elem(allPages, ${page-1})" ><i class="fas fa-angle-left"></i></li>`;
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++){

        if(pageLength > allPages){
            continue;
        }
        if(pageLength == 0){
            pageLength = pageLength + 1;
        }

        if(page == pageLength){
            liActive = 'active';
        }else{
            liActive = '';
        }

        li += `<li class="numb ${liActive}" onclick="elem(allPages, ${pageLength})" ><span>${pageLength}</span></li>`
    }

    if(page < allPages){
        li += `<li class="btn" onclick="elem(allPages, ${page+1})" ><i class="fas fa-angle-right"></i></li>`;
    }

    ul.innerHTML = li;
}
elem(allPages, 2);