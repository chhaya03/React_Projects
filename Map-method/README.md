# React + Vite

<h1> Map Method</h1> <br>

<ol>
  <li>Purpose: Render lists from array data.</li><br>
 <li>JSX Elements: Transform array items into JSX.</li><br>
 <li>Inline Rendering: Directly inside JSX <br> {items.map(item => <li key={item.id}>{item.name}</li>)}</li><br>
<li>Key Prop: Assign unique key for optimized re-renders. <br> <div key={item.id}>{item.name}</div></li><br>
</ol>
