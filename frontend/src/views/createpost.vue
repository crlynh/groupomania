<script>
import navbar from '../components/navbar.vue'

export default {
    name: 'createpost',
    components: {
        navbar,
    }
}

</script>

<template>
<main>
<navbar></navbar>

<div class="container mt-3 mb-5">
	<div class="d-flex justify-content-center row">
	    

        <div class="border-bottom mt-4">
            <router-link to="/home" class="link-secondary"> 
            <font-awesome-icon icon="fa-solid fa-arrow-left" class="mb-3" />
            </router-link>
        </div>
	    <div class="col-md-8 col-md-offset-2 ">
	        
    		<h1 class="mt-3 mb-4">Nouvelle publication</h1>
    		
    		<form action="" method="POST">
    		    
    		    
    		    <div class="form-group">
    		        <label for="title">Titre <span class="require">*</span></label>
    		        <input type="text" class="form-control" name="title" />
    		    </div>
    		    
    		    <div class="form-group">
    		        <label for="description">Description</label>
    		        <textarea rows="5" class="form-control" name="description" style="resize: none;"></textarea>
    		    </div>
    		    
    		    <div class="form-group mb-2">
    		        <p><span class="require">*</span> - champs obligatoires</p>
    		        <button type="submit" class="btn btn-outline-danger btn-sm">
    		            + Ajouter une image
    		        </button>   
    		    </div>
    		    <div class="form-group  d-flex justify-content-end">
    		        <button type="submit" class="btn btn-danger gradient-custom-2">
                        <font-awesome-icon icon="fa-solid fa-plus" />
    		            Ajouter la publication
    		        </button>
    		    </div>
    		    
    		</form>
		</div>
		
	</div>
</div>

</main>
</template>

<style>

.require {
    color: #666;
}
label small {
    color: #999;
    font-weight: normal;
}
</style>