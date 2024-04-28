<template>
  <button 
    class="btn"
    :class="theme"
  >
      <slot></slot>
    </button>
</template>
  
<script>
  export default {
    name: 'my-button',
    props: {
      theme: {
        type: String
      },
      someVariable: {
        type: Boolean
      }
    }
  }
</script>
  
<style scoped>

  .btn-primary {
    color: var(--white);
    background-color: var(--primary);
    border-color: var(--primary);
  }

  .btn-primary:hover {
    color: var(--white);
    background-color: var(--primary-hover);
    border-color: var(--primary-hover);
  }

  .btn-secondary {
    color: var(--dark);
    background-color: var(--secondary);
    border-color: var(--secondary);
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
  }

  .btn-secondary:hover {
    color: var(--dark);
    background-color: var(--secondary);
    border-color: var(--secondary);
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
  }

  .btn-outlined {
    color: var(--primary);
    background-color: var(--white);
    border-color: var(--primary);
    box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08);
  }

  .btn-outlined:hover {
    color: var(--white);
    background-color: var(--primary-hover);
    border-color: var(--primary-hover);
  }

  .btn-red {
    color: var(--danger);
    background-color: var(--white);
    border-color: var(--danger);
  }

  .btn-red:hover {
    color: var(--white);
    background-color: var(--danger);
    border-color: var(--danger);
  }


</style>
