<template>

<div class="event-card card-img-top my-2 elevation-2 rounded selectable">
    <div>
        <div>
            <img class="img-fluid rounded-top" :src="anime?.image" alt="">
        </div>
    </div>
    <div>
        {{anime?.title}}
    </div>
</div>



</template>
<script>

export default {
props: {anime: {type: Object, required: true}},
setup() {
return {}
}
}
</script>
<style>
</style>