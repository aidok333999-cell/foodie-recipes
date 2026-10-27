const CATEGORIES = ['Breakfast','Pasta','Salads','Soups','Chicken','Seafood','Vegetarian','Vegan','Desserts','Baking','Drinks','Snacks'];
function lines(text) { return text.split('\n').map(x=>x.trim()).filter(Boolean); }
function validate(draft) {
  if (!draft.name.trim()) return 'Please enter a recipe name.';
  if (!draft.image) return 'Please upload a recipe photo.';
  if (!lines(draft.ingredients).length) return 'Add at least one ingredient.';
  if (!lines(draft.instructions).length) return 'Add at least one instruction.';
  if (![draft.time,draft.servings,draft.calories].every(v=>Number.isFinite(Number(v)) && Number(v)>0)) return 'Time, servings and calories must be positive numbers.';
  if (!Number.isInteger(Number(draft.servings))) return 'Servings must be a whole number.';
  return null;
}
function saveRecipe(recipes, draft, id) {
  const error=validate(draft); if(error) throw new Error(error);
  const recipe={...draft,id,name:draft.name.trim(),ingredients:lines(draft.ingredients),instructions:lines(draft.instructions),time:Number(draft.time),servings:Number(draft.servings),calories:Number(draft.calories),custom:true};
  return recipes.some(r=>r.id===id)?recipes.map(r=>r.id===id?recipe:r):[recipe,...recipes];
}
function toggleFavorite(ids,id) { return ids.includes(id)?ids.filter(x=>x!==id):[...ids,id]; }
function removeRecipe(state,id) { return {...state,recipes:state.recipes.filter(r=>r.id!==id),favorites:state.favorites.filter(x=>x!==id)}; }
function filterRecipes(recipes,category,query='') { return recipes.filter(r=>(category==='All'||category==='My Food'&&r.custom||r.category===category)&&(`${r.name} ${r.ingredients.join(' ')}`).toLowerCase().includes(query.toLowerCase())); }
module.exports={CATEGORIES,lines,validate,saveRecipe,toggleFavorite,removeRecipe,filterRecipes};
