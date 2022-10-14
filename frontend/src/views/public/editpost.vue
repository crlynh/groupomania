<script>
import navbar from '../../components/navbar.vue'
import { mapState } from 'vuex';

import Axios from 'axios'
import {useRoute} from "vue-router";

export default {
    name: 'editPost',
    props: ['postId'],
    components: {
        navbar,
    },
    data() {
		return {
			formData: {},
		};
	},

    // setup(){
    //     const route = useRoute();
    //     const postId = route.params.id;
    //     console.log(postId)
    // },

	computed: {
    	...mapState(['status']),  
		validatedFields() {
			if (this.formData.title !== "" && this.formData.titleError !== true) {
            	return true
			} else {
            return false
			}
    	},
	},

	methods: {
        editPost() {
			const token = this.$store.state.user.token
            let postId = this.formData._id
			console.log(this.formData)
			Axios.put('http://localhost:3000/api/post/'+postId, {
				title : this.formData.title,
				description : this.formData.description,
			}, {
				headers: {
					'Authorization': `Basic ${token}`,
				},   				
			})
			.then((res) => {
				this.$router.push("/home")
			})
			.catch(err => console.log(err.message))
        },
	},

    mounted(){
		const token = this.$store.state.user.token;
        const route = useRoute();
        let postId = route.params.id;
        Axios.get('http://localhost:3000/api/post/'+postId, {
			headers: {
				['Authorization']: `Basic ${token}`,
			},   
		})
        .then(res => this.formData = res.data)
        .catch(err => console.log(err))
    }, 
}

</script>

<template>
<main>
<navbar></navbar>

<div class="container mt-3 mb-5" >
	<div class="d-flex justify-content-center row">

<!------------ Back to home page ------------>
        <div class="border-bottom mt-4">
            <router-link to="/home" class="link-secondary"> 
            <font-awesome-icon icon="fa-solid fa-arrow-left" class="mb-3" />
            </router-link>
        </div>
<!------------ Back to home page ------------>		

		<div class="col-md-8 col-md-offset-2 ">
    		<h1 class="mt-3 mb-4">Modifier la publication</h1>
    		
    		<form @submit.prevent="editPost">
    		    
    		    <div class="form-group">
    		        <label for="title">Titre <span class="require">*</span></label>
    		        <input 
					type="text" 
					class="form-control"
					id="title" 
					v-model="formData.title"
					required
					@focusout="isTitleValid"
					/>
					<p class="font-italic" v-if="formData.titleError">Le titre est obligatoire et doit contenir entre 3 et 50 caractères</p>
    		    </div>
    		    
    		    <div class="form-group">
    		        <label for="description">Description</label>
    		        <textarea 
					rows="5" 
					class="form-control" 
					id="description"
					v-model="formData.description"
					@focusout="isDescriptionValid"					 
					style="resize: none;">
					</textarea>
    		    </div>
    		    
    		    <div class="form-group mb-2">
    		        <p><span class="require">*</span> - champs obligatoires</p>
    		        <label for="file" class="btn btn-outline-danger btn-sm" >
						<font-awesome-icon icon="fa-solid fa-plus" /> Choisir un fichier
    		        </label>   
					<input 
						type="file"
						accept="image/*, video/*"
						class="input-file"
						id="file"
						@change="uploadFiles($event.target.files)"
					/>
    		    </div>
    		    <div class="form-group  d-flex justify-content-end">
    		        <button 
					type="submit" 
					:disabled="!validatedFields" 
					class="btn btn-danger gradient-custom-2"
					:class="{'button-disabled' : !validatedFields}"
                    @click="editPost()"
					>
                        Modifier la publication
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

p {
	color: black;
}

.input-file {
    display: none;
}

</style>