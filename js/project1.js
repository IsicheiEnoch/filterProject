let buttons = document.querySelectorAll('.btn');
let storeItems = document.querySelectorAll('.store-item');

buttons.forEach((button) => 
{
    button.addEventListener('click', (a) => 
    {
        a.preventDefault();

        const filter = a.target.dataset.filter;
        
        storeItems.forEach((item) => 
        {
            if(filter === 'all') 
            {item.style.display = 'block';}
            
            else if(item.classList.contains(filter))
            
            {item.style.display = 'block';}
            
            else
            {item.style.display = 'none';} 
        })

    })
})

//Search button
const searchInput = document.querySelector('#search-item');
searchInput.addEventListener('keyup', (a) => {
    const searchFilter = a.target.value.toLowerCase().trim();

    //display only items that contains the filter input
    storeItems.forEach((item) => {
        if(item.textContent.includes(searchFilter)){
            item.style.display = 'block';
            searchInput.style.backgroundColor = 'white';
        }else {
            item.style.display = 'none';
            searchInput.style.backgroundColor = 'red';
        }
    })
});