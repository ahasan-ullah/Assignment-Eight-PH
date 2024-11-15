const getStoredList=(btn)=>{
  const storedListStr=localStorage.getItem(`${btn}`);
  if(storedListStr){
    const storedList=JSON.parse(storedListStr);
    return storedList;
  }
  else{
    return [];
  }
}

const clearStoredList = (btn) => {
  localStorage.removeItem(btn);
};

const addToStoredList=(id,btn)=>{
  const storedList=getStoredList(btn);
  if(storedList.includes(id) && btn==='wish-list'){
    alert('Product already wishlisted');
  }
  else{
    storedList.push(id);
    const storedListStr=JSON.stringify(storedList);
    localStorage.setItem(`${btn}`,storedListStr);
  }
}

const addToPurchaseList=(cartList)=>{
  console.log(cartList);
  const storedList=getStoredList('purchase');
  storedList.push(cartList.map((p)=>p.product_id));
  const normalArray=storedList.flat();
  const storedListStr=JSON.stringify(normalArray);
  localStorage.setItem('purchase',storedListStr);
}

export {addToStoredList,getStoredList,clearStoredList,addToPurchaseList};