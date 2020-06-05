<template>
  <div :class="$style.FlowCard">
    <h3>{{ $t('新型コロナウイルス感染症にかかる相談窓口について') }}</h3>
    <div :class="[$style.Outer, $style.OuterUpper]">
      <div :class="[$style.ContentBlock, $style.Content1]">相談の目安</div>
      <div :class="[$style.ContentBlock, $style.Content2]">相談窓口</div>
      <div :class="[$style.CardBlock, $style.Contact]">
        <div :class="[$style.CardBlockInner]">
          <flow-pc-contact />
        </div>
      </div>
      <div :class="[$style.CardBlock, $style.Elder]">
        <div :class="[$style.CardBlockInner]">
          <flow-pc-elder />
        </div>
      </div>
      <div :class="[$style.CardBlock, $style.General]">
        <div :class="[$style.CardBlockInner]">
          <flow-pc-general />
        </div>
      </div>
      <div :class="[$style.CardBlock, $style.Suspect]">
        <div :class="[$style.CardBlockInner]">
          <flow-pc-suspect />
        </div>
      </div>
      <div :class="$style.Advisory">
        <flow-pc-advisory />
      </div>
    </div>
  </div>
</template>

<script>
import FlowPcContact from './FlowPcContact.vue'
import FlowPcElder from './FlowPcElder.vue'
import FlowPcGeneral from './FlowPcGeneral.vue'
import FlowPcSuspect from './FlowPcSuspect.vue'
import FlowPcAdvisory from './FlowPcAdvisory.vue'

export default {
  components: {
    FlowPcContact,
    FlowPcElder,
    FlowPcGeneral,
    FlowPcSuspect,
    FlowPcAdvisory
  }
}
</script>

<style module lang="scss">
.FlowCard {
  display: flex;
  flex-direction: column;

  @include card-container();

  padding: 20px;
  margin-bottom: 20px;
  word-break: break-word;
  hyphens: auto;

  > h3 {
    color: $gray-2;
    font-size: 1.5rem;
    margin-bottom: 7px;
  }

  &GrayBg {
    background-color: $gray-5;
  }
}

.Outer {
  $grid-gap: 12px;

  display: grid;

  &Upper {
    grid-gap: $grid-gap;
    grid-template-columns: 70% 30%;
    -ms-grid-columns: 70% 12px 30%;
    grid-template-rows: repeat(5, auto);
    -ms-grid-rows: auto 12px auto 12px auto 12px auto 12px auto;
//    grid-template-rows: auto 1fr;
//    -ms-grid-rows: auto 12px 1fr;
    // HACK: IEでGridの順番がうまくいかない対応
    // https://github.com/tokyo-metropolitan-gov/covid19/issues/1313
    & > *:nth-child(1) {
      -ms-grid-column: 1;
      -ms-grid-row: 1;
    }

    & > *:nth-child(2) {
      -ms-grid-column: 3;
      -ms-grid-row: 1;
    }

    & > *:nth-child(3) {
      -ms-grid-column: 1;
      -ms-grid-row: 3;
    }

    & > *:nth-child(4) {
      -ms-grid-column: 1;
      -ms-grid-row: 5;
    }
    
    & > *:nth-child(5) {
      -ms-grid-column: 1;
      -ms-grid-row: 7;
    }
    
    & > *:nth-child(6) {
      -ms-grid-column: 1;
      -ms-grid-row: 9;
    }

    & > *:nth-child(7) {
      -ms-grid-column: 3;
      -ms-grid-row: 3;
      -ms-grid-row-span: 7;
    }
  }
}

.Title {
  @include font-size(28);

  color: $green-1;

  &Small {
    @include font-size(20);
  }

  &Large {
    @include font-size(28);
  }
}

.ContentBlock {
    background: $green-3;
    padding: 10px 10px;
    text-align: center;
    font-weight: bold;
    border-radius: 4px;
    color: $white;
    font-size: 1.5em;
}

.CardBlock {
  &Inner {
    position: relative;
  }

  &Icon1 {
    position: absolute;
    bottom: 14%;
    right: -25px;
    z-index: 1;
  }

  &Icon2 {
    position: absolute;
    bottom: 50%;
    right: -25px;
    z-index: 1;
  }

  &Icon3 {
    position: absolute;
    bottom: 50%;
    right: -25px;
    z-index: 1;
  }

  &Icon4 {
    position: absolute;
    bottom: 26%;
    right: -25px;
    z-index: 1;
  }
}

.Content1 {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.Content2 {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.Contact {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.Elder {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}

.General {
  grid-column: 1 / 2;
  grid-row: 4 / 5;
}

.Suspect {
  grid-column: 1 / 2;
  grid-row: 5 / 6;
}

.Advisory {
  grid-column: 2 / 3;
  grid-row: 2 / 6;
  position: relative;
}
</style>
