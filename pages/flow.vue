<template>
  <div class="Flow">
    <div class="Flow-Heading">
      <CovidIcon aria-hidden="true" />
      <page-header class="Flow-Heading-Title">
        {{ $t('新型コロナウイルス感染症が心配なときに') }}
      </page-header>
    </div>
    <div>
      <div class="only-pc" aria-hidden="true">
        <flow-pc />
      </div>
      <div class="only-sp">
        <flow-sp />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import CovidIcon from '@/static/covid.svg'
import FlowPc from '@/components/flow/FlowPc.vue'
import FlowSp from '@/components/flow/FlowSp.vue'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    CovidIcon,
    PageHeader,
    FlowPc,
    FlowSp
  },
  head(): any {
    const title: TranslateResult = this.$t(
      '新型コロナウイルス感染症が心配なときに'
    )
    return {
      title
    }
  }
})
</script>

<style lang="scss">
.Flow {
  margin-bottom: 20px;

  &-Heading {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    > svg {
      width: 30px;
      height: 30px;

      > path:not(:first-of-type) {
        fill: $gray-2;
      }
    }

    &-Title {
      margin-left: 8px;
    }
  }

  &-PullRight {
    margin: 0 0 0 auto;
  }
}

@include largerThan($medium) {
  .only-sp {
    @include visually-hidden;
  }

  .only-pc {
    display: block;
  }
}

@include lessThan($medium) {
  .only-pc {
    display: none;
  }
}
</style>
