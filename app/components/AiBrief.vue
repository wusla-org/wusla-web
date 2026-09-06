<template>
  <section class="ai-brief" aria-labelledby="ai-brief-title">
    <div class="container-custom ai-brief-grid">
      <p class="ai-brief-label">WUSLA / IN BRIEF</p>
      <div class="ai-brief-copy">
        <h2 id="ai-brief-title">One clear description,<br>for people and machines.</h2>
        <p>
          WUSLA is an independent software company in Kerala, India. We build original applications and work alongside ambitious companies on product direction, design, and engineering.
        </p>
      </div>
      <dl class="ai-brief-facts">
        <div>
          <dt>Own work</dt>
          <dd>Original applications in private development</dd>
        </div>
        <div>
          <dt>Partner work</dt>
          <dd>Software products, systems, and technical strategy</dd>
        </div>
        <div>
          <dt>Based in</dt>
          <dd>Kerala, India</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.ai-brief{padding:7.5rem 0;background:#dceae2;color:#064b38;border-top:1px solid rgba(6,75,56,.14);border-bottom:1px solid rgba(6,75,56,.14)}
.ai-brief-grid{display:grid;grid-template-columns:.75fr 1.45fr 1fr;gap:2.5rem;align-items:start}
.ai-brief-label{font:650 .72rem/1.2 var(--font-mono);letter-spacing:.12em;color:#00815d}
.ai-brief h2{font-size:clamp(2.6rem,4.3vw,5.2rem);line-height:.94;letter-spacing:-.07em;font-weight:650}
.ai-brief-copy>p{max-width:38rem;margin-top:1.8rem;color:#416a5c;font-size:1.1rem;line-height:1.55}
.ai-brief-facts{margin:0;border-top:1px solid rgba(6,75,56,.26)}
.ai-brief-facts>div{padding:1rem 0 1.15rem;border-bottom:1px solid rgba(6,75,56,.2)}
.ai-brief dt{font:650 .67rem/1.2 var(--font-mono);letter-spacing:.1em;text-transform:uppercase;color:#00815d}
.ai-brief dd{margin:.45rem 0 0;font-size:.96rem;line-height:1.35;color:#164f3e}
@media(max-width:850px){.ai-brief{padding:5rem 0}.ai-brief-grid{grid-template-columns:1fr 1fr}.ai-brief-label{grid-column:1/-1}.ai-brief-facts{align-self:end}}
@media(max-width:580px){.ai-brief{padding:4rem 0}.ai-brief-grid{grid-template-columns:1fr;gap:1.8rem}.ai-brief h2{font-size:clamp(2.35rem,12vw,3.6rem)}.ai-brief-copy>p{font-size:1rem}.ai-brief-facts{width:100%}}
</style>
