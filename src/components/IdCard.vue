<template>
    <div id="id-card">
        <p>
            <b>{{ this.$store.state.username }}</b> <br>
            Age: TBA<br>
            Sex: TBA<br>
            Location: TBA<br>
        </p>
    </div>
</template>

<style lang="scss" scoped>
    #id-card {
        box-sizing: border-box;
        background-color: #631b93;
        border-bottom: 1em solid #4c1074;
        border-top: 1em solid #4c1074;
        padding: 0.5em;
        grid-column: 18 / 24;
        grid-row: 1 / 5;
        width: 100%;
    }
</style>