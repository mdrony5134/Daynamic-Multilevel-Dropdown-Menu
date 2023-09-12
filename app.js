const array = [
   { option: 'School', subOption: ['Ideal School', 'Government Laboratory', 'Comilla Zilla School'] },
   { option: 'College', subOption: ['Notre Dame College', 'Milestone College', 'Dhaka City College'] },
   { option: 'Skill', subOption: ['Frontend Developer', 'Software Developer', 'Database Specialist'] },
];

const dropdownOptions = document.getElementById('dropdownOptions');

function toggleDropdown(){
   const dropdown = document.getElementById('dropdown');
   dropdown.classList.toggle('active')
}


function toggleSubmenu(event){
   const submenu = event.target.nextElementSibling;
   submenu.classList.toggle('active');
}


array.map((value)=>{
   const optionItem = document.createElement('div');
   const optionLink = document.createElement('a');
   optionLink.href = '#';
   optionLink.innerText = value.option;
   optionItem.appendChild(optionLink);

   optionLink.onclick = function(event){
      toggleSubmenu(event);
      event.preventDefault();
   }
  

   const subOptions = document.createElement('div');
   subOptions.className = 'sub-options';
   value.subOption.map((subOp)=>{
      const subOptionLink = document.createElement('a');
      subOptionLink.href = '#';
      subOptionLink.innerText = subOp;
      subOptions.appendChild(subOptionLink);
   });

   dropdownOptions.appendChild(optionItem);
   optionItem.appendChild(subOptions);

});


