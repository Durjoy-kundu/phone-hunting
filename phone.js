const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)

    const data = await res.json();
    const phone = data.data;
    //console.log(phone);
    displayPhones(phone);
}

const displayPhones = phone =>{

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    phone.forEach(phone =>{
        
        // create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-5 shadow-xl`;
        //3 : set inner html
        phoneCard.innerHTML = `  <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
          </div>
          `;
          // 4 append child
          phoneContainer.appendChild(phoneCard);
    })
}

// handel search button
const handleSearch = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    
    loadPhone(searchText);
    
}

//loadPhone()